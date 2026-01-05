import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sortField = searchParams.get('sort') || 'createdAt';
    const sortDesc = searchParams.get('desc') === 'true';

    const orderBy = { [sortField]: sortDesc ? 'desc' : 'asc' } as const;

    const product = await prisma.product.findMany({
      orderBy,
      select: {
        id: true,
        image: true,
        price: true,
        name: true,
        quantity: true,
        soldItems: true,
        description: true,
        catagory: true,
      },
    });

    return NextResponse.json({ data: product });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
