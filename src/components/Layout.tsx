import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 py-0">
        {children}
      </main>
      <Footer />
    </div>;
};
export default Layout;