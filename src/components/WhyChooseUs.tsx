import { motion } from 'motion/react';
import { Award, Dumbbell, Sparkles, UserCheck, CreditCard, Maximize, Smile, Lock } from 'lucide-react';

const FEATURES = [
  { icon: Award, title: 'Certified Trainers' },
  { icon: Dumbbell, title: 'Premium Equipment' },
  { icon: Sparkles, title: 'Clean & Hygienic' },
  { icon: UserCheck, title: 'Personalized Training' },
  { icon: CreditCard, title: 'Affordable Membership' },
  { icon: Maximize, title: 'Spacious Workout Area' },
  { icon: Smile, title: 'Friendly Environment' },
  { icon: Lock, title: 'Secure Lockers' }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1C1C1C] border-t border-white/5 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            The <span className="text-[#D4AF37]">Veer</span> Advantage
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-6 bg-[#0B0B0B] border border-white/5 hover:border-[#D4AF37]/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full bg-[#1C1C1C] border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Icon size={28} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
