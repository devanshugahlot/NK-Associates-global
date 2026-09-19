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
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-navy-900 flex items-center gap-3">
                    <span className="text-brand-blue font-mono text-sm">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
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
