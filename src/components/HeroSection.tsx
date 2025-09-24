import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const HeroSection = () => {
  return (
    <section className="bg-gradient-primary text-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Digital Experiences That
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Scale Infinitely
              </span>
            </h1>
            <h2 className="text-2xl text-white/90 mb-4">The Future of Content Management</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              The headless CMS that empowers teams to create, manage, and deliver content across any platform with unmatched speed and flexibility. Transform your digital presence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero-outline" size="lg" className="group" asChild>
                <a href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 transform rotate-3 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105">
              <img
                src={heroImage}
                alt="Content Management Dashboard"
                className="rounded-lg shadow-2xl w-full h-auto transition-shadow duration-500 group-hover:shadow-3xl"
                style={{ aspectRatio: "16/10" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg transform rotate-3 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
