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
    <Container className="flex items-center justify-center min-h-screen">
      {children}
    </Container>
  );
}
