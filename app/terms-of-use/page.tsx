import React from 'react';
import { Section, SectionHeading } from '@/components/ui/Section';

export default function TermsOfUsePage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Terms of Use" subtitle="Last Updated: January 17, 2026" />
          
          <div className="prose prose-lg text-text-light max-w-none">
            <p>
              Welcome to Shantiraj Foundation. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Shantiraj Foundation's website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">3. Disclaimer</h3>
            <p>
              The materials on Shantiraj Foundation's website are provided "as is". Shantiraj Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">4. Limitations</h3>
            <p>
              In no event shall Shantiraj Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shantiraj Foundation's website.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
