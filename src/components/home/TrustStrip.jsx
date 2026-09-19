import React, { useState } from 'react';
import { siteContent } from '../../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function TrustStrip() {
  const [selectedTool, setSelectedTool] = useState(null);
  const { openConsultation } = useModal();

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-600">
            Proficient across industry-standard cloud accounting, payroll & automation platforms
          </p>
        </div>

        {/* Software Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {siteContent.softwareStack.map((tool) => {
            const isSelected = selectedTool === tool.name;
            return (
              <button
                key={tool.name}
                type="button"
                onClick={() => setSelectedTool(isSelected ? null : tool.name)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 group text-left cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-navy-950 border-sky-400 shadow-sm scale-105'
                    : 'bg-slate-50 hover:bg-sky-50/80 border-slate-200/80 hover:border-sky-200 text-navy-900'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-transform duration-200 ${
                  isSelected ? 'bg-navy-950 scale-125' : 'bg-brand-blue group-hover:scale-125'
                }`}></div>
                <div>
                  <span className="text-xs sm:text-sm font-bold block">
                    {tool.name}
                  </span>
                  <span className={`text-[10px] block ${isSelected ? 'text-navy-900 font-medium' : 'text-slate-600 font-normal'}`}>
                    {tool.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Software Info Card when clicked */}
        {selectedTool && (
          <div className="mt-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-navy-900 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Our delivery accountants have hands-on production expertise in <strong>{selectedTool}</strong> workflows.
              </span>
            </div>
            <button
              type="button"
              onClick={() => openConsultation('form', `${selectedTool} Workflow Support`)}
              className="bg-brand-blue hover:bg-brand-hover text-white px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors"
            >
              Inquire about {selectedTool}
            </button>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Have custom ERPs, internal portals, or legacy desktop setups? We adapt completely to your firm’s infrastructure.
          </p>
        </div>

      </div>
    </section>
  );
}
