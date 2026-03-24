const BASE = 'https://impeccify.com/_next/static/media';

const steps = [
  {
    icon: `${BASE}/icon1.a18c017d.svg`,
    title: 'Proposal',
    step: '01',
    description:
      'At Impeccify, we start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal before we start working on your project.',
  },
  {
    icon: `${BASE}/icon2.5dc6bbc4.svg`,
    title: 'Design',
    step: '02',
    description:
      "Starting with the different design options. We make sure that you are satisfied with the design before we start working on your project. Moreover, we don't proceed without your approval.",
  },
  {
    icon: `${BASE}/icon3.4fb58966.svg`,
    title: 'Development',
    step: '03',
    description:
      'After the design is approved, we start the development process. All the development is done by professional and any custom integration can be done during the development process.',
  },
  {
    icon: `${BASE}/icon4.99ba7e00.svg`,
    title: 'Launch',
    step: '04',
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

        {/* Vertical zigzag timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center gap-0">
                  {/* Left side */}
                  <div className={`w-full md:w-1/2 md:pr-12 ${isLeft ? 'block' : 'md:invisible'}`}>
                    {isLeft && (
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shrink-0">
                            <img src={step.icon} alt={step.title} className="w-7 h-7" />
                          </div>
                          <span className="text-4xl font-bold text-white/[0.06] select-none">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10" />

                  {/* Right side */}
                  <div className={`w-full md:w-1/2 md:pl-12 ${!isLeft ? 'block' : 'md:invisible'}`}>
                    {!isLeft && (
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shrink-0">
                            <img src={step.icon} alt={step.title} className="w-7 h-7" />
                          </div>
                          <span className="text-4xl font-bold text-white/[0.06] select-none">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile: show all cards stacked */}
                  <div className="w-full md:hidden">
                    <div className="flex items-center gap-3 mb-3 pl-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shrink-0">
                          <img src={step.icon} alt={step.title} className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-bold text-white/[0.06] select-none">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <img
        src="https://impeccify.com/gradients/hero1.svg"
        alt=""
        className="absolute top-0 left-0 w-[600px] pointer-events-none opacity-50"
      />
      <img
        src="https://impeccify.com/gradients/hero2.svg"
        alt=""
        className="absolute bottom-0 right-0 w-[600px] pointer-events-none opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Project Scope</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our Complete Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is our complete process for projects from start to finish with our team of experts.
          </p>
        </div>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-row md:flex-col items-start md:items-start flex-1 relative">
              {/* Icon + connector row */}
              <div className="flex items-center w-full mb-0 md:mb-6">
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <img src={step.icon} alt={step.title} className="w-7 h-7" />
                </div>
                {/* Connector line to next step */}
                {step.connector && (
                  <img
                    src={step.connector}
                    alt=""
                    className="hidden md:block flex-1 h-auto mx-2 opacity-60"
                  />
                )}
              </div>

              {/* Text */}
              <div className="md:pr-6 mt-4 md:mt-0 ml-4 md:ml-0">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
