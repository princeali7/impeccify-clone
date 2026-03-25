const BASE = "https://impeccify.com/_next/static/media";

const steps = [
  {
    icon: `${BASE}/icon1.a18c017d.svg`,
    title: "Proposal",
    step: "01",
    description:
      "At Impeccify, we start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal before we start working on your project.",
  },
  {
    icon: `${BASE}/icon2.5dc6bbc4.svg`,
    title: "Design",
    step: "02",
    description:
      "Starting with the different design options. We make sure that you are satisfied with the design before we start working on your project. Moreover, we don't proceed without your approval.",
  },
  {
    icon: `${BASE}/icon3.4fb58966.svg`,
    title: "Development",
    step: "03",
    description:
      "After the design is approved, we start the development process. All the development is done by professional and any custom integration can be done during the development process.",
  },
  {
    icon: `${BASE}/icon4.99ba7e00.svg`,
    title: "Launch",
    step: "04",
    description:
      "After the development is completed, we deploy the project on the server. We make sure that the project is deployed successfully and is running without any issues.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
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
          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[180px] rounded-full">
            Project Scope
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Our Complete Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This is our complete process for projects from start to finish with
            our team of experts.
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
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-center gap-0"
                >
                  {/* Left side */}
                  <div
                    className={`w-full md:w-1/2 md:pr-12 ${isLeft ? "block" : "md:invisible"}`}
                  >
                    {isLeft && (
                      <div className="p-8 bg-white hover:bg-[#e3eb01] rounded-lg transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 flex items-center justify-center shrink-0">
                            {/* <img src={step.icon} alt={step.title} className="w-7 h-7" /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="171"
                              height="171"
                              viewBox="0 0 171 171"
                              fill="none"
                            >
                              <path
                                d="M106.572 50.1385C106.572 50.1385 110.106 53.6727 113.64 60.7413C113.64 60.7413 124.867 43.0699 134.846 39.5356"
                                stroke="black"
                                stroke-width="10.6028"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71.3305 14.8365C53.6699 14.0888 40.0258 16.1232 40.0258 16.1232C31.4103 16.7393 14.8995 21.5693 14.8997 49.7777C14.8998 77.7462 14.717 112.227 14.8997 125.972C14.8997 134.37 20.0994 153.959 38.0971 155.009C59.9731 156.286 99.3777 156.557 117.457 155.009C122.297 154.736 138.409 150.937 140.449 133.406C142.562 115.245 142.141 102.623 142.141 99.6191"
                                stroke="black"
                                stroke-width="10.6028"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M156.189 50.1376C156.189 69.6569 140.35 85.4806 120.812 85.4806C101.274 85.4806 85.4357 69.6569 85.4357 50.1376C85.4357 30.6184 101.274 14.7949 120.812 14.7949C140.35 14.7949 156.189 30.6184 156.189 50.1376Z"
                                stroke="black"
                                stroke-width="10.6028"
                                stroke-linecap="round"
                              />
                              <path
                                d="M50.0232 92.5483H78.2972"
                                stroke="black"
                                stroke-width="10.6028"
                                stroke-linecap="round"
                              />
                              <path
                                d="M50.0232 120.822H106.571"
                                stroke="black"
                                stroke-width="10.6028"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                          <span className="text-4xl font-bold text-white/[0.06] select-none">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-black text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10" />

                  {/* Right side */}
                  <div
                    className={`w-full md:w-1/2 md:pl-12 ${!isLeft ? "block" : "md:invisible"}`}
                  >
                    {!isLeft && (
                      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14  flex items-center justify-center shrink-0">
                            {/* <img
                              src={step.icon}
                              alt={step.title}
                              className="w-7 h-7"
                            /> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="156"
                              height="156"
                              viewBox="0 0 156 156"
                              fill="none"
                            >
                              <path
                                d="M86.4193 125.913L38.0999 134.886C28.832 136.607 24.1981 137.468 21.5285 134.798C18.8589 132.128 19.7194 127.494 21.4405 118.226L30.4131 69.9041C31.852 62.156 32.5714 58.2817 35.1254 55.9408C37.6795 53.5999 42.3503 53.143 51.6921 52.2293C60.6957 51.3487 69.2166 48.2622 78.098 39.3804L116.946 78.2319C108.065 87.114 104.976 95.6289 104.095 104.633C103.18 113.976 102.722 118.648 100.381 121.201C98.0408 123.755 94.1669 124.474 86.4193 125.913Z"
                                stroke="black"
                                stroke-width="9.71208"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M71.6232 99.0165C68.0005 98.4286 64.6884 96.8526 62.0815 94.2459M62.0815 94.2459C59.4745 91.6392 57.8987 88.3267 57.3106 84.7041M62.0815 94.2459L26.3001 130.027"
                                stroke="black"
                                stroke-width="9.71208"
                                stroke-linecap="round"
                              />
                              <path
                                d="M78.0981 39.3817C82.71 32.5774 88.9568 21.1307 98.2118 20.0286C104.529 19.2763 109.763 24.51 120.23 34.9774L121.35 36.0975C131.818 46.565 137.052 51.7987 136.299 58.1163C135.197 67.3713 123.751 73.6181 116.946 78.23"
                                stroke="black"
                                stroke-width="9.71208"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-4xl font-bold text-white/[0.06] select-none">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
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
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="w-6 h-6"
                          />
                        </div>
                        <span className="text-3xl font-bold text-white/[0.06] select-none">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
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
