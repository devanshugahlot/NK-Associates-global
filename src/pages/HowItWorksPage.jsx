import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import ProcessTimeline from '../components/home/ProcessTimeline';
import { 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  Users2,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function HowItWorksPage() {
  return (
    <>
      <SeoMeta
        title="How It Works | Simple 4-Step Onboarding & Pilot"
        description="Learn how easy it is to partner with NK Associates. Start with a risk-free 2–4 week pilot on 1-2 client ledgers, review workpaper quality, and scale with confidence."
        canonical="/how-it-works"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-12 sm:py-20 border-b border-slate-100 bg-fine-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs mb-4">
            <span>Zero Long-Term Lock-in</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
            How We Partner With Your Firm:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
              Simple, Safe & Scalable
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We understand that handing over accounting work requires deep trust. That is why every new relationship begins with a structured 2–4 week pilot before any long-term commitment.
          </p>
        </div>
      </section>

      {/* Main 4-Step Process Section */}
      <ProcessTimeline />

      {/* Deep-Dive: Quality Control & Maker-Checker Protocol */}
      <section className="py-12 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-brand-blue border border-sky-200">
                <ClipboardCheck className="w-4 h-4" />
                <span>Our Quality Assurance Engine</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Two-Tier "Maker-Checker" Review System
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Work completed by our associates never bypasses internal inspection. Every ledger, reconciliation tie-out, and financial schedule must pass through our multi-tier review process before being submitted to your team.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-brand-blue text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Tier 1: Associate Execution (Maker)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Our accounting associate executes bank categorizations, AP entries, and reconciliations strictly according to your firm's documented SOPs.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-sky-500 text-navy-950 font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Tier 2: Senior Manager Verification (Checker)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      A senior accounting manager verifies account tie-outs, reviews balance sheet variances, checks uncategorized balances, and signs off on the workpaper.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Tier 3: Partner Delivery (Reviewer-Ready)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Your internal practice reviewer or partner receives clean, audit-ready packages with zero penny discrepancies, reducing domestic review time by up to 70%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Communication & Channels Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-navy-800 shadow-elevated">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <span>How We Communicate Daily</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 sm:mb-6">
                No black boxes or communication gaps. We adapt completely to your communication culture:
              </p>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-850/90 border border-navy-700/80">
                  <div className="font-bold text-sky-300">Slack / Microsoft Teams Guest Access</div>
                  <div className="text-slate-300 mt-1 leading-relaxed">
                    Your assigned team lead and associates join your firm's internal workspace for instantaneous questions and query resolution.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-850/90 border border-navy-700/80">
                  <div className="font-bold text-sky-300">Firm Email Domain (@yourpractice.com)</div>
                  <div className="text-slate-300 mt-1 leading-relaxed">
                    For client-facing or vendor inquiries, our associates can operate using designated email accounts under your firm domain.
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-navy-850/90 border border-navy-700/80">
                  <div className="font-bold text-sky-300">Weekly Status & Progress Syncs</div>
                  <div className="text-slate-300 mt-1 leading-relaxed">
                    Structured 15-to-30-minute weekly video calls to review completed ledgers, active bottlenecks, and upcoming filing deadlines.
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" /> 24-Hour Query Response SLA
                </span>
                <span className="text-sky-300 font-semibold">Overlapping Work Shifts</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to run your 2–4 week pilot?"
        subtitle="Hand over 1 or 2 client ledgers. Experience our accuracy and responsiveness with zero long-term commitment."
        primaryText="Initiate Pilot Discussion"
        primaryHref="/contact?intent=pilot"
      />
    </>
  );
}
