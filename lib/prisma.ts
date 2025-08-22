import { PrismaClient } from "@prisma/client/extension";

const prismaClientSinglton = () => {
  return new PrismaClient()
};

type prismaClientSinglton = ReturnType<typeof prismaClientSinglton>;

const globalForPrisma = globalThis as unknown as { Prisma: PrismaClient | undefined };

const prisma = globalForPrisma.Prisma ?? prismaClientSinglton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.Prisma = prisma;
}

