import React from 'react';
import Link from 'next/link';
import { navLinks, contactInfo } from '@/data/mockData';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
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
              <li><Link href="#about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#programs" className="text-gray-400 hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="#free-stay" className="text-gray-400 hover:text-primary transition-colors">Free Stay</Link></li>
              <li><Link href="#volunteer" className="text-gray-400 hover:text-primary transition-colors">Volunteer</Link></li>
              <li><Link href="#donate" className="text-gray-400 hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Our Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#education" className="text-gray-400 hover:text-primary transition-colors">Free Education</Link></li>
              <li><Link href="#women-empowerment" className="text-gray-400 hover:text-primary transition-colors">Women Empowerment</Link></li>
              <li><Link href="#youth" className="text-gray-400 hover:text-primary transition-colors">Youth Empowerment</Link></li>
              <li><Link href="#clean-country" className="text-gray-400 hover:text-primary transition-colors">Clean India Mission</Link></li>
              <li><Link href="#health" className="text-gray-400 hover:text-primary transition-colors">Health Camps</Link></li>
              <li><Link href="#free-stay" className="text-gray-400 hover:text-primary transition-colors">Free Stay Program</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-primary pl-3">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start">
                <span className="mr-3 text-primary mt-1">📍</span>
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-primary">📞</span>
                <p>{contactInfo.phone}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-primary">✉️</span>
                <p>{contactInfo.email}</p>
              </div>
              <div className="pt-4">
                <h5 className="text-white font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 group">
                    <FaFacebookF className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group">
                    <FaTwitter className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 group">
                    <FaInstagram className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all duration-300 group">
                    <FaLinkedinIn className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300 group">
                    <FaYoutube className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shantiraj Foundation. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};