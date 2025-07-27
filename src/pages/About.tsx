import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Target, Award } from 'lucide-react';

const About = () => {
  const directors = [
    {
      name: 'Harsha Arigela',
      position: 'International Operations Director',
      description: 'Leading our company vision and strategic direction with extensive experience in marine exports & Overseeing global partnerships and international market expansion with expertise in cross-border trade'
    },
    {
      name: 'David Madada',
      position: 'Chief Logistics Director',
      description: 'Overseeing seafood quality standards and compliance to ensure safe, export-ready products for global markets.'
    },
    {
      name: 'Mahesh Revu',
      position: 'Logistics Director',
      description: 'Managing supply chain operations and ensuring seamless delivery of products worldwide.'
    }
  ];

  const partnerships = [
    {
      name: 'Apex Frozen Foods',
      description: 'Packers & processors Who are registered with MPEDA + EU Approved , EU-level hygiene & documentation for processing and packing our export orders'
    },
    {
      name: 'Sandhya Aqua',
      description: 'Partnership with Top Export leading companies in INDIA for packing and processing'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Maha Dev Marine Exports
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in the vibrant port city of Kakinada, Andhra Pradesh, we are a premier 
            seafood export company dedicated to delivering the finest marine products to global markets.
          </p>
        </div>
      </section>

      {/* Location & Mission */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground">Our Location</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strategically located in Kakinada, Andhra Pradesh, one of India's major fishing harbors, 
                we have direct access to the freshest seafood from the Bay of Bengal. Our location 
                provides us with a competitive advantage in sourcing premium quality marine products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Kakinada's rich maritime heritage and modern port facilities make it an ideal base 
                for our export operations, ensuring efficient logistics and maintaining the cold 
                chain from catch to customer.
              </p>
            </div>

            <Card className="shadow-ocean">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of premium quality seafood exports from India, 
                  maintaining the highest standards of quality, sustainability, and customer 
                  satisfaction while contributing to the growth of the global seafood trade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Leadership Team</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our company is guided by three experienced directors, each bringing unique expertise 
            to ensure the success of our operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <Card key={index} className="shadow-wave hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-ocean rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{director.name}</h3>
                <p className="text-secondary font-medium mb-4">{director.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{director.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Strategic Partnerships</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We have forged strong partnerships with leading processing facilities to ensure 
              the highest quality standards in our export operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="shadow-wave hover:shadow-ocean transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{partner.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Quality</h3>
            <p className="text-muted-foreground text-sm">Uncompromising commitment to premium quality standards</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Reliability</h3>
            <p className="text-muted-foreground text-sm">Consistent delivery and dependable service</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Partnership</h3>
            <p className="text-muted-foreground text-sm">Building long-term relationships with clients</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-ocean rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Sustainability</h3>
            <p className="text-muted-foreground text-sm">Responsible sourcing and environmental stewardship</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;