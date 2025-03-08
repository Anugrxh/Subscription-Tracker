import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { 
    createSubscription, 
    getUserSubscriptions,  
    getSubscriptionById, 
    updateSubscription, 
    deleteSubscription, 
    cancelSubscription, 
    getUpcomingRenewals,
    
} from "../controllers/subscription.controller.js";
import { sendReminders } from "../controllers/workflow.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.get('/upcoming-renewals', authorize, getUpcomingRenewals);
subscriptionRouter.get('/:id', authorize, getSubscriptionById);
subscriptionRouter.put('/:id', authorize, updateSubscription);
subscriptionRouter.delete('/:id', authorize, deleteSubscription);
subscriptionRouter.put('/:id/cancel', authorize, cancelSubscription);

subscriptionRouter.post('/reminder', sendReminders);

export default subscriptionRouter;
