import { useState, useEffect } from "react";

// Simple animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(Math.min(count + Math.ceil(value / 50), value));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [count, value]);

  return (
    <span>
      {value < 1 ? value.toFixed(2) : count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      label: "API Uptime",
      value: 99.90,
      suffix: "%",
      description: "Enterprise-grade reliability you can trust"
    },
    {
      label: "API Requests Served",
      value: 10,
      suffix: "M+",
      description: "Handling massive scale with reliability"
    },
    {
      label: "Countries Served",
      value: 500,
      suffix: "+",
      description: "Global reach with local performance"
    },
    {
      label: "Expert Support",
      value: 24,
      suffix: "/7",
      description: "Always here when you need us most"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of companies already using our platform to power their digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {isVisible ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-lg font-semibold mb-2 text-white/90">
                {stat.label}
              </div>
              <div className="text-sm text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
