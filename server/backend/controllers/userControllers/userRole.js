import User from '../../models/user.js'

export const updateRole = async (req, res) => {
    try {
            const updateRole = { 
                role: req.body.role,
            }
        const user = await User.findByIdAndUpdate(req.params.id, updateRole, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        if(!user){
            return res.status(404).json({
                success: false,
                message: `User not found with id: ${req.params.id}`
            })
        }
        res.status(200).json({
            success: true,
            message: "User Role Updated Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}