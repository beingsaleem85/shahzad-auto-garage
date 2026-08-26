import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, Wrench, ChevronRight } from 'lucide-react';
import { garageInfo, servicesData } from '../data/services';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services', 
      isDropdown: true 
    },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl' 
        : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden p-1 rounded-lg transition-transform duration-300 group-hover:scale-105">
            <img 
              src={garageInfo.logo} 
              alt="Shahzad Auto Garage Logo" 
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain brightness-110 drop-shadow-[0_2px_12px_rgba(201,162,39,0.2)]"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive('/services')
                        ? 'text-[#E0C15A] bg-[#1A1A1A] border border-[#C9A227]/30'
                        : 'text-gray-300 hover:text-white hover:bg-[#121212]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#C9A227]' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-72 bg-[#121212] border border-[#C9A227]/30 rounded-xl shadow-2xl p-2 transition-all duration-200 ${
                    servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                  }`}>
                    <div className="text-[11px] font-semibold tracking-wider text-[#C9A227] uppercase px-3 py-1.5 border-b border-[#262626]">
                      Our Services
                    </div>
                    <div className="py-1">
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className={`group flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                            location.pathname === `/services/${service.slug}`
                              ? 'bg-[#C9A227]/15 text-[#E0C15A]'
                              : 'text-gray-300 hover:bg-[#1A1A1A] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] group-hover:scale-125 transition-transform"></span>
                            <span>{service.title}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#C9A227]" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1 pt-1.5 border-t border-[#262626]">
                      <Link
                        to="/services"
                        className="block text-center py-2 text-[11px] font-semibold text-[#E0C15A] hover:underline"
                      >
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  isActive(link.path)
                    ? 'text-[#E0C15A] bg-[#1A1A1A] border border-[#C9A227]/30 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-[#121212]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Call Now CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={garageInfo.phoneLink}
            className="relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#C9A227] via-[#E0C15A] to-[#C9A227] hover:brightness-110 rounded-full shadow-lg shadow-[#C9A227]/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <Phone className="w-4 h-4 fill-black stroke-none group-hover:animate-bounce" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={garageInfo.phoneLink}
            className="p-2.5 rounded-full bg-[#C9A227] text-black shadow-md hover:brightness-110"
            aria-label="Call Shahzad Auto Garage"
          >
            <Phone className="w-4 h-4 fill-black stroke-none" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-300 hover:text-white bg-[#121212] border border-[#262626] rounded-full focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C9A227]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-4 pt-4 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col space-y-1 py-1">
                    <Link
                      to={link.path}
                      className="text-sm font-semibold text-[#E0C15A] px-3 py-2 flex items-center justify-between bg-[#121212] rounded-lg border border-[#C9A227]/20"
                    >
                      <span>{link.name} Landing Page</span>
                      <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                    </Link>
                    <div className="pl-3 space-y-1 mt-1 border-l-2 border-[#C9A227]/40 my-1">
                      {servicesData.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.slug}`}
                          className="block text-xs font-medium text-gray-300 hover:text-white py-1.5 px-3 rounded hover:bg-[#1A1A1A]"
                        >
                          • {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#1A1A1A] text-[#E0C15A] border border-[#C9A227]/30 font-semibold'
                      : 'text-gray-300 hover:bg-[#121212] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#262626] flex flex-col space-y-2.5">
              <a
                href={garageInfo.phoneLink}
                className="w-full flex items-center justify-center gap-2.5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C9A227] to-[#E0C15A] rounded-xl shadow-lg"
              >
                <Phone className="w-4 h-4 fill-black stroke-none" />
                <span>Call Now</span>
              </a>
              
              <a
                href={garageInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 rounded-xl"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
