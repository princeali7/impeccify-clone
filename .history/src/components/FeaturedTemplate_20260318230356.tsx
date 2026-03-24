export default function FeaturedTemplate() {
  const features = [
    'Downloadable Figma file (.fig)',
    'Organized layers and components',
    'Easy to customize colors and content',
    'Great for bakeries and pastry shops',
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#121212] border border-white/[0.07] overflow-hidden p-8 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — two overlapping tall mockup screenshots */}
            <div className="relative h-[440px] md:h-[520px]">
              {/* Main large mockup (left, bottom-aligned) */}
              <div
                className="absolute left-0 bottom-0 rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]"
                // style={{ width: '56%', height: '94%' }}
              >
                <img
                  src="/portfolio/1.avif"
                  alt="Template preview main"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Secondary smaller mockup (right, top-aligned, slightly overlapping) */}
              {/* <div
                className="absolute right-0 top-0 rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]"
                style={{ width: '50%', height: '80%' }}
              >
                <img
                  src="/portfolio/2.avif"
                  alt="Template preview secondary"
                  className="w-full h-full object-cover object-top"
                />
              </div> */}
            </div>

            {/* Right — info */}
            <div>
              {/* Featured badge */}
              <div className="inline-flex items-center bg-[#1e2010] border border-[#4a5228]/60 rounded-full px-4 py-1.5 mb-7">
                <span className="text-[#c8d458] text-sm font-medium">Featured Template</span>
              </div>

              <h2 className="text-3xl md:text-[2.6rem] font-bold text-white leading-tight mb-4">
                Ecommerce Bakery Website
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-7">
                A beautiful landing page template designed for bakeries and pastry
                shops to showcase their delicious products and tell their story online
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-7">
                <span className="text-5xl font-bold text-white">$19</span>
                <span className="text-gray-500 text-xl line-through mt-1">$49</span>
                <span className="bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-semibold rounded-full px-3.5 py-1">
                  Save 61%
                </span>
              </div>

              {/* Feature bullets */}
              <ul className="space-y-3.5 mb-9">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-500 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path
                          d="M1.5 4.5L4.5 7.5L10.5 1.5"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex gap-4">
                <a
                  href="https://impeccify.com/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-white text-black font-bold py-4 rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  View Details &nbsp;→
                </a>
                <a
                  href="#"
                  className="flex-1 text-center bg-[#1c1c1c] border border-white/10 text-white font-semibold py-4 rounded-full hover:bg-white/[0.06] transition-colors text-sm"
                >
                  Browse All
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
