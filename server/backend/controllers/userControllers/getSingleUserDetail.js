// Admin Route Only for getting detail of Single User

import User from '../../models/user.js';

export const getSingleUserDetail = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: `User Not Found with id: ${req.params.id}`
            })
        }
        res.status(200).json({
            success: true,
            user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}