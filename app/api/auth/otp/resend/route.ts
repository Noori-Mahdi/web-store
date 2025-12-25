import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import { TOTP } from '@/src/features/auth/data/type';

export async function POST(req: NextRequest) {
  try {
    const { mobile }: TOTP = await req.json();

    const errors = serverValidation({ mobile });
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: errors }, { status: 400 });
    }

    const lastOtp = await prisma.otp.findFirst({
      where: { mobile },
      orderBy: { createdAt: 'desc' },
    });

    if (lastOtp && lastOtp.expiresAt > new Date()) {
      return NextResponse.json({ message: 'OTP_NOT_EXPIRED' }, { status: 429 });
    }

    //   OTP
    const otpCode = '11111';

    await prisma.otp.create({
      data: {
        mobile,
        code: otpCode,
        expiresAt: new Date(Date.now() + 2 * 60 * 1000),
      },
    });

    return NextResponse.json(
      { message: 'CODE_RESENT_SUCCESS' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
