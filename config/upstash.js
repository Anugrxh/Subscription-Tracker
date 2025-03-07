import { Client as WorkFlowClient } from "@upstash/workflow";
import { QSTASH_TOKEN,QSTASH_URL } from "./env.js";

export const workflowClient = new WorkFlowClient({
    token: QSTASH_TOKEN,
    baseUrl: QSTASH_URL,
});