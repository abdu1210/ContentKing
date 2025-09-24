import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero pageSlug="home" />
      <Features 
        category="home_features"
        sectionTitle="Powerful Features for Modern Teams"
        sectionDescription="Everything you need to create, manage, and deliver exceptional digital experiences at enterprise scale."
      />
      <Stats 
        category="home_stats"
        sectionTitle="Trusted by Teams Worldwide"
        sectionDescription="Join thousands of companies already using our platform to power their digital experiences."
        backgroundClass="bg-gradient-to-br from-primary to-accent text-white"
        textColor="text-white"
      />
      <Footer />
    </div>
  );
};

export default Index;