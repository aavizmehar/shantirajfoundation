import React from 'react';
import { Button } from './ui/Button';
import { FaHome, FaClock, FaUtensils } from 'react-icons/fa';

export const FreeStay = () => {
  return (
    <section id="free-stay" className="bg-primary/5 py-20 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-12 max-w-4xl mx-auto leading-tight">
          India’s First <span className="text-primary">Free Stay Program</span> for Changemakers
        </h2>

        {/* 3-Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaHome />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Stay Free</h3>
            <p className="text-text-light">Zero accommodation cost for volunteers in our scenic Kasol campus.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaClock />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Contribute</h3>
            <p className="text-text-light"> dedicate just <strong>4 Hours Daily</strong> to our community projects.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaUtensils />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Food</h3>
            <p className="text-text-light">Healthy, home-cooked meals available at a subsidized cost of <strong>₹350/day</strong>.</p>
          </div>

        </div>

        {/* Info Card & CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-primary/20 rounded-full py-3 px-6 inline-block mb-8 shadow-sm">
            <span className="font-semibold text-secondary">Slots:</span> <span className="text-primary font-bold">15 per batch</span> 
            <span className="mx-3 text-gray-300">|</span> 
            <span className="font-semibold text-secondary">Programs:</span> <span className="text-text-light">7 / 11 / 21 Days</span>
          </div>
          
          <div>
            <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40">
              Apply Now
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
