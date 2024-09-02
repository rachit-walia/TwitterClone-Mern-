import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    }

},{timestamps:true})
export const User=mongoose.model("User",userSchema)