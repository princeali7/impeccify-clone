'use client';

const BASE = 'https://impeccify.com/_next/static/media';

const testimonials = [
  {
    text: 'The website design they created for our fintech startup is absolutely stunning. Clean, modern, and converts like crazy. Our investor meetings became so much easier when we could show them a professional site that actually represents our vision.',
    name: 'Marcus Chen',
    role: 'CEO',
    location: 'Singapore',
    avatar: `${BASE}/1.f4583a97.jpg`,
  },
  {
    text: "Coming from Webflow templates, this custom design was a game-changer. They understood our brand identity perfectly and created something that stands out in our competitive market. The attention to detail is incredible.",
    name: 'Kai Nakamura',
    role: 'Founder',
    location: 'Japan',
    avatar: `${BASE}/2.ce5fa41c.jpg`,
  },
  {
    text: "They designed our entire dashboard from scratch and it's a masterpiece. Our users went from complaining about the old interface to actually enjoying using our platform. The UX flow is so intuitive.",
    name: 'Sofia Rodriguez',
    role: 'Product Manager',
    location: 'Spain',
    avatar: `${BASE}/3.feb9c4db.jpg`,
  },
  {
    text: 'They designed our corporate website with such elegance and professionalism. The Arabic and English versions look flawless, and the way they handled our complex navigation is brilliant. Clients are impressed before we even meet.',
    name: 'Ahmed Hassan',
    role: 'Business Owner',
    location: 'UAE',
    avatar: `${BASE}/4.190490de.jpg`,
  },
  {
    text: 'The e-commerce design they created for us is pure art. Every product page, checkout flow, and user journey was crafted with such precision. Our conversion rate jumped from 2.1% to 4.8% within the first month.',
    name: 'Emma Thompson',
    role: 'E-commerce Director',
    location: 'Australia',
    avatar: `${BASE}/5.82f2476d.jpg`,
  },
  {
    text: 'Working with this team was seamless. They took our rough ideas and turned them into a polished, professional website that perfectly captures our brand. The feedback from our customers has been overwhelmingly positive.',
    name: 'David Kim',
    role: 'Marketing Director',
    location: 'South Korea',
    avatar: `${BASE}/6.9c6a9b1b.jpg`,
  },
  {
    text: "They transformed our outdated agency website into something that actually wins us clients. The portfolio showcase and case study layouts are designed so well that our lead quality improved dramatically. Design that sells itself.",
    name: 'Lucas Silva',
    role: 'Agency Owner',
    location: 'Brazil',
    avatar: `${BASE}/7.2f645ad6.jpg`,
  },
  {
    text: 'Their UI/UX expertise is world-class. They redesigned our entire platform and made it accessible, beautiful, and incredibly user-friendly. Our user retention improved by 45% in just two months.',
    name: 'Oliver Schmidt',
    role: 'VP Product',
    location: 'Germany',
    avatar: `${BASE}/8.ec5b8392.jpg`,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-4 hover:border-white/[0.12] transition-all duration-200">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-5">{t.text}</p>
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-white text-sm font-semibold">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.role}, {t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split into 3 columns
  const col1 = [testimonials[0], testimonials[3], testimonials[6], testimonials[1]];
  const col2 = [testimonials[2], testimonials[5], testimonials[0], testimonials[7]];
  const col3 = [testimonials[4], testimonials[1], testimonials[3], testimonials[6]];

  return (
    <section id="reviews" className="relative py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our Clients Reviews</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out what our clients have to say about our work. We are proud to have worked with some of the best clients in the industry.
          </p>
        </div>

        {/* Vertical Marquee */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden"
          style={{
            height: '600px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          {/* Column 1 — scroll up */}
          <div className="flex flex-col animate-marquee-up">
            {[...col1, ...col1].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>

          {/* Column 2 — scroll down */}
          <div className="hidden md:flex flex-col animate-marquee-down">
            {[...col2, ...col2].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>

          {/* Column 3 — scroll up slow */}
          <div className="hidden md:flex flex-col animate-marquee-up-slow">
            {[...col3, ...col3].map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
