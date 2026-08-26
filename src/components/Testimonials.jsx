import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-ivory border-y border-brand-blue/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">Client Relationships.</h2>
        
        <div className="bg-white p-12 md:p-16 rounded-2xl shadow-sm border border-brand-blue/5">
          <div className="text-brand-gold mb-8 opacity-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
              <path d="M14.017 21L16.411 14.502C17.754 11.834 18.067 9.176 17.348 6.559L17.307 6.425C17.07 5.765 16.734 5.251 16.299 4.885C15.864 4.519 15.353 4.336 14.764 4.336C13.882 4.336 13.14 4.673 12.539 5.347C11.938 6.02 11.637 6.84 11.637 7.807C11.637 8.653 11.884 9.387 12.378 10.01C12.871 10.633 13.513 11.01 14.303 11.141L14.475 11.164C14.33 11.986 13.916 12.887 13.234 13.868L12.017 15.631L14.017 21ZM5.01709 21L7.41109 14.502C8.75409 11.834 9.06709 9.176 8.34809 6.559L8.30709 6.425C8.07009 5.765 7.73409 5.251 7.29909 4.885C6.86409 4.519 6.35309 4.336 5.76409 4.336C4.88209 4.336 4.14009 4.673 3.53909 5.347C2.93809 6.02 2.63709 6.84 2.63709 7.807C2.63709 8.653 2.88409 9.387 3.37809 10.01C3.87109 10.633 4.51309 11.01 5.30309 11.141L5.47509 11.164C5.33009 11.986 4.91609 12.887 4.23409 13.868L3.01709 15.631L5.01709 21Z" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl text-brand-blue/40 font-light italic mb-8">
            Testimonials and client success stories coming soon.
          </p>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-4"></div>
          <p className="font-medium">Client Reviews</p>
          <p className="text-sm text-brand-blue/60">Under Curation</p>
        </div>
      </div>
    </section>
  );
}
