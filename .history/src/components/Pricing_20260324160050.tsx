'use client';
import { useState } from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <img
    src="https://impeccify.com/_next/static/media/checkmark.a069e7ec.svg"
    alt="✓"
    className="w-4 h-4 shrink-0"
  />
);

const plans = [
  {
    name: 'Foundation',
    badge: 'Limited Time Offer',
    originalPrice: 645,
    price: 495,
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
  },
  {
    name: 'Professional',
    badge: 'Limited Time Offer',
    originalPrice: 1400,
    price: 945,
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
  },
  {
    name: 'Enterprise',
    badge: 'Limited Time Offer',
    originalPrice: 3110,
    price: 1885,
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
  },
];

export default function Pricing() {
  const [fastDelivery, setFastDelivery] = useState(false);

  return (
    <section id="pricing" className="relative py-9 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[160px] rounded-full">Our Pricings</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Transparent Pricings</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your go-to solution for web and mobile apps, like many founders, startups, and agencies do.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!fastDelivery ? 'text-white' : 'text-gray-400'}`}>Normal Pace</span>
          <button
            onClick={() => setFastDelivery(!fastDelivery)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${fastDelivery ? 'bg-blue-500' : 'bg-white/20'}`}
            aria-checked={fastDelivery}
            role="switch"
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
              style={{ transform: fastDelivery ? 'translateX(24px)' : 'translateX(0px)' }}
            />
          </button>
          <span className={`text-sm font-medium ${fastDelivery ? 'text-white' : 'text-gray-400'}`}>Fast Delivery</span>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-7 transition-all hover:scale-[1.02] ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-500/[0.08] to-transparent border-2 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]'
                  : 'bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              {/* Badge */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white/[0.06] text-gray-400'
              }`}>
                {plan.badge}
              </span>

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-5">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-500 line-through text-lg">${plan.originalPrice}</span>
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>
                <span className="inline-block mt-1 text-green-400 text-sm font-semibold bg-green-400/10 px-2 py-0.5 rounded">
                  SAVE {plan.savePercent}%
                </span>
              </div>

              <Link
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-full mb-6 transition-all ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                }`}
              >
                Get Started Now
              </Link>

              {/* Features */}
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
  );
}
