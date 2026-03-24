'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { categories } from '@/lib/tools-data';

export default function ToolsPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const displayed = activeId ? categories.filter((c) => c.id === activeId) : categories;

  const scrollTo = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-12 pb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">Free Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            Free Online Calculators<br className="hidden sm:block" /> &amp; Converters
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-8">
            119 free tools for developers, designers, students and professionals. Instant results, no signup.
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { value: '119', label: 'Tools' },
              { value: '15', label: 'Categories' },
              { value: '100%', label: 'Free' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span className="text-xl font-bold text-white">{s.value}</span>
                <span className="text-gray-600 text-xs uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="border-t border-white/6" />
        </div>

        {/* Category filter tabs */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveId(null)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeId === null
                  ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                  : 'bg-transparent text-gray-500 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              All
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeId === null ? 'bg-black/10 text-black' : 'bg-white/8 text-gray-600'}`}>
                119
              </span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeId === cat.id
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                    : 'bg-transparent text-gray-500 border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeId === cat.id ? 'bg-black/10 text-black' : 'bg-white/8 text-gray-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Tool sections */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
          {displayed.map((cat) => (
            <section key={cat.id} id={cat.id}>
              {/* Section header */}
              <div className="flex items-end justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">{cat.label}</h2>
                  <p className="text-xs text-gray-600 mt-0.5">{cat.desc}</p>
                </div>
                <span className="text-xs text-gray-700 bg-white/5 border border-white/8 rounded-full px-3 py-1 font-medium">
                  {cat.count} {cat.count === 1 ? 'tool' : 'tools'}
                </span>
              </div>
              <div className="border-t border-white/6 mb-5" />

              {/* Tool cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {cat.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group relative flex items-start justify-between gap-3 bg-white/2.5 hover:bg-white/6 border border-white/[0.07] hover:border-white/20 rounded-xl px-4 py-4 transition-all duration-150 active:scale-[0.98]"
                  >
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-sm font-semibold text-white group-hover:text-white leading-snug truncate">
                        {tool.name}
                      </span>
                      <span className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {tool.desc}
                      </span>
                    </div>
                    {/* Arrow icon */}
                    <svg
                      className="w-3.5 h-3.5 text-gray-700 group-hover:text-gray-400 mt-0.5 shrink-0 transition-all duration-150 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-20 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700">
            New calculators added regularly. 119 tools and counting.
          </p>
          <Link
            href="/book-call"
            className="text-xs text-gray-500 hover:text-white transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-2"
          >
            Need a custom tool? Book a call →
          </Link>
        </div>
      </main>
    </>
  );
}
