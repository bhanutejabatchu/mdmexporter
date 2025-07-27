import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Phone, Mail, Users, Award, Globe, CheckCircle } from 'lucide-react';
import seafoodProcessingImage from '@/assets/seafood-processing.jpg';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-ocean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Premium Seafood
                <span className="block text-accent">Exports Worldwide</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Maha Dev Marine Exports - Your trusted partner for premium quality seafood exports 
                from Kakinada, Andhra Pradesh. We maintain the highest standards in processing and packaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-wave">
                    View Our Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-wave">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={seafoodProcessingImage}
                alt="Modern seafood processing facility"
                className="rounded-lg shadow-premium w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Maha Dev Marine Exports
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Kakinada, Andhra Pradesh, we are a leading seafood export company 
            committed to delivering the finest quality marine products to global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Strategic Partnerships for Excellence
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We have established strong partnerships with top processors who are 
              <span className="font-semibold text-secondary"> registered with MPEDA + EU Approved</span>, 
              <span className="font-semibold text-secondary"> EU-level hygiene & documentation</span> for processing 
              and packing our export orders. This ensures consistent quality and timely delivery 
              to our international clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-foreground">Export-quality processing standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-foreground">International packaging compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-foreground">Timely delivery worldwide</span>
              </div>
            </div>
          </div>

          <Card className="shadow-ocean">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Executive Director</h4>
                <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              </div>
              
              <div className="text-center">
                <h5 className="text-lg font-semibold text-secondary mb-2">Harsha Arigela</h5>
                <p className="text-muted-foreground mb-6">Leading our export operations with expertise and dedication</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span className="text-foreground">+91 9059861256</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span className="text-foreground text-sm">mdmseafoods23@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MDM Exports?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-wave hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We maintain the highest quality standards in seafood processing and export packaging.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-wave hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Global Reach</h3>
                <p className="text-muted-foreground">
                  Serving international markets with reliable export services and timely delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-wave hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-full mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground">
                  Led by experienced directors with deep knowledge of marine exports and logistics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-depth py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for premium seafood export solutions tailored to your needs.
          </p>
          <Link to="/inquiry">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-wave">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;