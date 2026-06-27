import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, STORE_INFO } from '../data';

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Client <span className="text-[#D4AF37]">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto flex items-center justify-center gap-2 font-light">
            Based on <span className="font-bold text-white">{STORE_INFO.reviewCount}+</span> genuine Google Reviews
            <span className="flex text-[#D4AF37]">
              <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} /> <Star fill="currentColor" size={16} />
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1C1C1C] p-8 border border-white/5 relative group hover:border-[#D4AF37]/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-[#D4AF37]/10 transition-colors" />
              
              <div className="flex text-[#D4AF37] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < testimonial.rating ? 'currentColor' : 'none'} className={i >= testimonial.rating ? 'text-gray-600' : ''} />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 font-light italic leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
