const CheckIcon = () => (
  <img
    src="https://impeccify.com/_next/static/media/checkmark.a069e7ec.svg"
    alt="✓"
    className="w-4 h-4 shrink-0"
  />
);

export default function DesignVsDev() {
  return (
    <section className="relative py-9 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[280px] rounded-full mb-4">Understanding the Difference</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Design vs Development</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Many people confuse website design with full development. Let&apos;s clarify the key differences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Website Design */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Website Design</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">Static visual mockups and layouts</p>
            <ul className="space-y-3 mb-6">
              {[
                'Visual Mockups in Figma/Adobe XD',
                'UI/UX Layout & Structure',
                'Color Schemes & Typography',
                'Design Assets & Icons',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-yellow-500/[0.08] border border-yellow-500/20 rounded-lg p-3">
              <p className="text-yellow-400/80 text-xs"><strong>Important:</strong> Design files are static images. They cannot be published as a live website.</p>
            </div>
          </div>

          {/* Website Development */}
          <div className="bg-white hover:bg-[#e3eb01]/10 border border-white/[0.06] rounded-2xl p-8 transition-all duration-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Website Development</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">Live, functional, and interactive code</p>
            <ul className="space-y-3 mb-6">
              {[
                'Fully Functional Website',
                'Interactive Elements',
                'Backend Integration',
                'Responsive & Optimized Code',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-green-500/[0.08] border border-green-500/20 rounded-lg p-3">
              <p className="text-green-400/80 text-xs"><strong>Key Benefit:</strong> Development brings designs to life. You get a real website you can launch and share with the world.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            Design is like an architectural blueprint — it shows you what the building will look like. Development is the actual construction, building the structure so people can walk in and use it. <strong className="text-gray-300">Most of our packages include both design and development</strong>, giving you a complete, live website ready to launch.
          </p>
        </div>
      </div>
    </section>
  );
}
