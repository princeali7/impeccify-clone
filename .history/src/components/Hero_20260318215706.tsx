import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://impeccify.com/_next/static/media';

const portfolioImages = [
  { src: `${BASE}/1.351fa955.png`, alt: 'Project 1' },
  { src: `${BASE}/2.a933f23e.png`, alt: 'Project 2' },
  { src: `${BASE}/3.899ae5f3.png`, alt: 'Project 3' },
  { src: `${BASE}/4.9d14a428.png`, alt: 'Project 4' },
  { src: `${BASE}/5.bede6e22.png`, alt: 'Project 5' },
  { src: `${BASE}/6.74a3283d.png`, alt: 'Project 6' },
  { src: `${BASE}/7.dbc13d72.png`, alt: 'Project 7' },
  { src: `${BASE}/8.9238dcc8.png`, alt: 'Project 8' },
  { src: `${BASE}/9.82ac5f11.png`, alt: 'Project 9' },
  { src: `${BASE}/10.e65d7f86.png`, alt: 'Project 10' },
  { src: `${BASE}/11.c61459a5.png`, alt: 'Project 11' },
  { src: `${BASE}/12.a45e5881.png`, alt: 'Project 12' },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Gradient blobs matching original */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-40 -right-32 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-sm text-gray-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Projects Open for March
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            Custom Website Development Services That Transform Traffic Into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Paying Users
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional web design and development service. From responsive web design to custom web app development — pixel-perfect Next.js websites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#contact"
              className="bg-white text-black font-semibold px-8 py-3.5 rounded-full text-base hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Book a Call
            </Link>
            <Link
              href="https://impeccify.com/website-cost-calculator"
              className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-base hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Price Calculator
            </Link>
          </div>

          {/* Feature pills with bolt icon */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              'Latest Next.js + React Development',
              'High Converting Figma Designs',
              'Custom Built Websites',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2">
                <img
                  src="https://impeccify.com/_next/static/media/bolt.49bb5841.svg"
                  alt=""
                  className="w-4 h-4 shrink-0"
                />
                <span className="text-sm text-gray-300">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Portfolio Marquee - 4 vertical scrolling columns like the real site */}
      <div className="relative mt-4 w-full overflow-hidden" style={{ height: '520px', maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)' }}>
        <div className="flex gap-3 px-4 justify-center">
          {/* Column 1 - scroll up */}
          <div className="flex flex-col gap-3 animate-scroll-up flex-shrink-0" style={{ width: '220px' }}>
            {[...portfolioImages.slice(0, 3), ...portfolioImages.slice(0, 3)].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06]" style={{ height: '160px' }}>
                <Image src={img.src} alt={img.alt} width={220} height={160} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
          {/* Column 2 - scroll down */}
          <div className="flex flex-col gap-3 animate-scroll-down flex-shrink-0" style={{ width: '220px' }}>
            {[...portfolioImages.slice(3, 6), ...portfolioImages.slice(3, 6)].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06]" style={{ height: '160px' }}>
                <Image src={img.src} alt={img.alt} width={220} height={160} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
          {/* Column 3 - scroll up slow */}
          <div className="flex flex-col gap-3 animate-scroll-up-slow flex-shrink-0" style={{ width: '220px' }}>
            {[...portfolioImages.slice(6, 9), ...portfolioImages.slice(6, 9)].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06]" style={{ height: '160px' }}>
                <Image src={img.src} alt={img.alt} width={220} height={160} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
          {/* Column 4 - scroll down slow */}
          <div className="hidden lg:flex flex-col gap-3 animate-scroll-down-slow shrink-0" style={{ width: '220px' }}>
            {[...portfolioImages.slice(9, 12), ...portfolioImages.slice(9, 12)].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06]" style={{ height: '160px' }}>
                <Image src={img.src} alt={img.alt} width={220} height={160} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
