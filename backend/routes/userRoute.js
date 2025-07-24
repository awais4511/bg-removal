import express from 'express';
import {clerkWebhooks, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';


const userRouter=express.Router();

userRouter.post("/webhooks",clerkWebhooks)
userRouter.get("/credits",userAuth,userCredits)

export default userRouter;