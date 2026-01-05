'use server';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import { TDeleteSold } from '../../domain/entities/type';

export async function deleteSold(data: TDeleteSold) {
  if (!data.id) {
    throw new Error('sold_ID_REQUIRED');
  }

  await prisma.sold.delete({
    where: { id: data.id },
  });

  revalidatePath('/dashboard/solds');
}
