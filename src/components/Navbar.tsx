import { Menu, X, PhoneCall, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORE_INFO } from '../data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2 group">
                <div className="flex flex-col items-center">
                  <span className="font-heading font-bold text-3xl leading-none text-white tracking-wider group-hover:text-[#D4AF37] transition-colors">VEER</span>
                  <span className="text-[9px] text-[#D4AF37] font-semibold uppercase tracking-[0.2em] -mt-1">Muscle Academy</span>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">About</a>
              <a href="#programs" className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">Programs</a>
              <a href="#membership" className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">Membership</a>
              <a href="#gallery" className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">Gallery</a>
              <a href="#contact" className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>

            {/* Icons / Actions */}
            <div className="flex items-center gap-4">
              <a href="#membership" className="hidden md:flex items-center justify-center bg-[#D4AF37] text-black font-bold uppercase tracking-wider text-sm px-6 py-2.5 rounded hover:bg-white transition-colors">
                Join Now
              </a>
              <button className="md:hidden text-gray-300 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0B0B0B] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <a href="#about" className="text-white font-heading text-xl uppercase tracking-wider py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                <a href="#programs" className="text-white font-heading text-xl uppercase tracking-wider py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Programs</a>
                <a href="#membership" className="text-white font-heading text-xl uppercase tracking-wider py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Membership</a>
                <a href="#gallery" className="text-white font-heading text-xl uppercase tracking-wider py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
                <a href="#contact" className="text-white font-heading text-xl uppercase tracking-wider py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Contact & Location</a>
                
                <a href="#membership" className="mt-4 flex items-center justify-center bg-[#D4AF37] text-black font-bold uppercase tracking-wider py-3 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                  Join Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
