import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsOfUse() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: [Add Date]</p>

          <div className="prose lg:prose-lg max-w-none">
            <p>Welcome to Shantiraj Foundation. By accessing our website or applying for any program, you agree to comply with the following terms and conditions.</p>

            <h2>1. About Us</h2>
            <p>Shantiraj Foundation is a non-profit organization working in the areas of education, youth development, women empowerment, cleanliness, environment, health awareness, and community development.</p>

            <h2>2. Website Usage</h2>
            <ul>
              <li>This website is for informational and application purposes only.</li>
              <li>Users must not misuse, copy, or distribute content without permission.</li>
              <li>Any misuse of the website may result in restricted access.</li>
            </ul>

            <h2>3. Volunteer Program Terms</h2>
            <ul>
              <li>Volunteer participation is subject to selection and availability.</li>
              <li>Minimum contribution: 6 hours per day during the program.</li>
              <li>First-time volunteers are eligible only for 7-day programs.</li>
              <li>Free stay, food, and certificate are provided only during the approved volunteer period.</li>
              <li>Volunteers must follow discipline, rules, and local guidelines.</li>
            </ul>

            <h2>4. Code of Conduct</h2>
            <p>Volunteers must:</p>
            <ul>
              <li>Maintain respectful behavior</li>
              <li>Follow time schedules</li>
              <li>Avoid smoking, alcohol, or substance abuse</li>
              <li>Respect local culture, community, and team members</li>
            </ul>
            <p>Violation may lead to immediate termination without notice.</p>

            <h2>5. Selection Rights</h2>
            <p>Shantiraj Foundation reserves the right to:</p>
            <ul>
              <li>Accept or reject any application</li>
              <li>Modify program structure</li>
              <li>Change volunteer slots or schedules</li>
            </ul>
            <p>All decisions made by the foundation are final.</p>

            <h2>6. Intellectual Property</h2>
            <p>All content, logos, images, and materials on this website belong to Shantiraj Foundation and cannot be used without written consent.</p>

            <h2>7. Limitation of Liability</h2>
            <p>The foundation is not responsible for:</p>
            <ul>
              <li>Personal belongings of volunteers</li>
              <li>Travel arrangements to/from Kasol</li>
              <li>Any personal injury due to negligence of rules</li>
            </ul>

            <h2>8. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of the website implies acceptance of updated terms.</p>

            <h2>9. Contact</h2>
            <p>For any questions, please contact us via the details mentioned on the website.</p>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold text-lg">⚠️ DISCLAIMER</h3>
                <p>Shantiraj Foundation operates on a best-effort basis.</p>
                <p>Information provided on the website is subject to change.</p>
                <p>The foundation does not guarantee selection, placement, or outcomes.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}