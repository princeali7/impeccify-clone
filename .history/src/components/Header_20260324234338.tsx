'use client';
import { useState } from 'react';
import Link from 'next/link';

function DiamondLogo() {
  return (
    <img
      src="https://impeccify.com/_next/static/media/diamond.c957ae43.svg"
      alt="Impeccify"
      className="w-7 h-7"
    />
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <DiamondLogo />
            <span className="text-white font-bold text-xl tracking-tight">IMPECCIFY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Tools', href: '/tools' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Process', href: '#process' },
              { label: 'Blog', href: '/blog' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/book-call" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Book a Call
            </Link>
            <Link
              href="#pricing"
              className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.06]">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {['Tools', 'Pricing', 'Process', 'Blog', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Tools' ? '/tools' : item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white text-base transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="bg-white text-black text-center font-semibold px-5 py-3 rounded-full mt-2 hover:bg-gray-100 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
