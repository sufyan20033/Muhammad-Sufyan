import { SubscriptionRepository } from "../repositories/SubscriptionRepository";

export class SubscriptionService {
  private repo = new SubscriptionRepository();

  createBundle(userId: number, tier: string, billing: "MONTHLY" | "YEARLY", autoRenew: boolean) {
    const prices = { BASIC: 10, PRO: 30, ENTERPRISE: 99 };
    const max = { BASIC: 10, PRO: 100, ENTERPRISE: null };

    const start = new Date();
    const end = new Date();
    billing === "MONTHLY" ? end.setMonth(end.getMonth() + 1) : end.setFullYear(end.getFullYear() + 1);

    return this.repo.create({
      userId,
      tier,
      maxMessages: max[tier],
      price: prices[tier],
      startDate: start,
      endDate: end,
      autoRenew,
      usedMessages: 0,
      active: true
    });
  }

  async cancel(id: number) {
    return this.repo.update(id, { autoRenew: false });
  }
}
