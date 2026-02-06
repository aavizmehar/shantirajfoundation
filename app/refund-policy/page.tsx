import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>
          <p className="text-sm text-gray-500 mb-8">(For Volunteer Program & Future Services)</p>

          <div className="prose lg:prose-lg max-w-none">
            <h2>1. Volunteer Program</h2>
            <p>Shantiraj Foundation does not charge any participation fee for volunteering.</p>
            <p>Any personal travel or personal expenses are the responsibility of the volunteer.</p>

            <h2>2. Future Donations / Contributions</h2>
            <p>Donations (when enabled) will be non-refundable, except in cases required by law.</p>
            <p>Donation usage will align with foundation objectives.</p>

            <h2>3. Cancellation by Foundation</h2>
            <p>The foundation reserves the right to cancel or reschedule any program due to:</p>
            <ul>
              <li>Operational constraints</li>
              <li>Safety reasons</li>
              <li>Administrative decisions</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}