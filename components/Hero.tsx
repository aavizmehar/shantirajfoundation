import React from 'react';
import { heroContent } from '@/data/mockData';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/heroimg.jpg" 
          alt="Shantiraj Foundation Work" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight animate-fade-in-up drop-shadow-lg">
          {heroContent.title}
        </h1>

        {/* Subline */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl font-medium tracking-wider uppercase opacity-90 animate-fade-in-up delay-100">
          {heroContent.subtitle}
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center animate-fade-in-up delay-200">
          <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto">
            {heroContent.ctaPrimary}
          </Button>
          <Button variant="outline-white" className="text-lg px-8 py-4 w-full sm:w-auto">
            {heroContent.ctaSecondary}
          </Button>
          <Button variant="glass" className="text-lg px-8 py-4 w-full sm:w-auto">
             {heroContent.ctaTertiary}
          </Button>
        </div>

        {/* Side Badge (Absolute Positioned) */}
        <div className="absolute bottom-10 right-4 md:right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg max-w-[200px] text-left hidden md:block animate-fade-in-right">
            <div className="text-primary font-bold text-lg mb-1">Kasol HQ</div>
            <p className="text-xs text-gray-300 leading-relaxed font-mono">
                {heroContent.badge}
            </p>
        </div>
      </div>

    </div>
  );
};