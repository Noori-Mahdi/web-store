import SideDrawer from '@/src/shared/components/side-drawer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full gap-6">
      <SideDrawer className="" list={[]} />
      <div className="flex-1 bg-background  border-2 border-border shadow-2xl rounded-lg p-2">
        {children}
      </div>
    </div>
  );
}
