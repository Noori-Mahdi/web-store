import { TOTP } from '@/src/features/auth/data/type';
import { AuthRules } from '@/src/features/auth/domain/auth.rules';
import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { mobile }: TOTP = await req.json();

    const mobileValidation = AuthRules.mobile.safeParse(mobile);

    if (!mobileValidation.success) {
      const errors: Record<string, string[]> = {};

      if (mobileValidation.error?.issues.length) {
        errors.code = mobileValidation.error?.issues.map((i) => i.message);
      }

      return NextResponse.json({ message: errors }, { status: 400 });
    }

    // اینجا عملایت ساخت و ارسال پیامک به شماره کاربر صورت میگیرد
    //  چون به سیستم اس ام اس دسترسی ندارم فعلا کد برابر ۵ یک میزارم
    const otpCode = '11111';

    await prisma.otp.create({
      data: {
        mobile,
        code: otpCode,
      },
    });

    return NextResponse.json(
      { message: 'REQUEST_SUCCESSFUL' },
      { status: 200 },
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
