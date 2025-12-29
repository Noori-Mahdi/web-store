'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TUpdateUser } from '../../domain/entities/type';

export async function updateUser(data: TUpdateUser) {
  if (!data.id) {
    throw new Error('USER_ID_REQUIRED');
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
}
