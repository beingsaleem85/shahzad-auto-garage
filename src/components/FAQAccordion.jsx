import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ faq, isOpen: controlledIsOpen, onToggle, defaultOpen = false }) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className={`border rounded-xl transition-all duration-300 ${
      isOpen 
        ? 'bg-[#121212] border-[#C9A227]/40 shadow-xl shadow-[#C9A227]/5' 
        : 'bg-[#0E0E0E] border-[#222222] hover:border-[#333333]'
    }`}>
      <button
        onClick={handleClick}
        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-[#C9A227]/20 text-[#E0C15A]' : 'bg-[#1A1A1A] text-gray-400'}`}>
            <HelpCircle className="w-5 h-5 shrink-0" />
          </div>
          <span className={`text-sm sm:text-base font-semibold transition-colors ${isOpen ? 'text-[#E0C15A]' : 'text-white'}`}>
            {faq.question}
          </span>
        </div>

        <div className={`p-1.5 rounded-full border transition-all duration-300 ${
          isOpen ? 'bg-[#C9A227] text-black border-[#C9A227] rotate-180' : 'bg-[#1A1A1A] text-gray-400 border-[#262626]'
        }`}>
          <ChevronDown className="w-4 h-4 stroke-[2.5]" />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1F1F1F]/60 mt-1 pt-4">
          <div className="font-light leading-relaxed">{faq.answer}</div>
        </div>
      )}
    </div>
  );
}
