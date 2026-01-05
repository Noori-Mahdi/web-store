import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sortField = searchParams.get('sort') || 'createdAt';
    const sortDesc = searchParams.get('desc') === 'true';

    const orderBy = { [sortField]: sortDesc ? 'desc' : 'asc' } as const;

    const banner = await prisma.banner.findMany({
      orderBy,
      select: {
        id: true,
        createdAt: true,
        image: true,
        title: true,
        tooltip: true,
        URL: true,
      },
    });

    return NextResponse.json({ data: banner });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
