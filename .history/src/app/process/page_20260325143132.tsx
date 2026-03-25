import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const steps = [
  {
    step: '01',
    title: 'Proposal',
    description:
      'At Impeccify, we start off with a proposal to understand your requirements and provide a quote. We ensure that you are satisfied with the proposal before we start working on your project.',
    detail:
      'During the proposal phase we schedule a discovery call, gather all requirements, define scope, and deliver a detailed quote within 24 hours. No guesswork — just clarity from day one.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 171 171" fill="none">
        <path d="M106.572 50.1385C106.572 50.1385 110.106 53.6727 113.64 60.7413C113.64 60.7413 124.867 43.0699 134.846 39.5356" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M71.3305 14.8365C53.6699 14.0888 40.0258 16.1232 40.0258 16.1232C31.4103 16.7393 14.8995 21.5693 14.8997 49.7777C14.8998 77.7462 14.717 112.227 14.8997 125.972C14.8997 134.37 20.0994 153.959 38.0971 155.009C59.9731 156.286 99.3777 156.557 117.457 155.009C122.297 154.736 138.409 150.937 140.449 133.406C142.562 115.245 142.141 102.623 142.141 99.6191" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M156.189 50.1376C156.189 69.6569 140.35 85.4806 120.812 85.4806C101.274 85.4806 85.4357 69.6569 85.4357 50.1376C85.4357 30.6184 101.274 14.7949 120.812 14.7949C140.35 14.7949 156.189 30.6184 156.189 50.1376Z" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
        <path d="M50.0232 92.5483H78.2972" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
        <path d="M50.0232 120.822H106.571" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
      </svg>
    ),
    tags: ['Discovery Call', 'Scope Definition', 'Quote within 24h'],
    color: 'from-blue-500/10 to-transparent border-blue-500/20',
    accent: 'text-blue-400',
    dot: 'bg-blue-500',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Starting with the different design options. We make sure that you are satisfied with the design before we start working on your project. Moreover, we don\'t proceed without your approval.',
    detail:
      'Our designers craft pixel-perfect Figma mockups tailored to your brand. We present multiple layout options, refine based on your feedback, and get your written sign-off before a single line of code is written.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 156 156" fill="none">
        <path d="M86.4193 125.913L38.0999 134.886C28.832 136.607 24.1981 137.468 21.5285 134.798C18.8589 132.128 19.7194 127.494 21.4405 118.226L30.4131 69.9041C31.852 62.156 32.5714 58.2817 35.1254 55.9408C37.6795 53.5999 42.3503 53.143 51.6921 52.2293C60.6957 51.3487 69.2166 48.2622 78.098 39.3804L116.946 78.2319C108.065 87.114 104.976 95.6289 104.095 104.633C103.18 113.976 102.722 118.648 100.381 121.201C98.0408 123.755 94.1669 124.474 86.4193 125.913Z" stroke="currentColor" strokeWidth="9.71208" strokeLinejoin="round" />
        <path d="M71.6232 99.0165C68.0005 98.4286 64.6884 96.8526 62.0815 94.2459M62.0815 94.2459C59.4745 91.6392 57.8987 88.3267 57.3106 84.7041M62.0815 94.2459L26.3001 130.027" stroke="currentColor" strokeWidth="9.71208" strokeLinecap="round" />
        <path d="M78.0981 39.3817C82.71 32.5774 88.9568 21.1307 98.2118 20.0286C104.529 19.2763 109.763 24.51 120.23 34.9774L121.35 36.0975C131.818 46.565 137.052 51.7987 136.299 58.1163C135.197 67.3713 123.751 73.6181 116.946 78.23" stroke="currentColor" strokeWidth="9.71208" strokeLinejoin="round" />
      </svg>
    ),
    tags: ['Figma Mockups', 'Brand Alignment', 'Design Approval'],
    color: 'from-purple-500/10 to-transparent border-purple-500/20',
    accent: 'text-purple-400',
    dot: 'bg-purple-500',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'After the design is approved, we start the development process. All the development is done by professional and any custom integration can be done during the development process.',
    detail:
      'We build with React and Next.js for blazing-fast performance. Smooth scroll animations, hover micro-interactions, third-party integrations, and full mobile responsiveness are included by default.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 171 171" fill="none">
        <path d="M57 57L28.5 85.5L57 114" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M114 57L142.5 85.5L114 114" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M99.75 42.75L71.25 128.25" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
      </svg>
    ),
    tags: ['React / Next.js', 'Animations', 'Integrations'],
    color: 'from-green-500/10 to-transparent border-green-500/20',
    accent: 'text-green-400',
    dot: 'bg-green-500',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'After the development is completed, we deploy the project on the server. We make sure that the project is deployed successfully and is running without any issues.',
    detail:
      'We handle the full deployment — domain setup, SSL, performance audit, and a final QA pass across browsers and devices. You go live with confidence, and we stay available for 30 days post-launch support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 171 171" fill="none">
        <path d="M85.5 14.25C75 35.625 57 57 57 85.5C57 100.215 63.36 113.325 71.25 122.813" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M85.5 14.25C96 35.625 114 57 114 85.5C114 100.215 107.64 113.325 99.75 122.813" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M71.25 122.813C76.875 127.583 81.225 128.25 85.5 128.25C89.775 128.25 94.125 127.583 99.75 122.813" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M57 114L35.625 135.375" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
        <path d="M114 114L135.375 135.375" stroke="currentColor" strokeWidth="10.6028" strokeLinecap="round" />
        <circle cx="85.5" cy="78.375" r="14.25" stroke="currentColor" strokeWidth="10.6028" />
      </svg>
    ),
    tags: ['Deployment', 'QA Testing', '30-day Support'],
    color: 'from-yellow-500/10 to-transparent border-yellow-500/20',
    accent: 'text-yellow-400',
    dot: 'bg-yellow-400',
  },
];

