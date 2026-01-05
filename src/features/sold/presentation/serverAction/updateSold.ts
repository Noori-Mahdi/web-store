'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TUpdateSold } from '../../domain/entities/type';

export async function updateSold(data: TUpdateSold) {
  if (!data.id) {
    throw new Error('sold_ID_REQUIRED');
  }

  await prisma.sold.update({
    where: { id: data.id },
    data: {
      total: data.total,
    },
  });

  revalidatePath('/dashboard/solds');
}
