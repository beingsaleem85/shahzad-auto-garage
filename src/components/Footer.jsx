import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { garageInfo, servicesData } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#1F1F1F] text-gray-400 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={garageInfo.logo} 
                alt="Shahzad Auto Garage" 
                className="h-16 sm:h-18 w-auto object-contain brightness-110 drop-shadow-[0_2px_12px_rgba(201,162,39,0.2)]"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Shahzad Auto Garage delivers high-precision automotive maintenance, diagnostic repairs, engine overhauls, and specialized vehicle care in Islamabad, Pakistan.
            </p>

          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#262626] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                  <span>Services Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                  <span>Contact & Workshop Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#262626] pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services/${s.slug}`} 
                    className="hover:text-[#E0C15A] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#262626] pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-3 text-xs font-medium">
              
              {/* Phone */}
              <a 
                href={garageInfo.phoneLink} 
                className="flex items-center gap-3 p-3 rounded-lg bg-[#121212] border border-[#262626] hover:border-[#C9A227]/50 transition-all text-white hover:text-[#E0C15A] font-semibold group"
              >
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>{garageInfo.phone}</span>
              </a>

              {/* WhatsApp */}
              <a 
                href={garageInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-lg bg-[#121212] border border-[#262626] hover:border-emerald-500/50 transition-all text-white hover:text-emerald-400 font-semibold group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400 shrink-0" />
                <span>{garageInfo.whatsapp}</span>
              </a>

              {/* Location */}
              <a 
                href={garageInfo.locationLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-start gap-3 p-3 rounded-lg bg-[#121212] border border-[#262626] hover:border-[#C9A227]/50 transition-all text-gray-300 hover:text-white text-[11px] group"
              >
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{garageInfo.address}</span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light relative z-20">
          <p>© {new Date().getFullYear()} Shahzad Auto Garage. All rights reserved.</p>
          <div className="relative z-20 pointer-events-auto">
            Developed by{' '}
            <a 
              href="https://digiclix.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E0C15A] hover:text-white font-semibold transition-colors underline cursor-pointer relative z-30"
            >
              DigiClix
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
