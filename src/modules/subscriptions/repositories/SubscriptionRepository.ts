import prisma from "../../../../infra/db/PrismaClient";

export class SubscriptionRepository {
  async getActiveBundles(userId: number) {
    return prisma.subscription.findMany({
      where: { userId, active: true },
      orderBy: { endDate: "desc" }
    });
  }

  async create(data: any) {
    return prisma.subscription.create({ data });
  }

  async update(id: number, data: any) {
    return prisma.subscription.update({ where: { id }, data });
  }
}

