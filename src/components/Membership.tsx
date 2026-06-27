import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PLANS } from '../data';

export function Membership() {
  return (
    <section id="membership" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Membership <span className="text-[#D4AF37]">Plans</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Choose the plan that fits your goals. No hidden fees. Just pure results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 bg-[#1C1C1C] border ${plan.recommended ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105 z-10' : 'border-white/5'} transition-all`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-white font-heading text-2xl uppercase tracking-wider mb-2">{plan.name}</h3>
              <p className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-6">{plan.duration}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
              </div>
              
              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm font-light">
                    <Check size={16} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`text-center py-4 uppercase font-bold tracking-wider text-sm transition-colors ${plan.recommended ? 'bg-[#D4AF37] text-black hover:bg-white' : 'bg-transparent text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]'}`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-light">
            Contact us for exclusive couple memberships and student discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
