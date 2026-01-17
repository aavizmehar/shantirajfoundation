"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { navLinks } from '@/data/mockData';
import { Button } from './ui/Button';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
    scrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 h-[70px]"
      : "bg-transparent border-transparent h-[80px]"
  );

  const linkColor = scrolled ? "text-secondary hover:text-primary" : "text-white/90 hover:text-white";
  const mobileToggleColor = scrolled ? "text-secondary" : "text-white";

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">

            {/* Logo */}
            <Link href="/" className="z-50 flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"        // put logo inside /public
                alt="Shantiraj Foundation Logo"
                width={250}
                height={250}
                priority
                className="object-contain"
              />
          
            </Link>


            {/* Desktop Menu */}
            <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn("text-sm font-semibold uppercase tracking-wider transition-colors duration-300", linkColor)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center space-x-6 z-50">
              <Link href="/volunteer" className={cn("font-medium transition-colors", linkColor)}>
                Volunteer
              </Link>
              <Link href="/login" className={cn("font-medium transition-colors", linkColor)}>
                Login
              </Link>
              <Link href="/donate">
                <Button variant="primary" className="py-2 px-6 text-sm">Donate</Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="xl:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn("focus:outline-none p-2 transition-colors", mobileToggleColor)}
              >
                {isOpen ? <HiX className="h-8 w-8 text-secondary" /> : <HiMenuAlt3 className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 xl:hidden pt-24 px-6 pb-6 flex flex-col shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/volunteer"
                className="text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Link>
              <Link
                href="/login"
                className="text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
            <div className="mt-auto">
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-lg py-4">Donate Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
