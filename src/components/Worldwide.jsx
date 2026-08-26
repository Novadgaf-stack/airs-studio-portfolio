import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ArrowUpRight } from 'lucide-react';
import { Globe3D } from './ui/3d-globe';

const markers = [
  { lat: 7.3775, lng: 3.947, label: 'Ibadan, Nigeria' },
  { lat: 6.5244, lng: 3.3792, label: 'Lagos, Nigeria' },
  { lat: 51.5074, lng: -0.1278, label: 'London, UK' },
  { lat: 40.7128, lng: -74.006, label: 'New York, USA' },
  { lat: 25.2048, lng: 55.2708, label: 'Dubai, UAE' },
  { lat: 35.6762, lng: 139.6503, label: 'Tokyo, Japan' },
  { lat: -33.8688, lng: 151.2093, label: 'Sydney, Australia' },
  { lat: 48.8566, lng: 2.3522, label: 'Paris, France' },
  { lat: -23.5505, lng: -46.6333, label: 'São Paulo, Brazil' },
];

export default function Worldwide() {
  return (
    <section id="worldwide" className="relative overflow-hidden bg-brand-blue text-brand-ivory py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_50%,rgba(153,101,39,0.16),transparent_32%)]" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-4 items-center min-h-[560px]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-30 max-w-xl"
          >
            <div className="flex items-center gap-3 text-brand-gold mb-7">
              <Globe2 size={18} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase">
                Worldwide Creative Partner
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Good design
              <br />
              knows <span className="text-brand-gold italic">no borders.</span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-brand-ivory/65 max-w-lg mb-9">
              Based in Ibadan, Nigeria, AIRS works with ambitious brands,
              founders, organizations and individuals across the world.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="px-5 py-3 rounded-full border border-brand-ivory/15 bg-brand-ivory/5">
                <span className="font-display text-xl font-semibold">100+</span>
                <span className="ml-2 text-sm text-brand-ivory/55">Projects</span>
              </div>

              <div className="px-5 py-3 rounded-full border border-brand-ivory/15 bg-brand-ivory/5">
                <span className="font-display text-xl font-semibold">50+</span>
                <span className="ml-2 text-sm text-brand-ivory/55">Happy Clients</span>
              </div>

              <div className="px-5 py-3 rounded-full border border-brand-ivory/15 bg-brand-ivory/5">
                <span className="font-display text-xl font-semibold">4+</span>
                <span className="ml-2 text-sm text-brand-ivory/55">Years</span>
              </div>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-medium border-b border-brand-gold pb-2 hover:text-brand-gold transition-colors"
            >
              Start a project from anywhere
              <ArrowUpRight
                size={17}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[620px] lg:h-[680px] -mr-20 md:-mr-32 lg:-mr-40"
          >
            <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full scale-50" />

            <div className="absolute inset-0 z-10">
              <Globe3D
                className="h-full w-full"
                markers={markers}
                config={{
                  atmosphereColor: '#996527',
                  atmosphereIntensity: 18,
                  bumpScale: 4,
                  autoRotateSpeed: 0.25,
                }}
                onMarkerClick={(marker) => {
                  console.log('AIRS worldwide:', marker.label);
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
