import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=>{
    res.send("GET all subscriptions");
})

subscriptionRouter.get('/:id', (req,res)=>{
    res.send("GET subscription by id");
})
subscriptionRouter.post('/', (req,res)=>{
    res.send("POST Create subscription");
})

subscriptionRouter.put('/:id', (req,res)=>{
    res.send("PUT Update subscription by id");
})

subscriptionRouter.delete('/:id', (req,res)=>{
    res.send("DELETE subscription by id");
})

subscriptionRouter.get('/user/:id', (req,res)=>{
    res.send("GET subscription by user id");
})

subscriptionRouter.put('/:id/cancel', (req,res)=>{
    res.send("PUT Cancel subscription by user id");
})

subscriptionRouter.get('/upcoming-renewals', (req,res)=>{
    res.send("get upcoming renewals");
})

export default subscriptionRouter;