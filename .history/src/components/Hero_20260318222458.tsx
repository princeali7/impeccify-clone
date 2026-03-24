import Link from 'next/link';
import Image from 'next/image';

const portfolioImages = [
  { src: '/portfolio/1.avif', alt: 'Project 1' },
  { src: '/portfolio/2.avif', alt: 'Project 2' },
  { src: '/portfolio/3.avif', alt: 'Project 3' },
  { src: '/portfolio/4.avif', alt: 'Project 4' },
  { src: '/portfolio/5.avif', alt: 'Project 5' },
  { src: '/portfolio/6.avif', alt: 'Project 6' },
  { src: '/portfolio/7.avif', alt: 'Project 7' },
  { src: '/portfolio/8.avif', alt: 'Project 8' },
  { src: '/portfolio/9.avif', alt: 'Project 9' },
  { src: '/portfolio/10.avif', alt: 'Project 10' },
  { src: '/portfolio/11.avif', alt: 'Project 11' },
  { src: '/portfolio/12.avif', alt: 'Project 12' },
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

      {/* Portfolio Marquee - 2 horizontal scrolling rows */}
      <div
        className="relative mt-4 w-full overflow-hidden flex flex-col gap-[80px]"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* Row 1 — scrolls left */}
        <div className="flex gap-4 md:gap-20">
          <div className="flex gap-4 md:gap-20 animate-marquee shrink-0">
            {portfolioImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] shrink-0" style={{ width: '280px', height: '400px' }}>
                <Image src={img.src} alt={img.alt} width={280} height={400} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
          {/* duplicate for seamless loop */}
          <div className="flex gap-4 md:gap-20 animate-marquee shrink-0" aria-hidden>
            {portfolioImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] shrink-0" style={{ width: '280px', height: '400px' }}>
                <Image src={img.src} alt={img.alt} width={280} height={400} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-4 md:gap-20">
          <div className="flex gap-4 md:gap-20 animate-marquee-reverse shrink-0">
            {[...portfolioImages].reverse().map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] shrink-0" style={{ width: '280px', height: '400px' }}>
                <Image src={img.src} alt={img.alt} width={280} height={400} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
          {/* duplicate for seamless loop */}
          <div className="flex gap-4 md:gap-20 animate-marquee-reverse shrink-0" aria-hidden>
            {[...portfolioImages].reverse().map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/[0.06] shrink-0" style={{ width: '280px', height: '400px' }}>
                <Image src={img.src} alt={img.alt} width={280} height={400} className="w-full h-full object-cover" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
