import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { serverValidation } from '@/src/shared/utils/validation/server/serverValidation';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { TAddUser } from '@/src/features/users/domain/entities/type';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sortField = searchParams.get('sort') || 'createdAt';
    const sortDesc = searchParams.get('desc') === 'true';

    const orderBy = { [sortField]: sortDesc ? 'desc' : 'asc' } as const;

    const users = await prisma.user.findMany({
      orderBy,
    });

    if (!users.length) {
      return NextResponse.json({ message: 'USER_NOT_FOUND' }, { status: 404 });
    }

    return NextResponse.json({ data: users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userName, role, password, mobile, email, ban }: TAddUser =
      await req.json();

    const errors = serverValidation({ email, password, mobile });
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

    await prisma.user.create({
      data: {
        userName,
        email,
        mobile,
        password: hashingPassword,
        role,
        ban: !!ban,
      },
    });
    revalidatePath('/dashboard/users');
    return NextResponse.json({ message: 'REGISTER_SUCCESS' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
