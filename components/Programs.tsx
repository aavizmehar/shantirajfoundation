import React from 'react';
import { Section, SectionHeading } from './ui/Section';
import { programsData } from '@/data/programsData';
import Link from 'next/link';

export const Programs = () => {
  return (
    <Section id="programs" bgColor="gray">
      <SectionHeading 
        title="Our Core Programs" 
        subtitle="Holistic initiatives designed to foster sustainable development and community growth."
        centered={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programsData.map((program, index) => (
          <div 
            key={index} 
            className="bg-surface rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
          >
            <div className="relative">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-3 rounded-full text-2xl text-primary">
                {program.icon}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-secondary mb-3 font-heading group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              
              <p className="text-text-light mb-6 flex-grow leading-relaxed line-clamp-3">
                {program.description}
              </p>
              
              <Link 
                href={program.link} 
                className="inline-flex items-center text-primary font-semibold hover:underline mt-auto group-hover:translate-x-1 transition-transform"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
