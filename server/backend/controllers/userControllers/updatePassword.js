import User from '../../models/user.js'

export const updatePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("+password");
        const isMatch = await user.matchPassword(req.body.oldPassword);
         if(!isMatch){
             return res.status(400).json({
                 success: false,
                 message: "Incorrect Old Password"
             });
         }
         if(req.body.newPassword !== req.body.confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password does not Match"
            });
         }
         if(req.body.newPassword === req.body.oldPassword){
            return res.status(400).json({
                success: false,
                message: "Please use a different password"
            });
         }
         user.password = req.body.newPassword;
         await user.save();
         res.status(200).json({
             success: true,
             message: "Password Updated Successfully"
         })   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}