import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Programs } from './components/Programs';
import { Membership } from './components/Membership';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BMICalculator } from './components/BMICalculator';
import { Transformations } from './components/Transformations';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#0B0B0B] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Programs />
        <Membership />
        <WhyChooseUs />
        <BMICalculator />
        <Transformations />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
