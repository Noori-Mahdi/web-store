import BottomNavigation from '../shared/components/bottomNavigation';

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-tr from-neutral-900 via-neutral-700 to-neutral-800 ">
      <main className="flex-1 flex flex-col">{children}</main>
      <BottomNavigation className="md:hidden" />
    </div>
  );
}
