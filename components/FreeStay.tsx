import React from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';
import { FaUtensils, FaCertificate, FaHeart } from 'react-icons/fa';

export const FreeStay = () => {
  return (
    <section id="free-stay" className="bg-primary/5 py-20 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4 max-w-4xl mx-auto leading-tight">
          Impact Stay
        </h2>
        <p className="text-lg md:text-xl text-primary font-semibold mb-12">FREE Impact Stay (In Exchange for Social Work)</p>

        {/* 3-Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaUtensils />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Stay & Food</h3>
            <p className="text-text-light">We provide free accommodation and food for our volunteers.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaCertificate />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Certificate</h3>
            <p className="text-text-light">Get a certificate of completion for your valuable contribution.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaHeart />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Meaningful Experience</h3>
            <p className="text-text-light">Gain a life-changing experience by serving the community.</p>
          </div>

        </div>

        {/* Info Card & CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-primary/20 rounded-full py-3 px-6 inline-block mb-8 shadow-sm">
            <span className="font-semibold text-secondary">Durations:</span> <span className="text-text-light">1 Day • 7 Days • 11 Days • 21 Days</span>
          </div>
          
          <div>
            <Link href="/free-stay">
              <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40">
                View Program Details
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
