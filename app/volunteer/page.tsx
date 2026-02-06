import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FaBed, FaCertificate, FaUsers, FaCheckCircle, FaTimesCircle, FaClock, FaBook, FaWhatsapp } from 'react-icons/fa';

export default function Volunteer() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="relative pt-32 pb-20 bg-primary text-white text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/group-happy-diverse-volunteers.jpg" 
            alt="Happy Volunteers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 drop-shadow-md">Volunteer With Us</h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-sm">Work: 6 Hours Daily | Remaining Time: Self-Development</p>
        </div>
      </section>

      <Section className="py-20">
          <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Benefits Section */}
              <div>
                  <h2 className="text-3xl font-bold text-secondary mb-8 text-center">What You Get</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                      <BenefitCard icon={<FaBed />} title="Stay & Food Provided" />
                      <BenefitCard icon={<FaCertificate />} title="Certificate of Completion" />
                      <BenefitCard icon={<FaUsers />} title="Leadership Learning" />
                  </div>
              </div>

              {/* Program Details Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <DetailCard title="Program Duration">
                  <p>7 Days (First Time)</p>
                  <p>11 Days</p>
                  <p>21 Days</p>
                </DetailCard>
                <DetailCard title="Monthly Capacity">
                  <p>16 Female Volunteers</p>
                  <p>8 Male Volunteers</p>
                  <p className="text-sm text-gray-500">(Weekly slots only)</p>
                </DetailCard>
              </div>

              {/* Rules Section */}
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Program Rules</h2>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <ul className="space-y-4">
                        <RuleItem icon={<FaTimesCircle className="text-red-500" />} text="No smoking" />
                        <RuleItem icon={<FaTimesCircle className="text-red-500" />} text="No alcohol" />
                        <RuleItem icon={<FaCheckCircle className="text-green-500" />} text="Discipline & respect mandatory" />
                    </ul>
                </div>
              </div>

              {/* Apply Section */}
              <div className="text-center pt-8">
                <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Make an Impact?</h2>
                <p className="text-text-light mb-8 max-w-xl mx-auto">Click the button below to apply via WhatsApp or fill out our form. We can't wait to welcome you!</p>
                <a href="https://wa.me/919816636450" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="text-lg px-10 py-5">
                      <FaWhatsapp className="mr-3 text-2xl" /> Apply Now
                  </Button>
                </a>
              </div>
          </div>
      </Section>
      <Footer />
    </main>
  );
}

const BenefitCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-gray-100">
        <div className="text-4xl text-primary mx-auto mb-4 inline-block">{icon}</div>
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
    </div>
);

const DetailCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
    <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
    <div className="space-y-2 text-lg text-text-light">{children}</div>
  </div>
);

const RuleItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center text-lg">
    <span className="mr-3 text-xl">{icon}</span>
    {text}
  </li>
);
