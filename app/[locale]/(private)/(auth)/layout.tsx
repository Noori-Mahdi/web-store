import AppHeader from '@/src/shared/components/appHeader';
import Container from '@/src/shared/components/container';
import { Instagram, Send } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
      <AppHeader />
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {children}
          <footer className="hidden md:block border-2 p-4 text-end bg-background rounded-xl  border-border">
            <h1 className="font-bold ">
              Weeb <span className="text-primary">Store</span>
            </h1>
            <div className="  h-full p-4">
              <h2 className="font-bold text-lg mb-4">About Us</h2>
              <p className="text-sm mb-4">
                Welcome to Weeb Store, the best place to shop for all things
                anime!
              </p>

              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm mb-4">Phone: +1 234 567 890</p>

              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex justify-end gap-4">
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
