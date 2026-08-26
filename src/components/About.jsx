import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">About AIRS.</h2>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
        </div>
        
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">The Problem I Solve</h3>
            <p className="text-xl leading-relaxed">
              I take out the complexities of passing a brand's vision across to its audience through poor visual identity. 
              I bring clarity, structure, and beauty to your message.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Who I Help</h3>
            <p className="text-lg leading-relaxed text-brand-blue/80">
              I partner with brand owners, founders, private individuals, organizations, institutions, business owners, and entrepreneurs who are ready to elevate their presence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-3">Why I Do This</h3>
            <p className="text-lg leading-relaxed text-brand-blue/80">
              "It's a pleasant feeling to see brands, businesses, and individuals reach their target audience as a result of their brand design. I put every creative effort needed into ensuring that the brand's message is passed across clearly."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
