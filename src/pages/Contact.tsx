import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Maha Dev Marine Exports
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, quotes, or partnership opportunities. 
            We're here to serve your seafood export needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card className="shadow-wave hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-ocean rounded-full">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Executive Director</h3>
                        <p className="text-muted-foreground mb-2">Harsha Arigela</p>
                        <p className="text-secondary font-medium text-lg">+91 9059861256</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Call for immediate assistance and business inquiries
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-wave hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-ocean rounded-full">
                        <MessageSquare className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                        <p className="text-secondary font-medium text-lg">+91 9059861256</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Quick communication for urgent queries and updates
                        </p>
                        <Button 
                          className="mt-3 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.open('https://wa.me/919059861256', '_blank')}
                        >
                          Open WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-wave hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-ocean rounded-full">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-secondary font-medium">mdmseafoods23@gmail.com</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Send detailed inquiries and document requests
                        </p>
                        <Button 
                          className="mt-3"
                          onClick={() => {
                            const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=mdmseafoods23@gmail.com&su=Inquiry from MDM Exports Website';
                            window.open(gmailLink, '_blank');
                          }}
                        >
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-wave hover:shadow-ocean transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-ocean rounded-full">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Office Location</h3>
                        <p className="text-foreground">Kakinada, Andhra Pradesh</p>
                        <p className="text-muted-foreground">India</p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Strategic location at one of India's major fishing harbors
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Business Hours & Additional Info */}
          <div className="space-y-8">
            <Card className="shadow-ocean">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
                <div className="border-t border-border mt-6 pt-6">
                  <p className="text-muted-foreground text-sm">
                    <strong>Note:</strong> For urgent inquiries outside business hours, 
                    please contact us via WhatsApp for faster response.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-ocean">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-semibold text-foreground">Export Services</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Processing Partners</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Apex Frozen Foods</li>
                      <li>• Sandhya Aqua</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-2">Export Capabilities</h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• International quality standards</li>
                      <li>• Cold chain management</li>
                      <li>• Documentation support</li>
                      <li>• Worldwide shipping</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-depth rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                Ready to Start Your Order?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Submit a detailed inquiry through our quote form for faster processing.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = '/inquiry'}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Quick Response Guarantee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">&lt; 2 hrs</div>
              <p className="text-muted-foreground">WhatsApp Response</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">&lt; 4 hrs</div>
              <p className="text-muted-foreground">Phone Call Back</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">&lt; 24 hrs</div>
              <p className="text-muted-foreground">Email Reply</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;