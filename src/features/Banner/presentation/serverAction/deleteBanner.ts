'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

export async function deleteBanner(bannerId: string) {
  if (!bannerId) {
    throw new Error('BANNER_ID_REQUIRED');
  }

  const banner = await prisma.banner.findUnique({
    where: { id: bannerId },
    select: { image: true },
  });

  if (!banner) {
    throw new Error('BANNER_NOT_FOUND');
  }

  if (banner.image) {
    const filePath = path.join(process.cwd(), 'public', banner.image);

    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.warn('IMAGE_NOT_FOUND_ON_DISK', error);
    }
  }

  await prisma.banner.delete({
    where: { id: bannerId },
  });

  revalidatePath('/dashboard/banner');
}
