'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TAddSold } from '../../domain/entities/type';

export async function addsold(data: TAddSold) {
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  await prisma.sold.create({
    data: {
      soldName: data.soldName,
      email: data.email,
      mobile: data.mobile,
      password: hashedPassword,
      role: data.role,
      ban: !!data.ban,
    },
  });

  revalidatePath('/dashboard/solds');
}
