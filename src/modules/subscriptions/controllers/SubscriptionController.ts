import { SubscriptionService } from "../services/SubscriptionService";

const subService = new SubscriptionService();

export const SubscriptionController = {
  create: async (req, res) => {
    const { userId, tier, billing, autoRenew } = req.body;
    const result = await subService.createBundle(userId, tier, billing, autoRenew);
    res.json(result);
  },

  cancel: async (req, res) => {
    const { id } = req.params;
    const result = await subService.cancel(Number(id));
    res.json(result);
  }
};