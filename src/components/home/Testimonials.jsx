import React from 'react';
import { Quote, Sparkles, UserCheck } from 'lucide-react';
import { siteContent } from '../../data/content';
import SectionHeading from '../common/SectionHeading';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Partner Perspectives"
          title="Designed for accounting practice leaders"
          titleHighlight="who demand reliability."
          description="Read how international accounting firms utilize our offshore delivery model to eliminate backlog bottlenecks and increase partner capacity."
        />

        {/* Notice badge indicating client placeholders */}
        <div className="mb-8 p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-center max-w-xl mx-auto text-xs text-amber-900 font-medium">
          ℹ️ <strong>Note for Client:</strong> The reviews below are sample testimonial templates in <code className="bg-amber-100/80 px-1 py-0.5 rounded text-amber-950 font-mono">/src/data/content.js</code> ready for your actual client testimonials and partner quotes.
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200 rounded-3xl p-7 flex flex-col justify-between hover:border-sky-300 hover:bg-white hover:shadow-soft transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-brand-blue flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-400 px-2 py-1 rounded border border-slate-200">
                    Client Template #{idx + 1}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  ✓ {t.metric}
                </div>
                <div className="font-bold text-sm text-navy-900">{t.author}</div>
                <div className="text-xs text-brand-blue font-medium">{t.role}</div>
                <div className="text-xs text-slate-500">{t.firm}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
