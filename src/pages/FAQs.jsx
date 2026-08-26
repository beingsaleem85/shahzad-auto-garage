import React, { useState } from 'react';
import { Phone, HelpCircle, MapPin } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import { faqsData, garageInfo } from '../data/services';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(prevIndex => (prevIndex === idx ? null : idx));
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions | Shahzad Auto Garage Islamabad"
        description="Find answers to common questions about services, location in G11/4 Islamabad, phone bookings, engine overhauling, diagnostics, and brake services at Shahzad Auto Garage."
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] border-b border-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=1600&auto=format&fit=crop" 
            alt="Automotive Garage FAQs" 
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#C9A227]/30 text-[#C9A227] text-xs font-semibold uppercase tracking-widest">
            Client Information
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Have questions regarding our workshop services, location in G11/4 Islamabad, or how to contact our technicians? Find immediate answers below.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#070707]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqsData.map((faq, idx) => (
            <FAQAccordion 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)} 
            />
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-[#0A0A0A] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Still Have Questions or Need Diagnostic Advice?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto">
            Our team is available by phone or WhatsApp to assist you directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={garageInfo.phoneLink}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#C9A227] hover:bg-[#E0C15A] rounded-full transition-all"
            >
              <Phone className="w-4 h-4 fill-black stroke-none" />
              <span>Call Now</span>
            </a>
            
            <a
              href={garageInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-500/40 rounded-full hover:bg-emerald-900/60 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
