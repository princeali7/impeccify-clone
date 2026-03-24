'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', service: '', budget: '', details: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We are here to help you with any questions or concerns you may have.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <a href="mailto:impeccify@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-300">impeccify@gmail.com</p>
                </div>
              </a>

              <a href="https://twitter.com/impeccify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Twitter (X)</p>
                  <p className="text-gray-300">@impeccify</p>
                </div>
              </a>

              <a href="https://instagram.com/impeccify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-white/20 transition-all">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="text-gray-300">@impeccify</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Full Name <span className="text-red-400">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Email Address <span className="text-red-400">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Service Interested In <span className="text-red-400">*</span></label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                <option value="" className="bg-gray-900">Select a service</option>
                <option value="design" className="bg-gray-900">UI/UX Design</option>
                <option value="development" className="bg-gray-900">Web Development</option>
                <option value="ecommerce" className="bg-gray-900">E-commerce</option>
                <option value="redesign" className="bg-gray-900">Website Redesign</option>
                <option value="other" className="bg-gray-900">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Target Budget <span className="text-red-400">*</span></label>
              <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                <option value="" className="bg-gray-900">Select budget range</option>
                <option value="500-1000" className="bg-gray-900">$500 - $1,000</option>
                <option value="1000-2000" className="bg-gray-900">$1,000 - $2,000</option>
                <option value="2000-5000" className="bg-gray-900">$2,000 - $5,000</option>
                <option value="5000+" className="bg-gray-900">$5,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Project Details <span className="text-red-400">*</span></label>
              <textarea name="details" value={formData.details} onChange={handleChange} required rows={4} className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full bg-white text-black font-semibold py-3.5 rounded-full hover:bg-gray-200 transition-all hover:scale-[1.01]">
              Send Message
            </button>
            <p className="text-gray-600 text-xs text-center">
              By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
