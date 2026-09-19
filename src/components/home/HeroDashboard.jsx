import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Activity,
  Globe2,
  CalendarCheck,
  BarChart2,
  Layers,
  Phone
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export default function HeroDashboard() {
  const { openConsultation } = useModal();
  const [activeTab, setActiveTab] = useState('kpis'); // 'kpis' | 'chart' | 'clocks'
  const [reconciledCount, setReconciledCount] = useState(148);
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'QBO & Xero Bank Feeds Cleared', badge: 'Zero Unmatched', done: true },
    { id: 2, text: 'Stripe & Merchant Accounts Tied Out', badge: '$0.00 Variance', done: true },
    { id: 3, text: 'AP Bills Routed & Approvals Synced', badge: 'Bill.com Verified', done: true },
    { id: 4, text: 'Month-End Balance Sheet Variance Check', badge: 'Reviewer-Ready', done: false },
  ]);

  const toggleTask = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setReconciledCount((prev) => (prev < 158 ? prev + 1 : 148));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const worldTimes = [
    { city: 'London (GMT/BST)', time: '02:30 PM', status: 'UK Business Hours Active', active: true },
    { city: 'Sydney (AEST)', time: '11:30 PM', status: 'Morning Batch Processed', active: true },
    { city: 'Dubai (GST)', time: '06:30 PM', status: 'Gulf Working Hours', active: true },
    { city: 'Singapore (SGT)', time: '09:30 PM', status: 'APAC Shift Synchronized', active: true },
    { city: 'New York (EST)', time: '09:30 AM', status: 'Americas Shift Active', active: true },
    { city: 'Mumbai (IST)', time: '07:00 PM', status: 'Offshore Delivery HQ', active: true },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-brand-blue to-sky-600 rounded-3xl blur-xl opacity-20 transition duration-1000"></div>

      {/* Main Glass/Navy Container */}
      <div className="relative bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-elevated border border-navy-800/90">
        
        {/* Header Strip & Interactive Tab Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-800 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300">
                  Offshore Delivery Desk
                </span>
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Live Firm Operations
              </h3>
            </div>
          </div>

          {/* Tab Switcher Buttons */}
          <div className="flex items-center bg-navy-850 p-1 rounded-xl border border-navy-750 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('kpis')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'kpis'
                  ? 'bg-sky-500 text-navy-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              KPIs & Close
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('chart')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'chart'
                  ? 'bg-sky-500 text-navy-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Trends
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('clocks')}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'clocks'
                  ? 'bg-sky-500 text-navy-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              World Clocks
            </button>
          </div>
        </div>

        {/* TAB 1: KPIS & CLOSE */}
        {activeTab === 'kpis' && (
          <div className="space-y-4 pt-4 animate-fade-in">
            {/* Operational Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-navy-850/90 border border-navy-700/60 rounded-2xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-sky-400">24h</div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">Turnaround SLA</div>
              </div>
              <div className="bg-navy-850/90 border border-navy-700/60 rounded-2xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">99.4%</div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">QC Accuracy</div>
              </div>
              <div className="bg-navy-850/90 border border-navy-700/60 rounded-2xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">2–4 Wk</div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">Risk-Free Pilot</div>
              </div>
            </div>

            {/* Live Close Progress Bar */}
            <div className="bg-navy-850/70 border border-navy-750 rounded-2xl p-3.5">
              <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                <span className="text-slate-200">Month-End Close Ledger</span>
                <span className="text-sky-400 font-mono font-bold">88% Verified</span>
              </div>
              <div className="w-full h-2 bg-navy-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-blue to-sky-400 rounded-full w-[88%] transition-all duration-700"></div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1.5">
                <span>Bank Feeds & AP Complete</span>
                <span>Trial Balance Tie-out</span>
              </div>
            </div>

            {/* Interactive Checklist (Clickable!) */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-semibold px-1">
                <span>Quality Control Checklist (Interactive):</span>
                <span className="text-sky-400 text-[10px]">Click to toggle</span>
              </div>
              {checklist.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleTask(item.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left text-xs transition-all ${
                    item.done
                      ? 'bg-navy-850/70 border-navy-750 text-slate-200'
                      : 'bg-navy-950 border-navy-800 text-slate-400 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 transition-colors ${
                      item.done ? 'text-emerald-400' : 'text-slate-600'
                    }`} />
                    <span className={item.done ? '' : 'line-through text-slate-500'}>
                      {item.text}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/50">
                    {item.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: FINANCIAL TREND & VOLUME */}
        {activeTab === 'chart' && (
          <div className="space-y-4 pt-4 animate-fade-in">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-sky-400" /> Reconciled Transactions Volume
              </span>
              <span className="text-sky-300 font-mono font-bold">{reconciledCount} items processed</span>
            </div>

            {/* SVG Chart */}
            <div className="h-32 w-full bg-navy-850/60 p-2 rounded-2xl border border-navy-750">
              <svg viewBox="0 0 360 100" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,80 Q 45,60 90,70 T 180,45 T 270,35 T 360,20 L 360,100 L 0,100 Z"
                  fill="url(#heroGrad)"
                />
                <path
                  d="M 0,80 Q 45,60 90,70 T 180,45 T 270,35 T 360,20"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="90" cy="70" r="4" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="180" cy="45" r="4" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="270" cy="35" r="4" fill="#0EA5E9" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="360" cy="20" r="5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2.5" className="animate-pulse" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 bg-navy-850 rounded-xl border border-navy-750">
                <div className="text-[10px] text-slate-400">Intake Feeds</div>
                <div className="font-bold text-white mt-0.5">Automated</div>
              </div>
              <div className="p-2 bg-navy-850 rounded-xl border border-navy-750">
                <div className="text-[10px] text-slate-400">Categorization</div>
                <div className="font-bold text-emerald-400 mt-0.5">100% Rules</div>
              </div>
              <div className="p-2 bg-navy-850 rounded-xl border border-navy-750">
                <div className="text-[10px] text-slate-400">Review Output</div>
                <div className="font-bold text-sky-400 mt-0.5">Tie-Out Ready</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GLOBAL CLOCKS */}
        {activeTab === 'clocks' && (
          <div className="space-y-2.5 pt-4 animate-fade-in">
            <p className="text-xs text-slate-300 mb-2">
              Our India delivery center schedules shift coverage to mirror your firm's core working hours:
            </p>
            {worldTimes.map((item) => (
              <div
                key={item.city}
                className="flex items-center justify-between p-2.5 rounded-xl bg-navy-850/80 border border-navy-750 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    item.active ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                  }`}></span>
                  <span className="font-bold text-white">{item.city}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 font-mono">{item.time}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    item.active ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60' : 'bg-navy-900 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Card Action Footer */}
        <div className="mt-5 pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <a
            href="tel:+917568820015"
            className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Direct Desk: +91 75688 20015</span>
          </a>
          <button
            type="button"
            onClick={() => openConsultation('schedule')}
            className="text-sky-300 hover:text-sky-200 font-bold underline underline-offset-4 transition-colors"
          >
            Launch Free Consultation →
          </button>
        </div>

      </div>

      {/* Floating Pill on top right */}
      <button
        type="button"
        onClick={() => openConsultation('form', '2–4 Week Pilot Program')}
        className="hidden sm:flex absolute -top-3.5 -right-3.5 bg-white hover:bg-sky-50 text-navy-900 px-4 py-2 rounded-2xl shadow-elevated border border-slate-200 items-center gap-2 text-xs font-bold transition-all hover:scale-105 cursor-pointer"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Taking on New Pilot Partners</span>
      </button>

    </div>
  );
}
