import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useCoreProducts, useRoleCards, useStatistics } from "@/hooks/useContentstack";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

// Helper function to get icon component
const getIconComponent = (iconName: string): LucideIcon => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon;
  return IconComponent || LucideIcons.Database;
};

const Features = () => {
  // Get CMS data
  const { data: cmsProducts, isLoading: productsLoading } = useCoreProducts();
  const { data: cmsRoles, isLoading: rolesLoading } = useRoleCards();
  const { data: cmsStats, isLoading: statsLoading } = useStatistics();

  // Fallback data for products
  const fallbackProducts = [
    {
      product_icon: "Database",
      product_title: "Headless Content Management",
      product_description: "API-first content management that's flexible, scalable, and native to the cloud.",
      product_features: "Visual Builder, Timeline Management, Modular Blocks, Workflows"
    },
    {
      product_icon: "Zap",
      product_title: "Real-time Data and Insights",
      product_description: "Unify customer data from multiple sources with real-time activation and insights.",
      product_features: "Identity Resolution, Advanced Segmentation, Predictive Analytics, Data Unification"
    },
    {
      product_icon: "Brain",
      product_title: "Omnichannel Personalization", 
      product_description: "Deliver personalized experiences across every channel and touchpoint.",
      product_features: "Dynamic Content, A/B Testing, Audience Targeting, Real-time Optimization"
    },
    {
      product_icon: "Users",
      product_title: "Agents & Automations",
      product_description: "Intelligent agents that combine reasoning, context, and tools to accelerate work.",
      product_features: "Workflow Automation, Content Generation, Smart Routing, Task Intelligence"
    },
    {
      product_icon: "Server",
      product_title: "Front-end Hosting",
      product_description: "Fully integrated, automated, MACH-compliant hosting that works for you.",
      product_features: "Instant Deployments, Global CDN, Edge Functions, Auto Scaling"
    }
  ];

  // Fallback data for roles
  const fallbackRoles = [
    {
      role_icon: "Code",
      role_title: "Developer & IT",
      role_description: "API-first architecture with developer-friendly tools and extensive documentation",
      role_benefits: "GraphQL & REST APIs, SDK Support, Headless Architecture, DevOps Integration"
    },
    {
      role_icon: "Users",
      role_title: "Business Users",
      role_description: "Intuitive interface for content creators and marketers to work efficiently",
      role_benefits: "Visual Editor, Collaboration Tools, Content Scheduling, Preview & Publish"
    },
    {
      role_icon: "Brain",
      role_title: "Digital Leaders",
      role_description: "Strategic insights and governance tools for enterprise-scale content operations",
      role_benefits: "Analytics Dashboard, Performance Metrics, ROI Tracking, Compliance Tools"
    }
  ];

  // Use CMS data or fallback
  const products = cmsProducts || fallbackProducts;
  const roles = cmsRoles || fallbackRoles;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Dynamic Hero Section */}
      <Hero pageSlug="features" />

      {/* Core Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Core Products</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated suite of tools empowers teams to work faster, smarter, and more efficiently than ever before.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = getIconComponent(product.product_icon);
              const features = product.product_features.split(', ');
              
              return (
                <Card key={product.uid || index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.product_title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {product.product_description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                          {feature.trim()}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Built for Everyone</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Designed for every role on your team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a developer, content creator, or digital leader, our platform adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const IconComponent = getIconComponent(role.role_icon);
              const benefits = role.role_benefits.split(', ');
              
              return (
                <Card key={role.uid || index} className="text-center group hover:shadow-card transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{role.role_title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.role_description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                          {benefit.trim()}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Using CMS Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why teams choose Content King
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cmsStats && cmsStats.length > 0 ? (
              cmsStats.slice(0, 4).map((stat, index) => (
                <div key={stat.uid || index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.stat_value}{stat.stat_suffix}
                  </div>
                  <div className="text-muted-foreground">{stat.stat_label}</div>
                </div>
              ))
            ) : (
              // Fallback static stats
              <>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">80%</div>
                  <div className="text-muted-foreground">Faster content publishing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">90%</div>
                  <div className="text-muted-foreground">Faster time to publish</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-muted-foreground">Reduction in development costs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-muted-foreground">Platform uptime</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your content workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already made the switch to faster, more flexible content management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;