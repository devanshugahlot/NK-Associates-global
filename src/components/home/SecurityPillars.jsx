import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileLock2, 
  ShieldAlert, 
  KeyRound, 
  Lock, 
  CloudOff, 
  ClipboardCheck,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../common/SectionHeading';

const iconMap = {
  FileLock2,
  ShieldAlert,
  KeyRound,
  Lock,
  CloudOff,
  ClipboardCheck,
};

export default function SecurityPillars() {
  const { openSecurityModal } = useModal();

  return (
    <section id="security" className="py-20 lg:py-28 bg-gradient-to-b from-navy-950 to-navy-900 text-white border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Security & Confidentiality"
          title="Engineered for sensitive"
          titleHighlight="financial workflows."
          description="We understand the fiduciary responsibility international accounting practices hold. Our operational model enforces strict legal non-disclosure, multi-factor authentication, and zero-local-storage protocols."
          dark={true}
        />

        {/* 6 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteContent.securityPillars.map((pillar) => {
            const IconComp = iconMap[pillar.icon] || Lock;
            return (
              <div
                key={pillar.title}
                className="bg-navy-900/80 border border-navy-700/60 rounded-3xl p-5 sm:p-7 hover:border-sky-400/40 hover:bg-navy-850 transition-all duration-300 shadow-elevated group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-navy-950 transition-colors duration-300 flex items-center justify-center mb-4 sm:mb-5">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Buttons: Modal Preview & Link to Deep Dive */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <button
            type="button"
            onClick={openSecurityModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-300 px-6 py-3 rounded-full text-xs font-bold transition-colors cursor-pointer active:scale-95"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>View Standard Mutual NDA & Security Specifications</span>
          </button>

          <Link
            to="/security"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            <span>Read Complete Security Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
