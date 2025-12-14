'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>404 - صفحه پیدا نشد</h1>
      <p>متاسفیم، صفحه‌ای که دنبال آن هستید وجود ندارد.</p>
      <Link href="/">بازگشت به خانه</Link>
    </div>
  );
}
