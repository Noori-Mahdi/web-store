'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';
import Logo from '../logo';
import { useTranslations } from 'next-intl';
import { getFormattedDate } from '../../utils/date';
import { dashboardMenuItems } from '@/mock/objectPageDashboard';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/lib/utils';
import { Settings } from 'lucide-react';
import LanguageSwitch from '../languageSwitch';
import { ThemeSwitch } from '../themeSwitch';

type TSideDrawerProps = {
  list: { label: string; name: string; icon: React.ReactNode }[];
  className?: string;
};

const SideDrawer = ({ list, className }: TSideDrawerProps) => {
  const pathname = usePathname();
  const t = useTranslations();

  const user = { userName: 'test', avatarUrl: 'test', email: 'test@gmail.con' };
  return (
    <div className={twMerge('flex flex-col gap-5 w-56', className)}>
      <div className="flex items-end gap-2">
        <Logo width={50} height={50} />
        <h1 className="text-base font-bold flex gap-1">
          <span className="rtl:order-2">{t('web')}</span>{' '}
          <span className="text-primary">{t('store')}</span>
        </h1>
      </div>
      <div className=" flex flex-col gap-1 border-2 py-2 bg-background px-2 rounded-lg border-border">
        <div className="flex items-end gap-3">
          <Avatar className="cursor-pointer flex justify-center items-center border-primary  w-6 h-6 rounded-lg p-1 box-content border-2">
            <AvatarImage className="rounded-lg" src={user.avatarUrl} />
            <AvatarFallback className="font-extrabold text-xl">
              {user.userName.trim()?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-bold">{user.userName}</div>
            <div className="text-xs text-gray-500 font-medium">
              {user.email}
            </div>
          </div>
        </div>
        <div className="text-xs">{getFormattedDate()}</div>
      </div>
      <ul className=" bg-background border-2 border-border rounded-lg px-2 py-5 flex flex-col gap-1">
        {dashboardMenuItems.map((e) => (
          <li key={e.name}>
            <Link
              className={cn(
                'flex hover:text-neutral-700 hover:bg-primary rounded-lg p-2 gap-2 items-center',
                pathname.includes('/dashboard/' + e.name) &&
                  'bg-primary text-neutral-700',
              )}
              href={'/dashboard/' + e.name}
            >
              <span>{e.icon}</span>
              <span className="text-sm font-semibold">{e.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className=" flex flex-col gap-2 border-2 py-2 bg-background px-2 rounded-lg border-border">
        <div className="flex items-center border-b-2 border-primary pb-1 justify-between">
          <span className="font-semibold">{t('setting')}</span>
          <Settings size={16} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold capitalize">{t('language')}</span>
          {/* <LanguageSwitch /> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold capitalize">{t('theme')}</span>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
