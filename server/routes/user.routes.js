import express from 'express'
import { checkAuth, login, signup, updateProfile } from '../controllers/userController.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const userRouter=express.Router();
userRouter.post("/signup",signup);
userRouter.post("/login",login)
userRouter.put("/updateProfile",protectRoute,updateProfile)
userRouter.get("/checkAuth",protectRoute,checkAuth)

export default userRouter