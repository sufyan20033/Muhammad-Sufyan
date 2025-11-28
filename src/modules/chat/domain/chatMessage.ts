export interface ChatMessage {
  id?: number;
  userId: number;
  question: string;
  answer: string;
  tokens: number;
  createdAt?: Date;
}