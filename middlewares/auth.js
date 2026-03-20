import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

export const auth = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            res.status(400).json({message:"No Token Found"})
        }
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded){
            res.status(400).json({message:"Invalid Token"})
        }
        req.user = decoded;
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error", error: err })
    }
    next();
}