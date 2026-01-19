import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#111] text-white pt-12 pb-8 md:pt-20 md:pb-10 border-t border-gray-900 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <Link href="/" className="text-2xl font-bold font-heading text-white block mb-6">
              Shantiraj<span className="text-primary">Foundation</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Shantiraj Foundation is a non-profit organization dedicated to empowering underprivileged communities through education, healthcare, and sustainable development.
            </p>
            <div className="text-sm text-gray-500">
              <p className="mb-1">Reg. No: 1234/5678/2024</p>
              <p>Niti Aayog ID: HP/2024/0001</p>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/free-stay" className="text-gray-400 hover:text-primary transition-colors">Free Stay</Link></li>
              <li><Link href="/volunteer" className="text-gray-400 hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Our Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Free Education</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Women Empowerment</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Youth Empowerment</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Clean India Mission</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-primary transition-colors">Health Camps</Link></li>
              <li><Link href="/free-stay" className="text-gray-400 hover:text-primary transition-colors">Free Stay Program</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start">
                <span className="mr-3 text-primary mt-1">📍</span>
                <p>Village Chowki 75/4, Malana road,<br />Post Jari, District Kullu,<br />Himachal Pradesh - 175105</p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <span className="mr-3 text-primary">📞</span>
                  <a href="tel:01902358711" className="hover:text-primary">01902-358711</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-green-500"><FaWhatsapp size={16}/></span>
                  <a href="https://wa.me/919816636450" target="_blank" rel="noreferrer" className="hover:text-primary">+91 98166 36450</a>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center">
                  <span className="mr-3 text-primary">✉️</span>
                  <a href="mailto:info@shantirajfoundation.org" className="hover:text-primary transition-colors">Info@shantirajfoundation.org</a>
                </div>
                <p className="ml-7 text-xs opacity-75">Help@shantirajfoundation.org</p>
              </div>
              
              <div className="pt-4">
                <h5 className="text-white font-semibold mb-3">Follow Us</h5>
                <div className="flex flex-wrap gap-3">
                  <SocialIcon 
                    href="https://www.facebook.com/share/16pUbxdqDR/?mibextid=wwXIfr" 
                    icon={<FaFacebookF />} 
                    hoverBg="hover:bg-[#1877F2]" 
                  />
                  <SocialIcon 
                    href="https://www.instagram.com/shantirajfoundationofficial?igsh=MWJ2d3NvOHBicHBodA==" 
                    icon={<FaInstagram />} 
                    hoverBg="hover:bg-[#E1306C]" 
                  />
                  <SocialIcon 
                    href="https://youtube.com/@shantirajfoundation-r1e?si=cphl7f3FH11uMC6X" 
                    icon={<FaYoutube />} 
                    hoverBg="hover:bg-[#FF0000]" 
                  />
                  {/* Keep placeholders or remove if not needed */}
                  <SocialIcon href="#" icon={<FaXTwitter />} hoverBg="hover:bg-black" />
                  <SocialIcon href="#" icon={<FaLinkedinIn />} hoverBg="hover:bg-[#0077B5]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Shantiraj Foundation. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Helper Component for Social Icons with TypeScript Definitions */
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  hoverBg: string;
}

const SocialIcon = ({ href, icon, hoverBg }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all duration-300 group ${hoverBg}`}
  >
    <span className="group-hover:scale-110 transition-transform">
      {icon}
    </span>
  </a>
);