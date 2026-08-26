import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Activity, Eye, HeartHandshake, MapPin, Clock, Award, CheckCircle2, ChevronRight, ShieldAlert } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import { garageInfo, servicesData, trustPillars } from '../data/services';

export default function Home() {
  return (
    <>
      <SEO 
        title="Precision Automotive Care. Built on Trust." 
        description="Shahzad Auto Garage is a premier automotive workshop in G11/4 Islamabad providing engine overhauls, brake service, electrical diagnostics, suspension repairs, and oil changes."
      />

      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-black">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=70&fm=webp" 
            alt="Shahzad Auto Garage Workshop" 
            className="w-full h-full object-cover object-center opacity-35 scale-105 animate-fade-in"
            fetchpriority="high"
            decoding="async"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/10 via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Subhead Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
              <span>Islamabad's Premier Automotive Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Precision Automotive Care. <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Built on Trust.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
              Shahzad Auto Garage provides specialized automotive diagnostics, engine overhauls, mechanical overhauls, brake care, suspension repairs, and synthetic oil servicing with master precision.
            </p>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* Primary Call CTA */}
              <a
                href={garageInfo.phoneLink}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C9A227] via-[#E0C15A] to-[#C9A227] hover:brightness-110 rounded-full shadow-2xl shadow-[#C9A227]/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Phone className="w-5 h-5 fill-black stroke-none" />
                <span>Call Now</span>
              </a>

              {/* Secondary Explore Services CTA */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#262626] border border-[#333333] hover:border-[#C9A227]/50 rounded-full transition-all duration-300 hover:text-[#E0C15A]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </Link>

            </div>



          </div>

          {/* Right Card / Location Quick Info */}
          <div className="lg:col-span-4 w-full">
            <div className="glass-card p-6 sm:p-7 rounded-2xl border-gold-glow space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-[#262626] pb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">Workshop Info</div>
                <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-400 font-medium border border-emerald-500/30">Open Now</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400 font-medium">Location</div>
                    <div className="text-white font-semibold mt-0.5">{garageInfo.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400 font-medium">Operating Hours</div>
                    <div className="text-white font-semibold mt-0.5">{garageInfo.hours.weekdays}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400 font-medium">Emergency</div>
                    <div className="text-white font-semibold mt-0.5">{garageInfo.hours.emergency}</div>
                  </div>
                </div>
              </div>

              <a
                href={garageInfo.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] hover:bg-[#262626] border border-[#C9A227]/40 text-[#E0C15A] text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Animated Statistics Banner */}
      <StatsCounter />

      {/* ---------------------------------------------------- */}
      {/* 2. ABOUT SECTION — HOMEPAGE */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 sm:py-20 bg-[#0A0A0A] relative border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#262626] shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=70&fm=webp"
                  alt="Technician working on engine"
                  className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                {/* Floating Gold Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#121212]/95 border border-[#C9A227]/30 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider">Uncompromising Workmanship</div>
                    <div className="text-xs text-gray-300 font-light mt-0.5">Specialized diagnostics & mechanical integrity</div>
                  </div>
                  <Award className="w-8 h-8 text-[#C9A227] shrink-0" />
                </div>
              </div>
            </div>

            {/* Right Copy Side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
                About Shahzad Auto Garage
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Automotive Expertise You Can Trust
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Shahzad Auto Garage was built on a single founding principle: delivering meticulous, engineering-grade automotive service without compromise. Located along Golra Service Road in G11/4 Islamabad, we maintain a modern, clean workshop equipped to handle complex mechanical, electronic, and structural vehicle repairs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_12px_rgba(201,162,39,0.18)] hover:border-[#E0C15A] hover:shadow-[0_0_20px_rgba(224,193,90,0.35)] transition-all duration-500 space-y-1.5">
                  <div className="text-xs font-bold text-[#E0C15A] uppercase">Quality Workmanship</div>
                  <p className="text-xs text-gray-400 font-light">Every bolt, gasket, and component is installed according to OEM specifications.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_12px_rgba(201,162,39,0.18)] hover:border-[#E0C15A] hover:shadow-[0_0_20px_rgba(224,193,90,0.35)] transition-all duration-500 space-y-1.5">
                  <div className="text-xs font-bold text-[#E0C15A] uppercase">Proper Diagnostics</div>
                  <p className="text-xs text-gray-400 font-light">We identify root causes electronically and mechanically before starting any job.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#C9A227] hover:bg-[#E0C15A] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A227]/20"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 3. SERVICES SECTION — HOMEPAGE */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 sm:py-20 bg-[#070707] relative border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light">
              From high-precision engine overhauls to electronic scanning and synthetic oil changes, explore our specialized service offerings below.
            </p>
          </div>

          {/* Services Grid (All 6 Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-6 sm:mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E0C15A] hover:text-white border-b-2 border-[#C9A227] pb-1 hover:border-white transition-all"
            >
              <span>View Full Service Catalog & Specs</span>
              <ChevronRight className="w-4 h-4 text-[#C9A227]" />
            </Link>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 4. TRUST PILLARS / STATISTICS */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 sm:py-16 bg-[#0A0A0A] border-t border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#C9A227]/40 text-[#E0C15A] flex items-center justify-center mb-5 transition-colors group-hover:scale-110">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#E0C15A] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 5. FINAL DIRECT CALL CTA BANNER */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-r from-[#121212] via-[#17150D] to-[#121212] border-t border-b border-[#C9A227]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Need Expert Car Maintenance in Islamabad?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Speak directly with our technical garage staff today. Get expert guidance, schedule your visit, or inquire about engine, brake, transmission, and diagnostic services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={garageInfo.phoneLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#C9A227] to-[#E0C15A] hover:brightness-110 rounded-full shadow-2xl shadow-[#C9A227]/30 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-black stroke-none" />
              <span>Call Now</span>
            </a>
            
            <a
              href={garageInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 rounded-full transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
