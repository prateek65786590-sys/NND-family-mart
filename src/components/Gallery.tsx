import { motion } from 'motion/react';

const PHOTOS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', title: 'Strength Training Area', span: 'col-span-2 row-span-2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400', title: 'Cardio Zone', span: 'col-span-1 row-span-1' },
  { id: 3, url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400', title: 'Free Weights', span: 'col-span-1 row-span-1' },
  { id: 4, url: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=400', title: 'Modern Machines', span: 'col-span-1 row-span-1' },
  { id: 5, url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400', title: 'Member Transformations', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Gym <span className="text-[#D4AF37]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Take a look inside Veer The Muscle Academy. Premium equipment, clean environment, and motivating vibes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px] md:auto-rows-[250px]">
          {PHOTOS.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${photo.span} relative overflow-hidden group bg-[#0B0B0B]`}
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-bold uppercase tracking-wider text-xs md:text-sm p-4 md:p-6">{photo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-600 uppercase tracking-widest">
            *Representative images. Visit us to experience the real vibe.
          </p>
        </div>
      </div>
    </section>
  );
}
