import { dashboardMenuItems } from '@/moke/objectPageDashboard';
import Breadcrumb from '@/src/shared/components/breadcrumb';
import SideDrawer from '@/src/shared/components/side-drawer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb />
      <div className="flex">
        <SideDrawer className="" list={dashboardMenuItems} />
        {children}
      </div>
    </>
  );
}
