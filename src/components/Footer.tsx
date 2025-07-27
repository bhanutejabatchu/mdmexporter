import { Phone, Mail, MapPin, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-full">
                <Anchor className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Maha Dev Marine Exports</h3>
                <p className="text-sm opacity-90">Premium Seafood Exports</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted partner for premium quality seafood exports from Kakinada, 
              Andhra Pradesh. We maintain the highest standards in processing and packaging.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+91 9059861256</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">mdmseafoods23@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 opacity-80 mt-0.5" />
                <span className="text-sm">Kakinada, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <div className="grid grid-cols-2 gap-2 text-sm opacity-90">
              <span>Yellowfin Tuna</span>
              <span>Vannamei Prawn</span>
              <span>Black Tiger Prawn</span>
              <span>Indian Mackerel</span>
              <span>Fish Maws</span>
              <span>Squid</span>
              <span>Cuttle Fish</span>
              <span>Octopus</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Maha Dev Marine Exports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;