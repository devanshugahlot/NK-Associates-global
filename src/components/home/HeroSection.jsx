import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Clock, Calendar, Phone, MessageCircle } from 'lucide-react';
import HeroDashboard from './HeroDashboard';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';

export default function HeroSection() {
  const { openConsultation } = useModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 bg-fine-grid">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Trust Pill / Badge & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-sky-200 px-4 py-1.5 text-xs font-bold text-brand-blue shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="tracking-wider uppercase">{siteContent.hero.badge}</span>
              </div>
              <a
                href="tel:+917568820015"
                className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 px-3.5 py-1.5 text-xs font-bold text-navy-900 hover:text-brand-blue transition-colors shadow-2xs"
                title="Call direct partner line"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <span>+91 75688 20015</span>
              </a>
              <a
                href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 text-xs font-bold text-emerald-800 transition-colors shadow-2xs"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12] sm:leading-[1.08]">
              {siteContent.hero.headlineStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-600 to-sky-500 block sm:inline">
                {siteContent.hero.headlineHighlight}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {siteContent.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => openConsultation('form', '2–4 Week Pilot Program')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-hover hover:to-sky-700 text-white px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-center cursor-pointer"
              >
                <span>Start a 2–4 Week Pilot</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={() => openConsultation('schedule')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 hover:border-brand-blue px-6 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-colors text-center shadow-xs active:scale-[0.98] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-brand-blue" />
                <span>Book a 15-Min Call</span>
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-brand-blue font-bold text-sm py-2 px-3 text-center underline underline-offset-4 decoration-slate-300 hover:decoration-brand-blue transition-colors"
              >
                <span>Explore 12 Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Trust Chips */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] sm:text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="truncate sm:overflow-visible">US GAAP & IFRS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="truncate sm:overflow-visible">100% White-Label</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="truncate sm:overflow-visible">NDA & MFA Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span className="truncate sm:overflow-visible">Global Time Overlap</span>
              </div>
            </div>

          </div>

          {/* Right Visual (5 cols on lg) */}
          <div className="lg:col-span-5">
            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  );
}
