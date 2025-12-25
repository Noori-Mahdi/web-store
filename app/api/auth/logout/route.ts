import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'LOGOUT_SUCCESS' },
      { status: 200 },
    );

    response.cookies.set('token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
    );
  }
}
