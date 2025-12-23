import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { AuthRules } from '@/src/features/auth/domain/auth.rules';

type TRegisterBody = {
  email: string;
  password: string;
  userName: string;
  mobile: string;
};

export async function POST(req: NextRequest) {
  try {
    const { userName, email, mobile, password }: TRegisterBody =
      await req.json();

    const emailValidation = AuthRules.email.safeParse(email);
    const mobileValidation = AuthRules.mobile.safeParse(mobile);

    if (!emailValidation.success || !mobileValidation.success) {
      const errors: Record<string, string[]> = {};

      if (emailValidation.error?.issues.length) {
        errors.email = emailValidation.error?.issues.map((i) => i.message);
      }

      if (mobileValidation.error?.issues.length) {
        errors.mobile = mobileValidation.error?.issues.map((i) => i.message);
      }

      return NextResponse.json({ message: errors }, { status: 400 });
    }

    if (!userName) {
      return NextResponse.json(
        { message: 'USERNAME_REQUIRED' },
        { status: 400 },
      );
    }
    if (!email) {
      return NextResponse.json({ message: 'EMAIL_REQUIRED' }, { status: 400 });
    }
    if (!mobile) {
      return NextResponse.json({ message: 'PHONE_REQUIRED' }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json(
        { message: 'PASSWORD_REQUIRED' },
        { status: 400 },
      );
    }

    const existUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existUser) {
      return NextResponse.json(
        { message: 'USER_ALREADY_EXISTS' },
        { status: 409 },
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashingPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        userName,
        email,
        mobile,
        password: hashingPassword,
      },
    });

    return NextResponse.json({ message: 'REGISTER_SUCCESS' }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
