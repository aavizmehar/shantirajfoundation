import React from 'react';
import { infoItems } from '@/data/infoItems';

export const InfoStrip = () => {
  return (
    <div className="bg-surface border-y border-gray-100 shadow-sm relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-6 md:py-8 gap-y-6">
          {infoItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 px-4 md:px-0 flex-1 min-w-[200px] md:min-w-0 justify-center md:justify-start group"
            >
              <span className="text-2xl md:text-3xl text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </span>
              <span className="text-sm md:text-base font-semibold text-secondary tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
