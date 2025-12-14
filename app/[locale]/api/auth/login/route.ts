import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/src/lib/prisma';

type TLoginBody = {
  userEmail: string;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    const { userEmail, password }: TLoginBody = await req.json();

    if (!userEmail || !password) {
      return NextResponse.json(
        { message: 'ایمیل و رمز عبور الزامی است' },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({ message: 'کاربر یافت نشد' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'رمز عبور اشتباه است' },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '12h' },
    );
    const response = NextResponse.json({ message: 'ورود موفقیت‌آمیز بود' });

    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 12,
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'خطای ناشناخته' }, { status: 500 });
  }
}
