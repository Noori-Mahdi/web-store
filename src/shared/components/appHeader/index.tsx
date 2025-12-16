'use client';
import { ChevronLeft, Search, Settings } from 'lucide-react';
import Container from '../container';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageButton';
import { ModeToggle } from '../themeButton';
import Link from 'next/link';
import BottomNavigation from '../bottomNavigation';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const basePath = pathname.split('/')[2];
  return (
    <header>
      <Container className="flex items-center gap-2 md:justify-between justify-center ">
        <div className=" relative w-full max-w-[444px] md:max-w-[775px] md:min-w-[600px]  gap-3 flex items-center justify-between">
          {/* mobile */}
          <div className="flex gap-2 md:hidden">
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          <h1 className="flex md:hidden justify-center items-center font-extrabold bg-background text-xl rounded-full pb-2 p-1 flex-1 backdrop-blur-md border  shadow-lg">
            {t(basePath.length > 0 ? basePath : 'home')}
          </h1>
          <div className="flex border md:hidden  justify-center items-center  rounded-full bg-background shadow-lg w-9 h-9 md:w-10 md:h-10 cursor-pointer">
            <ChevronLeft
              onClick={() => {
                router.back();
              }}
              className="hover:text-primary "
            />
          </div>
          {/* desktop */}
          <div className="md:flex hidden gap-3">
            <Link
              className="bg-primary text-background hover:brightness-95 border border-border rounded-lg font-semibold text-sm px-4 py-2"
              href={'/login'}
            >
              {t('login')}
            </Link>
            <div className="flex w-10 h-10 cursor-pointer justify-center items-center p-2 bg-background border rounded-lg hover:bg-primary hover:text-background hover:scale-110 hover:border-2">
              <Settings size={16} />
            </div>
            <div className="flex w-10 h-10 cursor-pointer justify-center items-center p-2 bg-background border rounded-lg hover:bg-primary hover:text-background hover:scale-110 hover:border-2">
              <Search size={16} />
            </div>
          </div>

          <BottomNavigation isDesktop className="hidden flex-1 md:block" />
        </div>
        <div className="hidden md:flex gap-2 min-w-[100px] items-center">
          <Label className="font-semibold text-xl">WS</Label>
          <Image alt="" width={70} height={70} src={'/image/logo.png'} />
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
