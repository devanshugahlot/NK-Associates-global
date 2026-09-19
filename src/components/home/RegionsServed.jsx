import React, { useState } from 'react';
import { Globe2, Clock, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../common/SectionHeading';

export default function RegionsServed() {
  const [activeRegion, setActiveRegion] = useState(siteContent.regions[0].id);
  const { openConsultation } = useModal();

  const currentRegion = siteContent.regions.find((r) => r.id === activeRegion) || siteContent.regions[0];

  const handleScheduleRegion = () => {
    openConsultation('schedule', `${currentRegion.name} Accounting Support`, currentRegion.timezones);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Global Reach & Time-Zone Flexibility"
          title="Offshore accounting capacity for"
          titleHighlight="leading firms worldwide."
          description="We align our shift schedules to ensure meaningful daily overlap with your local working hours, whether your practice operates in North America, Europe, the Middle East, or the Asia-Pacific."
        />

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {siteContent.regions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveRegion(region.id)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
                activeRegion === region.id
                  ? 'bg-navy-900 text-white shadow-md shadow-navy-900/20 ring-2 ring-sky-400'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
              }`}
            >
              <span className="text-base">{region.flag}</span>
              <span>{region.name}</span>
            </button>
          ))}
        </div>

        {/* Active Region Spotlight Card */}
        <div className="bg-gradient-to-br from-sky-50/70 via-white to-white rounded-3xl p-8 sm:p-12 border border-sky-200 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentRegion.flag}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  {currentRegion.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  Active Regional Delivery Support
                </p>
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              {currentRegion.highlights}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                  Time-Zone Alignment
                </div>
                <div className="text-sm font-bold text-navy-900">{currentRegion.timezones}</div>
                <div className="text-xs text-slate-500 mt-1">{currentRegion.coverage}</div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                  Accounting Framework
                </div>
                <div className="text-sm font-bold text-navy-900">{currentRegion.standards}</div>
                <div className="text-xs text-slate-500 mt-1">SOPs mapped to local standards</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-200">
              <div className="text-xs text-slate-600">
                <span className="font-bold text-navy-900">Primary Systems: </span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                  {currentRegion.coreTools}
                </span>
              </div>

              <button
                type="button"
                onClick={handleScheduleRegion}
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-brand-blue text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Schedule {currentRegion.name.split(' ')[0]} Shift Call</span>
              </button>
            </div>
          </div>

          {/* Right Visual: Stylized Global Connection Widget */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-elevated text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mx-auto mb-4">
              <Globe2 className="w-8 h-8" />
            </div>

            <h4 className="text-lg font-bold text-white mb-2">
              India Delivery Center Advantage
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Our central delivery operations in India bridge the entire global business day: completing files overnight for US/UK desks, and running direct daytime shifts for Australia and the Middle East.
            </p>

            <div className="bg-navy-950/70 rounded-2xl p-4 border border-navy-800 space-y-2 text-left text-xs mb-4">
              <div className="flex justify-between items-center text-slate-300">
                <span>Offshore HQ (IST):</span>
                <span className="font-mono text-emerald-400 font-bold">Active Operations</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Overnight Turnaround:</span>
                <span className="font-mono text-sky-300 font-bold">Files Ready by Morning</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Communication Channels:</span>
                <span className="font-mono text-slate-200">Slack, Teams, Email, Zoom</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openConsultation('form', 'Global Multi-Region Accounting Support')}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-navy-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Request Multi-Region Scope
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
