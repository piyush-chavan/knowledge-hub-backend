import express from 'express';
import { auth } from '../middlewares/auth.js';
import { checkBookmark, postQuestion, toggleBookmark } from '../controllers/questionController.js';
import { getAllQuestions,getQuestionById } from '../controllers/questionController.js';

export const router = express.Router();

router.post('/post', auth, postQuestion);
router.get('/all', getAllQuestions);
router.get('/:id', getQuestionById);
router.get('/:id/checkBookmark',auth,checkBookmark);
router.get('/:id/toggleBookmark',auth,toggleBookmark);
