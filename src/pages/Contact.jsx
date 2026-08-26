import React from 'react';
import { Phone, MapPin, ExternalLink, Clock, Navigation, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEO from '../components/SEO';
import { garageInfo } from '../data/services';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact & Workshop Location | Shahzad Auto Garage Islamabad"
        description="Contact Shahzad Auto Garage directly via call (+92 342 4797953) or WhatsApp (+92 342 4793753). Located Opposite Lucky Star Cricket Stadium, G11/4 Golra Service Road, Islamabad."
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop" 
            alt="Shahzad Auto Garage Location" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
            Contact
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Contact & Workshop Location
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Reach out to our technicians directly by phone or WhatsApp, or visit our garage in G11/4 Islamabad.
          </p>
        </div>
      </section>

      {/* Contact Cards & Location Grid */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top 3 Primary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Direct Phone Card */}
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#C9A227]/40 text-[#E0C15A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 fill-[#C9A227] stroke-none" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{garageInfo.phone}</h2>
                </div>
              </div>

              <a
                href={garageInfo.phoneLink}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C9A227] to-[#E0C15A] hover:brightness-110 rounded-full shadow-lg shadow-[#C9A227]/20 transition-all"
              >
                <Phone className="w-4 h-4 fill-black stroke-none" />
                <span>Call Now</span>
              </a>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-500 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-emerald-500/40 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-7 h-7 fill-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{garageInfo.whatsapp}</h2>
                </div>
              </div>

              <a
                href={garageInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 rounded-full transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* 3. Location Address Card */}
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 flex flex-col justify-between space-y-6 group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-[#C9A227]/40 text-[#E0C15A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-[#C9A227]" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white leading-snug">{garageInfo.address}</h2>
                </div>
              </div>

              <a
                href={garageInfo.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-[#E0C15A] bg-[#1A1A1A] hover:bg-[#262626] border border-[#C9A227]/40 rounded-full transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C9A227]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-[#C9A227]" />
              </a>
            </div>

          </div>

          {/* Interactive Google Map Visual Container */}
          <div className="bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_20px_rgba(201,162,39,0.25)] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#262626] pb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C9A227]" />
                  <span>Workshop Location & Map</span>
                </h2>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Opposite Lucky Star Cricket Stadium, G11/4, Golra Service Road, Islamabad
                </p>
              </div>

              <a
                href={garageInfo.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] hover:bg-[#E0C15A] text-black text-xs font-bold uppercase tracking-wider rounded-full transition-all"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame Container */}
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-[#262626] bg-[#121212]">
              <iframe
                title="Shahzad Auto Garage Location Map"
                src="https://maps.google.com/maps?q=Shahzad+Auto+Garage,+G-11/4,+Golra+Service+Road,+Islamabad&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Overlay Badge */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-[#0A0A0A]/95 border border-[#C9A227]/40 text-xs shadow-2xl backdrop-blur-md space-y-1">
                <div className="font-bold text-[#E0C15A] uppercase tracking-wider">Shahzad Auto Garage</div>
                <div className="text-[11px] text-gray-300">Opposite Lucky Star Cricket Stadium, G11/4, Islamabad</div>
                <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Workshop Ready & Accessible</span>
                </div>
              </div>
            </div>

            {/* Hours Banner */}
            <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                <span className="font-semibold text-white">Workshop Operating Hours:</span>
                <span>{garageInfo.hours.weekdays}</span>
              </div>
              <span className="text-gray-400 font-light">{garageInfo.hours.sunday}</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
