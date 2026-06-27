import { motion } from 'motion/react';
import { Dumbbell, Target, Users, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Dumbbell, title: 'Modern Equipment', desc: 'State-of-the-art machines and free weights.' },
  { icon: Target, title: 'Expert Guidance', desc: 'Certified trainers to help you hit your goals.' },
  { icon: ShieldCheck, title: 'Hygienic Facility', desc: 'Clean, safe, and sanitized environment.' },
  { icon: Users, title: 'Strong Community', desc: 'Train with motivated, like-minded individuals.' }
];

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" 
                alt="Gym Training" 
                className="relative z-10 w-full rounded shadow-2xl border-l-4 border-b-4 border-[#D4AF37] object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
                More Than Just A Gym. <br/>
                <span className="text-[#D4AF37]">It's A Lifestyle.</span>
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              
              <p className="text-gray-300 mb-6 leading-relaxed font-light">
                At Veer The Muscle Academy Gym, we are dedicated to providing a premium fitness experience. Located in the heart of Sitapur, our facility is equipped with industry-leading machinery designed for all fitness levels.
              </p>
              <p className="text-gray-300 mb-10 leading-relaxed font-light">
                Whether your goal is weight loss, muscle building, or functional strength, our certified personal trainers will craft a personalized program to ensure you achieve unstoppable results. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {HIGHLIGHTS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded bg-[#1C1C1C] border border-white/5 flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
