import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1C1C1C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Find <span className="text-[#D4AF37]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-[#0B0B0B] overflow-hidden border border-white/10">
          
          {/* Info Section */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-8">{STORE_INFO.name}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#1C1C1C] flex items-center justify-center flex-shrink-0 text-[#D4AF37] border border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Location</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{STORE_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#1C1C1C] flex items-center justify-center flex-shrink-0 text-[#D4AF37] border border-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Contact</h4>
                  <p className="text-gray-400 font-light text-sm">{STORE_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-[#1C1C1C] flex items-center justify-center flex-shrink-0 text-[#D4AF37] border border-white/5">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Gym Hours</h4>
                  <p className="text-gray-400 font-light text-sm">{STORE_INFO.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href={STORE_INFO.googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#D4AF37] text-black py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <Navigation size={18} />
                Open in Google Maps
              </a>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="w-full lg:w-3/5 min-h-[400px] relative">
            <iframe 
              src={STORE_INFO.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-70 invert"
              title="Google Maps Location"
            ></iframe>
            
            <div className="absolute top-6 right-6 glass px-6 py-3 border border-white/10 flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
               <span className="text-sm font-bold uppercase tracking-wider text-white">We are here</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
