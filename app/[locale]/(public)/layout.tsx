import Breadcrumb from '@/src/shared/components/breadcrumb';
import Header from '@/src/shared/components/mainHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
        <Header/>
        <Breadcrumb />
        {children}
    </div>
  );
}
