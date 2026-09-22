import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import SectionHeading from '../components/common/SectionHeading';
import CtaBanner from '../components/common/CtaBanner';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Award, 
  Users2, 
  Globe2, 
  CheckCircle2,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { siteContent } from '../data/content';

export default function AboutPage() {
  const { about, company } = siteContent;

  return (
    <>
      <SeoMeta
        title="About Us | Global Offshore Accounting & Practice Support"
        description="Learn about NK Associates: our mission to provide high-accuracy, reliable offshore accounting and practice support from India, our core values, and our delivery infrastructure."
        canonical="/about"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-12 sm:py-24 border-b border-slate-100 bg-fine-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs mb-3 sm:mb-4">
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-snug sm:leading-tight">
            Empowering Accounting Practices with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
              World-Class Offshore Talent
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Headquartered in India, NK Associates serves as the dedicated back-office engine for Chartered Accountants, CPA firms, accounting practices, and expanding businesses worldwide.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-brand-blue border border-sky-200">
                <Target className="w-4 h-4" />
                <span>Our Story & Mission</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-snug">
                Built to solve the global accounting capacity crisis.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                {about.story}
              </p>

              <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-200 text-navy-900">
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-blue mb-1">
                  Our Mission Statement
                </h4>
                <p className="text-sm font-semibold italic text-slate-700 leading-relaxed">
                  "{about.mission}"
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our motto from our logo reflects our practical philosophy: <strong>"{company.tagline}"</strong>. We take the tedious, time-consuming compliance tasks off your shoulders so your firm leaders can focus on high-margin advisory and client retention.
              </p>
            </div>

            {/* India Delivery Center Advantage Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{about.deliveryHub.location}</h3>
                  <p className="text-xs text-slate-400">Global Financial Talent Capital</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                India is the world's undisputed engine for offshore finance and accounting. Our delivery center provides our global partners with distinct structural benefits:
              </p>

              <ul className="space-y-3.5">
                {about.deliveryHub.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                <span>Fast fiber connectivity</span>
                <span>Power redundancy</span>
                <span>Restricted-access workstations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-sky-tint/40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Guiding Principles"
            title="Our Four Pillars of"
            titleHighlight="Operational Excellence"
            description="The values that guide every ledger entry, reconciliation, and partner interaction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((v, idx) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-brand-blue flex items-center justify-center font-mono font-bold text-sm mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership & Team Structure (Clear Placeholders) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Leadership & Governance"
            title="Experienced delivery leaders"
            titleHighlight="guiding your account."
            description="Our practice is led by seasoned professionals with deep expertise in cloud accounting, cross-border workflows, and rigorous quality control."
          />

          {/* Client Notice */}
          <div className="mb-8 p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-center max-w-xl mx-auto text-xs text-amber-900 font-medium">
            ℹ️ <strong>Client Placeholder Note:</strong> Replace the sample team bios below in <code className="bg-amber-100/80 px-1 py-0.5 rounded font-mono text-amber-950">/src/data/content.js</code> with your actual leadership names and credentials.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.teamStructure.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 hover:border-sky-300 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-sky-400 text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm">
                    <UserCheck className="w-9 h-9" />
                  </div>
                  <div className="text-xs uppercase tracking-wider font-bold text-brand-blue mb-1">
                    {member.role}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 text-xs text-slate-400 font-mono">
                  [Placeholder: Link to LinkedIn or Profile]
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBanner
        title="Ready to meet our delivery team?"
        subtitle="Schedule an introductory discovery call. Tell us about your current workload and let’s assess fit."
        primaryText="Schedule an Introduction"
        primaryHref="/contact"
      />
    </>
  );
}
