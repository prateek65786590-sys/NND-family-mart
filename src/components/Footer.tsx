import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <a href="#" className="flex items-center gap-2 mb-8 group">
                <div className="flex flex-col items-start">
                  <span className="font-heading font-bold text-3xl leading-none text-white tracking-wider group-hover:text-[#D4AF37] transition-colors">VEER</span>
                  <span className="text-[9px] text-[#D4AF37] font-semibold uppercase tracking-[0.2em] -mt-1">Muscle Academy</span>
                </div>
              </a>
            <p className="text-sm font-light leading-relaxed mb-8">
              Sitapur's most elite fitness destination. Build strength, build discipline, and become unstoppable with our expert trainers and premium equipment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">Programs</a></li>
              <li><a href="#membership" className="hover:text-[#D4AF37] transition-colors">Membership Plans</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Programs</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">Muscle Building</a></li>
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">Weight Loss</a></li>
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">Strength Training</a></li>
              <li><a href="#programs" className="hover:text-[#D4AF37] transition-colors">Personal Training</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-6 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0" />
                <span>info@veermuscleacademy.com</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Veer The Muscle Academy Gym. All rights reserved.</p>
          <p>Built for the Elite.</p>
        </div>
      </div>
    </footer>
  );
}
