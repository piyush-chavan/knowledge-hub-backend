import { User } from "../models/User.js";
import { Question } from "../models/Question.js";
import { Answer } from "../models/Answer.js";

export const postQuestion = async (req, res) => {
    try {
        const { title, body } = req.body;
        const userId = req.user._id;
        const question = new Question({
            title,
            body,
            user: userId
        });
        await question.save();
        res.json({ message: "Question posted successfully", question });
    }
    catch (error) {
        res.status(500).json({ message: "Error posting question", error });
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('user', 'username profilePic');
        res.json({ questions });
    } catch (error) {
        res.status(500).json({ message: "Error fetching questions", error });
    }
};

export const getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.id;
        const question = await Question.findById(questionId).populate('user', 'username profilePic')
        const answers = await Answer.find({ question: questionId }).populate('user', 'username profilePic')
        res.json({ question, answers });
    } catch (error) {
        res.status(500).json({ message: "Error fetching question", error });
    }
};

export const toggleBookmark = async(req,res)=>{
    try{
        const questionId = req.params.id;
        const userId = req.user._id;
        const userInDB = await User.findById(userId);
        const isAlreadyBookmarked = userInDB.bookmarks.includes(questionId);
        if(isAlreadyBookmarked){
            userInDB.bookmarks.pull(questionId);
        }
        else{
            userInDB.bookmarks.push(questionId);
        }
        await userInDB.save();
        res.status(200).json({isBookmarked:!isAlreadyBookmarked});
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const checkBookmark = async(req,res)=>{
    try{
        const questionId = req.params.id;
        const userId = req.user._id;
        const userInDB = await User.findById(userId);
        const isAlreadyBookmarked = userInDB.bookmarks.includes(questionId);
        
        res.status(200).json({isBookmarked:isAlreadyBookmarked});
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}
