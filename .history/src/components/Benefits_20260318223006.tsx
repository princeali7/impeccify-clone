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
    <section className="relative py-9 overflow-hidden">
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
