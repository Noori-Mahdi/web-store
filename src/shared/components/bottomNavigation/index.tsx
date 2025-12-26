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
import Container from '../container';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { useTranslations } from 'next-intl';
import { cn } from '@/src/lib/utils';

const BottomNavigation = ({
  className,
  isDesktop = false,
}: {
  className?: string;
  isDesktop?: boolean;
}) => {
  const pathname = usePathname();
  const { isLoggedIn, user } = useContext(Context);
  const t = useTranslations();

  const links = [
    {
      label: !isLoggedIn
        ? 'login'
        : user?.role === 'admin'
          ? 'dashboard'
          : 'profile',
      href: !isLoggedIn
        ? '/login'
        : user?.role === 'admin'
          ? '/dashboard'
          : '/profile',
      icon: !isLoggedIn ? DoorOpen : user?.role === 'admin' ? ShieldUser : User,
    },
    {
      label: 'basket',
      href: '/basket',
      icon: ShoppingCart,
    },
    {
      label: 'store',
      href: '/shop',
      icon: Store,
    },
    {
      label: 'home',
      href: '/',
      icon: House,
    },
  ];

  return (
    <nav className={cn('fixed w-full md:relative bottom-0 right-0', className)}>
      <Container removeSpaceTop className="pb-1">
        <ul className="flex items-center max-w-[400px] md:max-w-[600px] m-auto md:m-0 justify-center md:gap-18 gap-7 w-full rounded-3xl p-3 bg-background backdrop-blur-md border shadow-lg">
          {links.map((e) => {
            const isActive =
              e.href === '/'
                ? pathname === '/' || pathname === '/fa' || pathname === '/en'
                : pathname === e.href ||
                  pathname.startsWith(`/fa${e.href}`) ||
                  pathname.startsWith(`/en${e.href}`);

            if (isDesktop && e.label === 'login') {
              return null;
            }

            return (
              <li key={e.href}>
                <Link
                  className="flex flex-col gap-1 justify-center items-center"
                  href={e.href}
                >
                  <e.icon
                    size={isActive ? 24 : 20}
                    className={`transition-all md:hidden box-content ${isActive ? 'rounded-xl md:text-primary bg-primary p-3 text-background' : ''}`}
                  />
                  {!isActive && (
                    <span
                      className={cn(
                        'text-xs md:text-sm md:hover:text-primary sm:text-[12px] text-center font-bold',
                        e.label === 'login' && 'md:hidden',
                      )}
                    >
                      {t(e.label)}
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
