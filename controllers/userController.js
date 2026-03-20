import { User } from "../models/User.js";
import { Question } from "../models/Question.js";
import { Answer } from "../models/Answer.js";

export const getUserDetails = async (req, res) => {
    try {
        const userId = req.user._id;
        const userDetails = await User.findById(userId).select('-password');
        const questionsAsked = await Question.find({ user: userId });
        const answersGiven = await Answer.find({ user: userId }).populate('question', 'title');
        res.status(200).json({ userDetails, questionsAsked, answersGiven })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const username = req.params.username;
        const userDetails = await User.findOne({ username }).select('-password');
        const questionsAsked = await Question.find({ user: userDetails?._id });
        const answersGiven = await Answer.find({ user: userDetails?._id }).populate('question', 'title');
        res.status(200).json({ userDetails, questionsAsked, answersGiven })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const { name, bio, email, education, socialLinks } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { name, bio, email, education, socialLinks }, { new: true }).select('-password');
        res.status(200).json({ updatedUser })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find().select('name username email').select('-password');
        res.status(200).json(allUsers)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}