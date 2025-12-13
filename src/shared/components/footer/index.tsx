'use client';

import Link from 'next/link';
import Container from '../container';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 border-t border-neutral-700   ">
      <Container className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">
        <div>
          <h2 className="text-xl font-bold mb-2">سورنا</h2>
          <p className=" max-w-xs">
            فروشگاه آنلاین محصولات دیجیتال با کیفیت بالا و ارسال سریع.
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-3">دسترسی سریع</h3>
          <ul className="">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                خانه
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-500 transition">
                فروشگاه
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom */}
      <div className=" border-t p-2 border-neutral-700 text-center text-sm">
        © 2025 WebStore. تمام حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
