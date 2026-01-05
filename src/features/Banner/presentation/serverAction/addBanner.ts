'use server';
import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function addBanner(formData: FormData) {
  const file = formData.get('image') as File | null;

  if (!file || file.size === 0) {
    throw new Error('IMAGE_REQUIRED');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), 'public/uploads/banners');
  await fs.mkdir(uploadDir, { recursive: true });

  const fileName = `${crypto.randomUUID()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  await fs.writeFile(filePath, buffer);

  const title = formData.get('title')?.toString();
  const tooltip = formData.get('tooltip')?.toString();
  const URL = formData.get('URL')?.toString();

  if (!title) {
    throw new Error('title_REQUIRED');
  }
  if (!tooltip) {
    throw new Error('tooltip_REQUIRED');
  }
  if (!URL) {
    throw new Error('URL_REQUIRED');
  }

  if (formData)
    await prisma.banner.create({
      data: {
        title: title,
        tooltip: tooltip,
        URL: URL,
        image: `/uploads/banners/${fileName}`,
      },
    });

  revalidatePath('/dashboard/users');
}
