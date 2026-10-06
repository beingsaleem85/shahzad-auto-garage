import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, MapPin, Wrench, HelpCircle } from 'lucide-react';
import SEO, { trackEvent } from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import { servicesData, garageInfo, getServiceSchema, getBreadcrumbSchema, getFAQPageSchema } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find next service for footer pagination
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  // Schema Array Construction
  const serviceSchemas = [
    getServiceSchema(service),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.title, url: `/services/${service.slug}` }
    ])
  ];

  if (service.faqs && service.faqs.length > 0) {
    serviceSchemas.push(getFAQPageSchema(service.faqs));
  }

  return (
    <>
      <SEO 
        title={service.metaTitle || `${service.title} | Shahzad Auto Garage Islamabad`}
        description={service.metaDescription || `${service.title} in G-11/4 Islamabad at Shahzad Auto Garage. ${service.shortDescription}`}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchemas}
      />

      {/* ---------------------------------------------------- */}
      {/* SECTION A: HERO */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-28 pb-10 bg-black border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={`${service.title} at Shahzad Auto Garage G-11/4 Islamabad`} 
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            fetchpriority="high"
            decoding="async"
            width="1200"
            height="630"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A227]/15 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Link to="/" className="hover:text-[#E0C15A] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
            <Link to="/services" className="hover:text-[#E0C15A] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A227]" />
            <span className="text-[#E0C15A] font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#C9A227]/40 text-[#E0C15A] text-xs font-semibold uppercase tracking-widest">
              Specialized Service
            </div>

            {/* Exactly one H1 per page */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.h1 || service.title}
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
              <div className="text-sm sm:text-base text-gray-300 font-light leading-relaxed whitespace-pre-line space-y-4">
                {service.overview}
              </div>

              <div className="p-5 rounded-2xl bg-[#121212] border border-[#C9A227]/30 shadow-[0_0_15px_rgba(201,162,39,0.15)] space-y-2">
                <div className="text-xs font-bold text-[#E0C15A] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Workshop Standard Guarantee</span>
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  All {service.title.toLowerCase()} procedures at Shahzad Auto Garage are performed following strict automotive clearance and diagnostic protocols in G-11/4 Islamabad.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#262626] shadow-2xl relative group">
                <img 
                  src={service.image} 
                  alt={`${service.title} procedure at Shahzad Auto Garage Islamabad`}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A0A0A]/90 border border-[#C9A227]/30 backdrop-blur-sm text-xs text-gray-300 font-medium">
                  Professional diagnostic bay in G-11/4 Islamabad
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SECTION C: WHAT WE COVER */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-[#070707] border-t border-[#1A1A1A]">
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
              <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_15px_rgba(201,162,39,0.2)] hover:border-[#E0C15A] hover:shadow-[0_0_25px_rgba(224,193,90,0.4)] transition-all duration-500 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] border border-[#C9A227]/40 text-[#E0C15A] text-xs font-bold flex items-center justify-center">
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
      <section className="py-16 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_20px_rgba(201,162,39,0.2)] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-[#C9A227] uppercase tracking-widest">Key Advantages</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Practical Benefits of This Service
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Investing in professional {service.title.toLowerCase()} protects your vehicle against major mechanical stress, maintains engine health, and ensures safety across Islamabad.
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
      {/* SECTION E: VISIBLE FAQS BLOCK */}
      {/* ---------------------------------------------------- */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-[#070707] border-t border-[#1A1A1A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {service.title} FAQs in Islamabad
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <FAQAccordion key={idx} faq={faq} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ---------------------------------------------------- */}
      {/* SECTION F: SERVICE NAVIGATION & CTA */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_20px_rgba(201,162,39,0.2)]">
            <div>
              <h3 className="text-lg font-bold text-white">Need {service.title} in G-11/4 Islamabad?</h3>
              <p className="text-xs text-gray-300 font-light mt-0.5">Call our technicians or send a direct WhatsApp message today.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={garageInfo.phoneLink}
                onClick={() => trackEvent('click_phone', { location: 'service_detail_cta' })}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#C9A227] hover:bg-[#E0C15A] rounded-full transition-all"
              >
                <Phone className="w-4 h-4 fill-black stroke-none" />
                <span>Call Now</span>
              </a>
              <a
                href={garageInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { location: 'service_detail_cta' })}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 rounded-full transition-all"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-semibold text-gray-400 pt-2">
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
