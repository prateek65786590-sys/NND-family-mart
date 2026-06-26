import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                NND
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight text-white">Family Mart</span>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Sitapur</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Sitapur's most trusted supermarket. Providing premium quality groceries, fresh produce, and household essentials at the best prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Shop by Category</a></li>
              <li><a href="#offers" className="hover:text-emerald-400 transition-colors">Latest Offers</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Fresh Fruits & Veggies</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Grocery & Staples</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dairy & Bakery</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Household Essentials</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Personal Care</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400 flex-shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400 flex-shrink-0" />
                <span>support@nndfamilymart.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} NND Family Mart, Sitapur. All rights reserved.</p>
          <p>Designed for a premium shopping experience.</p>
        </div>
      </div>
    </footer>
  );
}
