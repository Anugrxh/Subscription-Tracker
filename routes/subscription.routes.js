import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription ,  getUserSubscriptions } from "../controllers/subscription.controller.js";
import { sendReminders } from "../controllers/workflow.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=>{
    res.send("GET all subscriptions");
})

subscriptionRouter.get('/:id', (req,res)=>{
    res.send("GET subscription by id");
})
subscriptionRouter.post('/',authorize, createSubscription )

subscriptionRouter.put('/:id', (req,res)=>{
    res.send("PUT Update subscription by id");
})

subscriptionRouter.delete('/:id', (req,res)=>{
    res.send("DELETE subscription by id");
})

subscriptionRouter.get('/user/:id', authorize,getUserSubscriptions)

subscriptionRouter.put('/:id/cancel', (req,res)=>{
    res.send("PUT Cancel subscription by user id");
})


subscriptionRouter.get('/upcoming-renewals', (req,res)=>{
    res.send("get upcoming renewals");
})
subscriptionRouter.post('/reminder', sendReminders);

export default subscriptionRouter;