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
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Project Scope</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our Complete Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is our complete process for projects from start to finish with our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 h-full hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200">
                {/* Icon with connector */}
                <div className="flex items-center gap-3 mb-5">
                  <img src={step.icon} alt={step.title} className="w-10 h-10" />
                  {step.connector && (
                    <img
                      src={step.connector}
                      alt=""
                      className="hidden lg:block flex-1 h-auto"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
