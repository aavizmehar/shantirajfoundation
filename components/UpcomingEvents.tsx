import React from 'react';
import { Section, SectionHeading } from './ui/Section';
import { eventsData } from '@/data/eventsData';
import { Button } from './ui/Button';

export const UpcomingEvents = () => {
  return (
    <Section id="campaigns">
      <SectionHeading 
        title="Upcoming Events" 
        subtitle="Be a part of our upcoming initiatives and help us create a lasting impact."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventsData.map((event) => (
          <div 
            key={event.id} 
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
          >
            {/* Date Tag */}
            <div className="text-primary font-bold text-sm mb-4 flex items-center bg-primary/5 w-fit px-3 py-1 rounded-full border border-primary/10">
              <span className="mr-2 text-lg">{event.icon}</span> {event.date}
            </div>

            <h3 className="text-xl font-bold text-secondary mb-3 font-heading group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            <div className="text-gray-500 text-sm mb-4 flex items-start italic">
              <span className="mr-2 flex-shrink-0">📍</span> {event.location}
            </div>

            <p className="text-text-light text-sm mb-6 flex-grow leading-relaxed">
              {event.description}
            </p>

            <Button variant="outline" className="w-full py-2 text-sm border-gray-200 text-secondary hover:border-primary">
              View Details
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-text-light mb-4 italic">Want to host an event with us?</p>
        <Button variant="primary">Collaborate Now</Button>
      </div>
    </Section>
  );
};
