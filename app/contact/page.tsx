import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/mockData';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-16 bg-secondary text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400">We'd love to hear from you. Get in touch!</p>
      </section>

      <Section className="py-20">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4">Get In Touch</h2>
                    <p className="text-text-light">
                        Have questions about our programs, volunteering, or donations? Reach out to us directly.
                    </p>
                </div>

                <div className="space-y-4">
                     <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="text-2xl mr-4 text-primary">📍</span>
                        <div>
                            <h3 className="font-bold text-secondary">Address</h3>
                            <p className="text-gray-600">{contactInfo.address}</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="text-2xl mr-4 text-primary">📞</span>
                        <div>
                            <h3 className="font-bold text-secondary">Phone</h3>
                            <p className="text-gray-600">{contactInfo.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="text-2xl mr-4 text-primary">✉️</span>
                        <div>
                            <h3 className="font-bold text-secondary">Email</h3>
                            <p className="text-gray-600">{contactInfo.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 border" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 border" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                         <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 border">
                              <option>General Inquiry</option>
                              <option>Volunteering</option>
                              <option>Donation</option>
                              <option>Partnership</option>
                          </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 border" placeholder="How can we help?"></textarea>
                    </div>
                    <Button className="w-full py-3 text-lg">Send Message</Button>
                </form>
            </div>

        </div>
      </Section>
      <Footer />
    </main>
  );
}
