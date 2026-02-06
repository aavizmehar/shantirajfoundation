import { Hero } from '@/components/Hero';
import { InfoStrip } from '@/components/InfoStrip';
import { Programs } from '@/components/Programs';
import { FreeStay } from '@/components/FreeStay';
import { Gallery } from '@/components/Gallery';
import { Branches } from '@/components/Branches';
import { DonationCTA } from '@/components/DonationCTA';
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
        <FreeStay />
      </Reveal>
      
      <Reveal width="100%">
        <Gallery />
      </Reveal>
      
      <Reveal width="100%">
        <Branches />
      </Reveal>
      
      <Reveal width="100%">
        <DonationCTA />
      </Reveal>
      
      <Footer />
    </main>
  );
}