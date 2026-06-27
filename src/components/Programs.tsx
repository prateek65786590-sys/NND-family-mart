import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data';

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
              Our Training <span className="text-[#D4AF37]">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37]"></div>
          </div>
          <p className="text-gray-400 mt-6 md:mt-0 max-w-md font-light text-sm">
            Choose from a variety of specialized fitness programs designed to push your limits and maximize your potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-[#0B0B0B] border border-white/5 h-[400px]"
            >
              <img 
                src={program.image} 
                alt={program.name} 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-2xl text-white uppercase tracking-wider mb-2 group-hover:text-[#D4AF37] transition-colors">{program.name}</h3>
                
                {/* Hidden description that reveals on hover */}
                <div className="overflow-hidden h-0 group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                  <p className="text-gray-400 text-sm font-light mb-4 line-clamp-3">
                    {program.description}
                  </p>
                  <a href="#membership" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider hover:text-white transition-colors">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
