'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import { useEffect } from 'react';

export default function BookCallPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-16">
        {/* Hero section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center pt-10 pb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400 tracking-wide uppercase font-medium">Free Consultation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Book a Discovery Call
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Schedule your free consultation with our team
          </p>

          {/* Pill tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {[
              { icon: '⏱', label: '15-30 minutes' },
              { icon: '📞', label: 'Voice call' },
              { icon: '✦', label: 'Free consultation' },
            ].map((tag) => (
              <span
                key={tag.label}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300"
              >
                <span className="text-xs">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Calendly Embed */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-10">
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden border border-white/[0.08]"
            data-url="https://calendly.com/impeccify/discovery-call?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=ffffff"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </section>

        {/* Description */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-4">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Once booked, you'll receive a confirmation email with the meeting link. A team member will be there to assist you with your project needs.
          </p>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Explore more links */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm mb-4">Not ready to book? Explore more:</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Homepage
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/#services" className="hover:text-white transition-colors duration-200">
              Our Services
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/#pricing" className="hover:text-white transition-colors duration-200">
              Get a Quote
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/#reviews" className="hover:text-white transition-colors duration-200">
              Reviews
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
