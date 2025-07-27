import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Fish, Star, MessageSquare } from 'lucide-react';
import yellowfinTunaImage from '@/assets/yellowfin-tuna-new.jpg';
import vannameiPrawnImage from '@/assets/vannamei-prawn.jpg';
import blackTigerPrawnImage from '@/assets/black-tiger-prawn.jpg';
import indianMackerelImage from '@/assets/indian-mackerel.jpg';
import squidImage from '@/assets/squid.jpg';
import ribbonFishImage from '@/assets/ribbon-fish.jpg';
import seaRedTigerShrimpImage from '@/assets/sea-red-tiger-shrimp.jpg';
import fishMawsImage from '@/assets/Fish Maws.jpg';
import gholeFishImage from '@/assets/Ghole Fish.jpg';
import cuttleFishImage from '@/assets/Cuttle Fish.jpg';
import octopusImage from '@/assets/Octopus.jpg';
import leatherJacketFishImage from '@/assets/Leather Jacket Fish.jpg';

const Products = () => {
  const products = [
    {
      name: 'Yellowfin Tuna',
      image: yellowfinTunaImage,
      description: 'Premium quality yellowfin tuna, carefully processed and packed for export markets.',
      category: 'Fish',
      featured: true
    },
    {
      name: 'Vannamei Prawn',
      image: vannameiPrawnImage,
      description: 'Fresh vannamei prawns, sustainably sourced and export-ready.',
      category: 'Prawns',
      featured: true
    },
    {
      name: 'Black Tiger Prawn',
      image: blackTigerPrawnImage,
      description: 'High-quality black tiger prawns with excellent texture and taste.',
      category: 'Prawns',
      featured: true
    },
    {
      name: 'Indian Mackerel',
      image: indianMackerelImage,
      description: 'Fresh Indian mackerel, rich in omega-3 and perfect for international markets.',
      category: 'Fish',
      featured: false
    },
    {
      name: 'Sea Red Tiger Prawn',
      image: seaRedTigerShrimpImage,
      description: 'Premium sea red tiger prawns with superior quality and freshness.',
      category: 'Prawns',
      featured: false
    },
    {
      name: 'Fish Maws',
      image: fishMawsImage,
      description: 'Dried fish maws, a delicacy prized in Asian cuisines.',
      category: 'Processed',
      featured: false
    },
    {
      name: 'Ghole Fish',
      image: gholeFishImage,
      description: 'Fresh ghole fish, known for its firm texture and mild flavor.',
      category: 'Fish',
      featured: false
    },
    {
      name: 'Leather Jacket Fish',
      image: leatherJacketFishImage,
      description: 'Quality leather jacket fish, popular in international seafood markets.',
      category: 'Fish',
      featured: false
    },
    {
      name: 'Ribbon Fish',
      image: ribbonFishImage,
      description: 'Fresh ribbon fish with delicate flavor, perfect for various culinary preparations.',
      category: 'Fish',
      featured: false
    },
    {
      name: 'Squid',
      image: squidImage,
      description: 'Fresh squid, cleaned and prepared to export quality standards.',
      category: 'Cephalopods',
      featured: true
    },
    {
      name: 'Cuttle Fish',
      image: cuttleFishImage,
      description: 'Premium cuttle fish, ideal for international seafood markets.',
      category: 'Cephalopods',
      featured: false
    },
    {
      name: 'Octopus',
      image: octopusImage,
      description: 'Fresh octopus, processed to maintain quality and freshness.',
      category: 'Cephalopods',
      featured: false
    }
  ];

  const categories = ['All', 'Fish', 'Prawns', 'Cephalopods', 'Processed'];
  
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Seafood Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of premium quality seafood products, carefully sourced 
            from the pristine waters of the Bay of Bengal and processed to international standards.
          </p>
        </div>

        <div className="bg-gradient-ocean rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary-foreground mb-4">
            Export Quality Guarantee
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            All our products meet international export standards and are processed in 
            partnership with leading facilities including Apex Frozen Foods and Sandhya Aqua.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Star className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <Star className="w-6 h-6 text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.filter(product => product.featured).map((product, index) => (
            <Card key={index} className="shadow-wave hover:shadow-ocean transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm font-medium">{product.category}</span>
                  <Fish className="w-4 h-4 text-secondary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Product Range
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-wave hover:shadow-ocean transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2">
                      <Star className="w-5 h-5 text-accent fill-accent" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                    <span className="text-secondary text-sm font-medium bg-secondary/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Product Images Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Product Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our premium seafood products through our detailed image gallery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Manual Image 1 - Yellowfin Tuna */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={yellowfinTunaImage}
                alt="Yellowfin Tuna"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Yellowfin Tuna</h3>
                  <p className="text-sm opacity-90">Premium Export Quality</p>
                </div>
              </div>
            </div>

            {/* Manual Image 2 - Sea Red Tiger Shrimp */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={seaRedTigerShrimpImage}
                alt="Sea Red Tiger Shrimp (Prawn)"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Sea Red Tiger Shrimp</h3>
                  <p className="text-sm opacity-90">A+ Graded • 04-15 Count</p>
                </div>
              </div>
            </div>

            {/* Manual Image 3 - Black Tiger Prawn */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={blackTigerPrawnImage}
                alt="Black Tiger Prawns"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Black Tiger Prawns</h3>
                  <p className="text-sm opacity-90">Premium Quality</p>
                </div>
              </div>
            </div>

            {/* Manual Image 4 - Vannamei Prawn */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={vannameiPrawnImage}
                alt="Vannamei Prawns"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Vannamei Prawns</h3>
                  <p className="text-sm opacity-90">Sustainably Sourced</p>
                </div>
              </div>
            </div>

            {/* Manual Image 5 - Indian Mackerel */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={indianMackerelImage}
                alt="Indian Mackerel"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Indian Mackerel</h3>
                  <p className="text-sm opacity-90">Rich in Omega-3</p>
                </div>
              </div>
            </div>

            {/* Manual Image 6 - Squid */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={squidImage}
                alt="Fresh Squid"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fresh Squid</h3>
                  <p className="text-sm opacity-90">Export Ready</p>
                </div>
              </div>
            </div>

            {/* Manual Image 7 - Fish Maws */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={fishMawsImage}
                alt="Fish Maws"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fish Maws</h3>
                  <p className="text-sm opacity-90">Asian Delicacy</p>
                </div>
              </div>
            </div>

            {/* Manual Image 8 - Octopus */}
            <div className="group relative overflow-hidden rounded-lg shadow-wave hover:shadow-ocean transition-all duration-300">
              <img
                src={octopusImage}
                alt="Fresh Octopus"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fresh Octopus</h3>
                  <p className="text-sm opacity-90">Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-depth rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us for detailed specifications, pricing, and availability. 
            We're ready to fulfill your seafood export requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;