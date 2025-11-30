import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useFeatureCards } from "@/hooks/useContentstack";
import { Skeleton } from "@/components/ui/skeleton";
import { onEntryChange } from "@/lib/livePreview";
import * as LucideIcons from "lucide-react";

const CONTENT_TYPE = 'feature_card';
const LOCALE = 'en-us';

const getIconComponent = (iconName: string): LucideIcon => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon;
  return IconComponent || LucideIcons.Zap;
};

interface FeaturesProps {
  category?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

const Features = ({ 
  category = "home_features", 
  sectionTitle = "Powerful Features for Modern Teams",
  sectionDescription = "Everything you need to create, manage, and deliver exceptional digital experiences at enterprise scale."
}: FeaturesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: cmsFeatures, isLoading: loading, refetch } = useFeatureCards(category);
  
  useEffect(() => {
    onEntryChange(() => refetch());
  }, [refetch]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const cslp = (uid: string | undefined, field: string) => 
    uid ? `${CONTENT_TYPE}.${uid}.${LOCALE}.${field}` : undefined;

  const fallbackFeatures = [
    { feature_icon: "Zap", feature_title: "Lightning Fast", feature_description: "Deliver content at blazing speeds with our global CDN." },
    { feature_icon: "Shield", feature_title: "Enterprise Security", feature_description: "Bank-level security with SOC 2 compliance." },
    { feature_icon: "Globe", feature_title: "Global Scale", feature_description: "Built for global deployment with multi-region support." },
    { feature_icon: "Code", feature_title: "Developer First", feature_description: "Rich APIs, webhooks, and SDKs for every platform." },
    { feature_icon: "Users", feature_title: "Team Collaboration", feature_description: "Advanced workflows and role-based permissions." },
    { feature_icon: "BarChart3", feature_title: "Analytics & Insights", feature_description: "Deep insights into content performance." }
  ];

  const features = cmsFeatures || fallbackFeatures;

  if (loading) {
    return (
      <section id="features" className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-[600px] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <Skeleton className="h-8 w-8 mb-4" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-16 w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{sectionTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{sectionDescription}</p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {features.map((feature, index) => {
            const IconComponent = getIconComponent(feature.feature_icon);
            
            return (
              <Card key={feature.uid || index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors" data-cslp={cslp(feature.uid, 'feature_title')}>
                    {feature.feature_title}
                  </CardTitle>
                  <CardDescription className="text-base" data-cslp={cslp(feature.uid, 'feature_description')}>
                    {feature.feature_description}
                  </CardDescription>
                </CardHeader>
                {feature.feature_url && (
                  <CardContent>
                    <a href={feature.feature_url} className="text-primary hover:text-primary/80 text-sm font-medium" data-cslp={cslp(feature.uid, 'feature_url')}>
                      Learn more →
                    </a>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
