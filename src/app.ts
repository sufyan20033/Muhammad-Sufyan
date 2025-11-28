import express from "express";
import cors from "cors";
import { ChatController } from "./modules/chat/controllers/ChatController";
import { SubscriptionController } from "./modules/subscriptions/controllers/SubscriptionController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat/ask", ChatController.ask);
app.post("/subscription/create", SubscriptionController.create);
app.post("/subscription/cancel/:id", SubscriptionController.cancel);

export default app;