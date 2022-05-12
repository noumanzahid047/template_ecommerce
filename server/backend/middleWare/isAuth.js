import User from "../models/user.js"
import jwt from "jsonwebtoken"


export const isAuthenticated = async (req, res, next) => {
    try {
        const  {token}  = req.cookies;

        if(!token){
            return res.status(401).json({
                message:"Please login first"
            })
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id);

        next();
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
        
    }
}

// admin authorization
export const authRoles = (...roles) =>{
    return (req, res, next) =>{
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message:    `${req.user.role} is not allowed to access this resources`
            });
        }
        next();
    };
};