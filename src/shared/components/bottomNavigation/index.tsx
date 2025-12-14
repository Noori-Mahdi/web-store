'use client';
import {
  DoorOpen,
  House,
  ShieldUser,
  ShoppingCart,
  Store,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { LucideIcon } from 'lucide-react';
import Container from '../container';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';

export type TBottomNavigation = {
  bottomNavItems: { name: string; icon: LucideIcon; href: string }[];
};

const BottomNavigation = () => {
  const pathname = usePathname();
  const { isLoggedIn, user } = useContext(Context);

  const links = [
    {
      label: !isLoggedIn
        ? 'ورود'
        : user?.role === 'admin'
          ? 'داشبورد'
          : 'پروفایل',
      href: !isLoggedIn
        ? '/login'
        : user?.role === 'admin'
          ? 'dashboard'
          : '/profile',
      icon: !isLoggedIn ? DoorOpen : user?.role === 'admin' ? ShieldUser : User,
    },
    {
      label: 'سبد خرید',
      href: '/basket',
      icon: ShoppingCart,
    },
    {
      label: 'فروشگاه',
      href: '/shop',
      icon: Store,
    },
    {
      label: 'خانه',
      href: '/',
      icon: House,
    },
  ];

  return (
    <nav className="fixed md:hidden bottom-0 right-0 w-screen">
      <Container className="py-2">
        <ul className="  flex items-center max-w-[400px] m-auto justify-center gap-5 w-full rounded-3xl p-3  bg-neutral-800/60 backdrop-blur-md border border-white/10 shadow-lg">
          {links.map((e) => {
            const isActive =
              e.href === '/'
                ? pathname === '/'
                : pathname === e.href || pathname.startsWith(`${e.href}/`);

            return (
              <li key={e.href}>
                <Link
                  className="flex flex-col gap-1 justify-center items-center"
                  href={e.href}
                >
                  {
                    <e.icon
                      size={isActive ? 24 : 20}
                      className={`transition-all box-content ${
                        isActive
                          ? ' bg-yellow-400 p-2 rounded-xl text-neutral-700'
                          : 'text-neutral-400'
                      }`}
                    />
                  }
                  {!isActive && (
                    <span className="text-xs sm:text-[12px] text-center  font-bold">
                      {e.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};

export default BottomNavigation;
