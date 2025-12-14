import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/src/lib/prisma';

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { message: 'مشکل احراز هویت: توکن موجود نیست' },
        { status: 401 },
      );
    }

    let decoded: { id: string; email: string };
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
        email: string;
      };
    } catch (err) {
      console.log('JWT verify error:', err);
      return NextResponse.json(
        { message: 'توکن نامعتبر یا منقضی شده است' },
        { status: 401 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        userName: true,
        phone: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'کاربر پیدا نشد' }, { status: 404 });
    }

    return NextResponse.json({ data: user });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
