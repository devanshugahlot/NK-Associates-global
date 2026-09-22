import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe2, 
  Loader2,
  ArrowRight
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { siteContent } from '../../data/content';

export default function ConsultationModal() {
  const { 
    isConsultationOpen, 
    consultationTab, 
    consultationService, 
    consultationTimezone,
    setConsultationTab, 
    closeConsultation 
  } = useModal();

  // Schedule Tab States
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [selectedTz, setSelectedTz] = useState(consultationTimezone || 'UK London (GMT/BST)');
  const [scheduleData, setScheduleData] = useState({ name: '', email: '', firm: '' });
  const [scheduleSuccess, setScheduleSuccess] = useState(false);
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const [scheduleErrors, setScheduleErrors] = useState({});

  // Inquiry Tab States
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    workEmail: '',
    firmName: '',
    service: consultationService || '2–4 Week Pilot Program',
    message: '',
  });
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);
  const [inquiryErrors, setInquiryErrors] = useState({});

  // Update service when modal opens with a new service prop
  useEffect(() => {
    if (consultationService) {
      setInquiryData((prev) => ({ ...prev, service: consultationService }));
    }
  }, [consultationService]);

  // Update timezone when modal opens
  useEffect(() => {
    if (consultationTimezone) {
      setSelectedTz(consultationTimezone);
    }
  }, [consultationTimezone]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeConsultation();
    };
    if (isConsultationOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsultationOpen, closeConsultation]);

  if (!isConsultationOpen) return null;

  // Next 5 business dates
  const availableDates = [
    { label: 'Tomorrow', desc: 'Next business day' },
    { label: 'In 2 Days', desc: 'Morning / Afternoon' },
    { label: 'In 3 Days', desc: 'Flexible shifts' },
    { label: 'Next Monday', desc: 'Start of week' },
    { label: 'Next Tuesday', desc: 'Full shift availability' },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '06:30 PM',
  ];

  const timezones = [
    'UK London (GMT/BST)',
    'Australia Sydney (AEST/AEDT)',
    'UAE Dubai (GST)',
    'Singapore / HK (SGT/HKT)',
    'Europe Paris / Berlin (CET)',
    'US Eastern (EST/EDT)',
    'US Pacific (PST/PDT)',
    'India Standard (IST)',
  ];

  const serviceOptions = [
    '2–4 Week Pilot Program',
    'QuickBooks & Xero Management',
    'Bank & Credit Card Reconciliations',
    'Month-End & Year-End Close',
    'Accounts Payable & Bill Pay',
    'Accounts Receivable & Invoicing',
    'Historical Catch-Up & Cleanup',
    'Tax Preparation Support Workpapers',
    'Audit Working Papers & Schedules',
    'Dedicated Offshore Accounting Pod',
    'White-Label Firm Partnership',
  ];

  // Schedule validation & submit
  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!scheduleData.name.trim()) errs.name = 'Name is required';
    if (!scheduleData.email.trim() || !/\S+@\S+\.\S+/.test(scheduleData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!scheduleData.firm.trim()) errs.firm = 'Firm name is required';

    if (Object.keys(errs).length > 0) {
      setScheduleErrors(errs);
      return;
    }

    setScheduleLoading(true);
    // Simulate booking confirmation
    await new Promise((r) => setTimeout(r, 800));
    setScheduleLoading(false);
    setScheduleSuccess(true);
  };

  // Inquiry validation & submit
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!inquiryData.fullName.trim()) errs.fullName = 'Name is required';
    if (!inquiryData.workEmail.trim() || !/\S+@\S+\.\S+/.test(inquiryData.workEmail)) {
      errs.workEmail = 'Valid work email is required';
    }
    if (!inquiryData.firmName.trim()) errs.firmName = 'Firm name is required';

    if (Object.keys(errs).length > 0) {
      setInquiryErrors(errs);
      return;
    }

    setInquiryLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setInquiryLoading(false);
    setInquirySuccess(true);
  };

  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello NK Associates, I would like to schedule a 15-minute consultation regarding offshore accounting for my firm."
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={closeConsultation}
      ></div>

      {/* Modal Card - Bottom Sheet on mobile, centered card on desktop */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-slate-200 overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col my-0 sm:my-8 animate-slide-up">
        
        {/* Top Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-5 bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="bg-white p-1 rounded-xl shrink-0">
              <img src={siteContent.company.logo} alt="NK Associates" className="h-7 sm:h-8 w-auto" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold leading-tight truncate">Practice Consultation & Pilot</h3>
              <p className="text-[10px] sm:text-xs text-sky-300 truncate">Fast 12-Hour Confirmation • Bilateral NDA Protected</p>
            </div>
          </div>
          <button
            onClick={closeConsultation}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50/80 px-2 sm:px-4 pt-2 shrink-0">
          <button
            onClick={() => setConsultationTab('schedule')}
            className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-1 sm:px-4 font-bold text-[11px] sm:text-sm border-b-2 transition-all cursor-pointer ${
              consultationTab === 'schedule'
                ? 'border-brand-blue text-brand-blue bg-white rounded-t-xl shadow-xs'
                : 'border-transparent text-slate-500 hover:text-navy-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Schedule 15-Min Call</span>
            <span className="inline sm:hidden">15-Min Call</span>
          </button>

          <button
            onClick={() => setConsultationTab('form')}
            className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-1 sm:px-4 font-bold text-[11px] sm:text-sm border-b-2 transition-all cursor-pointer ${
              consultationTab === 'form'
                ? 'border-brand-blue text-brand-blue bg-white rounded-t-xl shadow-xs'
                : 'border-transparent text-slate-500 hover:text-navy-900'
            }`}
          >
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Request Pilot / Scope</span>
            <span className="inline sm:hidden">Pilot Scope</span>
          </button>

          <button
            onClick={() => setConsultationTab('direct')}
            className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-1 sm:px-4 font-bold text-[11px] sm:text-sm border-b-2 transition-all cursor-pointer ${
              consultationTab === 'direct'
                ? 'border-brand-blue text-brand-blue bg-white rounded-t-xl shadow-xs'
                : 'border-transparent text-slate-500 hover:text-navy-900'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">Instant Chat & Info</span>
            <span className="inline sm:hidden">Direct Chat</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1">
          
          {/* TAB 1: SCHEDULE 15-MIN CALL */}
          {consultationTab === 'schedule' && (
            <div>
              {scheduleSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-navy-900">
                    Call Request Confirmed!
                  </h4>
                  <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 max-w-md mx-auto text-left space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <div><strong>Date:</strong> {selectedDate}</div>
                    <div><strong>Time:</strong> {selectedSlot} ({selectedTz})</div>
                    <div><strong>Participant:</strong> {scheduleData.name} ({scheduleData.firm})</div>
                    <div><strong>Confirmation Sent To:</strong> {scheduleData.email}</div>
                  </div>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    A calendar invitation link with Zoom/Teams details has been dispatched. Our team lead will be fully briefed on your practice profile.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setScheduleSuccess(false);
                        closeConsultation();
                      }}
                      className="bg-navy-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-brand-blue transition-colors"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="bg-sky-50/70 border border-sky-100 p-3 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-brand-blue font-semibold">
                      <Globe2 className="w-4 h-4 shrink-0" />
                      <span>Select Your Time Zone:</span>
                    </div>
                    <select
                      value={selectedTz}
                      onChange={(e) => setSelectedTz(e.target.value)}
                      className="w-full sm:w-auto bg-white border border-slate-200 rounded-lg px-3 py-2 font-bold text-navy-900 text-xs focus:outline-none focus:ring-1 focus:ring-sky-400"
                    >
                      {timezones.map((tz) => (
                        <option key={tz} value={tz}>{tz}</option>
                      ))}
                    </select>
                  </div>

                  {/* Pick Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                      1. Choose Consultation Day
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableDates.map((d) => (
                        <button
                          key={d.label}
                          type="button"
                          onClick={() => setSelectedDate(d.label)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            selectedDate === d.label
                              ? 'border-brand-blue bg-sky-50/80 text-brand-blue ring-1 ring-brand-blue'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                          }`}
                        >
                          <div className="font-bold text-xs">{d.label}</div>
                          <div className="text-[10px] text-slate-500">{d.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pick Time Slot */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                      2. Choose Time Slot ({selectedTz.split(' ')[0]})
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2 px-1 rounded-xl border text-center text-xs font-bold transition-all ${
                            selectedSlot === slot
                              ? 'bg-navy-900 text-white border-navy-900 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900">
                      3. Your Confirmation Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={scheduleData.name}
                          onChange={(e) => {
                            setScheduleData({ ...scheduleData, name: e.target.value });
                            setScheduleErrors({ ...scheduleErrors, name: null });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                            scheduleErrors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          }`}
                        />
                        {scheduleErrors.name && <p className="text-[10px] text-rose-500 mt-0.5">{scheduleErrors.name}</p>}
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Work Email *"
                          value={scheduleData.email}
                          onChange={(e) => {
                            setScheduleData({ ...scheduleData, email: e.target.value });
                            setScheduleErrors({ ...scheduleErrors, email: null });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                            scheduleErrors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                          }`}
                        />
                        {scheduleErrors.email && <p className="text-[10px] text-rose-500 mt-0.5">{scheduleErrors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Accounting Practice / Firm Name *"
                        value={scheduleData.firm}
                        onChange={(e) => {
                          setScheduleData({ ...scheduleData, firm: e.target.value });
                          setScheduleErrors({ ...scheduleErrors, firm: null });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                          scheduleErrors.firm ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        }`}
                      />
                      {scheduleErrors.firm && <p className="text-[10px] text-rose-500 mt-0.5">{scheduleErrors.firm}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={scheduleLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-hover hover:to-sky-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {scheduleLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Confirming Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm 15-Minute Zoom Call</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero sales pressure. Discussion focused strictly on workflow alignment.</span>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: REQUEST PILOT / SCOPE */}
          {consultationTab === 'form' && (
            <div>
              {inquirySuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-navy-900">
                    Pilot Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {inquiryData.fullName}. A senior practice coordinator from NK Associates will review your software stack and email an initial pilot proposal within 12 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setInquirySuccess(false);
                        closeConsultation();
                      }}
                      className="bg-navy-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-brand-blue transition-colors"
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                      Primary Service / Focus Needed
                    </label>
                    <select
                      value={inquiryData.service}
                      onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:outline-none focus:ring-1 focus:ring-sky-400 font-medium"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={inquiryData.fullName}
                        onChange={(e) => {
                          setInquiryData({ ...inquiryData, fullName: e.target.value });
                          setInquiryErrors({ ...inquiryErrors, fullName: null });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                          inquiryErrors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        }`}
                      />
                      {inquiryErrors.fullName && <p className="text-[10px] text-rose-500 mt-0.5">{inquiryErrors.fullName}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Work Email *"
                        value={inquiryData.workEmail}
                        onChange={(e) => {
                          setInquiryData({ ...inquiryData, workEmail: e.target.value });
                          setInquiryErrors({ ...inquiryErrors, workEmail: null });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                          inquiryErrors.workEmail ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                        }`}
                      />
                      {inquiryErrors.workEmail && <p className="text-[10px] text-rose-500 mt-0.5">{inquiryErrors.workEmail}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Firm / Practice Name *"
                      value={inquiryData.firmName}
                      onChange={(e) => {
                        setInquiryData({ ...inquiryData, firmName: e.target.value });
                        setInquiryErrors({ ...inquiryErrors, firmName: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        inquiryErrors.firmName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                    {inquiryErrors.firmName && <p className="text-[10px] text-rose-500 mt-0.5">{inquiryErrors.firmName}</p>}
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your current ledger volume, software (QBO, Xero, Bill.com), and time-zone preference..."
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={inquiryLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-hover hover:to-sky-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {inquiryLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Pilot / Scope Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Protected by bilateral NDA. Guaranteed response within 12 business hours.</span>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: DIRECT CHAT & WHATSAPP */}
          {consultationTab === 'direct' && (
            <div className="space-y-5">
              <div className="text-center space-y-1">
                <h4 className="text-lg font-bold text-navy-900">Instant Practice Connection</h4>
                <p className="text-xs text-slate-500">Need real-time answers or wish to share your RFP directly?</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 text-navy-900 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-emerald-900 group-hover:text-emerald-950">WhatsApp Direct</div>
                    <div className="text-xs text-slate-600">{siteContent.contact.whatsappDisplay}</div>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+917568820015"
                  className="p-4 rounded-2xl border border-sky-200 bg-sky-50/50 hover:bg-sky-50 text-navy-900 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-brand-blue group-hover:text-brand-hover">Direct Call</div>
                    <div className="text-xs text-slate-600">+91 75688 20015</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteContent.contact.email}?subject=Offshore%20Accounting%20Inquiry%20-%20NK%20Associates`}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-navy-900 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-navy-900">Direct Email</div>
                    <div className="text-xs text-slate-600 truncate max-w-[120px]">{siteContent.contact.email}</div>
                  </div>
                </a>
              </div>

              {/* Delivery Center Hub Info */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-2 text-slate-600">
                <div className="flex justify-between items-center text-navy-900 font-semibold border-b border-slate-200 pb-2">
                  <span>Operations Desk:</span>
                  <span className="text-emerald-600 font-bold">● Active Shifts Now</span>
                </div>
                <div><strong>Standard Hours:</strong> {siteContent.contact.officeHours}</div>
                <div><strong>Shifts Supported:</strong> US Eastern / Pacific, UK London, Australia, UAE</div>
                <div><strong>Delivery Center:</strong> {siteContent.contact.address.line1}, {siteContent.contact.address.city}, {siteContent.contact.address.country}</div>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setConsultationTab('schedule')}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  ← Prefer to schedule a video call on our calendar?
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
