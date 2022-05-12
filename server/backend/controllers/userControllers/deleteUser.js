import User from '../../models/user.js';


export const deleteUser = async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: `User not found with id: ${req.params.id}`
            })
        }
        await user.remove();
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}