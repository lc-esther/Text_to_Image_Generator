import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCreditsData = async () => {
    const authToken = token || localStorage.getItem("token");
    if (!authToken) {
      setCredit(0);
      setUser(null);
      return;
    }
    try {
      const { data } = await axios.get(`${backendUrl}/api/users/credits`, {
        headers: { token: authToken },
      });

      if (data.success) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        setCredit(data.creditBalance);
      } else {
        setCredit(0);
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading credits data:", error);
      toast.error("Failed to load credits data. Please try again later.");
      setCredit(0);
      setUser(null);
    }
  };

  const generateImage = async (prompt) => {
    try {
      if (!user || !user._id) {
        toast.error("User ID is missing. Please log in again.");
        setShowLogin(true);
        return;
      }

      if (!prompt || prompt.trim() === "") {
        toast.error("Prompt is required to generate an image.");
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/image/generate`,
        { userId: user._id, prompt },
        { headers: { token } }
      );

      if (data.success) {
        loadCreditsData();
        return data.imageUrl;
      } else {
        toast.error(data.message || "Image generation failed. Please try again.");
        loadCreditsData();
        if (data.creditBalance === 0) {
          toast.error("You have no credits left. Please buy more credits to continue.");
          navigate("/buy-credit");
        }
      }
    } catch (error) {
      toast.error("Failed to generate image. Please try again later.");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      loadCreditsData();
    }
  }, []);

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppProvider;
