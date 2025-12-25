import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import { TOTPReq } from '@/src/features/auth/domain/entities/type';

export async function POST(req: NextRequest) {
  try {
    console.log('hi');
    const { mobile }: TOTPReq = await req.json();

    const errors = serverValidation({ mobile });
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: errors }, { status: 400 });
    }

    //  ساخت کد OTP
    const otpCode = '11111';

    await prisma.otp.create({
      data: {
        mobile,
        code: otpCode,
        expiresAt: new Date(Date.now() + 2 * 60 * 1000),
      },
    });

    return NextResponse.json({ message: 'CODE_SENT_SUCCESS' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
