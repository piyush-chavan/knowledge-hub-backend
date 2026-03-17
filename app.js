import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database.js'
import { router as authRoutes } from './routes/authRoutes.js'
import { auth } from './middlewares/auth.js'
import { router as userRoutes } from './routes/userRoutes.js'
import { router as questionRoutes } from './routes/questionRoutes.js'
import { router as answerRoutes } from './routes/answerRoutes.js'
import { requestLogger } from './middlewares/logger.js';

export const app = express();

connectDB();

//global middlewares
app.use(requestLogger);
app.use(express.json());
app.use(cors());

//routes
app.use('/auth',authRoutes)
app.use('/user',userRoutes)
app.use('/question', questionRoutes)
app.use('/answer', answerRoutes)


app.get('/api/hello',auth, (req, res) => {
  res.json({ message: 'Hello, World!',user:req.user });
});

