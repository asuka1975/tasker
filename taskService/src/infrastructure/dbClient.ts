import { PrismaClient } from "../generated/prisma/client";

export const getPrismaClient = (): PrismaClient => {
    const prisma = new PrismaClient();
    prisma.$connect();
    return prisma;
}
