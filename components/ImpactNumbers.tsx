import React from 'react';
import { Section, SectionHeading } from './ui/Section';
import { impactStats } from '@/data/mockData';

export const ImpactNumbers = () => {
  return (
    <Section id="impact-numbers" bgColor="primary" className="text-white">
      <SectionHeading 
        title="Our Impact at a Glance" 
        subtitle="Driving change where it matters most."
        centered={true}
        color="white"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
        {impactStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-primary-dark/20 rounded-lg backdrop-blur-sm border border-primary/30">
            <p className="text-5xl font-bold text-white mb-2 font-heading">{stat.value}</p>
            <p className="text-lg font-medium text-primary-light uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};