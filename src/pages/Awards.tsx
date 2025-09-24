import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Star, Users, TrendingUp, Shield, Globe } from "lucide-react";

const awards2025 = [
  { category: "Enterprise Content Management (ECM)", award: "Leader", region: "Global" },
  { category: "Headless CMS", award: "Leader", region: "Enterprise" },
  { category: "Web Content Management", award: "Easiest Admin", region: "Small Business" },
  { category: "Headless CMS", award: "Highest User Adoption", region: "Small Business" },
  { category: "WebOps Platforms", award: "Momentum Leader", region: "Global" },
  { category: "Web Content Management", award: "Leader", region: "Enterprise EMEA" }
];

const leadershipAwards = [
  {
    icon: Users,
    title: "Best Company Culture",
    year: "2025",
    description: "Recognized for fostering an inclusive and supportive work environment"
  },
  {
    icon: TrendingUp,
    title: "Career Growth Excellence",
    year: "2025",
    description: "Honored for providing exceptional professional development opportunities"
  },
  {
    icon: Star,
    title: "Best Company Leadership",
    year: "2025",
    description: "Awarded for outstanding executive leadership and vision"
  },
  {
    icon: Globe,
    title: "Best Company Outlook",
    year: "2025",
    description: "Recognized for positive company direction and employee satisfaction"
  }
];

const analystRecognition = [
  {
    analyst: "Forrester Wave™",
    award: "Leader",
    category: "Content Management Systems",
    year: "2025",
    description: "Positioned as a Leader in the comprehensive evaluation of CMS vendors"
  },
  {
    analyst: "Gartner® Magic Quadrant™",
    award: "Visionaries",
    category: "Digital Experience Platforms",
    year: "2025",
    description: "Recognized for innovative vision and market impact in DXP space"
  },
  {
    analyst: "IDC MarketScape",
    award: "Leader",
    category: "Worldwide Headless CMS",
    year: "2023",
    description: "Named a Leader in headless content management evaluation"
  },
  {
    analyst: "Aragon Research Globe™",
    award: "Leader",
    category: "Content Experience Platforms",
    year: "2025",
    description: "Positioned as a Leader in content experience platform market"
  }
];

const Awards = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Awards and recognition
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            We're honored to consistently be recognized by analysts, employees, and customers 
            for our performance, service and culture.
          </p>
        </div>
      </section>

      {/* 2025 G2 Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-4">2025</Badge>
            <h2 className="text-4xl font-bold mb-4">G2 Awards</h2>
            <p className="text-xl text-muted-foreground">
              Leading the industry across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards2025.map((award, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{award.category}</CardTitle>
                  <CardDescription className="text-base">
                    <Badge variant="outline" className="mb-2">{award.award}</Badge>
                    <br />
                    {award.region}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership and Culture Awards */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership and Culture</h2>
            <p className="text-xl text-muted-foreground">
              Recognized for our commitment to people and workplace excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipAwards.map((award, index) => {
              const Icon = award.icon;
              return (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{award.title}</CardTitle>
                          <Badge variant="secondary">{award.year}</Badge>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {award.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Honored by leading industry organizations and publications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Digital Awards Excellence</CardTitle>
                <CardDescription className="text-lg">
                  <Badge variant="outline">2025</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recognized for outstanding digital innovation and customer experience delivery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Technology Excellence</CardTitle>
                <CardDescription className="text-lg">
                  <Badge variant="outline">2025</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Awarded for breakthrough technology innovations and platform capabilities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analyst Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Analyst Recognition</h2>
            <p className="text-xl text-muted-foreground">
              Positioned as a leader by top industry analysts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {analystRecognition.map((recognition, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{recognition.analyst}</CardTitle>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{recognition.award}</Badge>
                        <Badge variant="secondary">{recognition.year}</Badge>
                      </div>
                      <CardDescription className="text-lg font-medium mb-2">
                        {recognition.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {recognition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Industry Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Analyst Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-white/90">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the award-winning platform
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience the platform that industry leaders, analysts, and customers trust. 
            See why Content King consistently leads the market in innovation and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;