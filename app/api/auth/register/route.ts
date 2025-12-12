import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

type TRegisterBody = {
  email: string;
  password: string;
  userName: string;
  phone?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { userName, email, phone, password }: TRegisterBody =
      await req.json();

    if (!userName) {
      return NextResponse.json(
        { message: 'نام کاربری الزامی است' },
        { status: 400 },
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: 'ایمیل الزامی است' },
        { status: 400 },
      );
    }
    if (!phone) {
      return NextResponse.json(
        { message: 'شماره تلفن الزامی است' },
        { status: 400 },
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: 'پسورد الزامی است' },
        { status: 400 },
      );
    }

    const existUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existUser) {
      return NextResponse.json(
        { message: 'کاربری با این اطلاعات قبلاً ثبت شده است' },
        { status: 409 },
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashingPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        userName,
        email,
        phone,
        password: hashingPassword,
      },
    });

    return NextResponse.json(
      { message: 'ثبت‌نام با موفقیت انجام شد' },
      { status: 201 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'خطای ناشناخته' }, { status: 500 });
  }
}
