'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TUpdateUser } from '../../domain/entities/type';
import { ActionResult } from '@/src/shared/types';

export async function updateUser(
  data: TUpdateUser,
): Promise<ActionResult<null>> {
  if (!data.id) {
    return {
      success: false,
      message: { userName: ['USER_ID_REQUIRED'] },
    };
  }
  const existUser = await prisma.user.findFirst({ where: { id: data.id } });
  if (!existUser) {
    return {
      success: false,
      message: { password: ['USER_NOT_EXISTS'] },
    };
  }
  let hashedPassword: string | undefined = undefined;

  if (data.password) {
    const salt = await bcrypt.genSalt(8);
    hashedPassword = await bcrypt.hash(data.password, salt);
  }

  await prisma.user.update({
    where: { id: data.id },
    data: {
      userName: data.userName,
      email: data.email,
      mobile: data.mobile,
      password: hashedPassword,
      role: data.role,
      ban: data.ban !== undefined ? !!data.ban : undefined,
    },
  });

  revalidatePath('/dashboard/users');
  return { success: true, message: 'USER_UPDATE_SUCCESS' };
}
