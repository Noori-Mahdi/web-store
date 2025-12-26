import Container from '@/src/shared/components/container';
import { getTranslations } from 'next-intl/server';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations();
  return <div className="flex justify-center ">{children}</div>;
}
