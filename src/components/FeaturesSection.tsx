import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Globe, Code, Users, BarChart3 } from "lucide-react";

// This is the Features COMPONENT for home page (not the full Features PAGE)
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Deliver content at blazing speeds with our global CDN and optimized API endpoints."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, encryption at rest, and advanced access controls."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Scale",
      description: "Built for global deployment with multi-region support and automatic scaling."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Developer First",
      description: "Rich APIs, webhooks, and SDKs for every major platform and programming language."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Advanced workflows, approval processes, and role-based permissions for seamless teamwork."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & Insights",
      description: "Deep insights into content performance with built-in analytics and custom reporting."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and deliver exceptional digital experiences at enterprise scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
