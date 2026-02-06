import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaUsers, FaLeaf, FaExchangeAlt, FaFire } from 'react-icons/fa';
import { Reveal } from '@/components/ui/Reveal';

export default function ImpactStay() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-secondary text-white relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <img 
                src="/young-friends-top-mountain-enjoying-mesmerizing-view.jpg" 
                alt="Impact Stay in Kasol" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
         </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal width="100%">
             <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                Impact Stay
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                1 Day • 1 Night Social Experience
             </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">What You'll Experience</h2>
                </Reveal>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <ActivityCard icon={<FaUsers />} title="Work with kids & community" />
                    <ActivityCard icon={<FaLeaf />} title="Clean & green activities" />
                    <ActivityCard icon={<FaExchangeAlt />} title="Cultural exchange" />
                    <ActivityCard icon={<FaFire />} title="Campfire & reflection" />
                </div>
            </div>

            <Reveal width="100%">
                <div className="text-center bg-gradient-to-r from-primary/10 to-yellow-100/50 p-12 rounded-3xl border border-primary/10">
                    <p className="text-2xl font-bold text-secondary mb-4">"Not a hotel. A social experience."</p>
                    <p className="text-text-light mb-8 max-w-xl mx-auto text-lg">
                        This is an opportunity to connect, contribute, and create memories.
                    </p>
                    <a href="https://wa.me/919816636450" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:scale-105 transition-transform">
                            Book Your Stay
                        </Button>
                    </a>
                </div>
            </Reveal>

        </div>
      </Section>

      <Footer />
    </main>
  );
}

const ActivityCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <Reveal width="100%">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl text-primary mb-6">
                {icon}
            </div>
            <h3 className="font-bold text-xl text-secondary">{title}</h3>
        </div>
    </Reveal>
);
