import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero / Header */}
      <section className="pt-32 pb-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img src="/heroimg.jpg" alt="About Us" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal width="100%">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About Us</h1>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <Section className="py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <Reveal width="100%">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Who We Are</h2>
                <p className="text-lg text-text-light leading-relaxed">
                  Shantiraj Foundation is a youth-driven social organization working in education, women empowerment, environment protection and community development.
                </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal width="100%">
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Vision</h3>
                    <p className="text-text-light leading-relaxed">
                      To build a strong network of socially aware youth and empowered women across India.
                    </p>
                </div>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Mission</h3>
                    <p className="text-text-light leading-relaxed">
                      To create sustainable change through education, skill-building, cleanliness, health awareness and volunteer engagement.
                    </p>
                </div>
            </Reveal>
          </div>

          <Reveal width="100%">
            <div className="bg-secondary text-white p-10 md:p-14 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">Why Shantiraj</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Because real change starts with people, not just donations.
                </p>
            </div>
          </Reveal>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
