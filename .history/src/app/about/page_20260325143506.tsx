import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years of Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    title: 'Pixel-Perfect Quality',
    description: 'Every pixel matters. We obsess over the details so your product looks and feels world-class on every screen and device.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Radical Transparency',
    description: 'No hidden costs, no vague timelines. We keep you informed at every step and never move forward without your approval.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Fast Turnaround',
    description: 'We respect your deadlines. Most projects ship in 5–14 business days — without ever cutting corners on quality.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    title: 'Long-term Partnership',
    description: 'We are not just a vendor — we are your growth partner. 30 days of post-launch support is included in every project, always.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
  },
  {
    title: 'No Contracts',
    description: 'Work with us on your terms. No lock-in, no retainers unless you want one. Every engagement is project-based and flexible.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    title: 'Modern Tech Stack',
    description: 'We build with React, Next.js, and Tailwind CSS — battle-tested tools that deliver blazing-fast, SEO-friendly websites.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://impeccify.com/gradients/hero1.svg" alt="" className="absolute top-0 left-0 w-[500px] pointer-events-none opacity-40" />
        <img src="https://impeccify.com/gradients/hero2.svg" alt="" className="absolute bottom-0 right-0 w-[500px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">About</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Who We Are</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6 leading-tight">
                We Build Websites That{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Convert
                </span>
              </h1>
              <p className="text-gray-400 leading-relaxed mb-4">
                At Impeccify, we help businesses grow through impactful design, creating seamless and enjoyable user experiences. We combine sharp aesthetics with high-performance engineering to deliver websites that not only look great but drive real results.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                We are a team of passionate designers and developers committed to helping businesses of all sizes — from solo founders and startups to growing agencies — stand out in a crowded digital landscape.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We provide long-term support to all our clients. Have a question or an issue? Reach us at{' '}
                <a href="mailto:contact@impeccify.com" className="text-blue-400 hover:underline">contact@impeccify.com</a>
                {' '}or on{' '}
                <a href="https://twitter.com/impeccify" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Twitter/X</a>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-started"
                  className="inline-flex bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-100"
                >
                  Get Started — It&apos;s Free
                </Link>
                <Link
                  href="/book-call"
                  className="inline-flex border border-white/20 text-white font-semibold px-7 py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="flex items-center justify-center">
              <img
                src="https://impeccify.com/_next/static/media/card.5fdeb377.svg"
                alt="About Impeccify"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[160px] rounded-full text-sm mb-4">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Stand For</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide every project we take on and every client relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`rounded-2xl p-7 border bg-gradient-to-br ${v.bg} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Great</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We would love to hear about your project. Book a free call and let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-call"
                className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-100"
              >
                Book a Free Call
              </Link>
              <Link
                href="/pricing"
                className="border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
