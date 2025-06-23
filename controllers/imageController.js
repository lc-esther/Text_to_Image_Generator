import axios from "axios";
import FormData from "form-data";
import env from "dotenv";
import userModel from "../models/userModel.js";

export const generateImage = async (req, res) => {
    try {
        const {userId, prompt} = req.body;
        
        const user = await userModel.findById(userId);
        if (!userId || !prompt) {
            return res.json({ success: false, message: "User ID and prompt are required" });
        }

        if(user.creditBalance <= 0) {
            return res.json({ success: false, message: "Insufficient credits", creditBalance: user.creditBalance });
        }
        
        const formData = new FormData();
        formData.append("prompt", prompt);

        const {data} = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        });

        const imageBuffer = Buffer.from(data, 'binary').toString('base64');
        const imageUrl = `data:image/png;base64,${imageBuffer}`;
        await userModel.findByIdAndUpdate(userId, { $inc: { creditBalance: -1 } });
        return res.json({ success: true, imageUrl, creditBalance: user.creditBalance - 1 , message: "Image generated successfully" });
    } 
    
    catch (error) {
        console.error("Error in generateImage:", error.message);
        return res.json({ success: false, message: "Internal Server Error" });
        
    }
}