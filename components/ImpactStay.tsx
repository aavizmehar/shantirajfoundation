import React from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';
import { FaHandsHelping, FaGlobe, FaLightbulb } from 'react-icons/fa';

export const ImpactStay = () => {
  return (
    <section id="free-stay" className="bg-primary/5 py-20 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4 max-w-4xl mx-auto leading-tight">
          Our Social Impact & Volunteer Programs
        </h2>
        <p className="text-lg md:text-xl text-primary font-semibold mb-12">Engage, Serve, and Transform Lives with Shantiraj Foundation</p>

        {/* 3-Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Community Development</h3>
            <p className="text-text-light">Participate in projects that directly uplift local communities and foster sustainable growth.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaGlobe />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Environmental Initiatives</h3>
            <p className="text-text-light">Contribute to cleanliness drives, conservation efforts, and environmental awareness campaigns.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(234,173,61,0.15)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-5xl mb-6 text-primary/80 group-hover:text-primary transition-colors flex justify-center">
                <FaLightbulb />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Education & Empowerment</h3>
            <p className="text-text-light">Support educational programs and women empowerment workshops that create lasting change.</p>
          </div>

        </div>

        {/* Volunteer Exchange Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-secondary mb-4 font-heading">Volunteer Exchange Program</h3>
            <p className="text-text-light mb-6 leading-relaxed">
              Our unique Volunteer Exchange Program allows you to contribute to meaningful social work while experiencing the local culture. Stay with us, serve the community, and earn a certificate of social impact.
            </p>
            <ul className="list-disc list-inside text-text-light text-left mx-auto max-w-md mb-8">
                <li className="mb-2">1 Day Impact Stay: Get a glimpse into our daily activities and make a quick impact.</li>
                <li className="mb-2">7 / 11 / 21 Day Volunteer Programs: Immerse yourself in a more in-depth volunteering experience.</li>
                <li>No travel/hotel vibes – purely social impact focused.</li>
            </ul>

            {/* Info Card & CTA */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-full py-3 px-6 inline-block mb-8 shadow-sm">
                <span className="font-semibold text-secondary">Program Durations:</span> <span className="text-text-light">Flexible options available</span>
              </div>
              
              <div>
                <Link href="/volunteer">
                  <Button variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40">
                    Apply for Volunteer Program
                  </Button>
                </Link>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};
