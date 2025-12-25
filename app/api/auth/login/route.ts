import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/src/lib/prisma';

type TSelectAccountBody = {
  userId: string;
};

export async function POST(req: NextRequest) {
  try {
    const { userId }: TSelectAccountBody = await req.json();

    const apiKey = req.cookies.get('apiKey')?.value;
    if (!apiKey) {
      return NextResponse.json({ message: 'INVALID_API_KEY' }, { status: 401 });
    }

    const session = await prisma.otpSession.findFirst({
      where: { apiKey, expiresAt: { gt: new Date() } },
    });

    if (!session) {
      return NextResponse.json({ message: 'INVALID_API_KEY' }, { status: 401 });
    }

    const mobile = session.mobile;

    const user = await prisma.user.findFirst({
      where: { id: userId, mobile, ban: false },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'USER_NOT_ALLOWED' },
        { status: 403 },
      );
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '12h' },
    );

    const response = NextResponse.json({ message: 'LOGIN_SUCCESS' });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 12,
      path: '/',
    });

    await prisma.otpSession.delete({ where: { apiKey } });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
