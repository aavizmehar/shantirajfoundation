import React from 'react';
import { Section, SectionHeading } from '@/components/ui/Section';

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Privacy Policy" subtitle="Last Updated: January 17, 2026" />
          
          <div className="prose prose-lg text-text-light max-w-none">
            <p>
              At Shantiraj Foundation, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, phone number, and mailing address when you donate, volunteer, or subscribe to our newsletter.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process donations and issue receipts.</li>
              <li>To communicate with you about our programs, events, and impact.</li>
              <li>To improve our website and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">3. Data Security</h3>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">4. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@shantirajfoundation.org.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
