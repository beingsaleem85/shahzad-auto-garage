import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Wrench, Cpu, ShieldAlert, Sliders, Zap, Droplet } from 'lucide-react';

const iconMap = {
  Wrench,
  Cpu,
  ShieldAlert,
  Sliders,
  Zap,
  Droplet
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Wrench;

  return (
    <div className="group relative bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden shadow-xl hover:border-[#C9A227]/50 hover:shadow-2xl hover:shadow-[#C9A227]/10 transition-all duration-500 flex flex-col h-full">
      
      {/* Image Banner */}
      <div className="relative h-52 overflow-hidden bg-black">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=70&fm=webp";
          }}
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40"></div>

        {/* Floating Icon Badge */}
        <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0A0A0A]/90 border border-[#C9A227]/40 text-[#E0C15A] shadow-lg backdrop-blur-md">
          <IconComponent className="w-5 h-5 stroke-[2]" />
        </div>

        {/* Subtle Gold Edge Highlight */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C9A227]/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="text-lg font-bold text-white group-hover:text-[#E0C15A] transition-colors tracking-tight">
            {service.title}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Footer Link */}
        <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] group-hover:text-[#E0C15A] transition-colors">
            Explore Service
          </span>
          <Link
            to={`/services/${service.slug}`}
            className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#333333] group-hover:border-[#C9A227] text-gray-300 group-hover:text-black group-hover:bg-[#C9A227] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45"
            aria-label={`Learn more about ${service.title}`}
          >
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Bottom Gold Accent Bar */}
      <div className="h-1 w-0 bg-gradient-to-r from-[#C9A227] to-[#E0C15A] group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}
