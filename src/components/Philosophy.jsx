import React from 'react';

export default function Philosophy() {
  return (
    <section className="py-32 bg-brand-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-3xl rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-blue/5 blur-3xl rounded-full -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-sm font-bold tracking-widest uppercase text-brand-gold mb-12">Design Philosophy</h2>
        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] text-balance">
          "Instead of merely following trends, I focus on building <span className="italic text-brand-gold">strong identity</span> for the brand, and I create for the <span className="italic text-brand-gold">target audience</span> not for just the brand's satisfaction."
        </blockquote>
      </div>
    </section>
  );
}
