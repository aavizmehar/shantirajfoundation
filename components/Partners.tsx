import React from 'react';
import { Section, SectionHeading } from './ui/Section';

const partners = [
  { name: "Global Giving", logo: "https://placehold.co/200x80/e0e0e0/333333?text=Global+Giving" },
  { name: "Save the Children", logo: "https://placehold.co/200x80/e0e0e0/333333?text=Save+Children" },
  { name: "UNICEF", logo: "https://placehold.co/200x80/e0e0e0/333333?text=UNICEF" },
  { name: "Tech For Good", logo: "https://placehold.co/200x80/e0e0e0/333333?text=Tech+For+Good" },
  { name: "Local Government", logo: "https://placehold.co/200x80/e0e0e0/333333?text=Govt+Support" },
  { name: "Corporate CSR", logo: "https://placehold.co/200x80/e0e0e0/333333?text=Corp+CSR" },
];

export const Partners = () => {
  return (
    <Section id="partners" bgColor="white" className="py-12">
      <SectionHeading 
        title="Our Partners" 
        subtitle="Collaborating with organizations to maximize our impact."
        centered={true}
      />
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
        {partners.map((partner, index) => (
          <div key={index} className="group transition-all duration-300">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 md:h-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
