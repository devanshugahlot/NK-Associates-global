import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteContent } from '../../data/content';

export default function ContactForm({ defaultService = '', defaultIntent = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    firmName: '',
    country: 'United Kingdom',
    serviceNeeded: defaultService || (defaultIntent === 'pilot' ? '2–4 Week Pilot Program' : 'Monthly Bookkeeping & Reconciliations'),
    pilotRequested: defaultIntent === 'pilot' || true,
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: '' });

  const countries = [
    'United Kingdom',
    'Australia',
    'United Arab Emirates',
    'United States',
    'Canada',
    'Singapore',
    'Ireland',
    'New Zealand',
    'Germany',
    'Netherlands',
    'India',
    'Other International',
  ];

  const serviceOptions = [
    '2–4 Week Pilot Program',
    'Cloud Accounting (Xero / QBO / Zoho)',
    'Bank, Merchant & Multi-Currency Reconciliations',
    'Month-End & Period-End Close',
    'Historical Catch-Up & Cleanup',
    'Accounts Payable (AP) & Vendor Management',
    'Accounts Receivable (AR) & Invoicing',
    'Tax & Statutory Workpapers Preparation',
    'Audit Working Papers & Lead Schedules',
    'Dedicated Offshore Accounting Pod',
    'White-Label Practice Partnership',
    'General Firm Inquiry'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid email address';
    }
    if (!formData.firmName.trim()) errs.firmName = 'Firm / Company name is required';
    if (!formData.message.trim()) errs.message = 'Please briefly describe your requirements';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ type: 'loading', message: 'Submitting your request...' });

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      if (formspreeEndpoint && !formspreeEndpoint.includes('your_form_id')) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Submission failed');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your inquiry has been received. A senior practice coordinator from NK Associates will respond within 12 business hours.',
      });

      setFormData({
        fullName: '',
        workEmail: '',
        firmName: '',
        country: 'United Kingdom',
        serviceNeeded: '2–4 Week Pilot Program',
        pilotRequested: true,
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your request. Please reach out directly at contact@nkassociates.com.',
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-elevated border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
          Request a Consultation or Pilot
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Tell us about your practice and software stack. We respond within 12 business hours.
        </p>
      </div>

      {status.type === 'success' ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-emerald-900">Message Received</h4>
          <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            {status.message}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStatus({ type: null, message: '' })}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {status.type === 'error' && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              <span>{status.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                  errors.fullName 
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-200 focus:border-brand-blue focus:ring-sky-100 bg-slate-50/50'
                }`}
              />
              {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="workEmail" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="sarah@yourpractice.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                  errors.workEmail 
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-200 focus:border-brand-blue focus:ring-sky-100 bg-slate-50/50'
                }`}
              />
              {errors.workEmail && <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firmName" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                Firm / Practice Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="firmName"
                name="firmName"
                type="text"
                value={formData.firmName}
                onChange={handleChange}
                placeholder="e.g. Jenkins & Associates"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                  errors.firmName 
                    ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-200 focus:border-brand-blue focus:ring-sky-100 bg-slate-50/50'
                }`}
              />
              {errors.firmName && <p className="text-xs text-rose-500 mt-1">{errors.firmName}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
                Country / Region
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:border-brand-blue focus:ring-2 focus:ring-sky-100 focus:outline-none"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="serviceNeeded" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
              Service / Engagement Needed
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:border-brand-blue focus:ring-2 focus:ring-sky-100 focus:outline-none"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-navy-900 mb-1.5 uppercase tracking-wider">
              Describe Your Requirements & Software Stack <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. We are an accounting & advisory practice using Xero and Dext. Looking for month-end close support and reconciliations for 20 client files."
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                errors.message 
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20' 
                  : 'border-slate-200 focus:border-brand-blue focus:ring-sky-100 bg-slate-50/50'
              }`}
            />
            {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
          </div>

          {/* Pilot Priority Checkbox */}
          <div className="flex items-start gap-3 p-3.5 bg-sky-50/60 rounded-xl border border-sky-100">
            <input
              id="pilotRequested"
              name="pilotRequested"
              type="checkbox"
              checked={formData.pilotRequested}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-sky-400"
            />
            <label htmlFor="pilotRequested" className="text-xs text-navy-900 cursor-pointer">
              <strong>Interested in the 2–4 Week Pilot:</strong> Test our turnaround speed and workpaper quality with 1–2 client ledgers before making any long-term commitment.
            </label>
          </div>

          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-hover hover:to-sky-700 text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-sky-500/25 transition-all duration-200 disabled:opacity-60"
          >
            {status.type === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-400">
            🔒 Protected by bilateral NDA. We will never share or sell your contact information.
          </p>
        </form>
      )}
    </div>
  );
}
