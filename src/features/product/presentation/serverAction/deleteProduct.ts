'use server';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import { TUpdateProduct } from '../../domain/entities/type';

export async function deleteProduct(data: TUpdateProduct) {
  if (!data.id) {
    throw new Error('product_ID_REQUIRED');
  }

  await prisma.product.delete({
    where: { id: data.id },
  });

  revalidatePath('/dashboard/product');
}
