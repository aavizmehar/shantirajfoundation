import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaHome, FaClock, FaUtensils, FaCheckCircle } from 'react-icons/fa';
import { Reveal } from '@/components/ui/Reveal';

export default function FreeStay() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-secondary via-gray-900 to-black text-white relative overflow-hidden">
         {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal width="100%">
             <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-6 backdrop-blur-sm">Only in Kasol</span>
             <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                Free Stay Program
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Stay. Serve. Grow. Join India’s first community-based impact residency.
             </p>
          </Reveal>
        </div>
      </section>

      <Section className="py-24">
        <div className="max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="text-center mb-24">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">How It Works</h2>
                    <p className="text-lg text-text-light mb-12 max-w-2xl mx-auto">
                        The Shantiraj Foundation Stay Program in Kasol is designed for students, entrepreneurs, volunteers, and anyone passionate about social change.
                    </p>
                </Reveal>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <Reveal width="100%" delay={0.1}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl text-primary mb-6">
                                <FaHome />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-secondary">Stay Free</h3>
                            <p className="text-text-light">0 cost for accommodation in our scenic center.</p>
                        </div>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl text-primary mb-6">
                                <FaClock />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-secondary">Contribute</h3>
                            <p className="text-text-light">Dedicate 4 hours daily to foundation work.</p>
                        </div>
                    </Reveal>
                    <Reveal width="100%" delay={0.3}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                             <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-3xl text-primary mb-6">
                                <FaUtensils />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-secondary">Food</h3>
                            <p className="text-text-light">Pay only ₹350/day for 3 healthy meals.</p>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Durations */}
            <Reveal width="100%">
                <div className="bg-white rounded-3xl p-10 md:p-16 mb-24 shadow-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h3 className="text-3xl font-bold text-secondary mb-12 text-center font-heading">Choose Your Duration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                        {/* 7 Days */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300">
                            <div className="text-5xl font-bold text-secondary mb-2">7</div>
                            <div className="font-semibold text-text-light uppercase tracking-wider mb-6">Days</div>
                            <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Basic Orientation</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Community Work</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Certificate</li>
                            </ul>
                            <Button variant="outline" className="w-full justify-center">Select</Button>
                        </div>

                        {/* 11 Days - Highlighted */}
                        <div className="bg-secondary p-8 rounded-2xl border-2 border-primary shadow-2xl transform md:-translate-y-4 relative text-white">
                             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-orange-600 text-white text-xs px-4 py-1 rounded-full font-bold shadow-lg uppercase tracking-wider">Most Popular</div>
                            <div className="text-6xl font-bold text-white mb-2">11</div>
                            <div className="font-semibold text-gray-300 uppercase tracking-wider mb-8">Days</div>
                            <ul className="text-left space-y-4 mb-8 text-sm text-gray-300">
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> In-depth Projects</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Mentorship Session</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Weekend Excursion</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Certificate of Merit</li>
                            </ul>
                            <Button variant="primary" className="w-full justify-center shadow-primary/50">Select</Button>
                        </div>

                        {/* 21 Days */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300">
                            <div className="text-5xl font-bold text-secondary mb-2">21</div>
                            <div className="font-semibold text-text-light uppercase tracking-wider mb-6">Days</div>
                            <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Leadership Role</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Project Management</li>
                                <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Advanced Certificate</li>
                            </ul>
                            <Button variant="outline" className="w-full justify-center">Select</Button>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Application CTA */}
            <Reveal width="100%">
                <div className="text-center bg-gradient-to-r from-primary/10 to-orange-100/50 p-12 rounded-3xl border border-primary/10">
                    <h2 className="text-3xl font-bold text-secondary mb-6 font-heading">Ready to Join the Movement?</h2>
                    <p className="text-text-light mb-8 max-w-xl mx-auto text-lg">
                        We have limited slots (15 per batch). Apply now to secure your spot in the next cohort.
                    </p>
                    <Button variant="primary" className="px-12 py-5 text-lg shadow-xl hover:scale-105 transition-transform">
                        Start Application
                    </Button>
                </div>
            </Reveal>

        </div>
      </Section>

      <Footer />
    </main>
  );
}
