import { NextResponse } from 'next/server';


export async function POST() {
  try {
    const response = NextResponse.json({ message: 'خروج موفقیت‌آمیز بود' });

    response.cookies.set('token', '', {
      httpOnly: true,
      path: '/',
      maxAge: 0,
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'خطای ناشناخته' }, { status: 500 });
  }
}
