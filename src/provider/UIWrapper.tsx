import BottomNavigation from '../shared/components/bottomNavigation';
import Container from '../shared/components/container';

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col pb-24 md:py-5 h-screen   bg-linear-to-tr from-neutral-900 via-neutral-700 to-neutral-800 ">
      <main className="flex-1 h-full flex flex-col">{children}</main>
      <BottomNavigation className="md:hidden" />
    </Container>
  );
}
