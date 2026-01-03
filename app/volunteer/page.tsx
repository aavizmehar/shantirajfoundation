import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Volunteer() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20 bg-primary text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Volunteer With Us</h1>
        <p className="text-xl max-w-2xl mx-auto">Become part of India’s strongest ground-level community team.</p>
      </section>

      <Section className="py-20">
          <div className="max-w-3xl mx-auto space-y-12">
              
              <div>
                  <h2 className="text-3xl font-bold text-secondary mb-6">Why Volunteer?</h2>
                  <p className="text-lg text-text-light leading-relaxed">
                      Because every hour you give directly improves lives: children, women, youth, communities. Join us to make a tangible difference.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Teaching Volunteer</h3>
                      <p className="text-sm text-gray-500">Educate underprivileged children.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Skill Trainer</h3>
                      <p className="text-sm text-gray-500">Empower women with vocational skills.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Digital Volunteer</h3>
                      <p className="text-sm text-gray-500">Help with social media and outreach.</p>
                  </div>
                   <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">Health Camp Support</h3>
                      <p className="text-sm text-gray-500">Assist in medical camps.</p>
                  </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl text-center shadow-lg">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Ready to Join?</h3>
                  <p className="mb-8 text-text-light">Fill out the form below and we'll get in touch with you shortly.</p>
                  
                  {/* Placeholder Form */}
                  <form className="space-y-4 max-w-md mx-auto text-left">
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Full Name</label>
                          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border" />
                      </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700">Interest Area</label>
                          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-2 border">
                              <option>Teaching</option>
                              <option>Skill Training</option>
                              <option>Digital Support</option>
                              <option>General Volunteering</option>
                          </select>
                      </div>
                      <Button className="w-full mt-4">Submit Application</Button>
                  </form>
              </div>

          </div>
      </Section>
      <Footer />
    </main>
  );
}
