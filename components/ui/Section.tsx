import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  bgColor = 'white' 
}) => {
  const bgClass = bgColor === 'white' ? 'bg-surface' : 'bg-background';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionHeading: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 relative inline-block">
      {title}
      <span className="block h-1 w-1/2 bg-primary mt-2 mx-auto rounded-full opacity-80"></span>
    </h2>
    {subtitle && <p className="text-lg text-text-light max-w-2xl mx-auto mt-4">{subtitle}</p>}
  </div>
);
