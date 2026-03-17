import express from 'express'
import {getUserDetails,getUserProfile} from '../controllers/userController.js'
import {auth} from '../middlewares/auth.js'

export const router = express.Router()

router.get('/profile',auth,getUserDetails);
router.get('/profile/:username',getUserProfile);