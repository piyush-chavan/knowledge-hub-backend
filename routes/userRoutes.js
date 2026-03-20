import express from 'express'
import {getAllUsers, getUserDetails,getUserProfile,updateUserProfile} from '../controllers/userController.js'
import {auth} from '../middlewares/auth.js'

export const router = express.Router()

router.get('/profile',auth,getUserDetails);
router.get('/profile/:username',getUserProfile);
router.put('/profile',auth,updateUserProfile);
router.get('/all',getAllUsers);