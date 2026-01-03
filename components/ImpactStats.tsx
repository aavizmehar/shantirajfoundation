"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FaGraduationCap, FaHandsHelping, FaRocket, FaLeaf, FaUtensils, FaUsers } from 'react-icons/fa';

const stats = [
  { label: "Students Supported", value: 1200, icon: <FaGraduationCap /> },
  { label: "Women Skilled", value: 450, icon: <FaHandsHelping /> },
  { label: "Youth Empowered", value: 800, icon: <FaRocket /> },
  { label: "Clean-Ups Completed", value: 120, icon: <FaLeaf /> },
  { label: "Meals Served", value: 15000, icon: <FaUtensils /> },
  { label: "Volunteers Joined", value: 500, icon: <FaUsers /> },
];

export const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary py-20 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Impact So Far</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every number represents a life touched, a community uplifted, and a step towards a better future.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group">
              <div className="text-4xl mb-4 text-primary/80 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
                {isVisible ? <CountUp end={stat.value} duration={2000} /> : '0'}
                <span>+</span>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-200 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple CountUp Component
const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuad = (t: number) => t * (2 - t);
      
      setCount(Math.floor(easeOutQuad(percentage) * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};
