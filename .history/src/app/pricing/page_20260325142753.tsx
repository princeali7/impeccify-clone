'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-400">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const plans = [
  {
    name: 'Foundation',
    badge: 'Limited Time Offer',
    originalPrice: 645,
    price: 495,
    fastPrice: 695,
    savePercent: 30,
    description: 'Perfect for small businesses and freelancers who want a stunning design for their business.',
    features: [
      'Premium Landing Page Design',
      'Pixel-Perfect Design',
      'Modern UI/UX Design',
      'Visual Hierarchy & Layout',
      'Color Scheme & Typography',
      'Mobile Responsive Design',
      'Up to 10 Design Revisions',
    ],
    popular: false,
    cta: 'Get Started Now',
  },
  {
    name: 'Professional',
    badge: 'Most Popular',
    originalPrice: 1400,
    price: 945,
    fastPrice: 1295,
    savePercent: 48,
    description: 'Perfect for small businesses and freelancers who want to build a website for their business.',
    features: [
      'Landing Page Design & Development',
      'Website Development (React / Next.js)',
      'Pixel-Perfect Design',
      'Lightning-Fast Performance',
      'Scroll Animations',
      'Hover & Micro Interactions',
      'Form Integration (Contact / Inquiry)',
      'Responsive on All Devices',
      'Up to 20 Design Revisions',
    ],
    popular: true,
    cta: 'Get Started Now',
  },
  {
    name: 'Enterprise',
    badge: 'Limited Time Offer',
    originalPrice: 3110,
    price: 1885,
    fastPrice: 2485,
    savePercent: 65,
    description: 'Perfect for businesses seeking a premium web solution with advanced features.',
    features: [
      'Complete Multi-Page Website',
      'Pixel-Perfect Design & Development',
      'Lightning-Fast Performance',
      'Scroll, Hover & Micro Animations',
      'Website Form Integration',
      'Payment Integration (Stripe, PayPal, etc.)',
      'Any 3rd-Party Integration (CRM, API, etc.)',
      'Contact Us Form Integration',
      'Unlimited Revisions',
    ],
    popular: false,
    cta: 'Get Started Now',
  },
];

const faqs = [
  {
    q: 'How long does it take to complete a project?',
    a: 'Typical turnaround is 5–14 business days depending on the plan. With Fast Delivery enabled, we prioritise your project and cut that timeline roughly in half.',
  },
  {
    q: 'What is included in the revisions?',
    a: 'Revisions cover any changes to design, copy, layout, or functionality. We iterate until you are 100% happy before the final handoff.',
  },
  {
    q: 'Do you offer ongoing support after delivery?',
    a: 'Yes. We provide 30 days of post-launch support for bug fixes at no extra charge. Extended maintenance plans are available on request.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. You can upgrade to a higher plan at any time and we will only charge the difference.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily build with React and Next.js for blazing-fast performance. We can also work with your existing tech stack on request.',
  },
  {
    q: 'Is there a contract or lock-in?',
    a: 'No contracts, no commitments. You pay per project and there is zero lock-in. Work with us as much or as little as you need.',
  },
];

const inclusions = [
  'Source code handoff',
  'Figma design files',
  'SEO meta tags',
  'Sitemap & robots.txt',
  'Custom domain setup',
  'SSL certificate',
  'Google Analytics setup',
  'Performance optimisation',
];

export default function PricingPage() {
  const [fastDelivery, setFastDelivery] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      {/* Header spacer */}
      <div className="h-16" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://impeccify.com/gradients/hero1.svg" alt="" className="absolute top-0 left-0 w-[500px] pointer-events-none opacity-40" />
        <img src="https://impeccify.com/gradients/hero2.svg" alt="" className="absolute bottom-0 right-0 w-[500px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Pricing</span>
          </div>

          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[160px] rounded-full text-sm mb-6">Our Pricings</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transparent,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple
            </span>{' '}
            Pricing
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            No hidden fees, no surprises. Pick the plan that fits your project and get started today.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '48h', label: 'Average Response' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className={`text-sm font-medium transition-colors ${!fastDelivery ? 'text-white' : 'text-gray-400'}`}>Normal Pace</span>
            <button
              onClick={() => setFastDelivery(!fastDelivery)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${fastDelivery ? 'bg-blue-500' : 'bg-white/20'}`}
              aria-checked={fastDelivery}
              role="switch"
              aria-label="Toggle fast delivery"
            >
              <span
                className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
                style={{ transform: fastDelivery ? 'translateX(24px)' : 'translateX(0px)' }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${fastDelivery ? 'text-white' : 'text-gray-400'}`}>Fast Delivery</span>
              <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full font-semibold">~2x faster</span>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-500/[0.08] to-transparent border-2 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</span>
                  </div>
                )}

                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                  plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/[0.06] text-gray-400'
                }`}>
                  {plan.badge}
                </span>

                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 line-through text-lg">${plan.originalPrice}</span>
                    <span className="text-4xl font-bold">${fastDelivery ? plan.fastPrice : plan.price}</span>
                  </div>
                  {!fastDelivery && (
                    <span className="inline-block mt-1 text-green-400 text-sm font-semibold bg-green-400/10 px-2 py-0.5 rounded">
                      SAVE {plan.savePercent}%
                    </span>
                  )}
                  {fastDelivery && (
                    <span className="inline-block mt-1 text-yellow-400 text-sm font-semibold bg-yellow-400/10 px-2 py-0.5 rounded">
                      FAST DELIVERY
                    </span>
                  )}
                </div>

                <Link
                  href="/get-started"
                  className={`block text-center font-semibold py-3 rounded-full mb-6 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]'
                      : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-2.5">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Always included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Everything Included, Always</h2>
              <p className="text-gray-400">Every plan comes with these essentials at no extra cost.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {inclusions.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Not Sure Which Plan?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Book a free 15-minute call with our team and we will recommend the best option for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-call"
                className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-100"
              >
                Book a Free Call
              </Link>
              <Link
                href="/website-cost-calculator"
                className="border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Price Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[80px] rounded-full text-sm mb-4">FAQ</span>
            <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
