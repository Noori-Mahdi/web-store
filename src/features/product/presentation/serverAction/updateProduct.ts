'use server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TUpdateProduct } from '../../domain/entities/type';

export async function updateProduct(data: TUpdateProduct) {
  if (!data.id) {
    throw new Error('product_ID_REQUIRED');
  }

  await prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
      catagory: data.catagory,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      // image: data.image
    },
  });

  revalidatePath('/dashboard/product');
}
