import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Gradient backgrounds */}
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-sm text-blue-400 font-medium tracking-wide uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Who We Are?</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              At Impeccify, we help businesses grow through impactful design, creating seamless and enjoyable user experience. At Impeccify, we help businesses grow through impactful design, creating seamless and enjoyable user experience. At Impeccify, we help businesses grow through impactful design, creating seamless and enjoyable user experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We are a team of passionate designers and developers who are committed to helping businesses grow through impactful design, creating seamless and enjoyable user experience. We are a team of passionate designers and developers who are committed to helping businesses grow through impactful design, creating seamless and enjoyable user experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Also we provide long term support to our clients. We are always available to help you with any issues or questions you may have. Email us at{' '}
              <a href="mailto:contact@impeccify.com" className="text-blue-400 hover:underline">contact@impeccify.com</a>
              {' '}or drop us a message on{' '}
              <a href="https://twitter.com/impeccify" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Twitter/X</a>.
            </p>
            <Link
              href="https://impeccify.com/get-started"
              className="inline-flex bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Get Started - It&apos;s Free
            </Link>
          </div>

          {/* Card visual from original */}
          <div className="flex items-center justify-center">
            <img
              src="https://impeccify.com/_next/static/media/card.5fdeb377.svg"
              alt="About Us Mockup"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
