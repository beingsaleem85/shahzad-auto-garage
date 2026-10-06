import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home as HomeIcon, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Shahzad Auto Garage Islamabad"
        description="The requested page could not be found on Shahzad Auto Garage. Return to our home page or explore our car repair services in G-11/4 Islamabad."
        canonicalPath="/404"
        noindex={true}
      />

      <section className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-[#0A0A0A] text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#121212] border border-[#C9A227]/40 shadow-[0_0_30px_rgba(201,162,39,0.25)] text-[#C9A227] flex items-center justify-center">
            <Wrench className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227] bg-[#121212] px-3.5 py-1 rounded-full border border-[#C9A227]/30">
              Error 404 - Page Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Looking for Quality Auto Repair in Islamabad?
            </h1>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              The page you are trying to reach has moved or does not exist. Explore our core service offerings below or contact our technicians directly in G-11/4 Islamabad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#C9A227] to-[#E0C15A] hover:brightness-110 rounded-full shadow-lg transition-all"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold text-white bg-[#121212] border border-[#333333] hover:border-[#C9A227] rounded-full transition-all"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
