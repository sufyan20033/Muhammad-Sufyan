import { ChatService } from "../services/ChatService";

const chatService = new ChatService();

export const ChatController = {
  ask: async (req, res) => {
    try {
      const { userId, question } = req.body;
      const result = await chatService.askQuestion(userId, question);
      res.json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};