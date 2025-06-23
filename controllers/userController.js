import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Please fill all the fields" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists with this email" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = {
            name,
            email,
            password: hashedPassword,
            creditBalance: 100 
        }
        const newUser = new userModel(userData);
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            success: true,
            message: "User registered successfully",
            user: { _id: user._id, name: user.name, email: user.email, creditBalance: user.creditBalance },
            token
        });
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        return res.json({ success: false, message: "Internal Server Error" });
    }
}


const loginUser = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.json({ success: false, message: "User not found" });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.json({ success: false, message: "Invalid password" });
            }
            else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                return res.json({ success: true, message: "User logged in successfully", user: { _id: user._id, name: user.name, email: user.email, creditBalance: user.creditBalance }, token });
            }
        } 
        
        
        catch (error) {
            console.error("Error in loginUser:", error.message);
            return res.json({ success: false, message: "Internal Server Error" });
            
        }
    }

    const userCredits = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId); 

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({
      success: true,
      creditBalance: user.creditBalance,
      user: {
        name: user.name,
        email: user.email,
        _id: user._id
      }
    });
  } catch (error) {
    console.error("Error in userCredits:", error.message);
    return res.json({ success: false, message: "Internal Server Error" });
  }
};

    export { registerUser, loginUser, userCredits};