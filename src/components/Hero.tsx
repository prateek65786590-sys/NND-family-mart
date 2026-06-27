import { motion } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Gym Environment" 
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-semibold uppercase tracking-[0.3em] text-sm">Welcome to Sitapur's Elite Gym</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] mb-6 uppercase">
              Build <span className="text-gradient">Strength</span>.<br/>
              Build <span className="text-[#D4AF37]">Discipline</span>.<br/>
              Become Unstoppable.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
              Join Veer The Muscle Academy Gym and transform your body with professional equipment, expert guidance, and a highly motivating fitness environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#membership" className="flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Join Now
                <ArrowRight size={20} />
              </a>
              <a href="#programs" className="flex items-center gap-2 bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors glass">
                View Programs
              </a>
              <a href={STORE_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent text-gray-400 px-4 py-4 font-semibold uppercase tracking-wider hover:text-white transition-colors">
                <MapPin size={20} className="text-[#D4AF37]" />
                Find Us on Map
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </motion.div>
    </div>
  );
}
