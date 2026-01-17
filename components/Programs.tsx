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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((program, index) => (
          <div 
            key={index} 
            className="bg-surface rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
          >
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-3xl text-primary group-hover:from-primary group-hover:to-yellow-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md transform group-hover:-rotate-3">
              {program.icon}
            </div>
            
            <h3 className="text-xl font-bold text-secondary mb-3 font-heading group-hover:text-primary transition-colors">
              {program.title}
            </h3>
            
            <p className="text-text-light mb-6 flex-grow leading-relaxed line-clamp-2">
              {program.description}
            </p>
            
            <Link 
              href={program.link} 
              className="inline-flex items-center text-primary font-semibold hover:underline mt-auto group-hover:translate-x-1 transition-transform"
            >
              Learn More <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};
