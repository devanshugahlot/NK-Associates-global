import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Calendar, Phone, MessageCircle } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function CtaBanner({
  title = "Ready to add reliable accounting capacity without local hiring?",
  subtitle = "Start with a 2–4 week pilot on 1 or 2 client ledgers. Review accuracy, turnaround speed, and communication firsthand.",
  primaryText = "Start a 2–4 Week Pilot",
}) {
  const { openConsultation } = useModal();

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-navy-950 via-navy-900 to-brand-dark p-6 sm:p-12 lg:p-16 text-white shadow-elevated border border-navy-800">
          
          {/* Subtle decorative background circles */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-400/20 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Immediate Offshore Bandwidth
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight">
              {title}
            </h2>

            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openConsultation('form', '2–4 Week Pilot Program')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-navy-950 px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>{primaryText}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={() => openConsultation('schedule')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-colors active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book a 15-Min Call</span>
              </button>

              <a
                href="tel:+917568820015"
                className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white px-4 py-3 text-xs sm:text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call: +91 75688 20015</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Protected by strict bilateral NDA
              </span>
              <a 
                href="https://wa.me/917568820015" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp: +91 75688 20015</span>
              </a>
              <span className="flex items-center gap-2">
                <span className="text-sky-300 font-bold">✓</span>
                Setup in under 72 hours
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
