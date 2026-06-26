import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Visit Our Store</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
          
          {/* Info Section */}
          <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{STORE_INFO.name}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-emerald-600 dark:text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{STORE_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{STORE_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-orange-600 dark:text-orange-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Business Hours</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{STORE_INFO.hours}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href={STORE_INFO.googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-md"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="w-full lg:w-2/3 min-h-[400px] relative">
            <iframe 
              src={STORE_INFO.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-[1.1] dark:invert-[90%] dark:hue-rotate-180"
              title="Google Maps Location"
            ></iframe>
            
            {/* Glass overlay hint */}
            <div className="absolute top-4 right-4 glass px-4 py-2 rounded-lg flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-sm font-semibold text-gray-900 dark:text-white">We are open!</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
