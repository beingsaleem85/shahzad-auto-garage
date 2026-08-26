import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { garageInfo } from '../data/services';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group pointer-events-none"
      aria-label="Contact on WhatsApp"
    >
      {/* Tooltip */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-[#121212] border border-[#C9A227]/40 text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-2xl transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Chat on WhatsApp: <span className="text-[#E0C15A] font-semibold">{garageInfo.whatsapp}</span></span>
      </div>

      {/* Button */}
      <a
        href={garageInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-950/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-emerald-400/30 group"
        aria-label={`Chat with Shahzad Auto Garage on WhatsApp at ${garageInfo.whatsapp}`}
      >
        {/* Pulsing Backlight Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75"></span>
        
        {/* Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
}
