import mongoose, { Schema } from "mongoose";

import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    firstName:{
        type:String,
        requiured:true,
        trim:true
    },
    firstName:{
        type:String,
        requiured:true,
        trim:true
    },
    user_type:{
        type: String,
        enum : ['User','Admin'],
        default:'User'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    verify:{
        type:Boolean,
        default:false
    },
    password: {
        type: String,
        required: true
    },
    deleted_at:{
        type : Date, 
        default: null
    },
    is_deleted:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

// ###hooks
//this is pre hook before save user data it will encrypt user password
// agar password change kar rh hia means like change password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();//check if password modify then hi bcryt hoga password before save
    this.password = await bcrypt.hash(this.password, 10)
    next()
});

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema)