import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    postedAt:{
        type:Date,
        default:Date.now
    }

});
export const Answer = mongoose.model('Answer',answerSchema);