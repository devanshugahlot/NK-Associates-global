import React, { useState } from 'react';
import { 
  MessageSquareText, 
  UserCheck, 
  Gauge, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  MessageSquareText,
  UserCheck,
  Gauge,
  Rocket,
};

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(2); // Default to Step 03 (Pilot)
  const { openConsultation } = useModal();

  return (
    <section id="process" className="py-20 lg:py-28 bg-sky-tint/40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Simple Engagement"
          title="Start small. Prove the process."
          titleHighlight="Scale with confidence."
          description="Begin with one client ledger or a specific backlog scope for a 2–4 week pilot. Evaluate accuracy, turnaround speed, and communication firsthand before expanding."
        />

        {/* 4-Step Cards Layout (All Clickable!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.processSteps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || MessageSquareText;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-elevated border-2 border-sky-400 ring-4 ring-sky-400/15 -translate-y-1'
                    : 'bg-white text-navy-900 border border-slate-200 shadow-soft hover:shadow-elevated hover:border-sky-300'
                }`}
              >
                {/* Step badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-2xl font-black font-mono ${
                      isSelected ? 'text-sky-400' : 'text-brand-blue'
                    }`}>
                      {step.step}
                    </span>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isSelected
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.duration}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    isSelected
                      ? 'bg-sky-500/20 text-sky-300'
                      : 'bg-sky-50 text-brand-blue'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight ${
                    isSelected ? 'text-white' : 'text-navy-900'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {step.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100/20 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isSelected ? 'text-sky-400' : 'text-brand-blue'
                        }`} />
                        <span className={isSelected ? 'text-slate-200' : 'text-slate-600'}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/20">
                  {idx === 2 ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultation('form', '2–4 Week Pilot Program');
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-navy-950 py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      <span>Request a 2–4 Week Pilot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultation('schedule');
                      }}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 ${
                        isSelected 
                          ? 'bg-white/10 hover:bg-white/20 text-white' 
                          : 'bg-slate-100 hover:bg-slate-200 text-navy-900'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Discuss Step {step.step}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            ⚡ <strong>Zero onboarding friction:</strong> You do not need to rewrite your procedures. We adapt to your established charts of accounts, software permissions, and review styles.
          </p>
        </div>

      </div>
    </section>
  );
}
