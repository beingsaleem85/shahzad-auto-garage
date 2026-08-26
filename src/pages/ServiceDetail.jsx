import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, MapPin, Wrench } from 'lucide-react';
import SEO from '../components/SEO';
import { servicesData, garageInfo } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find next/prev service for footer pagination
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <>
      <SEO 
        title={`${service.title} | Shahzad Auto Garage Islamabad`}
        description={`${service.title} in Islamabad at Shahzad Auto Garage. ${service.shortDescription}`}
      />

      {/* ---------------------------------------------------- */}
      {/* SECTION A: HERO */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-28 pb-10 bg-black border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A227]/15 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Link to="/" className="hover:text-[#E0C15A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
            <Link to="/services" className="hover:text-[#E0C15A]">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
            <span className="text-[#E0C15A] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] text-xs font-semibold uppercase tracking-widest">
              Specialized Service
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {service.heroSubtitle}
            </p>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SECTION B: SERVICE OVERVIEW */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">
                Service Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Understanding Our {service.title} Approach
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                {service.overview}
              </p>

              <div className="p-5 rounded-2xl bg-[#121212] border border-[#262626] space-y-2">
                <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Workshop Standard Guarantee</span>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  All {service.title.toLowerCase()} procedures at Shahzad Auto Garage are performed following strict automotive clearance and diagnostic protocols.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#262626] shadow-2xl relative group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0A0A]/90 border border-[#C9A227]/30 backdrop-blur-sm text-xs text-gray-300 font-medium">
                  Professional diagnostic bay in G11/4 Islamabad
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SECTION C: WHAT WE COVER */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#070707] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Scope of Care</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {service.whatWeCoverTitle}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              Here is what our technicians inspect, service, and rectify during a {service.title} appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeCover.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#262626] hover:border-[#C9A227]/40 transition-all space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] border border-[#333333] text-[#E0C15A] text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SECTION D: BENEFITS */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] border border-[#262626] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Key Advantages</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Practical Benefits of This Service
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Investing in professional {service.title.toLowerCase()} protects your vehicle against major mechanical stress, maintains engine health, and ensures safety.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200 font-medium leading-normal">{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>




      {/* ---------------------------------------------------- */}
      {/* SECTION F: SERVICE NAVIGATION */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
            <Link to="/services" className="hover:text-[#E0C15A] transition-colors">
              &larr; Back to All Services
            </Link>
            <Link to={`/services/${nextService.slug}`} className="hover:text-[#E0C15A] transition-colors flex items-center gap-1">
              <span>Next: {nextService.title}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
