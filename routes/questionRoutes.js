import express from 'express';
import { auth } from '../middlewares/auth.js';
import { postQuestion } from '../controllers/questionController.js';
import { getAllQuestions,getQuestionById } from '../controllers/questionController.js';

export const router = express.Router();

router.post('/post', auth, postQuestion);
router.get('/all', getAllQuestions);
router.get('/:id', getQuestionById);
