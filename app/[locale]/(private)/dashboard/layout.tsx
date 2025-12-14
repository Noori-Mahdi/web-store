import { dashboardMenuItems } from '@/mock/objectPageDashboard';
import Breadcrumb from '@/src/shared/components/breadcrumb';
import Container from '@/src/shared/components/container';
import SideDrawer from '@/src/shared/components/side-drawer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <SideDrawer className="" list={dashboardMenuItems} />
      <Container>
        <Breadcrumb />
        {children}
      </Container>
    </div>
  );
}
