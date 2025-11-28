import prisma from "../../../../infra/db/PrismaClient";

export class ChatRepository {
  async saveMessage(data: any) {
    return prisma.chatMessage.create({ data });
  }

  async getMonthlyCount(userId: number) {
    return prisma.chatMessage.count({
      where: {
        userId,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    });
  }
}