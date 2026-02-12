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
                <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Our Story</h2>
                <p className="text-lg text-text-light leading-relaxed">
                  Shantiraj Foundation represents a vision of a new India, where education, equality, responsibility, and compassion guide progress. We are a youth-driven social organization committed to building a world where everyone moves forward—together. Our work focuses on education, women empowerment, environmental protection, and holistic community development, all driven by a passionate team and a growing network of volunteers.
                </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal width="100%">
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Vision</h3>
                    <p className="text-text-light leading-relaxed">
                      To establish multiple branches across India and globally, creating a new world where people support each other, share knowledge, and grow together.
                    </p>
                </div>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <h3 className="text-2xl font-bold text-secondary mb-4 font-heading">Our Mission</h3>
                    <p className="text-text-light leading-relaxed">
                      To create meaningful, sustainable change through a low-cost, high-impact model that emphasizes transparent operations, youth & women-led leadership, and an unwavering commitment to safety and discipline.
                    </p>
                </div>
            </Reveal>
          </div>
          <Reveal width="100%">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-2">Respect & Discipline</h3>
                  <p className="text-text-light">Respect for women, children & culture, with mandatory discipline & punctuality.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-2">Safety Commitment</h3>
                  <p className="text-text-light">Child safety policy, women safety policy, and emergency preparedness.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-2">Transparent Operations</h3>
                  <p className="text-text-light">Full-time on-ground coordination, regular reporting & documentation.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Leadership Team</h2>
              <p className="text-lg text-text-light leading-relaxed mb-4">
                A growing team of committed members and volunteers working together to build impact at the grassroots level.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-secondary mb-1">Vinit Singh Siddharth</h3>
                  <p className="text-text-light">Founder</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-secondary mb-1">Abhishek Singh</h3>
                  <p className="text-text-light">Director</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-secondary mb-1">Rakesh Chappy</h3>
                  <p className="text-text-light">Director</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal width="100%">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Growth Vision & Expansion Plan</h2>
                <p className="text-lg text-text-light leading-relaxed">
                  The goal is not scale alone — the goal is meaningful change. Shantiraj Foundation aims to establish multiple branches across India and globally, creating a new world where people support each other, share knowledge, and grow together. Our expansion strategy focuses on community-based centers, a low-cost, high-impact model, and fostering youth & women-led leadership.
                </p>
            </div>
          </Reveal>

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
