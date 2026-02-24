import React from 'react';
import { Section, SectionHeading } from './ui/Section';
import { howItWorksSteps } from '@/data/mockData';
import { FaUserPlus, FaHandsHelping, FaLightbulb, FaAward } from 'react-icons/fa';

export const HowItWorks = () => {
  const icons = [<FaUserPlus />, <FaHandsHelping />, <FaLightbulb />, <FaAward />];

  return (
    <Section id="how-it-works" bgColor="gray">
      <SectionHeading 
        title="How It Works" 
        subtitle="Simple steps to make a profound difference."
        centered={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {howItWorksSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl text-primary mb-4">
              {icons[index % icons.length]} {/* Cycle through icons */}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
            <p className="text-text-light">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};