import AppHeader from '@/src/shared/components/appHeader';
import Container from '@/src/shared/components/container';
import { Instagram, Send } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations();
  return (
    <div className="flex flex-col flex-1">
      <AppHeader />
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {children}
          <footer className="hidden md:block border-2 p-4  bg-background rounded-xl  border-border">
            <h1 className="font-bold text-end">
              Web <span className="text-primary">Store</span>
            </h1>
            <div className="  h-full p-4">
              <h2 className="font-bold text-lg mb-4">{t('aboutUs')}</h2>
              <p className="text-sm mb-4">
                {t('welcome to web store, your online clothing store')}
              </p>

              <h3 className="font-semibold mb-2">{t('contactUs')}</h3>
              <p className="text-sm mb-4">{t('phone')}: +989 02 234 567 890</p>

              <h3 className="font-semibold mb-2">{t('followUs')}</h3>
              <div className="flex gap-4">
                <Link href={'#'}>
                  <Send className="hover:text-primary" size={25} />
                </Link>
                <Link href={'#'}>
                  <Instagram className="hover:text-primary" size={25} />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </Container>
    </div>
  );
}
