import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FaHandshake, FaBuilding, FaPiggyBank, FaUserTie } from 'react-icons/fa';

export default function Partner() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-secondary text-white relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
                src="/testhero.jpg" 
                alt="Partnership" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-secondary/70"></div>
         </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal width="100%">
             <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                Partner With Us
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Collaboration is at the heart of our success. Join hands with Shantiraj Foundation to amplify social impact.
             </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-24">
        <div className="max-w-5xl mx-auto">
            
            <div className="text-center mb-16">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">Who We Partner With</h2>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <PartnerCard icon={<FaBuilding />} title="Institutions & Organizations" />
                    <PartnerCard icon={<FaUserTie />} title="Supporters & Leaders" />
                    <PartnerCard icon={<FaHandshake />} title="CSR & Social Investors" />
                    <PartnerCard icon={<FaPiggyBank />} title="Community Leaders" />
                </div>
            </div>

            <Reveal width="100%">
                <div className="bg-white rounded-3xl p-10 md:p-16 mb-16 shadow-2xl border border-gray-100">
                    <h3 className="text-3xl font-bold text-secondary mb-8 text-center font-heading">How You Can Support</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <SupportItem title="Space & Infrastructure" description="Provide space and help us build & equip our facilities." />
                        <SupportItem title="Program Development" description="Contribute to the creation and enhancement of our programs." />
                        <SupportItem title="Expansion & Mentorship" description="Fuel our growth to reach more communities and guide our leaders." />
                    </div>
                </div>
            </Reveal>

            <Reveal width="100%">
                <div className="text-center bg-gradient-to-r from-primary/10 to-yellow-100/50 p-12 rounded-3xl border border-primary/10">
                    <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Let’s build impact together.</h2>
                    <a href="mailto:info@shantirajfoundation.org">
                        <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:scale-105 transition-transform">
                            Contact Us
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

const PartnerCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
        <div className="text-4xl text-primary mx-auto mb-4 inline-block">{icon}</div>
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
    </div>
);

const SupportItem = ({ title, description }: { title: string, description: string }) => (
    <div>
        <h4 className="text-2xl font-bold text-secondary mb-2">{title}</h4>
        <p className="text-text-light">{description}</p>
    </div>
);
