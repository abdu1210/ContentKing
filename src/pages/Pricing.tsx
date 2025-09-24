import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Star, Zap, Shield, Globe, Users, Brain, Brush, Clock, Lock, GitBranch, Server } from "lucide-react";

const capabilities = [
  { icon: Server, name: "Headless CMS", description: "API-first content management" },
  { icon: Star, name: "Personalization engine", description: "Dynamic content personalization" },
  { icon: Zap, name: "Real-time data activation", description: "Instant content updates" },
  { icon: Users, name: "No-code agents & automations", description: "Workflow automation" },
  { icon: Brain, name: "Brand-aware AI", description: "AI that understands your brand" },
  { icon: Brush, name: "AI writing assistant", description: "Content creation support" },
  { icon: Brush, name: "Visual building/editing", description: "WYSIWYG editing experience" },
  { icon: Clock, name: "Timeline previewing", description: "Preview scheduled content" },
  { icon: Lock, name: "Granular permissions", description: "Role-based access control" },
  { icon: GitBranch, name: "Custom workflows", description: "Tailored approval processes" },
  { icon: Globe, name: "Integrated app & front-end hosting", description: "Full-stack solution" }
];

const customerLogos = [
  "ASICS", "Mattel", "Walmart", "TopGolf", "Steve Madden", "MongoDB", "Alaska Airlines", "Crocs"
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-0">
            Content King Edge
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We have the right solution for you
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From Headless CMS to Web Personalization to Omnichannel Personalization, 
            the world's best digital experiences run on Content King
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Headless CMS</h2>
              <p className="text-xl text-muted-foreground">
                AI-driven automated content management for the enterprise
              </p>
            </div>

            <Card className="mb-12 border-2 border-primary/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl">Content King Edge — CMS</CardTitle>
                <CardDescription className="text-lg">
                  Complete enterprise content management platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <Check className="h-6 w-6 text-primary" />
                      Capabilities
                    </h3>
                    <div className="space-y-4">
                      {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                              <Icon className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">{capability.name}</div>
                              <div className="text-sm text-muted-foreground">{capability.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Platform</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>99.9% uptime SLA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Global CDN deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Auto-scaling infrastructure</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Enterprise security compliance</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-6">Support</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>24/7 technical support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Dedicated customer success</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Professional services</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>Training and certification</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <h4 className="text-xl font-semibold mb-6">Experience Content King Edge for yourself</h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="hero">
                      Request Demo
                    </Button>
                    <Button size="lg" variant="outline">
                      Start Free
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">Trusted by industry leaders</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {customerLogos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Customer Success</h2>
            <p className="text-xl text-muted-foreground">
              Measurable success that makes a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-4xl text-primary">21%</CardTitle>
                <CardDescription className="text-lg">
                  <strong>Reduction</strong> in internal user workflow steps
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-4xl text-primary">53%</CardTitle>
                <CardDescription className="text-lg">
                  <strong>Faster</strong> delivery of translated content to market
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-4xl text-primary">99.9%</CardTitle>
                <CardDescription className="text-lg">
                  <strong>Uptime</strong> guaranteed for mission-critical content
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-center">
                <div className="mb-6">
                  <Badge variant="secondary">Retail</Badge>
                </div>
                <blockquote className="text-xl italic mb-6">
                  "We really love Content King. Their customer service is stellar. They are extremely responsive, 
                  and they help us whenever we run into any issues. Using Content King has supported the scalability 
                  of our through-channel marketing solution, and now we're ready for exponential growth."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">Tara Yukawa</div>
                  <div className="text-muted-foreground">VP of Marketing Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Are you ready to reimagine possible?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn more about Content King Edge, the adaptive experience platform that powers 
            real-time, omnichannel personalization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Talk to us
            </Button>
            <Button size="lg" variant="outline">
              Start Free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;