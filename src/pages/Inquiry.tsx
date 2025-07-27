import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, FileText, Globe, Package } from 'lucide-react';

const Inquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productName: '',
    minQuantity: '',
    maxQuantity: '',
    expectedPrice: '',
    sizeRequirements: '',
    packingRequirements: '',
    country: '',
    state: '',
    city: '',
    nearestPort: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const products = [
    'Yellowfin Tuna',
    'Vannamei Prawn',
    'Black Tiger Prawn',
    'Indian Mackerel',
    'Sea Red Tiger Prawn',
    'Fish Maws',
    'Ghole Fish',
    'Leather Jacket Fish',
    'Ribbon Fish',
    'Squid',
    'Cuttle Fish',
    'Octopus'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.productName || !formData.companyName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours with a detailed quote.",
    });

    // Reset form
    setFormData({
      productName: '',
      minQuantity: '',
      maxQuantity: '',
      expectedPrice: '',
      sizeRequirements: '',
      packingRequirements: '',
      country: '',
      state: '',
      city: '',
      nearestPort: '',
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      additionalNotes: ''
    });

    // Optional: You can also send the data to your backend API here
    // For now, we'll just show the success message
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request a Quote
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Submit your detailed requirements and we'll get back to you with a competitive 
            quote within 24 hours. All fields marked with * are required.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-premium">
          <CardHeader className="bg-gradient-ocean text-primary-foreground">
            <CardTitle className="text-2xl flex items-center space-x-3">
              <FileText className="w-6 h-6" />
              <span>Product Inquiry Form</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  <span>Company Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Enter contact person name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Product Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Package className="w-5 h-5 text-secondary" />
                  <span>Product Requirements</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="productName">Product Name *</Label>
                    <Select value={formData.productName} onValueChange={(value) => handleInputChange('productName', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product} value={product}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="minQuantity">Minimum Quantity</Label>
                    <Input
                      id="minQuantity"
                      value={formData.minQuantity}
                      onChange={(e) => handleInputChange('minQuantity', e.target.value)}
                      placeholder="e.g., 1000 kg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxQuantity">Maximum Quantity</Label>
                    <Input
                      id="maxQuantity"
                      value={formData.maxQuantity}
                      onChange={(e) => handleInputChange('maxQuantity', e.target.value)}
                      placeholder="e.g., 5000 kg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedPrice">Expected Price Range</Label>
                    <Input
                      id="expectedPrice"
                      value={formData.expectedPrice}
                      onChange={(e) => handleInputChange('expectedPrice', e.target.value)}
                      placeholder="e.g., $10-15 per kg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sizeRequirements">Size Requirements</Label>
                    <Input
                      id="sizeRequirements"
                      value={formData.sizeRequirements}
                      onChange={(e) => handleInputChange('sizeRequirements', e.target.value)}
                      placeholder="e.g., 20-30 pieces per kg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="packingRequirements">Packing Requirements</Label>
                    <Input
                      id="packingRequirements"
                      value={formData.packingRequirements}
                      onChange={(e) => handleInputChange('packingRequirements', e.target.value)}
                      placeholder="e.g., IQF blocks, retail packs, bulk"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Shipping Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder="Enter destination country"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="Enter state or province"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter destination city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nearestPort">Nearest Port</Label>
                    <Input
                      id="nearestPort"
                      value={formData.nearestPort}
                      onChange={(e) => handleInputChange('nearestPort', e.target.value)}
                      placeholder="Enter nearest port name"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Any special requirements, certifications needed, delivery timeline, etc."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="bg-gradient-ocean hover:opacity-90 text-primary-foreground shadow-ocean">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  We'll respond to your inquiry within 24 hours with a detailed quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Contact Alternative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-muted-foreground mb-6">
            For urgent inquiries or immediate assistance, contact our Executive Director directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/919059861256', '_blank')}
            >
              WhatsApp: +91 9059861256
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('tel:+919059861256')}
            >
              Call: +91 9059861256
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;