'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { label: 'خانه', href: '/' },
    { label: 'فروشگاه', href: '/shop' },
    { label: 'درباره ما', href: '/about' },
    { label: 'داشبورد', href: '/dashboard' },
  ];

  return (
    <nav>
      <ul className="flex gap-5 items-center text-sm font-bold">
        {links.map(({ label, href }) => {
          let isActive = false;

          if (href === '/') {
            isActive = pathname === '/';
          } else {
            isActive = pathname.startsWith(href);
          }

          return (
            <li
              key={href}
              className={`cursor-pointer transition-colors ${
                isActive ? 'text-blue-500' : 'hover:text-blue-400'
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
