export interface Subscription {
  id?: number;
  userId: number;
  tier: "BASIC" | "PRO" | "ENTERPRISE";
  maxMessages?: number;
  usedMessages: number;
  price: number;
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
  active: boolean;
}