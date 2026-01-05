'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TAddProduct } from '../../domain/entities/type';

export async function addproduct(data: TAddProduct) {
  await prisma.product.create({
    data: {
      name: data.name,
      catagory: data.catagory,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      // image: data.image
    },
  });

  revalidatePath('/dashboard/users');
}
