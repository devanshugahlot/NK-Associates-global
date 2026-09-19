import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import { ChevronDown, Search, HelpCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = siteContent.faqs.filter((faq) =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <>
      <SeoMeta
        title="Frequently Asked Questions (FAQ) | Offshore Accounting Support"
        description="Find answers to all your questions regarding NK Associates' 2–4 week pilot program, data security protocols, white-label delivery, supported software, and pricing models."
        canonical="/faq"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-16 sm:py-24 border-b border-slate-100 bg-fine-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Transparency First</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
              Questions
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our offshore delivery model, data protection, turnaround SLAs, and white-label operations.
          </p>

          {/* FAQ Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. pilot, NDA, software, SLA)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-300 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-brand-blue transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 p-8">
              <p className="text-base text-slate-600">
                No matching questions found for "<strong>{searchQuery}</strong>".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-xs font-bold text-brand-blue underline hover:text-brand-hover"
              >
                Clear search and show all FAQs
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
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
          )}

          <div className="mt-16 bg-sky-50 rounded-3xl p-8 text-center border border-sky-200">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Our practice specialists are available to answer your technical, workflow, or legal questions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-hover text-white px-7 py-3 rounded-full text-xs font-bold transition-all shadow-sm"
              >
                <span>Contact Our Practice Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+917568820015"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-navy-900 px-5 py-3 rounded-full text-xs font-bold transition-all shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>Call: +91 75688 20015</span>
              </a>
              <a
                href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 px-5 py-3 rounded-full text-xs font-bold transition-all shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: +91 75688 20015</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to test our delivery with a 2–4 week pilot?"
        subtitle="Experience our communication, accuracy, and turnaround time on 1 or 2 client ledgers."
        primaryText="Start a 2–4 Week Pilot"
        primaryHref="/contact?intent=pilot"
      />
    </>
  );
}
