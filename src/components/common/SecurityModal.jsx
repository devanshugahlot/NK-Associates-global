import React, { useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  FileLock2, 
  KeyRound, 
  CloudOff, 
  Printer, 
  CheckCircle2, 
  Download 
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { siteContent } from '../../data/content';

export default function SecurityModal() {
  const { isSecurityModalOpen, closeSecurityModal, openConsultation } = useModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSecurityModal();
    };
    if (isSecurityModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSecurityModalOpen, closeSecurityModal]);

  if (!isSecurityModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity"
        onClick={closeSecurityModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border-t sm:border border-slate-200 overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col my-0 sm:my-8 animate-slide-up">
        
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-5 bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold truncate">Standard Mutual NDA & Security Specifications</h3>
              <p className="text-[10px] sm:text-xs text-slate-300 truncate">Confidentiality & Data Protection Governance</p>
            </div>
          </div>
          <button
            onClick={closeSecurityModal}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-5 sm:space-y-6 text-xs sm:text-sm text-slate-700">
          
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-xs text-navy-900 flex items-start gap-3">
            <FileLock2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
            <div>
              <strong>Contractual Guarantee:</strong> This document outlines the core confidentiality, non-solicitation, and data governance covenants executed in our bilateral Non-Disclosure Agreement before any partner file transfer begins.
            </div>
          </div>

          {/* Section 1: Bilateral NDA Summary */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-navy-900 border-b border-slate-200 pb-2">
              1. Non-Disclosure & Non-Solicitation Covenants
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Definition of Confidential Information:</strong> Covers all client accounting records, general ledgers, tax filings, banking statements, payroll data, and firm proprietary workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Strict Non-Solicitation:</strong> Ironclad contractual covenant explicitly prohibiting NK Associates from directly or indirectly contacting, soliciting, or servicing your firm's end clients.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Indefinite Protection:</strong> Trade secrets and financial ledger confidentiality survive termination of the commercial relationship indefinitely.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Access Control & MFA */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-navy-900 border-b border-slate-200 pb-2">
              2. Logical Access Control & Password Management
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Role-Based Compartmentalization:</strong> Accounting associates receive individual guest/accountant logins strictly limited to their assigned client ledgers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Mandatory Multi-Factor Authentication:</strong> Time-based one-time password (TOTP) enforcement across all accounting portals and email communications.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Zero Plaintext Passwords:</strong> Credentials shared via encrypted enterprise vaults (1Password / Bitwarden) with AES-256 bit encryption.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Data Storage & Physical Controls */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-navy-900 border-b border-slate-200 pb-2">
              3. Zero Local Storage & Operational Infrastructure
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Cloud-Native Processing:</strong> All work is performed directly inside QBO, Xero, Bill.com, and client cloud drives. No data is stored on local physical hard drives.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Terminal Security:</strong> Managed enterprise workstations with automated OS security patches, disabled USB mass storage, and endpoint protection.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span><strong>Instant Revocation:</strong> You retain complete master control over your cloud suites and can revoke user access at any second.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-navy-900 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save as PDF</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={closeSecurityModal}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                closeSecurityModal();
                openConsultation('form', 'Custom Mutual NDA Execution');
              }}
              className="px-5 py-2.5 bg-brand-blue hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              Request Execution of Mutual NDA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
