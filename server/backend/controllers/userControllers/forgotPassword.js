import User from '../../models/user.js'
import { sendEmail } from '../../utils/sendEmail.js';
import crypto from 'crypto'


export const forgotpassword = async (req, res, next) =>{
    try {
        const user = await User.findOne({email: req.body.email });
        if(!user){
            return next(res.status(404).json({
                success: false,
                message: "User Not Found"
            }));
        }
        const resetToken = user.getResetPassword();

        await user.save({validateBeforeSave: false});

        const resetPasswordUrl = `${req.protocol}://${req.get("host")}/user/password/reset/${resetToken}`;

        const message = `Your  Password Reset link is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then, please ignore it `;
     
        try {
         
            await sendEmail({
                email: user.email,
                subject: 'Password Recovery',
                message,
            });

            res.status(200).json({
                success: true,
                message: `Email sent to ${user.email} successfully`
            });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordDate = undefined;
            next( res.status(500).json({
                success: false,
                message: error.message
            })); 
        }

        
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// reseting the password

export const resetPass = async (req, res, next)=>{
    try {
        const resetPasswordToken = crypto
            .createHash("sha256")
            .update(req.params.token)
            .digest("hex");

            const user = await User.findOne({
                resetPasswordToken,
                resetPasswordDate: {$gt: Date.now() }
            });

            if(!user){
                return next(res.status(400).json({
                    success: false,
                    message: "Link is Invalid or has been Expired"
                }));
            }
             if(req.body.password !== req.body.confirmPassword){
                 return next(res.status(400).json({
                     success: false,
                     message: "Invalid Password",
                 }));
             }
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordDate = undefined; 
            await user.save();
            
            res.status(200).json({
                success: true,
                message: "Password reset successfully"
            })



    } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            })
        
        }
};