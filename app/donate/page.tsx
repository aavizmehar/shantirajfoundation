import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function Donate() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Custom Hero for Donate Page */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/view-hands-holding-red-heart-represent-affection.jpg" 
            alt="Donate Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/40"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Make a <span className="text-primary">Difference</span> Today
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your generosity fuels our mission. Every rupee helps us provide essential education, healthcare, and support to underprivileged communities across India.
            </p>
        </div>
      </div>

      <Section className="py-16">
          <div className="max-w-4xl mx-auto space-y-16">
              
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-secondary mb-6">See Your Impact</h2>
                  <div className="grid md:grid-cols-4 gap-4">
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer bg-white shadow-sm">
                          <div className="text-2xl font-bold text-primary">₹500</div>
                          <div className="text-sm text-gray-500">Learning material for 3 students</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer bg-white shadow-sm">
                          <div className="text-2xl font-bold text-primary">₹1,000</div>
                          <div className="text-sm text-gray-500">Health kit for a family</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer bg-white shadow-sm">
                          <div className="text-2xl font-bold text-primary">₹5,000</div>
                          <div className="text-sm text-gray-500">Education for 15 kids (1 week)</div>
                      </div>
                      <div className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer bg-white shadow-sm">
                          <div className="text-2xl font-bold text-primary">₹21,000</div>
                          <div className="text-sm text-gray-500">Support one full stay batch</div>
                      </div>
                  </div>
              </div>

              <div id="payment-methods">
                  <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Ways to Donate</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                          <h3 className="font-bold text-xl mb-4 text-secondary">Bank Transfer</h3>
                          <div className="space-y-2 text-gray-600">
                              <p><span className="font-semibold w-32 inline-block">Account Name:</span> Shantiraj Foundation</p>
                              <p><span className="font-semibold w-32 inline-block">Account No:</span> 9876543210</p>
                              <p><span className="font-semibold w-32 inline-block">IFSC Code:</span> SBIN0001234</p>
                              <p><span className="font-semibold w-32 inline-block">Bank Name:</span> State Bank of India</p>
                              <p><span className="font-semibold w-32 inline-block">Branch:</span> Kasol, HP</p>
                          </div>
                      </div>
                       <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                          <h3 className="font-bold text-xl mb-4 text-secondary">UPI / QR Code</h3>
                          <div className="w-48 h-48 bg-white p-2 rounded-lg border border-gray-200 mb-4 flex items-center justify-center">
                              {/* Replace with actual QR Code image */}
                              <img src="https://placehold.co/200x200/eaad3d/FFFFFF?text=QR+Code" alt="UPI QR Code" className="w-full h-full object-contain" />
                          </div>
                          <p className="font-mono bg-white px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm select-all cursor-pointer hover:bg-gray-50">
                              shantiraj@upi
                          </p>
                          <p className="text-xs text-gray-400 mt-2">Scan with GPay, PhonePe, Paytm</p>
                      </div>
                  </div>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Note on Tax Exemption</h4>
                  <p className="text-sm text-gray-600">
                      All donations to Shantiraj Foundation are 50% tax exempt under section 80G of the Income Tax Act. 
                      Please email us at <a href="mailto:info@shantirajfoundation.org" className="text-primary hover:underline">info@shantirajfoundation.org</a> with your transaction details and PAN card copy to receive your tax exemption certificate.
                  </p>
              </div>

          </div>
      </Section>
      <Footer />
    </main>
  );
}
