import User from '../../models/user.js'
import crypto from 'crypto'

export const emailVerified = async (req, res)=>{
    try {
        const verificationToken = crypto
            .createHash("sha256")
            .update(req.params.token)
            .digest("hex");

            const user = await User.findOne({
                verificationToken,
            });

            if(!user){
                return res.status(400).json({
                    success: false,
                    message: "Link is Invalid or has been Expired"
                });
            }
            user.verified = true;
            user.verificationToken = undefined;
            await user.save();
            res.status(200).json({
                success: true,
                message: "Email Verification successfull"
            })



    } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            })
        
        }
};