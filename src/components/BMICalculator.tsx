import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export function BMICalculator() {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(Number(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setStatus('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
      else setStatus('Obese');
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center bg-[#1C1C1C] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-[#D4AF37]" size={32} />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">
                Calculate Your <span className="text-[#D4AF37]">BMI</span>
              </h2>
            </div>
            
            <p className="text-gray-400 font-light mb-8 text-sm">
              Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m². Let's check your fitness level.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    required
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value) || '')}
                    className="w-full bg-[#0B0B0B] border border-white/10 text-white p-4 rounded focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                    placeholder="e.g. 175"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-white text-xs font-bold uppercase tracking-wider mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    required
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value) || '')}
                    className="w-full bg-[#0B0B0B] border border-white/10 text-white p-4 rounded focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                    placeholder="e.g. 70"
                  />
                </div>
              </div>
              
              <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-wider py-4 rounded hover:bg-white transition-colors">
                Calculate
              </button>
            </form>
            
            {bmi !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-[#0B0B0B] border border-[#D4AF37]/30 text-center rounded"
              >
                <p className="text-gray-400 text-sm font-light uppercase tracking-wider mb-2">Your BMI Is</p>
                <p className="text-5xl font-heading font-bold text-white mb-2">{bmi}</p>
                <p className={`font-bold uppercase tracking-wider ${status === 'Normal weight' ? 'text-green-500' : 'text-[#D4AF37]'}`}>
                  {status}
                </p>
              </motion.div>
            )}
          </div>
          
          <div className="w-full lg:w-1/2 h-full min-h-[400px] relative hidden lg:block">
             <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800" 
                alt="Fitness Athlete" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] to-transparent"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
