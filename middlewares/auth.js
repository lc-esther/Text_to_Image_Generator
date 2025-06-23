import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  console.log("userAuth middleware called", req.headers);

  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized.." });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id; 
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.error("JWT error:", error.message);
    return res.json({ success: false, message: "Not Authorized" });
  }
};

export default userAuth;
