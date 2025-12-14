'use client';
import { ChevronLeft } from 'lucide-react';
import Container from '../container';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../LanguageSwitcher';

const AppHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const basePath = pathname.split('/')[2];
  return (
    <header>
      <Container>
        <div className=" relative p-2 flex items-center justify-center  rounded-full  box-content bg-neutral-800/60 backdrop-blur-md border border-white/10 shadow-lg">
          <ChevronLeft
            onClick={() => {
              router.back();
            }}
            className="absolute left-0 cursor-pointer hover:text-yellow-500 translate-x-1/2"
          />
          <h1 className="font-extrabold text-2xl ">
            {t(basePath.length > 0 ? basePath : 'home')}
          </h1>
          <LanguageSwitcher />
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
