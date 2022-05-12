import User from '../../models/user.js'
import { jwtTokenCookie } from '../../utils/jwtTokenCookie.js';


export const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        // User exists or not?
        const user = await User.findOne({ email }).select("+password");
        if(!user){
             return res.status(400).json({
                 success: false,
                 message: "Incorrect Email or Password"
             });

         }
    
         // Password Matching
         const isMatch = await user.matchPassword(password);
         if(!isMatch){
             return res.status(400).json({
                 success: false,
                 message: "Incorrect Email or Password"
             });
         }

         // Account Verification
         const verify = await user.checkVerified();
         if(!verify){
            return res.status(400).json({
                success: false,
                message: "Please Verify Your Account First"
            });
        }
        jwtTokenCookie(user, 200, res);
         
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
        }
};