import React from 'react';
import { Button } from './ui/Button';

export const Newsletter = () => {
  return (
    <section className="bg-secondary py-16 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">
              Stay Connected
            </h2>
            <p className="text-gray-400">
              Join our newsletter for updates, success stories, and volunteer opportunities.
            </p>
          </div>

          <div className="md:w-1/2 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center md:text-left">
              We respect your privacy. No spam, ever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
