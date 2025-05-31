import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = user;
        next();
        } catch (error) {
            if(error.name === "TokenExpiredError"){
                return res.status(401).json({ message: "Unauthorized - Token expired" });
            }
            throw error;
        }
        
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const adminRoute = (req, res, next) => {
    if(req.user && req.user.role === "admin"){
        next();  
    } else {
        res.status(403).json({ message: "Forbidden - admin only" });
    }
}