import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Wrench, CheckCircle2, Award, Sparkles, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { garageInfo } from '../data/services';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Shahzad Auto Garage Islamabad"
        description="Learn about Shahzad Auto Garage's commitment to precision automotive care, transparent diagnostics, engineering excellence, and customer-focused repair in G11/4 Islamabad."
      />

      {/* Page Header / Hero */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop" 
            alt="Shahzad Auto Garage Workshop" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
            About Our Workshop
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Professional Automotive Care With a Commitment to Quality
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto">
            Delivering precise diagnostics, dependable mechanical maintenance, and honest client care in Islamabad.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-[#070707] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Our Workshop Approach & Philosophy
              </h2>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                At Shahzad Auto Garage, we believe that modern vehicles demand a disciplined, diagnostic-first repair philosophy. Rather than replacing components based on assumptions, our technical team uses structured troubleshooting procedures to pinpoint physical and electrical faults accurately.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] shrink-0 mt-0.5">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Professional Workmanship</h3>
                    <p className="text-xs text-gray-400 font-light mt-0.5">Executed according to factory specifications and engineering standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Accurate Diagnostics</h3>
                    <p className="text-xs text-gray-400 font-light mt-0.5">OBD-II computer scanning paired with physical mechanical inspection.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Honest & Transparent Service</h3>
                    <p className="text-xs text-gray-400 font-light mt-0.5">Clear explanations of what your vehicle actually needs before work begins.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" 
                  alt="Engine Diagnostic Audit" 
                  className="rounded-2xl border border-[#262626] h-64 w-full object-cover shadow-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600793575654-910699b5e4d4?q=80&w=800&auto=format&fit=crop" 
                  alt="Brake Assembly Service" 
                  className="rounded-2xl border border-[#262626] h-64 w-full object-cover shadow-xl mt-8"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Choose Shahzad Auto Garage
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              We focus on delivering high standards of care across every vehicle that enters our bay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 space-y-3">
              <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider">01 / Service</div>
              <h3 className="text-base font-bold text-white">Professional Service</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Clean workshop practices, organized service bays, and dedicated automotive attention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 space-y-3">
              <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider">02 / Quality</div>
              <h3 className="text-base font-bold text-white">Quality Workmanship</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Using properly rated fluids, components, gaskets, and torque values for long-term durability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 space-y-3">
              <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider">03 / Precision</div>
              <h3 className="text-base font-bold text-white">Attention to Detail</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Double-checking fluid levels, structural fasteners, wiring looms, and road test safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 space-y-3">
              <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider">04 / Focus</div>
              <h3 className="text-base font-bold text-white">Customer-Focused</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Direct phone and WhatsApp assistance, clear cost estimates, and straightforward advice.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-[#121212] border-t border-[#262626] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have Questions About Your Vehicle's Condition?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light">
            Contact our technicians at Shahzad Auto Garage in G11/4 Islamabad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={garageInfo.phoneLink}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#C9A227] hover:bg-[#E0C15A] rounded-full transition-all"
            >
              <Phone className="w-4 h-4 fill-black stroke-none" />
              <span>Call Now</span>
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold text-white bg-[#1A1A1A] border border-[#333333] hover:border-[#C9A227] rounded-full transition-all"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
