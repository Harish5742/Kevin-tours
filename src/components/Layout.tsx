
import { ReactNode } from 'react';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16" role="main">
        {children}
      </main>
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
