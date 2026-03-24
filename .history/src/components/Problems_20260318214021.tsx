const BASE = 'https://impeccify.com/_next/static/media';

const RedX = () => (
  <img src={`${BASE}/redcheckmark.24cdd721.svg`} alt="✗" className="w-5 h-5 shrink-0 mt-0.5" />
);

const GreenCheck = () => (
  <img src={`${BASE}/checkmark.a069e7ec.svg`} alt="✓" className="w-5 h-5 shrink-0 mt-0.5" />
);

export default function Problems() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-red-400 font-medium tracking-wide uppercase">Problems</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Problems of Website Builders</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Many founders, startups, and agencies use website builders like Framer, Webflow, WordPress, Shopify, etc. but they are not for you.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Framer & Webflow - Bad */}
          <div className="bg-red-500/[0.04] border border-red-500/10 rounded-2xl p-8 hover:border-red-500/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Framer & Webflow</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">Website builders like Framer, Webflow, WordPress, Shopify, Wix, Squarespace, etc. are not for you.</p>
            <ul className="space-y-3">
              {[
                'Expensive paid plugins and themes',
                'Severely limited functionalities',
                'Frustratingly slow performance and speed',
                'Critical security issues and vulnerabilities',
                'Terrible SEO unfriendly and not optimized',
                'Bare minimum support and updates',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <RedX />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* React & Next.js - Good */}
          <div className="bg-green-500/[0.04] border border-green-500/10 rounded-2xl p-8 hover:border-green-500/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">React and Next.js</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">React and Next.js are the best option with full control of the website and the best performance and speed.</p>
            <ul className="space-y-3">
              {[
                'Zero paid plugins and themes',
                'Unlimited advance functionalities',
                'Blazing 10x performance and speed',
                'Rock-solid security and protection',
                'Perfectly SEO optimized',
                'Lifetime updates and support',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GreenCheck />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
