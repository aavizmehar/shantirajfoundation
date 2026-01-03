import { Hero } from '@/components/Hero';
import { InfoStrip } from '@/components/InfoStrip';
import { Programs } from '@/components/Programs';
import { FreeStay } from '@/components/FreeStay';
import { ImpactStats } from '@/components/ImpactStats';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { Branches } from '@/components/Branches';
import { DonationCTA } from '@/components/DonationCTA';
import { Partners } from '@/components/Partners';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { aboutContent } from '@/data/mockData';
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

      {/* About Section */}
      <Section id="about" className="py-24">
        <Reveal width="100%">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                        src="https://placehold.co/600x600/ED5634/FFFFFF?text=Kasol+Center" 
                        alt="Kasol Center - Our Origin" 
                        className="w-full h-full object-cover transform transition group-hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
                    <div className="absolute bottom-6 left-6 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        📍 Kasol HQ, Himachal Pradesh
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 font-heading relative inline-block">
                    {aboutContent.title}
                    <span className="block h-2 w-1/3 bg-primary mt-2 rounded-full"></span>
                </h2>
                <p className="text-xl text-text-light mb-10 leading-relaxed font-light">
                {aboutContent.description}
                </p>
                
                <Button variant="secondary" className="px-8 py-4 text-lg">Read Complete Story</Button>
            </div>
            </div>
        </Reveal>
      </Section>

      <Reveal width="100%">
        <Programs />
      </Reveal>
      
      <Reveal width="100%">
        <FreeStay />
      </Reveal>
      
      <Reveal width="100%">
        <ImpactStats />
      </Reveal>
      
      <Reveal width="100%">
        <Gallery />
      </Reveal>
      
      <Reveal width="100%">
        <Testimonials />
      </Reveal>
      
      <Reveal width="100%">
        <UpcomingEvents />
      </Reveal>
      
      <Reveal width="100%">
        <Branches />
      </Reveal>
      
      <Reveal width="100%">
        <DonationCTA />
      </Reveal>
      
      <Reveal width="100%">
        <Partners />
      </Reveal>
      
      <Newsletter />
      <Footer />
    </main>
  );
}