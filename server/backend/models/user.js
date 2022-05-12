import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'
import crypto from 'crypto'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a 1st Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter a Email"],
        unique: [true, "Email Already Exists"],
        validate: [validator.isEmail, "Please Enter a Valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter a password"],
        minlength: [6,"Password Must be atleast 6 Characters" ],
        select: false,
    },
    avatar:{
        public_id:{
            type:String,
            required: true,
        },
        url: {
            type: String,
            required: true,

        }

    },
    verified: {
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordDate: Date,
    verificationToken: String,

});
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})
userSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateToken = function () {
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXP,
    });
}
userSchema.methods.checkVerified = function () {
    return this.verified;
}
userSchema.methods.getResetPassword = function (){
    // generating token 
    const resetToken = crypto.randomBytes(20).toString("hex");
    // hashing
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordDate = Date.now() + 15 * 60 *1000;

    return resetToken;

}
const UserSchema = mongoose.model("User", userSchema);

export default UserSchema;