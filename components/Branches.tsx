"use client";
import React, { useState } from 'react';
import { Section, SectionHeading } from './ui/Section';

type BranchStatus = 'hq' | 'upcoming' | 'goal';

interface BranchLocation {
  id: number;
  name: string;
  status: BranchStatus;
  top: string; // Percentage from top
  left: string; // Percentage from left
}

const branches: BranchLocation[] = [
  { id: 1, name: "Kasol (HQ)", status: 'hq', top: '15%', left: '32%' },
  { id: 2, name: "New Delhi", status: 'upcoming', top: '28%', left: '30%' },
  { id: 3, name: "Rishikesh", status: 'upcoming', top: '22%', left: '33%' },
  { id: 4, name: "Varanasi", status: 'upcoming', top: '35%', left: '55%' },
  { id: 5, name: "Mumbai", status: 'goal', top: '55%', left: '20%' },
  { id: 6, name: "Bangalore", status: 'goal', top: '75%', left: '35%' },
  { id: 7, name: "Kolkata", status: 'goal', top: '45%', left: '70%' },
  { id: 8, name: "Jaipur", status: 'goal', top: '32%', left: '25%' },
  { id: 9, name: "Goa", status: 'goal', top: '65%', left: '22%' },
  { id: 10, name: "Hyderabad", status: 'goal', top: '60%', left: '40%' },
];

export const Branches = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const getStatusColor = (status: BranchStatus) => {
    switch (status) {
      case 'hq': return 'bg-primary border-primary shadow-[0_0_15px_rgba(237,86,52,0.6)]';
      case 'upcoming': return 'bg-gray-500 border-gray-500';
      case 'goal': return 'bg-accent border-accent animate-pulse';
      default: return 'bg-gray-300';
    }
  };

  const getStatusLabel = (status: BranchStatus) => {
    switch (status) {
      case 'hq': return 'Headquarters';
      case 'upcoming': return 'Opening Soon';
      case 'goal': return '2026 Goal';
      default: return '';
    }
  };

  return (
    <Section id="branches" bgColor="white">
      <SectionHeading 
        title="Our Expanding Footprint" 
        subtitle="From the valleys of Kasol to the heart of India, we are growing to serve more."
        centered={true}
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Map Container */}
        <div className="relative w-full max-w-lg aspect-[3/4] bg-gray-50 rounded-xl border border-gray-100 shadow-inner p-4">
            {/* Map Image Placeholder */}
            <img 
                src="/map.jpg" 
                alt="India Map" 
                className="w-full h-full object-contain opacity-40 grayscale"
            />

            {/* Markers */}
            {branches.map((branch) => (
                <div
                    key={branch.id}
                    className="absolute cursor-pointer group"
                    style={{ top: branch.top, left: branch.left }}
                    onMouseEnter={() => setActiveTooltip(branch.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                >
                    {/* The Dot */}
                    <div className={`w-4 h-4 rounded-full border-2 border-white ${getStatusColor(branch.status)} transform transition hover:scale-150`}></div>
                    
                    {/* Tooltip */}
                    <div 
                        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-secondary text-white text-xs rounded py-1 px-2 text-center z-10 transition-all duration-200 pointer-events-none ${
                            activeTooltip === branch.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                    >
                        <div className="font-bold">{branch.name}</div>
                        <div className="text-gray-300 text-[10px] uppercase tracking-wider">{getStatusLabel(branch.status)}</div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-secondary"></div>
                    </div>
                </div>
            ))}
        </div>

        {/* Legend / Info */}
        <div className="max-w-xs space-y-6">
            <h3 className="text-2xl font-bold font-heading text-secondary">Vision 2026</h3>
            <p className="text-text-light">
                We are on a mission to establish <strong>10 active community centers</strong> across India by 2026, fostering a nationwide network of compassion.
            </p>
            
            <div className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(237,86,52,0.5)]"></span>
                    <span className="text-sm font-semibold text-secondary">Active Headquarters (Kasol)</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-gray-500 mr-3"></span>
                    <span className="text-sm font-semibold text-secondary">Upcoming Branches (2024-25)</span>
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-accent mr-3 animate-pulse"></span>
                    <span className="text-sm font-semibold text-secondary">Future Goals (2026)</span>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};
