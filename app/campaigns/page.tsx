import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { eventsData } from '@/data/eventsData';

export default function Campaigns() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Campaigns</h1>
          <p className="text-xl text-gray-400">Driving change through active, on-ground initiatives.</p>
        </div>
      </section>
      
      <Section className="py-20">
        <div className="space-y-16">
            <div>
                <h2 className="text-3xl font-bold text-secondary mb-8 border-l-4 border-primary pl-4">Active Campaigns</h2>
                <div className="grid md:grid-cols-2 gap-8">
                     {/* Using eventsData as placeholder for campaigns since they are similar in structure for now */}
                     {eventsData.map((campaign) => (
                         <div key={campaign.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                             <h3 className="text-xl font-bold text-secondary mb-2">{campaign.title}</h3>
                             <p className="text-text-light mb-4">{campaign.description}</p>
                             <span className="text-sm font-semibold text-primary">Status: Active</span>
                         </div>
                     ))}
                </div>
            </div>
            
             <div>
                <h2 className="text-3xl font-bold text-secondary mb-8 border-l-4 border-gray-300 pl-4">Upcoming Campaigns (2025-26)</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    <li className="bg-gray-50 p-4 rounded-lg">Kullu Free Library Project</li>
                    <li className="bg-gray-50 p-4 rounded-lg">Shimla Community Development</li>
                    <li className="bg-gray-50 p-4 rounded-lg">Kashmir Peace & Youth Support</li>
                    <li className="bg-gray-50 p-4 rounded-lg">Darjeeling Student Growth Drive</li>
                </ul>
            </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
