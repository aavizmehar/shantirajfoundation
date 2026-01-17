"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'glass';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-yellow-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 border border-transparent",
    secondary: "bg-secondary text-white hover:bg-gray-800 shadow-lg shadow-black/20",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    "outline-white": "bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-secondary",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </motion.button>
  );
};