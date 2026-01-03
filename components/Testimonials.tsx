"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Volunteer",
    image: "https://placehold.co/100x100/ED5634/FFFFFF?text=AS",
    text: "Volunteering at the Kasol center was life-changing. The free stay program allowed me to focus entirely on teaching the kids without worrying about expenses."
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Donor",
    image: "https://placehold.co/100x100/1A1A1A/FFFFFF?text=PP",
    text: "Seeing the transparency and dedication of the Shantiraj team is inspiring. I know every rupee I donate actually reaches the women and children who need it."
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Student Beneficiary",
    image: "https://placehold.co/100x100/406E8E/FFFFFF?text=RM",
    text: "The computer classes helped me get my first job. I never thought I would learn coding in my village. Thank you Shantiraj Foundation!"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "International Volunteer",
    image: "https://placehold.co/100x100/f39c12/FFFFFF?text=SJ",
    text: "The warmth of the community and the structured programs made my 3-week stay unforgettable. I highly recommend the Free Stay program."
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Voices of Change</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Hear from our volunteers, beneficiaries, and partners about their journey with Shantiraj Foundation.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Display */}
          <div className="overflow-hidden relative min-h-[300px] flex items-center">
            {testimonials.map((testimonial, index) => {
              // Calculate position for transition effect
              let position = 'translate-x-full opacity-0';
              if (index === activeIndex) position = 'translate-x-0 opacity-100';
              if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = '-translate-x-full opacity-0';

              return (
                <div 
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${position} flex items-center justify-center`}
                >
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 border border-gray-100">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-4xl text-primary/30 font-serif mb-2 leading-none">“</div>
                      <p className="text-lg md:text-xl text-secondary italic mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div>
                        <h4 className="font-bold text-lg text-secondary">{testimonial.name}</h4>
                        <span className="text-sm text-primary font-medium uppercase tracking-wide">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-secondary hover:text-primary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-secondary hover:text-primary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
