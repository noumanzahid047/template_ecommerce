import crypto from 'crypto'


// generating Random Bytes for token
export const genToken = () =>{
    const verifyToken = crypto.randomBytes(20).toString("hex");
    return verifyToken;
}

// hashing token using sha256 for making it secure
export const hashToken = (token) => {
    const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
    return hashedToken;
}