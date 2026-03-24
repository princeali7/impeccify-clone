'use client';
import { useState } from 'react';


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

  return (
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
  );
}
