export const jwtTokenCookie = (user, statuscode, res) => {
    const token = user.generateToken();
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXP *24*60*60*1000),
        httpOnly: true,
    };
    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        message: "Login Successful"
    })
};