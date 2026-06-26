import { motion } from 'motion/react';

export function Offers() {
  return (
    <section id="offers" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Offer 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-orange-50 dark:bg-orange-900/20 group"
          >
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center mix-blend-multiply transition-transform duration-500 group-hover:scale-110"></div>
            <div className="relative z-10 p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400 text-xs font-bold rounded-full mb-4">Today's Deal</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">Flat 20% OFF</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">On all fresh fruits and vegetables.</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                Shop Fresh
              </button>
            </div>
          </motion.div>
          
          {/* Offer 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-blue-50 dark:bg-blue-900/20 group"
          >
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center mix-blend-multiply transition-transform duration-500 group-hover:scale-110"></div>
            <div className="relative z-10 p-8 md:p-10">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 text-xs font-bold rounded-full mb-4">Weekly Offer</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">Buy 1 Get 1 Free</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">On selected household cleaning items.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                Explore Offers
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
