"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "A Volunteer",
    role: "Volunteer Voices",
    text: "Volunteering here changed my perspective. It's truly rewarding to be part of such dedicated efforts for community development."
  },
  {
    id: 2,
    name: "Local Teacher",
    role: "Community Response",
    text: "Our children are learning better and showing more interest in school thanks to the Shantiraj Foundation's education programs."
  },
  {
    id: 3,
    name: "Village Elder",
    role: "Community Response",
    text: "The cleanliness drives have made our village a healthier place to live. We are grateful for the support."
  },
  {
    id: 4,
    name: "Former Beneficiary",
    role: "Volunteer Voices",
    text: "After receiving support from the foundation, I was inspired to volunteer myself and give back to my community."
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
          {/* Main Card Display - Using Grid for adaptive height */}
          <div className="grid grid-cols-1 items-center">
            {testimonials.map((testimonial, index) => {
              // Calculate position/visibility
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;

              let transitionClass = 'opacity-0 scale-95 pointer-events-none z-0';
              if (isActive) transitionClass = 'opacity-100 scale-100 z-10 relative';
              
              return (
                <div 
                  key={testimonial.id}
                  className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out transform ${transitionClass} flex items-center justify-center w-full py-4`}
                >
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 border border-gray-100">

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
