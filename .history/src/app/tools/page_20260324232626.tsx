'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { categories } from '@/lib/tools-data';

const categoryMeta: Record<string, { icon: React.ReactNode; iconBg: string; activeText: string }> = {
  'css-unit': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    iconBg: 'bg-blue-500/15 text-blue-400',
    activeText: 'text-blue-300',
  },
  'developer': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    activeText: 'text-emerald-300',
  },
  'color': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    iconBg: 'bg-purple-500/15 text-purple-400',
    activeText: 'text-purple-300',
  },
  'math': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
    iconBg: 'bg-orange-500/15 text-orange-400',
    activeText: 'text-orange-300',
  },
  'education': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    iconBg: 'bg-sky-500/15 text-sky-400',
    activeText: 'text-sky-300',
  },
  'food': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>,
    iconBg: 'bg-red-500/15 text-red-400',
    activeText: 'text-red-300',
  },
  'business': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>,
    iconBg: 'bg-teal-500/15 text-teal-400',
    activeText: 'text-teal-300',
  },
  'gaming': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1" fill="currentColor"/><circle cx="18" cy="11" r="1" fill="currentColor"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>,
    iconBg: 'bg-pink-500/15 text-pink-400',
    activeText: 'text-pink-300',
  },
  'sports': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>,
    iconBg: 'bg-yellow-500/15 text-yellow-400',
    activeText: 'text-yellow-300',
  },
  'fitness': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><path d="M3 9.5h3v5H3z"/><path d="M18 9.5h3v5h-3z"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    iconBg: 'bg-green-500/15 text-green-400',
    activeText: 'text-green-300',
  },
  'construction': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    iconBg: 'bg-cyan-500/15 text-cyan-400',
    activeText: 'text-cyan-300',
  },
  'lifestyle': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    iconBg: 'bg-violet-500/15 text-violet-400',
    activeText: 'text-violet-300',
  },
  'home': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    iconBg: 'bg-lime-500/15 text-lime-400',
    activeText: 'text-lime-300',
  },
  'agriculture': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22V12m0 0C12 7 7 2 2 2c0 5 5 10 10 10zm0 0c0-5 5-10 10-10-5 0-10 5-10 10z"/></svg>,
    iconBg: 'bg-amber-500/15 text-amber-400',
    activeText: 'text-amber-300',
  },
  'unit': {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M7 16V4m0 0L3 8m4-4 4 4"/><path d="M17 8v12m0 0 4-4m-4 4-4-4"/></svg>,
    iconBg: 'bg-indigo-500/15 text-indigo-400',
    activeText: 'text-indigo-300',
  },
};

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

        {/* Category card grid */}
        <section className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const meta = categoryMeta[cat.id];
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={`group text-left flex flex-col gap-4 p-5 rounded-2xl border transition-all duration-200 active:scale-[0.97] ${
                    isActive
                      ? 'bg-white/8 border-white/20'
                      : 'bg-white/[0.025] border-white/[0.07] hover:bg-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${meta?.iconBg ?? 'bg-white/10 text-gray-400'}`}>
                    {meta?.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <p className={`text-sm font-semibold leading-snug transition-colors ${isActive ? (meta?.activeText ?? 'text-white') : 'text-white'}`}>
                      {cat.label}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {cat.count} {cat.count === 1 ? 'tool' : 'tools'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          {/* Clear filter */}
          {activeId && (
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => setActiveId(null)}
                className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1.5 border border-white/10 hover:border-white/30 rounded-full px-3 py-1.5"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                Clear filter — show all categories
              </button>
            </div>
          )}
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
