import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import SecurityPillars from '../components/home/SecurityPillars';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  FileLock2, 
  CloudOff, 
  ClipboardCheck, 
  CheckCircle2,
  FileText,
  Calendar
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function SecurityPage() {
  const { openSecurityModal, openConsultation } = useModal();

  return (
    <>
      <SeoMeta
        title="Security, Privacy & Data Confidentiality"
        description="Learn how NK Associates safeguards sensitive financial records with bilateral NDAs, enforced Multi-Factor Authentication, enterprise password vaults, and zero local data storage."
        canonical="/security"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-12 sm:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-400/20 mb-3 sm:mb-4">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Fiduciary-Grade Data Governance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight">
            Security & Confidentiality for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-brand-blue">
              Sensitive Accounting Workflows
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We treat your client financial data with the highest degree of confidentiality. Our operating protocols are designed specifically to eliminate vulnerability across legal, logical, and physical layers.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openSecurityModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-navy-950 px-6 py-3.5 rounded-full font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Preview Mutual NDA & IT Specifications</span>
            </button>

            <button
              type="button"
              onClick={() => openConsultation('schedule', 'IT & Security Protocol Discussion')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-xs transition-colors cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Schedule Security Briefing Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Pillars Overview */}
      <SecurityPillars />

      {/* Detailed Protocols Breakdown */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <SectionHeading
            badge="Operational Architecture"
            title="Layered defense protocols for"
            titleHighlight="complete peace of mind."
            description="How our offshore delivery infrastructure protects client records from unauthorized access, leakage, or loss."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Legal Protection */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center mb-5">
                  <FileLock2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  1. Contractual & Legal Guarantees
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Before any discussion of specific client names or system logins takes place, a legally binding bilateral Non-Disclosure Agreement (NDA) is executed.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Strict confidentiality covenants binding every employee and contractor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Explicit non-solicitation clauses protecting your firm's client base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Immediate return and deletion clauses upon conclusion of engagements</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={openSecurityModal}
                  className="text-xs font-bold text-brand-blue hover:text-brand-hover underline"
                >
                  View full bilateral NDA terms →
                </button>
              </div>
            </div>

            {/* Logical & Access Control */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center mb-5">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  2. Role-Based Least Privilege & MFA
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  No team member receives master or unrestricted administrative access. Each accountant is provisioned only with guest/accountant access to the specific ledgers assigned to them.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Mandatory Multi-Factor Authentication (MFA) via authenticator apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Zero shared logins: individual named accounts for audit trail accountability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Instant access deprovisioning when engagements conclude</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Audit logs retained for all ledger edits</span>
              </div>
            </div>

            {/* Zero Local Storage */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center mb-5">
                  <CloudOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  3. Zero Local Data Storage Policy
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Our accountants work directly within your cloud accounting ecosystem (QuickBooks Online, Xero, Bill.com, secure portals). We never download customer lists or confidential bank files to local personal drives.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Cloud-native processing: data remains exclusively in authorized software vaults</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Managed workstation security with USB transfer restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Periodic compliance audits to ensure no stale artifacts remain</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Restricted terminal environment</span>
              </div>
            </div>

            {/* Password Management */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-brand-blue flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  4. Enterprise Password Vault Encryption
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We never exchange passwords over unencrypted email or text messages. Credential handoffs occur strictly through enterprise password management vaults.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Encrypted credential sharing via 1Password / Bitwarden enterprise teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>Encrypted end-to-end with AES-256 standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>You retain full power to revoke credential vault access at any second</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Revocable by client anytime</span>
              </div>
            </div>

          </div>

          {/* Honest Transparency Notice with Action */}
          <div className="bg-sky-50 rounded-3xl p-6 sm:p-8 border border-sky-200 text-slate-700 text-sm leading-relaxed flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-navy-900 text-base mb-1">
                Need Us to Review Your Firm’s Security Questionnaire?
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                We are happy to review and complete your firm’s customized information security questionnaires, vendor checklists, and data compliance agreements prior to engagement.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openConsultation('form', 'Vendor Security Questionnaire Review')}
              className="bg-navy-900 hover:bg-brand-blue text-white px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-colors shadow-xs shrink-0 cursor-pointer"
            >
              Submit Security Questionnaire
            </button>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Have specific IT or security compliance requirements?"
        subtitle="Let our team review your firm's security checklist and access requirements during a short 15-minute call."
        primaryText="Schedule a Security Review Call"
      />
    </>
  );
}
