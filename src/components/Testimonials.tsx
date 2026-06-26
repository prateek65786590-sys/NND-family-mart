import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-50 dark:bg-emerald-900/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-orange-50 dark:bg-orange-900/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
            Based on <span className="font-bold text-gray-900 dark:text-white">342+</span> genuine Google Reviews
            <span className="flex text-yellow-400"><Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /></span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 relative border border-gray-100 dark:border-gray-700"
            >
              <Quote className="absolute top-6 right-6 text-emerald-100 dark:text-gray-700 w-12 h-12" />
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? 'currentColor' : 'none'} className={i >= testimonial.rating ? 'text-gray-300' : ''} />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
            Read more reviews on Google <Star size={16} fill="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
}
