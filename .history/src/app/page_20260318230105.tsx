import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Problems from '@/components/Problems';
import Process from '@/components/Process';
import Benefits from '@/components/Benefits';
import DesignVsDev from '@/components/DesignVsDev';
import Marquee from '@/components/Marquee';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FeaturedTemplate from '@/components/FeaturedTemplate';
import SocialFollow from '@/components/SocialFollow';
import Contact from '@/components/Contact';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Problems />
      <Process />
      <Benefits />
      <DesignVsDev />
      <Marquee />
      <Pricing />
      <Comparison />
      <Testimonials />
      <About />
      <FeaturedTemplate />
      <SocialFollow />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
}
