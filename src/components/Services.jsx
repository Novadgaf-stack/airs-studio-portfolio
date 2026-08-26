import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Social Media Design",
  "Conference Design",
  "Banner Design",
  "Event Design",
  "Brand Design",
  "Poster Design"
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-blue text-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Expertise.</h2>
          <p className="text-brand-ivory/70 max-w-xl text-lg">Delivering premium visual solutions tailored for clear communication and aesthetic brilliance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-brand-ivory/20 pt-16">
          {services.map((service, index) => (
            <motion.div 
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-brand-gold font-display text-2xl font-light mb-4">0{index + 1}</div>
              <h3 className="text-2xl font-medium mb-4 group-hover:text-brand-gold transition-colors">{service}</h3>
              <div className="w-8 h-px bg-brand-ivory/30 group-hover:w-full group-hover:bg-brand-gold transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
