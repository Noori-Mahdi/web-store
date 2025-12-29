'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TAddUser } from '../../domain/entities/type';

export async function addUser(data: TAddUser) {
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
}
