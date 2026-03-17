import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:"Question_title"
    },
    body:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // answers:{
    //     type:[{type:mongoose.Schema.Types.ObjectId, ref:'Answer'}],
    //     default:[]
    // },
    postedAt:{
        type:Date,
        default:Date.now
    }
});

export const Question = mongoose.model('Question',questionSchema);