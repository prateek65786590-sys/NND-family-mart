import { motion } from 'motion/react';
import { ShoppingBag, MapPin, PhoneCall } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Hero() {
  return (
    <div className="relative bg-emerald-50 overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=2000" 
          alt="Supermarket Interior" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/95 via-emerald-50/80 to-transparent dark:from-gray-900/95 dark:via-gray-900/80 dark:to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-28 lg:py-32 flex flex-col md:flex-row items-center">
          
          <div className="w-full md:w-1/2 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4 dark:bg-emerald-900/50 dark:text-emerald-300">
                Welcome to NND Family Mart
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Everything Your Family Needs <span className="text-emerald-600 dark:text-emerald-400">Under One Roof</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Shop groceries, daily essentials, household products, personal care, snacks, beverages, kitchen essentials, and much more at affordable prices in Sitapur.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#categories" className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/30">
                  <ShoppingBag size={18} />
                  Shop Now
                </a>
                <a href={STORE_INFO.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  <MapPin size={18} className="text-orange-500" />
                  Visit Store
                </a>
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors dark:bg-blue-900/30 dark:text-blue-400">
                  <PhoneCall size={18} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 hidden md:block">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800" 
                alt="Fresh Groceries" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 object-cover h-[500px]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl font-bold">
                  %
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Weekly Offers</p>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">Up to 40% OFF</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
