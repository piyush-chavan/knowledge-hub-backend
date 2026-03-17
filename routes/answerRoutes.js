import express from 'express';
import { auth } from '../middlewares/auth.js';
import { postAnswer } from '../controllers/answerController.js';

export const router = express.Router();

router.post('/post/:questionId', auth, postAnswer);