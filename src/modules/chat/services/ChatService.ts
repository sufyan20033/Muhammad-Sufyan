import { ChatRepository } from "../repositories/ChatRepository";
import { SubscriptionRepository } from "../../subscriptions/repositories/SubscriptionRepository";
import { AppError } from "../../../core/errors/AppError";

export class ChatService {
  private chatRepo = new ChatRepository();
  private subRepo = new SubscriptionRepository();
  private FREE_LIMIT = 3;

  async askQuestion(userId: number, question: string) {
    await new Promise(res => setTimeout(res, 800));

    const freeUsed = await this.chatRepo.getMonthlyCount(userId);
    let useFree = freeUsed < this.FREE_LIMIT;
    let subscription = null;

    if (!useFree) {
      const bundles = await this.subRepo.getActiveBundles(userId);
      if (bundles.length === 0)
        throw new AppError("NO_ACTIVE_BUNDLE", "No active subscription available");

      subscription = bundles.find(b => b.maxMessages === null || b.usedMessages < b.maxMessages);
      if (!subscription)
        throw new AppError("QUOTA_EXCEEDED", "No remaining messages in subscriptions");
    }

    const mockAnswer = `This is a mocked answer for: ${question}`;
    const tokens = Math.floor(Math.random() * 50) + 10;

    if (subscription) {
      await this.subRepo.update(subscription.id, {
        usedMessages: subscription.usedMessages + 1
      });
    }

    return this.chatRepo.saveMessage({
      userId,
      question,
      answer: mockAnswer,
      tokens,
    });
  }
}
