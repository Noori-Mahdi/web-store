import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/src/lib/prisma';
import { AuthRules } from '@/src/features/auth/domain/auth.rules';

type TLoginBody = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    const { email, password }: TLoginBody = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.ban) {
      return NextResponse.json({ message: 'USER_NOT_FOUND' }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'INVALID_PASSWORD' },
        { status: 401 },
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '12h' },
    );
    const response = NextResponse.json({ message: 'LOGIN_SUCCESS' });

    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 12,
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
