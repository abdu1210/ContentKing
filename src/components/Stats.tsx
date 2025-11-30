import { useState, useEffect } from "react";
import { useStatistics } from "@/hooks/useContentstack";
import { Skeleton } from "@/components/ui/skeleton";
import { onEntryChange } from "@/lib/livePreview";

const CONTENT_TYPE = 'statistic';
const LOCALE = 'en-us';

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < numericValue) {
        setCount(Math.min(count + Math.ceil(numericValue / 50), numericValue));
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [count, numericValue]);

  return (
    <span>
      {numericValue < 1 ? numericValue.toFixed(2) : count.toLocaleString()}
      {suffix}
    </span>
  );
};

interface StatsProps {
  category?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  backgroundClass?: string;
  textColor?: string;
}

const Stats = ({ 
  category = "home_stats",
  sectionTitle = "Trusted by Teams Worldwide",
  sectionDescription = "Join thousands of companies already using our platform.",
  backgroundClass = "bg-gradient-to-br from-primary to-accent text-white",
  textColor = "text-white"
}: StatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: cmsStats, isLoading: loading, refetch } = useStatistics(category);
  
  useEffect(() => {
    onEntryChange(() => refetch());
  }, [refetch]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const cslp = (uid: string | undefined, field: string) => 
    uid ? `${CONTENT_TYPE}.${uid}.${LOCALE}.${field}` : undefined;

  const fallbackStats = [
    { stat_label: "API Uptime", stat_value: "99.90", stat_suffix: "%", stat_description: "Enterprise-grade reliability" },
    { stat_label: "API Requests", stat_value: "10", stat_suffix: "M+", stat_description: "Massive scale handling" },
    { stat_label: "Countries", stat_value: "500", stat_suffix: "+", stat_description: "Global reach" },
    { stat_label: "Support", stat_value: "24", stat_suffix: "/7", stat_description: "Always available" }
  ];

  const stats = cmsStats || fallbackStats;

  if (loading) {
    return (
      <section className={`py-20 ${backgroundClass}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-10 w-80 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-white/20" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="h-12 w-24 mx-auto mb-2 bg-white/20" />
                <Skeleton className="h-6 w-32 mx-auto bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{sectionTitle}</h2>
          <p className={`text-xl max-w-3xl mx-auto ${textColor === 'text-white' ? 'text-white/90' : 'text-muted-foreground'}`}>
            {sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.uid || index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2" data-cslp={cslp(stat.uid, 'stat_value')}>
                {isVisible ? <AnimatedCounter value={stat.stat_value} suffix={stat.stat_suffix} /> : "0"}
              </div>
              <div className={`text-lg font-semibold mb-2 ${textColor === 'text-white' ? 'text-white/90' : 'text-foreground'}`} data-cslp={cslp(stat.uid, 'stat_label')}>
                {stat.stat_label}
              </div>
              <div className={`text-sm ${textColor === 'text-white' ? 'text-white/70' : 'text-muted-foreground'}`} data-cslp={cslp(stat.uid, 'stat_description')}>
                {stat.stat_description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
