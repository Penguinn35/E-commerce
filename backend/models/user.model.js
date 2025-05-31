import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
   name: {
    type: String,
    required: [true, "Name is repquired"]
   },
   email:{
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
   },
   password: {
       type: String,
       //required: [true, "Password is required"],      Not required since google log ins do not use passwords by default
       minlength: [6, "Password must be at least 6 characters"]
   },
   googleId: {
        type: String,       // for Google log in users
        unique: true,       // 1:1 link with google account
        sparse: true        // allows multiple users to have no googleId 
   },
   cartItems: [{
    quantity:{
        type: Number,
        default: 1
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }
   }],
   role:{
    type: String,
    enum:["user", "admin"],
    default: "user"
   }
}, {
    timestamps: true,
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch(error){
        next(error);
    }
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);


export default User; 