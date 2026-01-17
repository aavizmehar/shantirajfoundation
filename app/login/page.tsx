"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaArrowLeft } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex w-full bg-surface">
      
      {/* Left Side - Visual (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-secondary overflow-hidden">
        <Image 
          src="/heroimg.jpg" 
          alt="Community Impact" 
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/40"></div>
        
        <div className="relative z-10 flex flex-col justify-between w-full h-full p-16 text-white">
          <div>
             <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <FaArrowLeft /> Back to Home
             </Link>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl font-bold font-heading leading-tight">
              Empowering Lives,<br /> One Step at a Time.
            </h2>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Join our community of volunteers and changemakers. Together, we are building a stronger, healthier India.
            </p>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shantiraj Foundation.
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 relative">
        
        {/* Mobile Home Link */}
        <Link href="/" className="lg:hidden absolute top-6 left-6 text-text-light hover:text-secondary flex items-center gap-2">
            <FaArrowLeft /> Home
        </Link>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
                 {/* Logo Icon Placeholder or Small Logo */}
                 <div className="w-16 h-16 relative">
                     <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                 </div>
            </div>
            <h1 className="text-3xl font-bold text-secondary font-heading">Welcome Back</h1>
            <p className="text-text-light mt-2">Please enter your details to sign in.</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-secondary">Password</label>
                <Link href="#" className="text-sm text-primary font-semibold hover:text-yellow-600">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full py-4 text-lg shadow-xl shadow-primary/20">Sign In</Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-surface text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-secondary font-medium text-sm">
              <FaGoogle className="text-red-500 text-lg" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-secondary font-medium text-sm">
              <FaFacebookF className="text-blue-600 text-lg" /> Facebook
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-text-light mt-8">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary font-bold hover:text-yellow-600 transition-colors">
              Create an account
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
}