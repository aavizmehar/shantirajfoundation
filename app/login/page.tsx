"use client";
import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-20 bg-background flex flex-col justify-center">
      <Section className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-secondary mb-2">Welcome Back</h1>
              <p className="text-text-light">Sign in to continue your journey</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-secondary mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-text-light hover:text-secondary cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-primary focus:ring-primary" />
                  Remember me
                </label>
                <Link href="#" className="text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button className="w-full py-4 text-lg shadow-none hover:shadow-lg">
                Sign In
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-text-light">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary font-semibold hover:underline">
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
