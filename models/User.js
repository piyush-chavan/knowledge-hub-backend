import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:"N/A"
    },
    bio:{
        type:String,
        default:"N/A"
    },
    email:{
        type:String,
        default:"N/A"
    },
    education:{
        type:String,
        default:"N/A"
    },
    socialLinks:{
        type:{
                linkedin:{type:String,default:"N/A"},
                github:{type:String,default:"N/A"},
                twitter:{type:String,default:"N/A"},
        }
    },
    bookmarks:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Question'}],
        default:[]
    },
    joinedOn:{
        type:Date,
        default:Date.now
    }
})

export const User = mongoose.model('User',userSchema)