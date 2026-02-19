"use client";
import React, { useState, useRef } from 'react';

const galleryImages = [
  { src: "/raw images/rawimg1.jpg", alt: "Volunteers working", category: "Community" },
  { src: "/raw images/rawimg6.jpg", alt: "Kids studying", category: "Education" },
  { src: "/raw images/rawimg13.jpg", alt: "Clean drives", category: "Environment" },
  { src: "/raw images/rawimg4.jpg", alt: "Campfire moments", category: "Culture" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-surface overflow-hidden relative group/section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-2">Real Stories</h2>
          <p className="text-text-light">“A little time can change someone’s tomorrow.”</p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all text-secondary"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all text-secondary"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-6 pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {galleryImages.map((img, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80 md:w-96 relative group cursor-pointer rounded-xl overflow-hidden snap-center shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="aspect-[4/3] overflow-hidden">
                <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="text-xs font-bold bg-primary text-white px-2 py-1 rounded mb-2 inline-block">
                {img.category}
              </span>
              <h3 className="text-white font-bold text-lg">{img.alt}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary text-4xl font-light"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Preview" 
              className="w-full h-full object-contain max-h-[85vh] rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
};
