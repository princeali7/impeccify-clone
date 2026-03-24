const BASE = 'https://impeccify.com/_next/static/media';

const benefits = [
  {
    icon: `${BASE}/bicon1.d7a56a8d.svg`,
    title: 'Unlimited Revisions',
    description:
      "At Impeccify, we offer unlimited revisions to ensure that you are satisfied with the final product. We don't proceed without your approval.",
  },
  {
    icon: `${BASE}/bicon2.78723544.svg`,
    title: 'Easy Communication',
    description:
      'You can communicate with us on any platform at any time and we will respond to your queries as soon as possible. We are available 24/7 to assist you.',
  },
  {
    icon: `${BASE}/bicon3.92443ce3.svg`,
    title: 'Fast Turnaround',
    description:
      'You can expect a quick turnaround time from us. We understand that time is of the essence and we make sure to deliver your project on time.',
  },
  {
    icon: `${BASE}/bicon4.ae8982a5.svg`,
    title: 'Top-notch Quality',
    description:
      'We ensure that your project is of the highest quality. We use the best tools and technologies to deliver the best results.',
  },
  {
    icon: `${BASE}/bicon5.96404dd2.svg`,
    title: 'No Contracts',
    description:
      "We don't require any contracts from our clients. We believe in transparency and honesty and we don't want to bind our clients to any contracts.",
  },
  {
    icon: `${BASE}/bicon6.7e00478e.svg`,
    title: 'Your Entire Team',
    description:
      'We can work with your entire team to deliver the best results. We understand that every project is unique and we make sure to deliver the best results.',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Benefits of Subscriptions</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Get the World-Class Designs, Faster</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check the benefits of working with us with the latest technology and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                <img src={benefit.icon} alt={benefit.title} className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    {
      title: 'Easy Communication',
      description: 'Communicate with us on any platform at any time. We are available 24/7 to assist you with quick responses.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Fast Turnaround',
      description: 'Quick turnaround time without compromising quality. We understand time is of the essence and deliver on time.',
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Top-notch Quality',
      description: 'We ensure your project is of the highest quality using the best tools and technologies for superior results.',
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: 'No Contracts',
      description: 'We believe in transparency and honesty. No binding contracts — just great work and results.',
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Your Entire Team',
      description: 'We work with your entire team to deliver the best results. Every project is unique and gets our full attention.',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Benefits of Subscriptions</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Get the World-Class Designs, Faster</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check the benefits of working with us with the latest technology and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
