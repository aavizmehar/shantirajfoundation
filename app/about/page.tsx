import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FaQuoteLeft } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero / Header */}
      <section className="pt-32 pb-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/1a1a1a/222222?text=Pattern')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal width="100%">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Our Essence</span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Honoring a legacy of compassion. Building a future of opportunity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <Section className="py-24">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Our Story */}
          <Reveal width="100%">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 relative">
                <FaQuoteLeft className="text-6xl text-primary/10 absolute top-8 left-8" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Our Story</h2>
                    <p className="text-lg text-text-light leading-relaxed">
                    Shantiraj Foundation was founded in memory of <strong>Shanti Singh</strong>, a woman who dedicated her life to kindness, community service, and education. To honor her legacy, Abhishek Singh created this foundation with a dream to impact millions of lives. Beginning our journey in Kasol — Himachal Pradesh, we aim to build India’s strongest grassroots community network.
                    </p>
                </div>
            </div>
          </Reveal>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal width="100%">
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">🚀</div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Mission</h3>
                    <p className="text-text-light leading-relaxed">
                        To uplift communities through education, empowerment, social awareness, and sustainable support programs.
                    </p>
                </div>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
                <div className="bg-secondary p-10 rounded-2xl border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full text-white">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-2xl mb-6">👁️</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-heading">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                        By 2026, Shantiraj Foundation aims to establish <strong>10 active branches</strong> across India, focused on education, women empowerment, and youth development.
                    </p>
                </div>
            </Reveal>
          </div>

          {/* Founders */}
          <Reveal width="100%">
            <div>
                <h2 className="text-3xl font-bold text-secondary mb-8 font-heading text-center">Leadership</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto flex flex-col md:flex-row gap-8 items-center hover:shadow-xl transition-shadow duration-300">
                    <div className="w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex-shrink-0 border-4 border-white shadow-md"></div> 
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-secondary">Abhishek Singh</h3>
                        <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">Founder</p>
                        <p className="text-text-light italic">"Visionary, educator, and social entrepreneur committed to shaping India’s future."</p>
                    </div>
                </div>
            </div>
          </Reveal>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
