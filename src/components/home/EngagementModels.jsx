import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../common/SectionHeading';

export default function EngagementModels() {
  const { openConsultation } = useModal();

  const handleModelClick = (modelId, modelName) => {
    openConsultation('form', `${modelName} Engagement Model`);
  };

  return (
    <section className="py-20 lg:py-28 bg-sky-tint/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Engagement Structures"
          title="Transparent partnership models,"
          titleHighlight="zero guesswork."
          description="We do not publish invented fixed rates because transaction complexities and ledger volumes vary. Select the engagement structure that matches your current practice stage."
        />

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteContent.engagementModels.map((model) => {
            const isPopular = model.isPopular;

            return (
              <div
                key={model.id}
                className={`relative rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-elevated border-2 border-sky-400 ring-4 ring-sky-400/10 lg:-translate-y-2'
                    : 'bg-white text-navy-900 border border-slate-200 shadow-soft hover:shadow-elevated'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-500 text-navy-950 text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {model.badge}
                  </div>
                )}

                <div>
                  {!isPopular && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-brand-blue bg-sky-50 mb-3">
                      {model.badge}
                    </span>
                  )}

                  <h3 className={`text-2xl font-extrabold tracking-tight ${
                    isPopular ? 'text-white' : 'text-navy-900'
                  }`}>
                    {model.name}
                  </h3>

                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                    isPopular ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {model.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className={`mt-6 p-4 rounded-2xl border ${
                    isPopular
                      ? 'bg-navy-850/80 border-navy-750'
                      : 'bg-slate-50 border-slate-200/80'
                  }`}>
                    <div className={`text-lg font-bold ${
                      isPopular ? 'text-sky-300' : 'text-brand-blue'
                    }`}>
                      {model.pricingText}
                    </div>
                    <p className={`text-xs mt-1 ${
                      isPopular ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {model.subPricing}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-8 space-y-3">
                    <div className={`text-xs font-bold uppercase tracking-wider ${
                      isPopular ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      Included in this model:
                    </div>

                    {model.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPopular ? 'text-sky-400' : 'text-brand-blue'
                        }`} />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/20">
                  <button
                    type="button"
                    onClick={() => handleModelClick(model.id, model.name)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
                      isPopular
                        ? 'bg-sky-500 hover:bg-sky-400 text-navy-950 shadow-md shadow-sky-500/30'
                        : 'bg-navy-900 hover:bg-brand-blue text-white shadow-sm'
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Guarantee & Phone Guidance */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xs text-slate-500">
            🔒 All pricing is transparent and based strictly on transaction volume and service scope. Zero setup fees, hidden charges, or termination penalties.
          </p>
          <p className="text-xs text-slate-600">
            Need immediate scope or pricing guidance? Call our director desk at{' '}
            <a href="tel:+917568820015" className="font-bold text-brand-blue hover:underline">
              +91 75688 20015
            </a>{' '}
            or{' '}
            <a 
              href={`https://wa.me/${siteContent.contact.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-emerald-600 hover:underline"
            >
              WhatsApp Us directly
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
