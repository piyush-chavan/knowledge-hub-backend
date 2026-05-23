import express from 'express'
import { getAiAnswer } from '../controllers/aiController.js'

export const router = express.Router()

router.post("/getAnswer",getAiAnswer)