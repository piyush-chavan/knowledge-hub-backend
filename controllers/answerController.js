import { Question } from '../models/Question.js';
import { Answer } from '../models/Answer.js';

export const postAnswer = async(req,res)=>{
    try{
        const {body} = req.body;
        const questionId = req.params.questionId;
        const userId = req.user._id;
        const answer = new Answer({
            body,
            user:userId,
            question:questionId
        });
        await answer.save();
        // await Question.findByIdAndUpdate(questionId,{$push:{answers:answer._id}});
        res.json({message:"Answer posted successfully",answer})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}