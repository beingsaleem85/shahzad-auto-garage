import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { garageInfo, servicesData } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO 
        title="Automotive Services | Shahzad Auto Garage Islamabad"
        description="Explore Shahzad Auto Garage's 6 core services: Mechanical Services, Engine Overhauling, Brake Service, Suspension & Transmission, Electrical Diagnostics, and Oil Change in G11/4 Islamabad."
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop" 
            alt="Automotive Workshop Services" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
            Expert Automotive Care
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Our Specialist Garage Services
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive spectrum of mechanical repair, engine rebuilding, electronic diagnostic, brake safety, suspension tuning, and maintenance services.
          </p>
        </div>
      </section>

      {/* Detailed Services Listing Grid */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {servicesData.map((service, idx) => (
              <div 
                key={service.id} 
                className="bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden shadow-xl hover:border-[#C9A227]/50 transition-all group flex flex-col md:flex-row md:h-[260px] w-full"
              >
                {/* Image Side */}
                <div className="md:w-5/12 relative h-52 md:h-full overflow-hidden bg-black shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    fetchpriority={idx < 4 ? "high" : "auto"}
                    decoding="async"
                  />
                </div>

                {/* Content Side */}
                <div className="p-6 md:w-7/12 flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-white group-hover:text-[#E0C15A] transition-colors leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>

                    {/* Key Benefit Highlight */}
                    <div className="pt-2 border-t border-[#1F1F1F]">
                      <div className="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider mb-1">Key Customer Benefit</div>
                      <div className="flex items-start gap-2 text-xs text-gray-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{service.benefits[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E0C15A] hover:text-white transition-colors group/link"
                    >
                      <span>View Full Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A227] group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call CTA Banner */}
      <section className="py-16 bg-[#0A0A0A] border-t border-[#1A1A1A] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Direct Advice on Your Car Service Requirement?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto">
            Call Shahzad Auto Garage now or message us on WhatsApp for advice and workshop availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={garageInfo.phoneLink}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#C9A227] hover:bg-[#E0C15A] rounded-full transition-all"
            >
              <Phone className="w-4 h-4 fill-black stroke-none" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
