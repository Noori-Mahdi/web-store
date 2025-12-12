import { PrismaClient } from '@/src/generated/client';

export const prisma = new PrismaClient({
  accelerateUrl: process.env.ACCELERATE_URL!,
  log: ['query', 'info', 'warn', 'error'],
});
