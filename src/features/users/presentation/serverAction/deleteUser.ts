'use server';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import { TUpdateUser } from '../../domain/entities/type';

export async function deleteUser(data: TUpdateUser) {
  if (!data.id) {
    throw new Error('USER_ID_REQUIRED');
  }

  await prisma.user.delete({
    where: { id: data.id },
  });

  revalidatePath('/dashboard/users');
}
