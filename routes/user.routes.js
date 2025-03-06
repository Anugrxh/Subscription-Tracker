import { Router } from "express";
import { getUsers , getUser } from "../controllers/user.controller.js";

import  authorize  from "../middlewares/auth.middleware.js";


const userRouter = Router();

userRouter.get('/', getUsers );

userRouter.get('/:id', authorize, getUser)

userRouter.post('/', (req,res)=>{
    res.send("POST Create user");
})

userRouter.put('/:id', (req,res)=>{
    res.send("PUT Update user by id");
})

userRouter.delete('/:id', (req,res)=>{
    res.send("DELETE user by id");
})

export default userRouter;