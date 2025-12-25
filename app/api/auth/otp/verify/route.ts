import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import { randomBytes } from 'crypto';
import { TOTPConfirmReq } from '@/src/features/auth/domain/entities/type';

export async function POST(req: NextRequest) {
  try {
    const { mobile, code }: TOTPConfirmReq = await req.json();

    const errors = serverValidation({ mobile, code });
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: errors }, { status: 400 });
    }

    const otp = await prisma.otp.findFirst({
      where: {
        mobile,
        used: false,
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otp) {
      return NextResponse.json({ message: 'OTP_NOT_FOUND' }, { status: 400 });
    }

    if (otp.expiresAt < new Date()) {
      return NextResponse.json({ message: 'OTP_EXPIRED' }, { status: 400 });
    }

    if (otp.attempts >= 5) {
      return NextResponse.json(
        { message: 'OTP_TOO_MANY_ATTEMPTS' },
        { status: 429 },
      );
    }

    if (otp.code !== code) {
      await prisma.otp.update({
        where: { id: otp.id },
        data: { attempts: { increment: 1 } },
      });
      return NextResponse.json(
        { message: 'OTP_INVALID_CODE' },
        { status: 400 },
      );
    }

    await prisma.otp.update({
      where: { id: otp.id },
      data: { used: true },
    });

    const accounts = await prisma.user.findMany({
      where: { mobile },
      select: {
        id: true,
        userName: true,
        role: true,
        email: true,
        avatarUrl: true,
      },
    });

    const apiKey = randomBytes(32).toString('hex');

    await prisma.otpSession.create({
      data: {
        mobile: otp.mobile,
        apiKey,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    const response = NextResponse.json({
      message: 'OTP_VERIFIED',
      data: accounts,
    });

    response.cookies.set('apiKey', apiKey, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 5 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
