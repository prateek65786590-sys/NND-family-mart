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
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-110 transition-all cursor-pointer group relative"
      >
        <MapPin size={22} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Get Directions
        </div>
      </motion.a>
      
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1 }}
        href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
        className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-110 transition-all cursor-pointer group relative"
      >
        <PhoneCall size={22} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
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
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all cursor-pointer group relative"
      >
        <MessageCircle size={28} />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </div>
      </motion.a>

    </div>
  );
}
