import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const TRANSFORMATIONS = [
  { id: 1, name: 'Rahul S.', duration: '6 Months', before: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Priya K.', duration: '4 Months', before: 'https://images.unsplash.com/photo-1574680178050-55c6e6a1f4bf?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400' }
];

export function Transformations() {
  return (
    <section className="py-24 bg-[#1C1C1C] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
              Success <span className="text-[#D4AF37]">Stories</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37]"></div>
          </div>
          <p className="text-gray-400 mt-6 md:mt-0 max-w-md font-light text-sm">
            Real people. Real results. See what dedication and expert guidance can achieve at Veer The Muscle Academy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {TRANSFORMATIONS.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0B0B0B] p-4 border border-white/5 group"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                
                {/* Before */}
                <div className="flex-1 relative">
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 z-10">Before</div>
                  <img src={story.before} alt="Before" className="w-full h-[250px] object-cover grayscale opacity-60" />
                </div>
                
                {/* After */}
                <div className="flex-1 relative">
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 z-10">After</div>
                  <img src={story.after} alt="After" className="w-full h-[250px] object-cover border-b-2 border-[#D4AF37]" />
                </div>
                
              </div>
              
              <div className="flex items-center justify-between px-2 pb-2">
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider">{story.name}</h3>
                  <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">{story.duration} Transformation</p>
                </div>
                <a href="#membership" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-colors text-white">
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="#membership" className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors">
              Start Your Transformation
           </a>
        </div>
      </div>
    </section>
  );
}
