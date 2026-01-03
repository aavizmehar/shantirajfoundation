import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Branches as BranchesMap } from '@/components/Branches';

export default function Branches() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-16 bg-white text-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Branches</h1>
          <p className="text-xl text-text-light">Expanding our footprint to serve communities across India.</p>
        </div>
      </section>

      {/* Reuse the interactive map component */}
      <BranchesMap />

      <Section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">2026 Expansion Plan</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-primary mb-4">North India</h3>
                      <ul className="space-y-2 text-text-light">
                          <li>• Kashmir</li>
                          <li>• Darjeeling</li>
                          <li>• Rishikesh</li>
                      </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-primary mb-4">Uttar Pradesh</h3>
                      <ul className="space-y-2 text-text-light">
                          <li>• Farrukhabad</li>
                          <li>• Varanasi</li>
                          <li>• Kanpur</li>
                          <li>• Shahjahanpur</li>
                      </ul>
                  </div>
              </div>
          </div>
      </Section>

      <Footer />
    </main>
  );
}
