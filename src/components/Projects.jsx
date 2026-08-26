import React from 'react';

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Work.</h2>
            <p className="text-brand-blue/60 text-lg">A curated showcase of recent visual identities and designs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-brand-ivory/50 border border-brand-blue/5 flex flex-col items-center justify-center mb-6 overflow-hidden relative transition-colors group-hover:bg-brand-ivory">
                <div className="w-16 h-16 border border-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue/20 group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-colors">
                  <span className="font-display italic">AIRS</span>
                </div>
                <p className="text-brand-blue/40 font-medium tracking-widest uppercase text-sm">Project Coming Soon</p>
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium mb-2">Curated Project {item}</h3>
                  <p className="text-brand-blue/60 text-sm">Visual Identity & Design</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
                  <span className="text-xl leading-none font-light mb-1">&#8599;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
