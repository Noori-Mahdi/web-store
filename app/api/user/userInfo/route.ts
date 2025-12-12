import { cookies } from 'next/headers';
import { prisma } from '@/src/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET() {
  try {
    const cookiesStore = await cookies();
    const tokenCookie = cookiesStore.get('token');

    if (!tokenCookie || !tokenCookie.value) {
      return NextResponse.json({ message: 'مشکل احراز هویت' }, { status: 401 });
    }

    const token = tokenCookie.value;

    let decoded: { id: string; email: string };
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
        email: string;
      };
    } catch (err) {
      console.log(err)
      return NextResponse.json(
        { message: 'توکن نامعتبر یا منقضی شده است' },
        { status: 401 },
      );
    }

    const user = await prisma.user.findFirst({
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
    console.error(error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
