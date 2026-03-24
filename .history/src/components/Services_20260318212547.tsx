import Link from 'next/link';
import Image from 'next/image';

const BASE = 'https://impeccify.com/_next/static/media';

const CheckIcon = () => (
  <img
    src={`${BASE}/checkmark.a069e7ec.svg`}
    alt="✓"
    className="w-5 h-5 shrink-0 mt-0.5"
  />
);

const serviceData = [
  {
    tag: 'Our Services',
    title: 'UI/UX Design & Web Design Services',
    description:
      'Professional UI UX design and development services. We create stunning, user-centered responsive web designs that help businesses stand out and convert visitors into customers.',
    features: [
      'Multiple stunning design options with different styles',
      'Expert UI/UX design and development services',
      'Unlimited revisions before finalizing perfectly',
      'Custom website design precisely as per your preferences',
      'Responsive web design service for all devices',
      'Premium User Experience focused design',
    ],
    cta: 'Get Started',
    ctaLink: 'https://impeccify.com/get-started?plan=Website%20Design',
    image: `https://impeccify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.08b667ec.png&w=3840&q=75`,
    imageAlt: 'UI/UX Design & Web Design Services',
  },
  {
    tag: '',
    title: 'Custom Website Development Services',
    description:
      'Expert custom web app development services and ecommerce website development. We build high-performance websites with Next.js that drive business growth worldwide.',
    features: [
      'Custom website development with pixel-perfect responsiveness',
      'Smooth Animations and Micro-Interactions',
      'Ecommerce website development with Stripe, PayPal integration',
      'Web app design services with SEO optimization',
      'Custom web app development with API integrations',
      'Forms, Contact Us, and CRM Integration',
    ],
    cta: 'Get Started',
    ctaLink: 'https://impeccify.com/get-started?plan=Website%20Development',
    image: `https://impeccify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.794322e8.png&w=3840&q=75`,
    imageAlt: 'Custom Website Development Services',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <img
        src="https://impeccify.com/gradients/hero1.svg"
        alt=""
        className="absolute top-0 left-0 w-[600px] pointer-events-none opacity-60"
      />
      <img
        src="https://impeccify.com/gradients/hero2.svg"
        alt=""
        className="absolute bottom-0 right-0 w-[600px] pointer-events-none opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Web Design and Development Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Services that are built to last, with the latest technology. Get the world-class designs, faster.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-24">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.ctaLink}
                  className="inline-flex bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-100"
                >
                  {service.cta}
                </Link>
              </div>

              {/* Real Service Image */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceData = [
  {
    label: 'Our Services',
    title: 'UI/UX Design & Web Design Services',
    description: 'Professional UI/UX design and development services. We create stunning, user-centered responsive web designs that help businesses stand out and convert visitors into customers.',
    features: [
      'Multiple stunning design options with different styles',
      'Expert UI/UX design and development services',
      'Unlimited revisions before finalizing perfectly',
      'Custom website design precisely as per your preferences',
      'Responsive web design service for all devices',
      'Premium User Experience focused design',
    ],
    cta: 'Get Started',
    ctaLink: '#pricing',
    gradient: 'from-blue-500/10 to-purple-500/5',
  },
  {
    label: '',
    title: 'Custom Website Development Services',
    description: 'Expert custom web app development services and ecommerce website development. We build high-performance websites with Next.js that drive business growth worldwide.',
    features: [
      'Custom website development with pixel-perfect responsiveness',
      'Smooth Animations and Micro-Interactions',
      'Ecommerce website development with Stripe, PayPal integration',
      'Web app design services with SEO optimization',
      'Custom web app development with API integrations',
      'Forms, Contact Us, and CRM Integration',
    ],
    cta: 'Get Started',
    ctaLink: '#pricing',
    gradient: 'from-purple-500/10 to-blue-500/5',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Web Design and Development Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Services that are built to last, with the latest technology. Get the world-class designs, faster.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-20">
          {serviceData.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.ctaLink} className="inline-flex bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                  {service.cta}
                </Link>
              </div>

              {/* Visual Card */}
              <div className="flex-1 w-full">
                <div className={`bg-gradient-to-br ${service.gradient} border border-white/[0.06] rounded-2xl aspect-[4/3] flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                      {idx === 0 ? (
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      ) : (
                        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
