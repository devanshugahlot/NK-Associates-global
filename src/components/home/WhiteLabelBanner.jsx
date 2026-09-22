import React from 'react';
import { ShieldCheck, UserCheck, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';

export default function WhiteLabelBanner() {
  const { whiteLabel } = siteContent;
  const { openConsultation } = useModal();

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-sky-50 via-white to-sky-50/40 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-12 lg:p-16 border border-sky-200 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue" />
                <span>{whiteLabel.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Your Client. Your Brand.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
                  Our Accounting Engine.
                </span>
              </h2>

              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
                {whiteLabel.subheadline}
              </p>

              {/* 4 Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {whiteLabel.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                    <h4 className="text-sm font-bold text-navy-900 flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                      <span>{bp.title}</span>
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">
                      {bp.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openConsultation('form', 'White-Label Accounting Partnership')}
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-hover text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md shadow-sky-500/20 transition-all cursor-pointer w-full sm:w-auto"
                >
                  <span>Discuss White-Label Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+917568820015"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-sky-50 border border-slate-200 text-xs font-bold text-navy-900 hover:text-brand-blue transition-colors shadow-2xs w-full sm:w-auto"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call: +91 75688 20015</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Visual: The White-Label Flow */}
            <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-7 border border-navy-800 shadow-elevated">
              <div className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-4">
                White-Label Operational Flow
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-sky-500 text-navy-950 font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white">Your Accounting Firm Brand</div>
                    <div className="text-slate-300 mt-0.5">
                      You maintain 100% of client billing, advisory consultations, and relationships.
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-1 text-sky-400">
                  <div className="w-0.5 h-4 bg-sky-500/40"></div>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-sky-500 text-navy-950 font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white">Dedicated NK Delivery Pod</div>
                    <div className="text-slate-300 mt-0.5">
                      We execute daily reconciliations, bills, journal entries, and month-end closes.
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-1 text-sky-400">
                  <div className="w-0.5 h-4 bg-sky-500/40"></div>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-850/80 border border-navy-700 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-sky-500 text-navy-950 font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white">Reviewer-Ready Delivery</div>
                    <div className="text-slate-300 mt-0.5">
                      Clean workpapers delivered directly to your reviewers formatted to your templates.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strict non-solicitation clause in every agreement</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
