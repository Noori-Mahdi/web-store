import { TOTP, TOTPConfirm } from '@/src/features/auth/data/type';
import { AuthRules } from '@/src/features/auth/domain/auth.rules';
import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { code, mobile }: TOTPConfirm = await req.json();

    const codeValidation = AuthRules.code.safeParse(code);
    const mobileValidation = AuthRules.mobile.safeParse(mobile);

    if (!codeValidation.success || !mobileValidation.success) {
      const errors: Record<string, string[]> = {};

      if (codeValidation.error?.issues.length) {
        errors.code = codeValidation.error?.issues.map((i) => i.message);
      }

      if (mobileValidation.error?.issues.length) {
        errors.mobile = mobileValidation.error?.issues.map((i) => i.message);
      }

      return NextResponse.json({ message: errors }, { status: 400 });
    }

    const otpRecord = await prisma.otp.findFirst({
      where: { mobile },
      orderBy: { createdAt: 'desc' },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { message: 'OTP_NOT_REQUESTED' },
        { status: 400 },
      );
    }

    if (otpRecord.code != code) {
      return NextResponse.json(
        { message: 'OTP_INVALID_CODE:' },
        { status: 400 },
      );
    }

    const otpExpiration = new Date(otpRecord.createdAt);
    const currentTime = new Date();
    const expirationTime = otpExpiration.getTime() + 5 * 60 * 1000;

    if (currentTime.getTime() > expirationTime) {
      return NextResponse.json({ message: 'OTP_EXPIRED' }, { status: 400 });
    }

    const userAccounts = await prisma.user.findMany({
      where: { mobile },
      select: {
        userName: true,
        role: true,
        avatarUrl: true,
      },
    });

    if (userAccounts.length > 0) {
      return NextResponse.json(
        { message: 'REQUEST_SUCCESSFUL', userAccounts },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: 'REQUEST_SUCCESSFUL' },
        { status: 200 },
      );
    }
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
