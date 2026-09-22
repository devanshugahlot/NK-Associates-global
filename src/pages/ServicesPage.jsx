import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import ScopeCalculator from '../components/services/ScopeCalculator';
import { 
  FileSpreadsheet, 
  Scale, 
  CreditCard, 
  Receipt, 
  CalendarCheck, 
  BarChart3, 
  Sparkles, 
  Users2, 
  FileCheck, 
  FolderCheck, 
  LineChart, 
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  Phone,
  MessageCircle
} from 'lucide-react';
import { siteContent } from '../data/content';
import { useModal } from '../context/ModalContext';

const iconMap = {
  FileSpreadsheet,
  Scale,
  CreditCard,
  Receipt,
  CalendarCheck,
  BarChart3,
  Sparkles,
  Users2,
  FileCheck,
  FolderCheck,
  LineChart,
  Building2,
};

export default function ServicesPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const { openConsultation } = useModal();

  const categories = ['All', 'Core Bookkeeping', 'AP & AR Operations', 'Financial Reporting', 'Advisory & Cleanup', 'Dedicated Staffing'];

  const filtered = selectedCat === 'All'
    ? siteContent.services
    : siteContent.services.filter((s) => s.category === selectedCat);

  return (
    <>
      <SeoMeta
        title="Comprehensive Offshore Accounting Services"
        description="Explore NK Associates' 12 specialized accounting services for global practices and businesses: QuickBooks & Xero upkeep, reconciliations, AP/AR, month-end close, tax workpapers, and dedicated pods."
        canonical="/services"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-12 sm:py-24 border-b border-slate-100 bg-fine-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs mb-3 sm:mb-4">
            <span>Global Accounting & Advisory Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-snug sm:leading-tight">
            Offshore Accounting Services Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
              International Practices & Firms
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every service is delivered with documented standard operating procedures, multi-tier maker-checker quality control, and complete white-label confidentiality.
          </p>

          {/* Quick Contact Badges */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="tel:+917568820015"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy-900 hover:text-brand-blue border border-slate-200 text-xs font-bold shadow-2xs transition-colors active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Direct Scope Hotline: +91 75688 20015</span>
            </a>
            <a
              href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold shadow-2xs transition-colors active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Scope Discussion</span>
            </a>
          </div>

          {/* Quick Filter Tabs - Swipeable on mobile */}
          <div className="flex items-center overflow-x-auto no-scrollbar py-1 gap-2 mt-6 sm:mt-8 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                  selectedCat === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-sky-500/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Practice Scope Calculator Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScopeCalculator />
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-sky-tint/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.map((service, idx) => {
            const IconComp = iconMap[service.icon] || FileSpreadsheet;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200 hover:border-sky-300 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Service Header & Summary */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-blue">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-sky-50 px-2.5 py-0.5 rounded-md">
                          {service.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-slate-600 leading-relaxed pt-2">
                      {service.fullDesc}
                    </p>

                    <div className="pt-3">
                      <div className="text-xs uppercase tracking-wider font-bold text-navy-900 mb-2">
                        Supported Platforms & Tools:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-slate-100 text-navy-900 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => openConsultation('form', service.name)}
                        className="inline-flex items-center gap-2 bg-navy-900 hover:bg-brand-blue text-white px-6 py-3 rounded-full text-xs font-bold transition-colors cursor-pointer"
                      >
                        <span>Request Pilot for this Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openConsultation('schedule', service.name)}
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-5 py-3 rounded-full text-xs font-bold transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Schedule Call</span>
                      </button>
                    </div>
                  </div>

                  {/* Service Deliverables Checklist Box */}
                  <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-brand-blue" />
                      Standard Deliverables Included:
                    </h3>

                    <ul className="space-y-3">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      <span>Two-tier maker-checker sign-off on every deliverable.</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CtaBanner
        title="Need custom workflows or a dedicated pod?"
        subtitle="We can tailor a team specifically for your firm's volume, software stack, and timezone requirements."
        primaryText="Talk to a Practice Specialist"
      />
    </>
  );
}
