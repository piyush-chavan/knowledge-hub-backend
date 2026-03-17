import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

export const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_CLUSTER)
        console.log("Connected to Mongo DB")
    }
    catch(err){
        console.log(`Error Occured while connecting to MongoDB : ${err}`)
    }
}