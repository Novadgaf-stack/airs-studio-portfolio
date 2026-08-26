import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h2 className="text-brand-gold font-medium tracking-widest uppercase text-sm mb-6">Akinkunmi Ireoluwa Sharon</h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 text-balance">
          Design that makes your brand speak clearly.
        </h1>
        <p className="text-lg md:text-xl text-brand-blue/80 max-w-2xl mb-12 font-light leading-relaxed">
          I help brands communicate effectively by creating compelling visual identity. 
          A premium creative designer specializing in bold, intentional, and typography-led aesthetics.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="#contact" 
            className="group flex items-center gap-2 px-8 py-4 bg-brand-blue text-brand-ivory rounded-full font-medium hover:bg-brand-gold transition-all duration-300"
          >
            Contact Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#work" 
            className="px-8 py-4 border border-brand-blue/20 text-brand-blue rounded-full font-medium hover:border-brand-blue transition-colors duration-300"
          >
            View Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
