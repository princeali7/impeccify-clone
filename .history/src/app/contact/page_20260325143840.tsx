'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contactMethods = [
  {
    label: 'Email',
    value: 'impeccify@gmail.com',
    href: 'mailto:impeccify@gmail.com',
    description: 'Drop us an email anytime — we reply within 24 hours.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    value: '@impeccify',
    href: 'https://twitter.com/impeccify',
    description: 'Slide into our DMs — we are active and responsive.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@impeccify',
    href: 'https://instagram.com/impeccify',
    description: 'Follow our work and send us a message there.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20 hover:border-pink-500/40',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Book a Call',
    value: 'Free 15-min call',
    href: '/book-call',
    description: 'Prefer talking? Get on a quick call with our team.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20 hover:border-green-500/40',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', service: '', budget: '', details: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://impeccify.com/gradients/hero1.svg" alt="" className="absolute top-0 left-0 w-[500px] pointer-events-none opacity-40" />
        <img src="https://impeccify.com/gradients/hero2.svg" alt="" className="absolute bottom-0 right-0 w-[500px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Contact</span>
          </div>

          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[160px] rounded-full text-sm mb-6">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Start a Conversation
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and we will get back to you within 24 hours. No commitments, no pressure.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${m.bg}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4 ${m.color}`}>
                  {m.icon}
                </div>
                <p className={`font-bold mb-0.5 ${m.color}`}>{m.label}</p>
                <p className="text-white font-semibold text-sm mb-2">{m.value}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{m.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info split */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left info panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">We&apos;d Love to Hear From You</h2>
                <p className="text-gray-400 leading-relaxed">
                  Whether you have a clear vision or a rough idea, reach out and let&apos;s figure it out together. We work with startups, agencies, and established businesses alike.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '⚡', title: '24h Response', desc: 'We reply to every inquiry within one business day.' },
                  { icon: '🔒', title: 'NDA Available', desc: 'Need confidentiality? We sign NDAs before any discussion.' },
                  { icon: '🌍', title: 'Remote Friendly', desc: 'We work with clients globally across all time zones.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                <p className="text-sm text-gray-400 mb-3">Prefer a quick call first?</p>
                <Link
                  href="/book-call"
                  className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Free 15-min Call
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">Thanks for reaching out. We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 space-y-5">
                  <h3 className="text-xl font-bold mb-1">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mb-2">All fields marked <span className="text-red-400">*</span> are required.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Service <span className="text-red-400">*</span></label>
                      <select
                        name="service" value={formData.service} onChange={handleChange} required
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#111]">Select a service</option>
                        <option value="design" className="bg-[#111]">UI/UX Design</option>
                        <option value="development" className="bg-[#111]">Web Development</option>
                        <option value="ecommerce" className="bg-[#111]">E-commerce</option>
                        <option value="redesign" className="bg-[#111]">Website Redesign</option>
                        <option value="other" className="bg-[#111]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Budget</label>
                      <select
                        name="budget" value={formData.budget} onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors appearance-none"
                      >
                        <option value="" className="bg-[#111]">Select a budget</option>
                        <option value="under500" className="bg-[#111]">Under $500</option>
                        <option value="500-1000" className="bg-[#111]">$500 – $1,000</option>
                        <option value="1000-2500" className="bg-[#111]">$1,000 – $2,500</option>
                        <option value="2500plus" className="bg-[#111]">$2,500+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Project Details <span className="text-red-400">*</span></label>
                    <textarea
                      name="details" value={formData.details} onChange={handleChange} required rows={5}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                      placeholder="Tell us about your project — what you need, your goals, any references or inspiration..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-100"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    By submitting, you agree to our{' '}
                    <span className="text-gray-500">Privacy Policy</span>. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
