'use client';
import { useState } from 'react';

const faqCategories = ['Web Development', 'Mobile Development', 'UI/UX Design', 'General'];

const faqs = [
  {
    category: 'Web Development',
    questions: [
      {
        q: 'What are your custom website development services?',
        a: 'Our custom website development services include complete website design and development using Next.js and React. We build pixel-perfect, high-converting websites with SEO optimization, responsive design, payment integrations, and custom API development. Projects typically take 2-8 weeks depending on complexity.',
      },
      {
        q: 'What technologies do you use for web design and development?',
        a: 'We use modern, industry-standard technologies including React, Next.js, Node.js, and cloud platforms like Vercel. Our web design and development service ensures the best technology stack for your specific project requirements and long-term scalability.',
      },
      {
        q: 'Do you offer website redesign services?',
        a: 'Yes! Our website redesign service transforms outdated websites into modern, high-converting digital experiences. We analyze your current site, improve UX/UI, optimize for SEO, and rebuild with latest technologies to boost performance and conversions.',
      },
      {
        q: 'What is included in your responsive web design?',
        a: 'Our responsive web design service ensures your website looks stunning and functions perfectly on all devices — desktop, tablet, and mobile. We use mobile-first approach with fluid layouts, optimized images, and touch-friendly navigation for seamless user experience.',
      },
      {
        q: 'Do you provide ecommerce website development?',
        a: 'Yes! Our ecommerce website development services include custom online store creation with secure payment gateway integration (Stripe, PayPal), inventory management, shopping cart functionality, and SEO optimization to drive sales and business growth.',
      },
    ],
  },
  {
    category: 'Mobile Development',
    questions: [
      {
        q: 'Do you build mobile apps?',
        a: 'Yes, we develop cross-platform mobile applications using React Native and Flutter that work seamlessly on both iOS and Android devices.',
      },
      {
        q: 'Can you convert my website into a mobile app?',
        a: 'Absolutely! We can transform your existing website into a native-feeling mobile application with push notifications, offline support, and device-specific features.',
      },
    ],
  },
  {
    category: 'UI/UX Design',
    questions: [
      {
        q: 'What design tools do you use?',
        a: 'We primarily use Figma for our design work, along with Adobe Creative Suite when needed. All designs are delivered in organized, component-based files that are easy to hand off.',
      },
      {
        q: 'How many design revisions do I get?',
        a: 'Depending on your plan, you get anywhere from 10 to unlimited revisions. We always ensure you\'re fully satisfied with the design before moving to development.',
      },
    ],
  },
  {
    category: 'General',
    questions: [
      {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary based on complexity. Simple landing pages take 1-2 weeks, multi-page websites 3-5 weeks, and complex web applications 6-12 weeks.',
      },
      {
        q: 'Do you offer ongoing support after launch?',
        a: 'Yes! We provide lifetime updates and support for all our projects. We\'re always available to help with maintenance, updates, and new feature additions.',
      },
    ],
  },
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('Web Development');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const currentFaqs = faqs.find(f => f.category === activeCategory)?.questions || [];

  return (
    <section className="relative py-9 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[180px] rounded-full">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your go-to solution for web and mobile apps, like many founders, startups, and agencies do.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIdx(0); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.12]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {currentFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
