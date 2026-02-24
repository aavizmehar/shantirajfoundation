import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: 'white' | 'gray' | 'primary';
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  bgColor = 'white'
}) => {
  const bgMap = {
    white: 'bg-surface',
    gray: 'bg-background',
    primary: 'bg-primary'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgMap[bgColor]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};





/* ============================= */
/* Section Heading Component */
/* ============================= */

const headingColorVariants = {
  dark: {
    title: 'text-secondary',
    subtitle: 'text-text-light',
    divider: 'bg-primary'
  },
  white: {
    title: 'text-white',
    subtitle: 'text-white/80',
    divider: 'bg-white'
  }
};

type HeadingColor = keyof typeof headingColorVariants;

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  color?: HeadingColor;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  color = 'dark'
}) => {
  const styles = headingColorVariants[color];

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block ${styles.title}`}>
        {title}
        <span
          className={`block h-1 w-1/2 mt-2 mx-auto rounded-full opacity-80 ${styles.divider}`}
        ></span>
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto mt-4 ${styles.subtitle}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};