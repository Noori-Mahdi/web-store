import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sortField = searchParams.get('sort') || 'createdAt';
    const sortDesc = searchParams.get('desc') === 'true';
    const search = searchParams.get('search') || '';

    const pageIndex = Number(searchParams.get('pageIndex') || 0);
    const pageSize = Number(searchParams.get('pageSize') || 10);

    const orderBy = { [sortField]: sortDesc ? 'desc' : 'asc' };

    const where: Prisma.UserWhereInput = search
      ? {
          OR: [
            {
              userName: {
                contains: search,
                mode: 'insensitive', 
              },
            },
            {
              email: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};

    const totalCount = await prisma.user.count({ where });

    const users = await prisma.user.findMany({
      where,
      orderBy,
      skip: pageIndex * pageSize,
      take: pageSize,
    });

    return NextResponse.json({ data: users, totalCount });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
