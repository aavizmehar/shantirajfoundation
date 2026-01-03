import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { DonationCTA } from '@/components/DonationCTA';

export default function Donate() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Reusing the CTA component as the Hero for this page */}
      <div className="pt-20">
        <DonationCTA />
      </div>

      <Section className="py-16">
          <div className="max-w-4xl mx-auto space-y-16">
              
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-secondary mb-6">See Your Impact</h2>
                  <div className="grid md:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="text-2xl font-bold text-primary">₹500</div>
                          <div className="text-sm text-gray-500">Learning material for 3 students</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="text-2xl font-bold text-primary">₹1,000</div>
                          <div className="text-sm text-gray-500">Health kit for a family</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="text-2xl font-bold text-primary">₹5,000</div>
                          <div className="text-sm text-gray-500">Education for 15 kids (1 week)</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                          <div className="text-2xl font-bold text-primary">₹21,000</div>
                          <div className="text-sm text-gray-500">Support one full stay batch</div>
                      </div>
                  </div>
              </div>

              <div>
                  <h2 className="text-3xl font-bold text-secondary mb-6">Ways to Donate</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-6 rounded-xl">
                          <h3 className="font-bold text-lg mb-4">Bank Transfer</h3>
                          <p className="text-sm text-gray-600 mb-2">Account Name: Shantiraj Foundation</p>
                          <p className="text-sm text-gray-600 mb-2">Account No: XXXXXXXXXX</p>
                          <p className="text-sm text-gray-600">IFSC: XXXXXXX</p>
                      </div>
                       <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center justify-center">
                          <h3 className="font-bold text-lg mb-4">UPI / QR Code</h3>
                          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                              [QR Placeholder]
                          </div>
                          <p className="mt-4 text-sm font-mono bg-white px-3 py-1 rounded border">shantiraj@upi</p>
                      </div>
                  </div>
              </div>

          </div>
      </Section>
      <Footer />
    </main>
  );
}
