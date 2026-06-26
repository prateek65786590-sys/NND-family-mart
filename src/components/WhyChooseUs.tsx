import { motion } from 'motion/react';
import { ShieldCheck, Tags, Smile, Users, Sparkles, Zap, Package, ThumbsUp } from 'lucide-react';

const REASONS = [
  { icon: ShieldCheck, title: 'Genuine Products', desc: '100% authentic and quality verified', color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { icon: Tags, title: 'Affordable Prices', desc: 'Best competitive prices in Sitapur', color: 'text-orange-500', bg: 'bg-orange-100' },
  { icon: Smile, title: 'Friendly Staff', desc: 'Always ready to help you shop', color: 'text-blue-500', bg: 'bg-blue-100' },
  { icon: Users, title: 'Family Shopping', desc: 'Comfortable environment for all', color: 'text-purple-500', bg: 'bg-purple-100' },
  { icon: Sparkles, title: 'Clean Store', desc: 'Hygienic and well-maintained aisles', color: 'text-teal-500', bg: 'bg-teal-100' },
  { icon: Zap, title: 'Fast Billing', desc: 'Multiple counters for quick checkout', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { icon: Package, title: 'Huge Variety', desc: 'Everything you need under one roof', color: 'text-pink-500', bg: 'bg-pink-100' },
  { icon: ThumbsUp, title: 'Trusted Locally', desc: 'Loved by thousands in Sitapur', color: 'text-indigo-500', bg: 'bg-indigo-100' },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Experience the best supermarket shopping in Sitapur with our premium facilities and customer-first approach.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 text-center flex flex-col items-center"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${reason.bg} ${reason.color} dark:bg-opacity-20 mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
