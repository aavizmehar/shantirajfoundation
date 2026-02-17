import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { programsData } from '@/data/programsData';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';

export default function Programs() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal width="100%">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Programs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We believe in a holistic approach to development. Our initiatives cover education, health, empowerment, and environment to create lasting change.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-24">
        <div className="space-y-32">
            {programsData.map((program, index) => {
                const id = program.link.includes('#') ? program.link.split('#')[1] : program.title.toLowerCase().replace(/\s+/g, '-');
                const isEven = index % 2 === 0;

                return (
                    <Reveal key={index} width="100%">
                        <div id={id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Visual Side */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="rounded-3xl h-64 md:h-96 w-full flex items-center justify-center text-8xl text-primary/80 shadow-2xl relative z-10 overflow-hidden border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                                        <Image 
                                            src={program.image} 
                                            alt={program.title} 
                                            fill 
                                            style={{ objectFit: 'cover' }} 
                                            className="rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content Side */}
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary text-2xl shadow-sm mb-2">
                                    {program.icon}
                                </div>
                                <h2 className="text-4xl font-bold font-heading text-secondary leading-tight">{program.title}</h2>
                                <p className="text-lg text-text-light leading-relaxed">
                                    {program.description}
                                </p>
                                
                                <div className="pt-4 border-t border-gray-200 mt-6">
                                    <h4 className="font-semibold text-secondary mb-3 uppercase text-sm tracking-wider">Key Focus Areas</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-text-light">
                                        {program.focusAreas.map((area, i) => (
                                            <li key={i} className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>{area}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                );
            })}
        </div>
      </Section>

      <Footer />
    </main>
  );
}

