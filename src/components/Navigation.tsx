import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
    { href: '/inquiry', label: 'Get Quote' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card shadow-wave border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
              <img src="/lovable-uploads/cca7d0a6-ec63-434f-88ec-ca9f2d8a9716.png" alt="MDM Exports Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">MDM Exports</h1>
              <p className="text-xs text-muted-foreground">Maha Dev Marine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.href) ? 'text-secondary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-muted rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive(item.href)
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-foreground hover:bg-secondary/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;