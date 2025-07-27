import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-wave">
      {/* Logo Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <img 
          src="/lovable-uploads/cca7d0a6-ec63-434f-88ec-ca9f2d8a9716.png" 
          alt="MDM Exports Logo" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;