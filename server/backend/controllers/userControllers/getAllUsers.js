// Admin Route Only for getting all register users

import User from '../../models/user.js';

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
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