


export const logout = async (req, res) =>{

    try {
        res.status(200).cookie("token", null, { expires: new Date(Date.now()), httpOnly: true }).json({
            success: true,
            message: "Logout"
        })       
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}