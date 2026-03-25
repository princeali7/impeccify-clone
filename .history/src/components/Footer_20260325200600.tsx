'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="border-t border-white/[0.06]">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[260px] rounded-full">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Get exclusive updates, new templates, special offers, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <button className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-200 transition-all whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-3">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>

        {/* Footer Links */}
        <div className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <img
                src="https://impeccify.com/_next/static/media/diamond.c957ae43.svg"
                alt="Impeccify"
                className="w-6 h-6"
              /> */}
              
              <span className="text-white font-bold tracking-tight">IMPECCIFY</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Free Tools</Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">© 2026 Impeccify</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
