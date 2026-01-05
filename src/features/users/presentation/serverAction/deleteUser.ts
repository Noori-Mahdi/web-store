'use server';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import { ActionResult, TDelete } from '@/src/shared/types';

export async function deleteUser(userId: TDelete): Promise<ActionResult<null>> {
  if (!userId) {
    return {
      success: false,
      message: { userName: ['USER_ID_REQUIRED'] },
    };
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  revalidatePath('/dashboard/users');
  return { success: true, message: 'USER_DELETE_SUCCESS' };
}
