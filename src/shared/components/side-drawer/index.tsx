'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type TSideDrawerProps = {
  list: { label: string; name: string; icon: React.ReactNode }[];
  className?: string;
};

const SideDrawer = ({ list, className }: TSideDrawerProps) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const pathname = usePathname();

  return (
    <div className={twMerge('flex', className)}>
      {/* Mobile Drawer */}
      <ul className="md:hidden bg-bg-primary border-primary-700 z-20 flex flex-1 rounded-md border text-gray-50 shadow-md">
        {list.map((e) => (
          <li key={e.name} className="w-full">
            <Link
              href={`/${e.name}`}
              onClick={() => setOpenSideBar(false)}
              className={twMerge(
                'flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-200 rounded hover:bg-bg-secondary hover:text-accent-400',
                pathname === '/' + e.name && 'bg-bg-secondary text-accent-400',
              )}
            >
              {e.icon}
              <span>{e.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Drawer */}
      <div
        className={twMerge(
          'hidden md:flex flex-col bg-bg-primary border-primary-900 border-l-2 text-gray-50 transition-all duration-300 shadow-lg',
          openSideBar ? 'w-44' : 'w-20',
        )}
      >
        {list.map((e) => (
          <Link
            key={e.name}
            href={`/dashboard/${e.name}`}
            className={twMerge(
              'flex items-center font-semibold hover:text-white text-gray-400 gap-3 px-4 py-3 my-1 rounded transition-colors duration-200 ',
              openSideBar ? 'justify-between' : 'justify-center',
              pathname.includes('/dashboard/' + e.name) &&
                'text-blue-500 hover:text-blue-500',
            )}
          >
            {openSideBar && <span className="text-sm">{e.label}</span>}
            <span className={twMerge(openSideBar ? 'text-lg' : 'text-xl')}>
              {e.icon}
            </span>
          </Link>
        ))}

        {/* Toggle Button */}
        <button
          className={twMerge(
            'mt-auto mb-4 p-1 px-4 py-3  flex rounded hover:bg-bg-secondary transition',
            openSideBar ? 'justify-end' : 'justify-center',
          )}
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          {openSideBar ? (
            <ArrowLeft
              size={16}
              className="text-gray-200 hover:text-accent-400"
            />
          ) : (
            <ArrowRight
              size={16}
              className="text-gray-200 hover:text-accent-400"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideDrawer;
