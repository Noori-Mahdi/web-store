import Ads from '../shared/components/ads';
import Footer from '../shared/components/footer';
import Header from '../shared/components/header';

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Ads />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
