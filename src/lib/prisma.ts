import { PrismaClient } from '@/src/generated/client';

export const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL!,
  log: ['query', 'info', 'warn', 'error'],
});
