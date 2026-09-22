import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Users2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function ScopeCalculator() {
  const { openConsultation } = useModal();

  const [platform, setPlatform] = useState('QuickBooks Online');
  const [volume, setVolume] = useState('100–500 transactions');
  const [selectedServices, setSelectedServices] = useState([
    'Bank & Credit Card Reconciliations',
    'Month-End Close & Financial Statements',
  ]);

  const platforms = ['QuickBooks Online', 'Xero', 'Zoho Books', 'Bill.com / Dext'];
  const volumeOptions = [
    '< 100 transactions/mo',
    '100–500 transactions/mo',
    '500–1,500 transactions/mo',
    '1,500+ transactions/mo',
  ];

  const serviceOptions = [
    'Bank & Credit Card Reconciliations',
    'Accounts Payable & Bill Scheduling',
    'Accounts Receivable & Invoicing',
    'Month-End Close & Financial Statements',
    'Historical Catch-Up & Cleanup',
    'Tax Preparation Support Workpapers',
  ];

  const toggleService = (svc) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  // Dynamic calculations based on selections
  const getCalculationSummary = () => {
    let hours = '15–25 hrs/mo';
    let sla = '24–48 Hours';
    let team = '1 Associate + 1 QA Reviewer';

    if (volume === '< 100 transactions/mo') {
      hours = '8–15 hrs/mo';
      sla = '24 Hours';
      team = '1 Part-Time Associate + Senior Reviewer';
    } else if (volume === '100–500 transactions/mo') {
      hours = '20–35 hrs/mo';
      sla = '24–48 Hours';
      team = '1 Designated Associate + Senior Manager';
    } else if (volume === '500–1,500 transactions/mo') {
      hours = '40–70 hrs/mo';
      sla = '48 Hours';
      team = '1–2 Dedicated Associates + Lead Practice Reviewer';
    } else {
      hours = '80–160+ hrs/mo (Full-Time Pod)';
      sla = 'Daily Dedicated SLA';
      team = 'Dedicated Offshore Pod (1-3 Accountants + Manager)';
    }

    return { hours, sla, team };
  };

  const { hours, sla, team } = getCalculationSummary();

  const handleRequestQuote = () => {
    const scopeSummary = `${platform} | ${volume} | ${selectedServices.length} Services (${selectedServices.join(', ')})`;
    openConsultation('form', `Custom Pilot Scope: ${scopeSummary}`);
  };

  return (
    <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-12 border border-navy-800 shadow-elevated">
      
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-400/20 mb-3 sm:mb-4">
          <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Interactive Practice Scope Estimator</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
          Configure Your Firm’s Delivery Scope
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Select your platform and expected transaction workload to preview estimated turnaround times and pod structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-navy-800 items-start">
        
        {/* Controls Column (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          
          {/* Step 1: Software */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
              1. Primary Accounting Software
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {platforms.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPlatform(p)}
                  className={`py-2.5 px-2.5 sm:px-3 rounded-xl border text-xs font-bold transition-all text-center active:scale-95 cursor-pointer ${
                    platform === p
                      ? 'bg-sky-500 text-navy-950 border-sky-400 shadow-sm'
                      : 'bg-navy-850 text-slate-300 border-navy-700 hover:border-slate-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Volume */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
              2. Estimated Monthly Transaction Volume
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {volumeOptions.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVolume(v)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-bold transition-all active:scale-98 cursor-pointer ${
                    volume === v
                      ? 'bg-navy-800 text-white border-sky-400 ring-2 ring-sky-400/20'
                      : 'bg-navy-850 text-slate-300 border-navy-700 hover:border-slate-500'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Services Included */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
              3. Services Required in Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((svc) => {
                const isSelected = selectedServices.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 active:scale-98 cursor-pointer ${
                      isSelected
                        ? 'bg-navy-800 text-white border-sky-400/60 font-semibold'
                        : 'bg-navy-850/60 text-slate-400 border-navy-700 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-sky-500 text-navy-950' : 'border border-slate-600'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{svc}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results / Estimate Card (5 cols on lg) */}
        <div className="lg:col-span-5 bg-navy-850/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-navy-700 shadow-elevated space-y-4 sm:space-y-5">
          <div className="flex items-center justify-between border-b border-navy-750 pb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Estimated Delivery Profile
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Pilot Eligible
            </span>
          </div>

          {/* Metrics */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-400" /> Standard Turnaround SLA:
              </span>
              <span className="font-bold text-white text-right">{sla}</span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-400" /> Estimated Monthly Effort:
              </span>
              <span className="font-bold text-sky-300 text-right">{hours}</span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Users2 className="w-4 h-4 text-sky-400" /> Recommended Delivery Team:
              </span>
              <span className="font-bold text-white text-right max-w-[180px]">{team}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-750 text-xs text-slate-300 space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Includes Two-Tier Review & NDA
            </div>
            <p className="text-[11px] text-slate-400">
              All deliveries pass through our maker-checker sign-off protocol with zero local data storage.
            </p>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleRequestQuote}
            className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-navy-950 font-bold text-sm rounded-2xl shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request Tailored Pilot for this Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            Priced transparently with zero setup fees or long-term lock-in during pilot.
          </p>
        </div>

      </div>

    </div>
  );
}
