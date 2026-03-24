'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

// ── Types ──────────────────────────────────────────────
interface Option {
  id: string;
  label: string;
  desc: string;
  price: number;
}

// ── Step data ──────────────────────────────────────────
const projectTypes: Option[] = [
  { id: 'landing',   label: 'Landing Page',              desc: 'Single page, high-converting',         price: 295  },
  { id: 'small',     label: 'Small Website (2-5 pages)', desc: 'Brochure site, basic info',             price: 595  },
  { id: 'business',  label: 'Business Website (6-10)',   desc: 'Full business presence',                price: 1295 },
  { id: 'large',     label: 'Large Website (11-20+)',    desc: 'Complex multi-page site',               price: 2195 },
  { id: 'ecommerce', label: 'E-Commerce Store',          desc: 'Online shop with checkout',             price: 1895 },
  { id: 'webapp',    label: 'Web Application',           desc: 'Custom app with user accounts',         price: 2995 },
  { id: 'portfolio', label: 'Portfolio Website',         desc: 'Showcase your work',                    price: 595  },
  { id: 'blog',      label: 'Blog / Content Site',       desc: 'Content-driven, SEO focused',           price: 695  },
];

const designOptions: Option[] = [
  { id: 'template',  label: 'Template-Based',    desc: 'Clean, proven layout — fast delivery',  price: 0   },
  { id: 'custom',    label: 'Custom Design',      desc: 'Tailored to your brand identity',        price: 400 },
  { id: 'premium',   label: 'Premium Custom',     desc: 'Motion, micro-interactions, standout',   price: 900 },
  { id: 'figma',     label: 'From Figma File',    desc: 'You provide the design, we build it',    price: 200 },
];

const featureOptions: Option[] = [
  { id: 'contact',   label: 'Contact Form',       desc: 'Email notifications included',          price: 0   },
  { id: 'cms',       label: 'CMS / Blog',         desc: 'Manage content without coding',         price: 300 },
  { id: 'gallery',   label: 'Photo Gallery',      desc: 'Optimised image grid',                  price: 150 },
  { id: 'booking',   label: 'Booking / Calendar', desc: 'Calendly or custom booking widget',     price: 200 },
  { id: 'auth',      label: 'User Accounts',      desc: 'Sign up, login, dashboard',             price: 500 },
  { id: 'payment',   label: 'Payment Gateway',    desc: 'Stripe integration',                    price: 350 },
  { id: 'chat',      label: 'Live Chat Widget',   desc: 'Crisp or Intercom integration',         price: 100 },
  { id: 'multilang', label: 'Multi-language',     desc: 'i18n support for 2+ languages',         price: 400 },
];

const seoOptions: Option[] = [
  { id: 'basicseo',  label: 'Basic SEO Setup',      desc: 'Meta tags, sitemap, robots.txt',        price: 0   },
  { id: 'advancedseo', label: 'Advanced SEO',       desc: 'Schema, keyword research, on-page',     price: 350 },
  { id: 'analytics', label: 'Google Analytics 4',   desc: 'Full tracking & event setup',           price: 150 },
  { id: 'speed',     label: 'Performance Audit',    desc: 'Lighthouse 90+ score guaranteed',       price: 200 },
  { id: 'copywrite', label: 'Copywriting',          desc: 'SEO-optimised page copy written for you', price: 450 },
  { id: 'maintenance', label: 'Monthly Maintenance', desc: '3 months of updates & support',        price: 295 },
];

const TOTAL_STEPS = 5;

const faqItems = [
  {
    q: 'How much does website design cost?',
    a: 'Website design costs range from $295 for a simple landing page to $2,995+ for a full web application. The price depends on the number of pages, custom design requirements, and extra features like e-commerce or user accounts. Use this calculator for an instant estimate.'
  },
  {
    q: 'What factors affect website cost?',
    a: 'The main factors are: project type and size, whether you need a custom design or a template, specific features (booking, payment, CMS), SEO requirements, and ongoing maintenance. Each of these is accounted for in the calculator above.'
  },
  {
    q: 'What is included for free in every project?',
    a: 'Every project includes React/Next.js development, fully responsive design, basic SEO setup, SSL certificate, Vercel deployment, full source code, and white-label delivery — at no extra charge.'
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most projects are delivered in 2–4 weeks. Simple landing pages can be done in 5–7 days. Larger web applications may take 6–8 weeks. You\'ll receive a written timeline before work begins.'
  },
  {
    q: 'Is the website cost calculator accurate?',
    a: 'The calculator gives a reliable ballpark based on real project data from 80+ completed projects. Your final price is confirmed in a free 15-minute call and locked in before work starts — no surprises.'
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Most projects are split into two payments: 50% upfront and 50% on delivery. For larger projects we can arrange milestone-based payment schedules.'
  },
];

