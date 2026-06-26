import { motion } from 'motion/react';

const PHOTOS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600', title: 'Store Interior', span: 'col-span-2 row-span-2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400', title: 'Fresh Produce', span: 'col-span-1 row-span-1' },
  { id: 3, url: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=400', title: 'Beverages Section', span: 'col-span-1 row-span-1' },
  { id: 4, url: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400', title: 'Dairy & Bakery', span: 'col-span-1 row-span-1' },
  { id: 5, url: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400', title: 'Household Items', span: 'col-span-1 row-span-1' },
];

export function Gallery() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Store Gallery</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Take a virtual tour of our premium supermarket in Sitapur.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {PHOTOS.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${photo.span} relative rounded-2xl overflow-hidden group shadow-sm`}
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="text-white font-medium p-4">{photo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            *Note: These are elegant placeholders. We encourage you to visit our store to experience it in person.
          </p>
        </div>
      </div>
    </section>
  );
}
