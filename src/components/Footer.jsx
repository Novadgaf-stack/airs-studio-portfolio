import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-blue text-brand-ivory pt-32 pb-12 rounded-t-3xl mt-[-2rem] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              Ready to make your <span className="text-brand-gold italic">brand</span> speak clearly?
            </h2>
            <a 
              href="mailto:theairs001@gmail.com" 
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-brand-gold transition-colors border-b border-brand-ivory/30 pb-2 hover:border-brand-gold"
            >
              theairs001@gmail.com
              <ArrowUpRight size={28} />
            </a>
          </div>
          
          <div className="flex flex-col lg:items-end justify-end space-y-8">
            <div className="flex flex-col gap-4 text-lg w-full lg:w-auto">
              <a href="https://wa.me/2348104281383" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center justify-between lg:justify-end gap-8 border-b border-brand-ivory/10 pb-4">
                <span>WhatsApp</span> <ArrowUpRight size={18} className="opacity-50" />
              </a>
              <a href="https://www.instagram.com/airs.studios/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center justify-between lg:justify-end gap-8 border-b border-brand-ivory/10 pb-4">
                <span>Instagram</span> <ArrowUpRight size={18} className="opacity-50" />
              </a>
              <a href="mailto:theairs001@gmail.com" className="hover:text-brand-gold transition-colors flex items-center justify-between lg:justify-end gap-8 border-b border-brand-ivory/10 pb-4">
                <span>Email</span> <ArrowUpRight size={18} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-ivory/10 text-brand-ivory/40 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-display font-bold text-xl text-brand-ivory tracking-tighter">AIRS.</span>
            <span>&copy; {currentYear} Creative Designer.</span>
          </div>
          <p>Designed for clarity and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
