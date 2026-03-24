'use client';
import { useState } from 'react';

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

  const competitors = [
    {
      name: 'Our Agency',
      highlight: true,
      values: [
        'Launches 40-70% faster',
        '+30% conversion in 60 days',
        'Consistent, on-brand outputs',
        'CAC stable at $250K+/mo spend',
        'One partner, no vendor bloat',
      ],
    },
    {
      name: 'In-house Team',
      highlight: false,
      values: [
        'Slow hiring/onboarding',
        'Know product, but messaging foggy',
        'Consistent brand voice',
        'Limited bandwidth for scale',
        'Expensive, inflexible salaries',
      ],
    },
    {
      name: 'Agencies',
      highlight: false,
      values: [
        'Long timelines, rigid scopes',
        'Generic positioning focus',
        'High production quality',
        'Can scale, but CAC creeps',
        'High retainers, overhead-heavy',
      ],
    },
    {
      name: 'Freelancers',
      highlight: false,
      values: [
        'Inconsistent delivery',
        'Mixed clarity, talent-dependent',
        'Variable quality',
        "Can't keep up at scale",
        'Cheap per project, costly in mgmt',
      ],
    },
    {
      name: 'AI Tools',
      highlight: false,
      values: [
        'Instant outputs',
        'No narrative clarity',
        'Inconsistent quality',
        'Not enterprise-ready',
        'Low cost, but high manual polish',
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why Choose Us?</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-gray-400 w-40"></th>
                  {competitors.map((c, i) => (
                    <th key={i} className={`py-4 px-4 text-sm font-semibold text-center ${c.highlight ? 'text-blue-400' : 'text-gray-400'}`}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, ci) => (
                  <tr key={ci} className="border-b border-white/[0.04]">
                    <td className="py-4 pr-6 text-sm font-semibold text-white">{cat}</td>
                    {competitors.map((c, i) => (
                      <td key={i} className={`py-4 px-4 text-center text-xs ${c.highlight ? 'text-green-400 bg-green-500/[0.03]' : 'text-gray-400'}`}>
                        {c.values[ci]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">← Scroll to see more →</p>
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
