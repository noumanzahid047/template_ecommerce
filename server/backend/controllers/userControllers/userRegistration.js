import User from '../../models/user.js'
import { sendEmail } from '../../utils/sendEmail.js';
import { genToken, hashToken } from '../../utils/randomBytes.js';

export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res 
            .status(400)
            .json({ success: false, message: "User Already Exists"});
        }
        const token = genToken();
        user = await User.create(
            {      
                name, email, password,
                avatar: {
                    public_id: "Sample id",
                    url: "sampleurl",
                }, verificationToken: hashToken(token),
        
            });
        const emailVerificationUrl = `${req.protocol}://${req.get("host")}/user/verification/${token}`;
        const message = `Your email Verification link is :- \n\n ${emailVerificationUrl} \n\n if you have not requested this email then, please ignore it `;
        await sendEmail({
            email: req.body.email,
            subject: 'Email Verification',
            message,
            });
        res.status(200).json({
            success: true,
            message: `Registration Successfull!! 
            Email sent to ${req.body.email} successfully`,
            user,
            });  
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};