'use client';
import { useState } from 'react';

type IconType = 'green' | 'red' | 'yellow' | 'grey';

function StatusIcon({ type }: { type: IconType }) {
  if (type === 'green') {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (type === 'red') {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2L10 10M10 2L2 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  if (type === 'yellow') {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2L12.5 11.5H1.5L7 2Z" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" fill="#FACC15" />
          <path d="M7 6V8.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="7" cy="10" r="0.75" fill="#000" />
        </svg>
      </span>
    );
  }
  // grey
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-600">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Comparison() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://impeccify.com/get-started`;
  };

  const categories = ['Speed', 'Conversion Clarity', 'Quality', 'Scalability', 'Cost-Efficiency'];

  const rows: { name: string; highlight: boolean; cells: { icon: IconType; text: string }[] }[] = [
    {
      name: 'Our Agency',
      highlight: true,
      cells: [
        { icon: 'green', text: 'Launches 40-70% faster' },
        { icon: 'green', text: '+30% conversion in 60 days' },
        { icon: 'green', text: 'Consistent, on-brand outputs' },
        { icon: 'green', text: 'CAC stable at $250K+/mo spend' },
        { icon: 'green', text: 'One partner, no vendor bloat' },
      ],
    },
    {
      name: 'In-house Team',
      highlight: false,
      cells: [
        { icon: 'red', text: 'Slow hiring/onboarding' },
        { icon: 'yellow', text: 'Know product, but messaging foggy' },
        { icon: 'green', text: 'Consistent brand voice' },
        { icon: 'red', text: 'Limited bandwidth for scale' },
        { icon: 'red', text: 'Expensive, inflexible salaries' },
      ],
    },
    {
      name: 'Agencies',
      highlight: false,
      cells: [
        { icon: 'red', text: 'Long timelines, rigid scopes' },
        { icon: 'red', text: 'Generic positioning focus' },
        { icon: 'green', text: 'High production quality' },
        { icon: 'yellow', text: 'Can scale, but CAC creeps' },
        { icon: 'red', text: 'High retainers, overhead-heavy' },
      ],
    },
    {
      name: 'Freelancers',
      highlight: false,
      cells: [
        { icon: 'red', text: 'Inconsistent delivery' },
        { icon: 'grey', text: 'Mixed clarity, talent-dependent' },
        { icon: 'grey', text: 'Variable quality' },
        { icon: 'red', text: "Can't keep up at scale" },
        { icon: 'yellow', text: 'Cheap per project, costly in mgmt' },
      ],
    },
    {
      name: 'AI Tools',
      highlight: false,
      cells: [
        { icon: 'green', text: 'Instant outputs' },
        { icon: 'red', text: 'No narrative clarity' },
        { icon: 'red', text: 'Inconsistent quality' },
        { icon: 'red', text: 'Not enterprise-ready' },
        { icon: 'green', text: 'Low cost, but high manual polish' },
      ],
    },
    {
      name: 'DIY Tools',
      highlight: false,
      cells: [
        { icon: 'yellow', text: 'Fast, but basic' },
        { icon: 'red', text: 'No strategic clarity' },
        { icon: 'red', text: 'Off-brand, inconsistent' },
        { icon: 'red', text: 'Limited scalability' },
        { icon: 'red', text: 'High hidden labor cost' },
      ],
    },
  ];

  const redesignFeatures = [
    'Complete Website Analysis & Audit',
    'Modern UI/UX Redesign',
    'Pixel-Perfect Design & Development',
    'Lightning-Fast Performance',
    'Scroll/Hover/Micro Animations',
    'Payment Integration (Stripe, PayPal, etc.)',
    'Forms Integration (Contact / Inquiry)',
  ];

  return (
    <>
      {/* Comparison Table Section */}
      <section className="relative py-16 overflow-hidden bg-[#0a0a0a]">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center bg-[#1a1a1a] border border-white/10 text-white text-sm font-semibold rounded-full px-5 py-2">
              Comparison
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate" style={{ borderSpacing: '0 6px' }}>
              {/* Category header row */}
              <thead>
                <tr>
                  <th className="w-40 pb-4" />
                  {categories.map((cat, i) => (
                    <th key={i} className="pb-4 px-4 text-center text-base font-bold text-white">
                      {cat}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    {/* Row label */}
                    <td
                      className={`px-5 py-5 rounded-l-xl text-sm font-bold whitespace-nowrap ${
                        row.highlight ? 'bg-[#e8ff00] text-black' : 'bg-[#141414] text-white border border-white/[0.06]'
                      }`}
                    >
                      {row.name}
                    </td>
                    {/* Cells */}
                    {row.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-4 text-center align-middle ${
                          ci === row.cells.length - 1 ? 'rounded-r-xl' : ''
                        } ${
                          row.highlight
                            ? 'bg-[#e8ff00]'
                            : 'bg-[#141414] border-t border-b border-white/[0.06]'
                        } ${
                          !row.highlight && ci === row.cells.length - 1
                            ? 'border-r border-white/[0.06]'
                            : ''
                        } ${
                          !row.highlight && ci === 0
                            ? 'border-l border-white/[0.06]'
                            : ''
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <StatusIcon type={row.highlight ? 'green' : cell.icon} />
                          <span className={`text-xs leading-snug max-w-[130px] ${row.highlight ? 'text-black/70' : 'text-gray-400'}`}>
                            {cell.text}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Website Redesign Section */}
      <section className="relative py-9 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Special Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Website Redesign</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base">
              Already have a website but it&apos;s not converting? We&apos;ll redesign it from the ground up.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />
              <div className="relative z-10">
                {/* Save Badge */}
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-green-400 text-sm font-semibold">SAVE 50%</span>
                </div>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-5xl font-bold text-white">$1,775</span>
                  <span className="text-gray-500 text-xl line-through mb-2">$3,550</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">One-time payment · No hidden fees</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {redesignFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <img
                        src="https://impeccify.com/_next/static/media/checkmark.a069e7ec.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="flex-shrink-0"
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://impeccify.com/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3.5 rounded-xl text-sm"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-bold text-white mb-2">Get Your Redesign Quote</h3>
              <p className="text-gray-400 text-sm mb-6">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Current Website URL <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    What are your redesign goals? <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="e.g. Improve conversions, modernize the design, better mobile experience..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold py-3.5 rounded-xl text-sm mt-2"
                >
                  Send My Quote Request →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
