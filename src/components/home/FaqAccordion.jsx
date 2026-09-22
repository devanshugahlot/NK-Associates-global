import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';
import SectionHeading from '../common/SectionHeading';

export default function FaqAccordion({ limit = null }) {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqsToDisplay = limit ? siteContent.faqs.slice(0, limit) : siteContent.faqs;

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-sky-tint/30 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear answers to your"
          titleHighlight="partnership questions."
          description="Everything you need to know about our 2–4 week pilot, security infrastructure, turnaround SLAs, and white-label operating procedures."
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqsToDisplay.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-sky-300 shadow-soft ring-1 ring-sky-300/50'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-4 sm:p-7 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-bold text-navy-900 flex items-center gap-2.5 sm:gap-3">
                    <span className="text-brand-blue font-mono text-xs sm:text-sm shrink-0">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-7 sm:pb-7 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 sm:pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {limit && siteContent.faqs.length > limit && (
          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-hover underline underline-offset-4"
            >
              <span>View all {siteContent.faqs.length} frequently asked questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
