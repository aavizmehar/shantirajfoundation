import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ImpactPlan() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-secondary to-accent text-white text-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 drop-shadow-md">60-Day Impact Plan</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-sm">A structured program for deep community immersion and significant social change.</p>
        </div>
      </section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-3xl font-bold text-secondary">Program Overview</h2>
          <p className="text-lg text-text-light">
            Our 60-Day Impact Plan is designed for individuals seeking an intensive and transformative volunteering experience.
            This program offers a comprehensive immersion into various community development projects, allowing you to contribute significantly
            to multiple initiatives and witness tangible results of your efforts.
          </p>

          <h2 className="text-3xl font-bold text-secondary pt-8">What You'll Experience</h2>
          <ul className="list-disc list-inside text-lg text-text-light mx-auto max-w-2xl space-y-2 text-left">
            <li>In-depth involvement in 2-3 core programs (e.g., Education, Women Empowerment, Environment).</li>
            <li>Opportunity to lead smaller projects or initiatives under guidance.</li>
            <li>Regular workshops and training sessions on community leadership and sustainable practices.</li>
            <li>Direct interaction with beneficiaries and local community members.</li>
            <li>Mentorship from experienced social workers and foundation members.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary pt-8">Who Should Apply?</h2>
          <ul className="list-disc list-inside text-lg text-text-light mx-auto max-w-2xl space-y-2 text-left">
            <li>Dedicated individuals committed to a long-term social impact journey.</li>
            <li>Those looking for a profound cultural exchange and personal growth experience.</li>
            <li>Professionals on sabbatical or students seeking extensive field experience.</li>
            <li>Applicants must demonstrate a strong commitment to the foundation's mission.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary pt-8">Application Process</h2>
          <p className="text-lg text-text-light mb-8">
            To apply for the 60-Day Impact Plan, please submit a detailed application form
            along with your resume and a statement of purpose outlining your motivation and what you hope to achieve.
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