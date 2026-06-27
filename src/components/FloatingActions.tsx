import { PhoneCall, MapPin, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data';
import { motion } from 'motion/react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1 }}
        href={STORE_INFO.googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#1C1C1C] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer group relative"
      >
        <MapPin size={20} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] uppercase tracking-wider font-bold py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Directions
        </div>
      </motion.a>
      
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1 }}
        href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
        className="w-12 h-12 bg-[#1C1C1C] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer group relative"
      >
        <PhoneCall size={20} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] uppercase tracking-wider font-bold py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </div>
      </motion.a>
      
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        href={`https://wa.me/${STORE_INFO.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-green-400 hover:scale-105 transition-all cursor-pointer group relative"
      >
        <MessageCircle size={28} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-green-500 text-white text-[10px] uppercase tracking-wider font-bold py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </div>
      </motion.a>

    </div>
  );
}
