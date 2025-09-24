import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Award, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const locations = [
    {
      name: "Content King HQ",
      address: "1023 Innovation Drive, Suite 14A",
      city: "Austin, TX 78721",
      phone: "+1 (512) 555-0123",
      type: "Headquarters"
    },
    {
      name: "West Coast Office",
      address: "505 Montgomery St, Floor 10",
      city: "San Francisco, CA 94111",
      phone: "+1 (415) 555-0195",
      type: "Co-Headquarters"
    }
  ];

  const stats = [
    { number: "80%", label: "Reduction in content-related development time" },
    { number: "90%", label: "Faster time to publish" },
    { number: "500+", label: "Companies trust us" },
    { number: "99.9%", label: "Platform uptime" }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Support",
      description: "Get help from our team of content management experts"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Results",
      description: "Join hundreds of companies already seeing measurable success"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Deliver content worldwide with our global infrastructure"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Get in Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to transform your
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                content experience?
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Reimagine what's possible with the leading headless CMS platform. Challenge the status quo and create experiences faster than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">How can we help you?</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project and how we can help..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Why choose Content King?</h3>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Quote */}
              <Card className="bg-gradient-secondary border-0">
                <CardContent className="p-6">
                  <blockquote className="text-lg font-medium mb-4">
                    "Content King's platform has transformed how we manage content across our global operations. The speed and flexibility are unmatched."
                  </blockquote>
                  <footer className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">CTO, TechCorp</div>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Where you can find us</h2>
            <p className="text-xl text-muted-foreground">
              We are a global team with offices and people around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{location.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription className="text-base">
                    {location.address}<br />
                    {location.city}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{location.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Other ways to reach us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Get help with technical questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:support@contentking.com" aria-label="Email support team">
                    support@contentking.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Sales Team</CardTitle>
                <CardDescription>
                  Speak with our sales experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+18005550199" aria-label="Call sales team">
                    +1 (800) 555-0199
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>
                  We're here when you need us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM PST</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;