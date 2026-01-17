import React from 'react';
import { Section, SectionHeading } from '@/components/ui/Section';

export default function RefundPolicyPage() {
  return (
    <main className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Refund Policy" subtitle="Last Updated: January 17, 2026" />
          
          <div className="prose prose-lg text-text-light max-w-none">
            <p>
              Shantiraj Foundation appreciates your generous support. We work hard to ensure that every contribution is utilized for the intended cause.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">1. Donation Refunds</h3>
            <p>
              Donations once made are generally non-refundable. However, if you have made an error in entering the amount or if a duplicate transaction has occurred, please contact us immediately.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">2. Refund Process</h3>
            <p>
              To request a refund, please email us at info@shantirajfoundation.org with your transaction details within 7 days of the donation.
            </p>
             <p className="mt-2">
              Refunds are processed at the discretion of the management and will be credited back to the original payment method within 10-14 working days if approved.
            </p>

            <h3 className="text-secondary font-bold text-xl mt-8 mb-4">3. Tax Exemption</h3>
            <p>
              Please note that if a tax exemption certificate has already been issued for a donation, we may be unable to process a refund for that specific contribution.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
