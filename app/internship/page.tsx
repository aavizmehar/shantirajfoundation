import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Internship() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary to-accent text-white text-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 drop-shadow-md">Internship Program</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-sm">Gain hands-on experience and make a real difference.</p>
        </div>
      </section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold text-secondary">Overview</h2>
          <p className="text-lg text-text-light">
            Our internship program offers a unique opportunity for students and young professionals to work alongside our team
            on various social impact projects. You will gain practical experience in community development,
            education, women empowerment, and environmental initiatives.
          </p>

          <h2 className="text-3xl font-bold text-secondary pt-8">What You'll Do</h2>
          <ul className="list-disc list-inside text-lg text-text-light mx-auto max-w-2xl space-y-2 text-left">
            <li>Assist with project planning and execution in rural communities.</li>
            <li>Support educational workshops for children and youth.</li>
            <li>Contribute to women empowerment initiatives and skill development programs.</li>
            <li>Participate in environmental conservation efforts.</li>
            <li>Help with content creation, social media, and administrative tasks.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary pt-8">Who Can Join?</h2>
          <ul className="list-disc list-inside text-lg text-text-light mx-auto max-w-2xl space-y-2 text-left">
            <li>Students or graduates looking for practical experience in the social sector.</li>
            <li>Individuals with a strong passion for community service and sustainable development.</li>
            <li>Ability to commit to the program duration (minimum 1 month).</li>
            <li>Good communication skills and a proactive attitude.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary pt-8">How to Apply</h2>
          <p className="text-lg text-text-light mb-8">
            Interested candidates can apply by sending their resume and a cover letter to our email address,
            highlighting their interest and relevant experience.
          </p>
          <Link href="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Apply Now
            </Button>
          </Link>
        </div>
      </Section>
      <Footer />
    </main>
  );
}