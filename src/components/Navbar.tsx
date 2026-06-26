import { ShoppingCart, Heart, Search, Menu, X, PhoneCall, MapPin, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial dark mode preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-emerald-600 text-white py-2 text-xs sm:text-sm font-medium hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Sitapur, Uttar Pradesh</span>
            <span className="flex items-center gap-1"><PhoneCall size={14} /> +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Free Home Delivery on orders above ₹500</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-white dark:bg-gray-900 py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30">
                  NND
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl leading-tight text-gray-900 dark:text-white">Family Mart</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">Sitapur</span>
                </div>
              </a>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search for groceries, essentials, and more..." 
                  className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-full py-2.5 pl-5 pr-12 text-sm focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none transition-all"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors p-2 hidden sm:block">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors relative p-2 hidden sm:block">
                <Heart size={22} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white dark:border-gray-900">0</span>
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors relative p-2 flex items-center gap-2">
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 sm:right-auto sm:left-4 w-4 h-4 bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white dark:border-gray-900">3</span>
                <span className="hidden sm:block text-sm font-semibold ml-1">₹520</span>
              </button>
              <button className="md:hidden text-gray-600 dark:text-gray-300 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Search Bar - Mobile */}
          <div className="mt-3 md:hidden">
             <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-full py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </button>
              </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <a href="#categories" className="text-gray-800 dark:text-gray-200 font-medium py-2 border-b dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Shop Categories</a>
                <a href="#offers" className="text-gray-800 dark:text-gray-200 font-medium py-2 border-b dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Latest Offers</a>
                <a href="#about" className="text-gray-800 dark:text-gray-200 font-medium py-2 border-b dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
                <a href="#contact" className="text-gray-800 dark:text-gray-200 font-medium py-2 border-b dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Contact & Location</a>
                
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Dark Mode</span>
                  <button onClick={toggleDarkMode} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {isDarkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-gray-600" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
