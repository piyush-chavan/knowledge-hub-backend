import { User } from "../models/User.js";

export const getUserDetails = async(req,res)=>{
    try{
        const userId = req.user._id;
        const userDetails = await User.findById(userId).select('-password');
        res.status(200).json(userDetails)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const getUserProfile = async(req,res)=>{
    try{
        const username = req.params.username;
        const userDetails = await User.findOne({username}).select('-password');
        res.status(200).json(userDetails)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}