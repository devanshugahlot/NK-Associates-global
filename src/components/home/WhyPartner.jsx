import React from 'react';
import { TrendingUp, CheckSquare, BadgePercent, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/content';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  TrendingUp: TrendingUp,
  CheckSquare: CheckSquare,
  BadgePercent: BadgePercent,
  Layers: Layers,
};

export default function WhyPartner() {
  return (
    <section className="py-20 lg:py-28 bg-sky-tint/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Partner With Us"
          title="Scale your practice capacity"
          titleHighlight="without scaling local payroll."
          description="Designed specifically for accounting practices, Chartered Accountants, CPA firms, and expanding enterprises that need consistent, high-accuracy financial delivery."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.whyPartner.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || TrendingUp;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:shadow-elevated hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 group-hover:bg-brand-blue border border-sky-100 group-hover:border-brand-blue flex items-center justify-center text-brand-blue group-hover:text-white transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-sky-50 mb-3">
                    {pillar.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {pillar.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue">
                  <Link to="/about" className="flex items-center gap-1 hover:gap-2 transition-all">
                    <span>Learn our approach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Bar */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {siteContent.metrics.map((metric, idx) => (
            <div key={metric.label} className={`text-center ${idx > 0 ? 'pt-4 lg:pt-0' : ''}`}>
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-brand-blue mt-1">
                {metric.label}
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
