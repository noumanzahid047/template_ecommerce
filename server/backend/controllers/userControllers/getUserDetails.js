import User from '../../models/user.js'


export const getUserDetails = async (req, res) =>{
    try {    
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    })

} catch (error) {
    res.status(500).json({
        success: false,
        message: error.message,
    })
        
}
}