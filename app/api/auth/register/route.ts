import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import jwt from 'jsonwebtoken';

type TRegisterBody = {
  email: string;
  password: string;
  userName: string;
};

export async function POST(req: NextRequest) {
  try {
    const { email, password, userName }: TRegisterBody = await req.json();

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

    const errors = serverValidation({ email });
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: errors }, { status: 400 });
    }

    if (!userName) {
      return NextResponse.json(
        { message: 'USERNAME_REQUIRED' },
        { status: 400 },
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: 'PASSWORD_REQUIRED' },
        { status: 400 },
      );
    }

    const existUser = await prisma.user.findFirst({ where: { email } });
    if (existUser) {
      return NextResponse.json(
        { message: 'USER_ALREADY_EXISTS' },
        { status: 409 },
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashingPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        userName,
        email,
        mobile,
        password: hashingPassword,
      },
      select: {
        id: true,
        userName: true,
        email: true,
        mobile: true,
      },
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '12h',
    });

    const response = NextResponse.json(
      { message: 'REGISTER_SUCCESS', user },
      { status: 201 },
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 12,
      path: '/',
    });

    response.cookies.set('apiKey', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
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
