import { Hero } from '@/components/Hero';
import { InfoStrip } from '@/components/InfoStrip';
import { Programs } from '@/components/Programs';
import { ImpactStay } from '@/components/ImpactStay';
import { Gallery } from '@/components/Gallery';
import { ImpactNumbers } from '@/components/ImpactNumbers';
import { HowItWorks } from '@/components/HowItWorks';
import { Branches } from '@/components/Branches';
import { DonationCTA } from '@/components/DonationCTA';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Reveal } from '@/components/ui/Reveal';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Hero />
      
      <Reveal width="100%" delay={0.1}>
        <InfoStrip />
      </Reveal>

      <Reveal width="100%">
        <Programs />
      </Reveal>
      
      <Reveal width="100%">
        <ImpactStay />
      </Reveal>
      
      <Reveal width="100%">
        <Gallery />
      </Reveal>
      
      <Reveal width="100%">
        <ImpactNumbers />
      </Reveal>
      
      <Reveal width="100%">
        <HowItWorks />
      </Reveal>
      
      <Reveal width="100%">
        <Branches />
      </Reveal>
      
      <Reveal width="100%">
        <DonationCTA />
      </Reveal>
      
      <Reveal width="100%">
        <Testimonials />
      </Reveal>
      
      <Footer />
    </main>
  );
}