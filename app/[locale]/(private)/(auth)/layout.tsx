import AppHeader from '@/src/shared/components/appHeader';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
        <AppHeader/>
        {children}
    </div>
  );
}