// ── Component ─────────────────────────────────────────
export default function WebsiteCostCalculator() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [design, setDesign] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [seo, setSeo] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Price calculation ───────────────────────────────
  const basePrice = projectTypes.find((o) => o.id === projectType)?.price ?? 0;
  const designPrice = designOptions.find((o) => o.id === design)?.price ?? 0;
  const featuresPrice = features.reduce((sum, id) => sum + (featureOptions.find((o) => o.id === id)?.price ?? 0), 0);
  const seoPrice = seo.reduce((sum, id) => sum + (seoOptions.find((o) => o.id === id)?.price ?? 0), 0);
  const total = basePrice + designPrice + featuresPrice + seoPrice;

  const toggleFeature = (id: string) =>
    setFeatures((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  const toggleSeo = (id: string) =>
    setSeo((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  const canNext = () => {
    if (step === 1) return projectType !== null;
    if (step === 2) return design !== null;
    return true;
  };

  const stepLabels = ['Project Type', 'Design', 'Features', 'SEO & Extras', 'Get Quote'];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Hero */}
          <div className="text-center pt-10 pb-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs text-gray-400 tracking-wide uppercase font-medium">Free Calculator</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Free Website Design Cost Calculator
            </h1>
            <p className="text-base text-gray-400 max-w-xl mx-auto">
              Calculate your website design and development cost instantly. Toggle features, see real-time pricing. No signup required.
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-0 mb-8">
            {stepLabels.map((label, i) => {
              const n = i + 1;
              const active = n === step;
              const done = n < step;
              return (
                <div key={n} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
                      done ? 'bg-white text-black border-white' :
                      active ? 'bg-white/15 text-white border-white/40' :
                      'bg-white/4 text-gray-600 border-white/10'
                    }`}>
                      {done ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : n}
                    </div>
                    <span className={`text-[10px] font-medium hidden sm:block ${active ? 'text-white' : done ? 'text-gray-400' : 'text-gray-700'}`}>
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div className={`flex-1 h-px mx-2 mb-4 transition-all duration-300 ${done ? 'bg-white/40' : 'bg-white/10'}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Calculator card */}
          <div className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-8 mb-6">

            {/* Running total */}
            {step < 5 && (
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/8">
                <span className="text-sm text-gray-500">Estimated Total</span>
                <span className="text-2xl font-bold text-white">${total.toLocaleString()}</span>
              </div>
            )}

            {/* ── Step 1: Project Type ── */}
            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Project Type</h2>
                <p className="text-sm text-gray-500 mb-5">What kind of website do you need?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setProjectType(opt.id)}
                      className={`text-left flex items-start justify-between gap-3 p-4 rounded-xl border transition-all duration-200 ${
                        projectType === opt.id
                          ? 'bg-white/10 border-white/40'
                          : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </div>
                      <div className="shrink-0 text-sm font-bold text-white">${opt.price.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 2: Design ── */}
            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Design</h2>
                <p className="text-sm text-gray-500 mb-5">Choose your design approach.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {designOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDesign(opt.id)}
                      className={`text-left flex items-start justify-between gap-3 p-4 rounded-xl border transition-all duration-200 ${
                        design === opt.id
                          ? 'bg-white/10 border-white/40'
                          : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">{opt.label}</div>
                        <div className="text-xs text-gray-500">{opt.desc}</div>
                      </div>
                      <div className="shrink-0 text-sm font-bold text-white">
                        {opt.price === 0 ? 'Free' : `+$${opt.price.toLocaleString()}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 3: Features ── */}
            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Features</h2>
                <p className="text-sm text-gray-500 mb-5">Select any extra features you need. (optional)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureOptions.map((opt) => {
                    const selected = features.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleFeature(opt.id)}
                        className={`text-left flex items-start justify-between gap-3 p-4 rounded-xl border transition-all duration-200 ${
                          selected
                            ? 'bg-white/10 border-white/40'
                            : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all ${selected ? 'bg-white border-white' : 'border-white/20'}`}>
                            {selected && (
                              <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white mb-0.5">{opt.label}</div>
                            <div className="text-xs text-gray-500">{opt.desc}</div>
                          </div>
                        </div>
                        <div className="shrink-0 text-sm font-bold text-white">
                          {opt.price === 0 ? 'Free' : `+$${opt.price.toLocaleString()}`}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Step 4: SEO & Extras ── */}
            {step === 4 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-1">SEO & Extras</h2>
                <p className="text-sm text-gray-500 mb-5">Boost visibility and long-term results. (optional)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seoOptions.map((opt) => {
                    const selected = seo.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleSeo(opt.id)}
                        className={`text-left flex items-start justify-between gap-3 p-4 rounded-xl border transition-all duration-200 ${
                          selected
                            ? 'bg-white/10 border-white/40'
                            : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all ${selected ? 'bg-white border-white' : 'border-white/20'}`}>
                            {selected && (
                              <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white mb-0.5">{opt.label}</div>
                            <div className="text-xs text-gray-500">{opt.desc}</div>
                          </div>
                        </div>
                        <div className="shrink-0 text-sm font-bold text-white">
                          {opt.price === 0 ? 'Free' : `+$${opt.price.toLocaleString()}`}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Step 5: Get Quote ── */}
            {step === 5 && (
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Your Estimate</h2>
                <p className="text-sm text-gray-500 mb-6">Here&apos;s a breakdown of your project cost.</p>

                <div className="space-y-2 mb-6">
                  {projectType && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{projectTypes.find((o) => o.id === projectType)?.label}</span>
                      <span className="text-white font-semibold">${basePrice.toLocaleString()}</span>
                    </div>
                  )}
                  {design && designPrice > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{designOptions.find((o) => o.id === design)?.label}</span>
                      <span className="text-white font-semibold">+${designPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {features.map((id) => {
                    const opt = featureOptions.find((o) => o.id === id);
                    if (!opt || opt.price === 0) return null;
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-gray-400">{opt.label}</span>
                        <span className="text-white font-semibold">+${opt.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  {seo.map((id) => {
                    const opt = seoOptions.find((o) => o.id === id);
                    if (!opt || opt.price === 0) return null;
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-gray-400">{opt.label}</span>
                        <span className="text-white font-semibold">+${opt.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-white/10 pt-3 mt-3 flex justify-between">
                    <span className="font-bold text-white">Estimated Total</span>
                    <span className="text-2xl font-bold text-white">${total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  href="/book-call"
                  className="block w-full text-center bg-white/8 border border-white/15 text-white font-semibold py-3.5 rounded-xl text-sm hover:bg-white/12 hover:border-white/25 active:scale-[0.98] transition-all duration-200"
                >
                  Book a Free Call — Get Fixed Price
                </Link>
                <button
                  onClick={() => { setStep(1); setProjectType(null); setDesign(null); setFeatures([]); setSeo([]); }}
                  className="w-full text-center text-xs text-gray-600 hover:text-gray-400 mt-3 transition-colors"
                >
                  Start over
                </button>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="text-sm text-gray-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back
                </button>
                <button
                  onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
                  disabled={!canNext()}
                  className="flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-white/12 hover:border-white/25 disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-200"
                >
                  {step === 4 ? 'Get Quote' : 'Next'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* CTA card */}
          <div className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Want an Exact Quote for Your Project?</h2>
            <p className="text-sm text-gray-400 mb-5">The calculator gives you a ballpark. A 15-minute call gives you a fixed price, a timeline, and a clear plan. No pressure, no commitment.</p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-6">
              {['Fixed price with no hidden fees', 'Delivery timeline in writing', 'Free consultation, no obligation'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
            <Link
              href="/book-call"
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/12 hover:border-white/25 active:scale-[0.98] transition-all duration-200"
            >
              Book a Free Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/8">
              {[
                { val: '80+',    label: 'Projects Delivered' },
                { val: '100%',   label: 'Client Satisfaction' },
                { val: '2-4 Wks', label: 'Avg. Delivery' },
                { val: '$495',   label: 'Starting Price' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-white">{s.val}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Included free */}
          <div className="bg-white/4 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">Included Free With Every Project</h2>
            <div className="flex flex-wrap gap-2">
              {['React / Next.js', 'Responsive Design', 'Basic SEO', 'SSL Certificate', 'Vercel Deployment', 'Source Code', 'White Label'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-5">Website Design Cost FAQ</h2>
            <div className="space-y-2">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white/4 border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-white pr-4">{item.q}</span>
                    <svg
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/8 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-700 text-center leading-relaxed">
            Disclaimer: These estimates are based on industry averages and may not reflect your exact project requirements. Final pricing will be confirmed during consultation. Actual costs may vary based on specific needs, complexity, and market conditions.
          </p>
        </div>
      </main>
    </>
  );
}
