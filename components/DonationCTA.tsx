import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export const DonationCTA = () => {
  return (
    <section id="donate" className="relative py-24 overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080/eaad3d/FFFFFF?text=Helping+Hands+Warmth" 
          alt="Emotional support" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Your Contribution <span className="text-primary">Shapes Someone’s Future.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
            Join us in our mission to empower lives. Every contribution, no matter the size, helps us provide education, healthcare, and hope to those who need it most.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/donate">
              <Button variant="primary" className="text-lg px-10 py-4 shadow-2xl shadow-primary/40">
                Donate Now
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline-white" className="text-lg px-8 py-4">
                Sponsor a Child
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="glass" className="text-lg px-8 py-4">
                Support Women Training
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 text-white/70 text-sm font-medium">
            <div className="flex items-center">
              <span className="text-primary mr-2">✓</span> 80G Tax Exempted
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-2">✓</span> 100% Transparency
            </div>
            <div className="flex items-center">
              <span className="text-primary mr-2">✓</span> Secure Payment
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 transform translate-x-1/2"></div>
    </section>
  );
};