const faqs = [
  {
    q: 'How long does the full process take?',
    a: 'Most projects complete in 5–14 business days. The proposal and design phases usually take 1–3 days each, and development takes the remainder depending on complexity.',
  },
  {
    q: 'What happens if I want changes during development?',
    a: 'Minor changes are handled within the revision allowance of your plan. Any significant scope changes are quoted separately and agreed upon before proceeding.',
  },
  {
    q: 'Do I need to be available throughout the process?',
    a: 'We only need you at key approval points — after proposal, after each design round, and before launch. We handle everything in between.',
  },
  {
    q: 'Will you help after the site goes live?',
    a: 'Yes. Every project includes 30 days of free post-launch support for bug fixes. Extended support and maintenance plans are available on request.',
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <div className="h-16" />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://impeccify.com/gradients/hero1.svg" alt="" className="absolute top-0 left-0 w-[500px] pointer-events-none opacity-40" />
        <img src="https://impeccify.com/gradients/hero2.svg" alt="" className="absolute bottom-0 right-0 w-[500px] pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Process</span>
          </div>

          <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[180px] rounded-full text-sm mb-6">Project Scope</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Complete{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Process
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            From the first conversation to launch day — here is exactly how we work, step by step.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { value: '5–14', label: 'Business Days' },
              { value: '4', label: 'Clear Steps' },
              { value: '30', label: 'Days Post-Launch Support' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 md:p-10 bg-gradient-to-br border transition-all duration-300 hover:scale-[1.01] ${s.color}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3 md:w-24 shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center ${s.accent}`}>
                      {s.icon}
                    </div>
                    <span className={`text-5xl font-bold ${s.accent} opacity-30 select-none leading-none`}>{s.step}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">{s.description}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.detail}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] ${s.accent}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector line to next step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -bottom-4 left-[52px] w-px h-8 bg-white/[0.08]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Book a free 15-minute call and we will walk you through the entire process for your specific project.
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
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-6 py-2 bg-[#151515] mx-auto block max-w-[80px] rounded-full text-sm mb-4">FAQ</span>
            <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-white/[0.02] transition-colors duration-200 list-none">
                  <span className="font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
