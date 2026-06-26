import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data';

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-emerald-500 rounded-full"></div>
          </div>
          <a href="#" className="hidden sm:inline-block text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">View All &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 overflow-hidden group"
            >
              {/* Image Box */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                  <button className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Eye size={16} />
                  </button>
                </div>
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">{product.category}</div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 h-10 hover:text-emerald-600 transition-colors cursor-pointer">{product.name}</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="w-10 h-10 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="inline-block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-emerald-600 dark:text-emerald-400 font-semibold px-6 py-2 rounded-full shadow-sm">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
