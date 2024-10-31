import { PrismaClient } from "@prisma/client";

interface GlobalWithPrisma extends NodeJS.Global {
  prisma?: PrismaClient; 
}

const globalForPrisma = global as GlobalWithPrisma;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma; 
}

export default prisma;
