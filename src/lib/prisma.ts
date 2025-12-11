import { PrismaClient } from '@/prisma/generated/client';
import type * as PrismaType from '@/prisma/generated/client';

export const prisma = new PrismaClient({
  accelerateUrl: 'http://localhost:4466',
  log: ['query', 'info', 'warn', 'error'],
});

export type {PrismaType}