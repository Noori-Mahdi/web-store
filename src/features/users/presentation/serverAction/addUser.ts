'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TAddUser } from '../../domain/entities/type';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import { ActionResult } from '@/src/shared/types';

export async function addUser(data: TAddUser): Promise<ActionResult<null>> {
  const errors = serverValidation({
    email: data.email,
    mobile: data.mobile,
  });

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: errors,
    };
  }
  if (!data.userName) {
    return {
      success: false,
      message: { userName: ['USERNAME_REQUIRED'] },
    };
  }
  if (!data.password) {
    return {
      success: false,
      message: { password: ['PASSWORD_REQUIRED'] },
    };
  }

  const existUser = await prisma.user.findFirst({
    where: { email: data.email },
  });
  if (existUser) {
    return {
      success: false,
      message: { password: ['USER_ALREADY_EXISTS'] },
    };
  }

  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  await prisma.user.create({
    data: {
      userName: data.userName,
      email: data.email,
      mobile: data.mobile,
      password: hashedPassword,
      role: data.role,
      ban: !!data.ban,
    },
  });

  revalidatePath('/dashboard/users');

  return { success: true, message: 'REGISTER_SUCCESS' };
}
