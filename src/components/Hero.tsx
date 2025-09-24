import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useHeroSectionBySlug } from "@/hooks/useContentstack";
import { Skeleton } from "@/components/ui/skeleton";
import heroImage from "@/assets/hero-image.webp";

interface HeroProps {
  pageSlug: string;
}

const Hero = ({ pageSlug }: HeroProps) => {
  const { data: heroContent, isLoading: loading, error } = useHeroSectionBySlug(pageSlug);
  
  // Debug logging
  console.log(`🦸 Hero Component Debug for ${pageSlug}:`, { 
    loading, 
    error: error?.message, 
    heroContent: !!heroContent, 
    heroContentUid: heroContent?.uid 
  });


  // Loading state
  if (loading) {
    return (
      <section className="bg-gradient-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Skeleton className="h-16 w-full mb-6 bg-white/20" />
              <Skeleton className="h-8 w-3/4 mb-4 bg-white/20" />
              <Skeleton className="h-24 w-full mb-8 bg-white/20" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 w-40 bg-white/20" />
                <Skeleton className="h-12 w-32 bg-white/20" />
              </div>
            </div>
            <div className="relative group">
              <Skeleton className="h-80 w-full rounded-lg bg-white/20" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback content if CMS data not available
  const defaultHeroContent = {
    hero_title: "Build Digital Experiences That Scale Infinitely",
    hero_subtitle: "The Future of Content Management",
    hero_description: "The headless CMS that empowers teams to create, manage, and deliver content across any platform with unmatched speed and flexibility. Transform your digital presence today.",
    primary_cta: {
      text: "Start Free Trial",
      url: "/signup",
      is_external: false
    },
    secondary_cta: {
      text: "Watch Demo",
      url: "https://www.youtube.com/watch?v=demo",
      is_external: true
    },
    background_style: "gradient_primary"
  };

  const heroData = heroContent || defaultHeroContent;

  // Determine background style
  const getBackgroundClass = () => {
    switch (heroData.background_style) {
      case 'gradient_secondary':
        return 'bg-gradient-secondary';
      case 'solid_background':
        return 'bg-background';
      default:
        return 'bg-gradient-primary';
    }
  };

  const textColorClass = heroData.background_style === 'solid_background' 
    ? 'text-foreground' 
    : 'text-white';

  // Check if this should be centered layout (Features page style)
  const isCenteredLayout = heroData.layout_style === 'centered_text';

  return (
    <section className={`${getBackgroundClass()} ${textColorClass} py-20 relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {isCenteredLayout ? (
          // Centered layout for Features page
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              data-cslp={heroContent ? `${heroContent.uid}.hero_title` : undefined}
            >
              {heroData.hero_title.split(' ').slice(0, -2).join(' ')}
              <span className={`block bg-gradient-to-r ${
                heroData.background_style === 'solid_background' 
                  ? 'from-primary to-accent' 
                  : 'from-white to-white/80'
              } bg-clip-text text-transparent`}>
                {heroData.hero_title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            {heroData.hero_subtitle && (
              <h2 className={`text-2xl mb-4 ${
                heroData.background_style === 'solid_background' 
                  ? 'text-muted-foreground' 
                  : 'text-white/90'
              }`}>
                {heroData.hero_subtitle}
              </h2>
            )}
            <p className={`text-xl mb-8 leading-relaxed ${
              heroData.background_style === 'solid_background' 
                ? 'text-muted-foreground' 
                : 'text-white/90'
            }`}>
              {heroData.hero_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {heroData.primary_cta && (
                <Button 
                  variant={heroData.background_style === 'solid_background' ? "default" : "hero-outline"} 
                  size="lg" 
                  className="group" 
                  asChild
                >
                  {heroData.primary_cta.is_external ? (
                    <a 
                      href={heroData.primary_cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {heroData.primary_cta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link to={heroData.primary_cta.url}>
                      {heroData.primary_cta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </Button>
              )}
              {heroData.secondary_cta && heroData.secondary_cta.text && (
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className={`${
                    heroData.background_style === 'solid_background' 
                      ? 'border-border hover:bg-accent' 
                      : 'text-white border-white/20 hover:bg-white/10'
                  }`}
                  asChild
                >
                  {heroData.secondary_cta.is_external ? (
                    <a 
                      href={heroData.secondary_cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      {heroData.secondary_cta.text}
                    </a>
                  ) : (
                    <Link to={heroData.secondary_cta.url}>
                      <Play className="mr-2 h-5 w-5" />
                      {heroData.secondary_cta.text}
                    </Link>
                  )}
                </Button>
              )}
            </div>
          </div>
        ) : (
          // Two-column layout for Home page  
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={textColorClass}>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heroData.hero_title.split(' ').slice(0, -2).join(' ')}
              <span className={`block bg-gradient-to-r ${
                heroData.background_style === 'solid_background' 
                  ? 'from-primary to-accent' 
                  : 'from-white to-white/80'
              } bg-clip-text text-transparent`}>
                {heroData.hero_title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>
            {heroData.hero_subtitle && (
              <h2 className={`text-2xl mb-4 ${
                heroData.background_style === 'solid_background' 
                  ? 'text-muted-foreground' 
                  : 'text-white/90'
              }`}>
                {heroData.hero_subtitle}
              </h2>
            )}
            <p className={`text-xl mb-8 leading-relaxed ${
              heroData.background_style === 'solid_background' 
                ? 'text-muted-foreground' 
                : 'text-white/90'
            }`}>
              {heroData.hero_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {heroData.primary_cta && (
                <Button 
                  variant={heroData.background_style === 'solid_background' ? "default" : "hero-outline"} 
                  size="lg" 
                  className="group" 
                  asChild
                >
                  {heroData.primary_cta.is_external ? (
                    <a 
                      href={heroData.primary_cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {heroData.primary_cta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link to={heroData.primary_cta.url}>
                      {heroData.primary_cta.text}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </Button>
              )}
              {heroData.secondary_cta && heroData.secondary_cta.text && (
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className={`${
                    heroData.background_style === 'solid_background' 
                      ? 'border-border hover:bg-accent' 
                      : 'text-white border-white/20 hover:bg-white/10'
                  }`}
                  asChild
                >
                  {heroData.secondary_cta.is_external ? (
                    <a 
                      href={heroData.secondary_cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      {heroData.secondary_cta.text}
                    </a>
                  ) : (
                    <Link to={heroData.secondary_cta.url}>
                      <Play className="mr-2 h-5 w-5" />
                      {heroData.secondary_cta.text}
                    </Link>
                  )}
                </Button>
              )}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 transform rotate-3 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105">
              <img
                src={heroData.hero_image?.url || heroImage}
                alt={heroData.hero_image?.title || "Hero Image"}
                className="rounded-lg shadow-2xl w-full h-auto transition-shadow duration-500 group-hover:shadow-3xl"
                style={{ aspectRatio: "16/10" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg transform rotate-3 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"></div>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
