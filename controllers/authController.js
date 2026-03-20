import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, password: hashedpassword })
        await newUser.save()
        const token = jwt.sign(
            { _id: newUser._id }, process.env.JWT_SECRET_KEY
            // , { expiresIn: "1h" }
        )
        res.status(200).json({ username, password, token, message: "User registered" });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server error", error: err })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userInDB = await User.findOne({ username });
        if (!userInDB) {
            res.status(400).json({ message: "Invalid Username" })
        }
        const isMatch = await bcrypt.compare(password, userInDB.password);
        if (!isMatch) {
            res.status(400).json({ message: "Wrong password" })
        }
        const token = jwt.sign(
            { _id: userInDB._id }, process.env.JWT_SECRET_KEY
            // , { expiresIn: "1h" }
        )
        res.status(200).json({ message: "Logged in successfully", token })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }

}