import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Your privacy is important to us.</p>

          <div className="prose lg:prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>Name, age, gender</li>
              <li>Contact details (email, phone)</li>
              <li>Volunteer preferences</li>
              <li>Uploaded documents (ID, resume)</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>Collected information is used for:</p>
            <ul>
              <li>Volunteer selection & communication</li>
              <li>Program planning</li>
              <li>Internal records</li>
              <li>Reporting & compliance</li>
            </ul>
            <p>We do not sell or share personal data with third parties.</p>

            <h2>3. Data Protection</h2>
            <p>We use reasonable security measures to protect your data. Access is limited to authorized personnel only.</p>

            <h2>4. Cookies</h2>
            <p>Our website may use basic cookies to improve user experience.</p>

            <h2>5. Consent</h2>
            <p>By submitting forms on our website, you consent to our data usage policies.</p>

            <h2>6. Policy Updates</h2>
            <p>Privacy policy may be updated periodically. Please review regularly.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}