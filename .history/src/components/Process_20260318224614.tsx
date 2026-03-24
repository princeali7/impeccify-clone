const BASE = 'https://impeccify.com/_next/static/media';

const steps = [
  {
    icon: `${BASE}/icon1.a18c017d.svg`,
    connector: `${BASE}/stepline1.d62ba795.svg`,
    title: 'Proposal',
    description:
      'At Impeccify, we start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal before we start working on your project.',
  },
  {
    icon: `${BASE}/icon2.5dc6bbc4.svg`,
    connector: `${BASE}/stepline2.45c8eccb.svg`,
    title: 'Design',
    description:
      "Starting with the different design options. We make sure that you are satisfied with the design before we start working on your project. Moreover, we don't proceed without your approval.",
  },
  {
    icon: `${BASE}/icon3.4fb58966.svg`,
    connector: `${BASE}/stepline1.d62ba795.svg`,
    title: 'Development',
    description:
      'After the design is approved, we start the development process. All the development is done by professional and any custom integration can be done during the development process.',
  },
  {
    icon: `${BASE}/icon4.99ba7e00.svg`,
    connector: null,
    title: 'Launch',
    description:
      'After the development is completed, we deploy the project on the server. We make sure that the project is deployed successfully and is running without any issues.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <img src="https://impeccify.com/gradients/hero1.svg" alt="" className="absolute top-0 left-0 w-[600px] pointer-events-none opacity-50" />
      <img src="https://impeccify.com/gradients/hero2.svg" alt="" className="absolute bottom-0 right-0 w-[600px] pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Project Scope</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our Complete Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is our complete process for projects from start to finish with our team of experts.
          </p>
        </div>

        {/* Steps: icons + connectors row on top, text below each */}
        <div className="max-w-5xl mx-auto">

          {/* Top row: icon → connector → icon → connector → icon → connector → icon */}
          <div className="hidden md:flex items-center justify-between mb-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center flex-1">
                {/* Icon box */}
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <img src={step.icon} alt={step.title} className="w-8 h-8" />
                </div>
                {/* Connector SVG stretching to next icon */}
                {step.connector && (
                  <div className="flex-1 flex items-center px-1">
                    <img
                      src={step.connector}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom row: titles + descriptions aligned under each icon */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4">
                  <img src={step.icon} alt={step.title} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

