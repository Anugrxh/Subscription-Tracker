import { Router } from "express";
import { sendReminders } from "../controllers/workflow.controller.js";
const workflowRouter = Router();

workflowRouter.get("/subscriptions/reminder", sendReminders);

export default workflowRouter;