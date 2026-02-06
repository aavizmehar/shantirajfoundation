import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export const DonationCTA = () => {
  return (
    <section id="join-us" className="relative py-24 overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/view-hands-holding-red-heart-represent-affection.jpg" 
          alt="Community and love" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            Be part of the change.
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed mx-auto">
            Join Shantiraj Foundation today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/volunteer">
              <Button variant="primary" className="text-lg px-10 py-4 shadow-2xl shadow-primary/40">
                Join as Volunteer
              </Button>
            </Link>
            <Link href="/partner">
              <Button variant="outline-white" className="text-lg px-8 py-4">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
