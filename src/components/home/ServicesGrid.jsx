import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { siteContent } from '../../data/content';
import SectionHeading from '../common/SectionHeading';

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

export default function ServicesGrid({ showAll = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core Bookkeeping', 'AP & AR Operations', 'Financial Reporting', 'Advisory & Cleanup', 'Dedicated Staffing'];

  const filteredServices = selectedCategory === 'All'
    ? siteContent.services
    : siteContent.services.filter((s) => s.category === selectedCategory);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 8);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Our Services"
          title="Accounting support tailored to"
          titleHighlight="your existing practice."
          description="From daily ledger reconciliations to complex multi-entity month-end closes and audit workpapers. Built for seamless white-label delivery."
        />

        {/* Filter Badges - Horizontal scrollable on mobile */}
        <div className="flex items-center overflow-x-auto no-scrollbar py-1 gap-2 mb-8 sm:mb-12 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-sm shadow-sky-500/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedServices.map((service) => {
            const IconComp = iconMap[service.icon] || FileSpreadsheet;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 hover:border-sky-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-brand-blue border border-sky-100 group-hover:border-brand-blue flex items-center justify-center text-brand-blue group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverable preview chips */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {service.deliverables.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.tools.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-brand-blue hover:text-brand-hover flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTAs */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-sky-50 text-navy-900 hover:text-brand-blue border border-slate-200 hover:border-sky-200 px-8 py-3.5 rounded-full font-bold text-sm transition-colors"
            >
              <span>Explore All 12 Services & Deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
