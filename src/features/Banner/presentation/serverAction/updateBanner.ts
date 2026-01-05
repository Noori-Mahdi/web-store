'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function updateBanner(formData: FormData) {
  const id = formData.get('id')?.toString();

  if (!id) {
    throw new Error('BANNER_ID_REQUIRED');
  }

  const title = formData.get('title')?.toString() || undefined;
  const tooltip = formData.get('tooltip')?.toString() || undefined;
  const URL = formData.get('URL')?.toString() || undefined;
  const file = formData.get('image') as File | null;

  const existingBanner = await prisma.banner.findUnique({
    where: { id },
    select: { image: true },
  });

  if (!existingBanner) {
    throw new Error('BANNER_NOT_FOUND');
  }

  let newImagePath: string | undefined = existingBanner.image;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public/uploads/banners');
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `${crypto.randomUUID()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);

    newImagePath = `/uploads/banners/${fileName}`;

    if (existingBanner.image) {
      const oldFilePath = path.join(
        process.cwd(),
        'public',
        existingBanner.image,
      );
      try {
        await fs.unlink(oldFilePath);
      } catch (error) {
        console.warn('OLD_IMAGE_NOT_FOUND_ON_DISK', error);
      }
    }
  }

  await prisma.banner.update({
    where: { id },
    data: {
      title,
      tooltip,
      URL,
      image: newImagePath,
    },
  });

  revalidatePath('/dashboard/banner');
}
