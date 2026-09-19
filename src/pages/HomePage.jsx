import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import WhyPartner from '../components/home/WhyPartner';
import ServicesGrid from '../components/home/ServicesGrid';
import ProcessTimeline from '../components/home/ProcessTimeline';
import RegionsServed from '../components/home/RegionsServed';
import SecurityPillars from '../components/home/SecurityPillars';
import WhiteLabelBanner from '../components/home/WhiteLabelBanner';
import EngagementModels from '../components/home/EngagementModels';
import Testimonials from '../components/home/Testimonials';
import FaqAccordion from '../components/home/FaqAccordion';
import ContactForm from '../components/common/ContactForm';
import { ShieldCheck, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

export default function HomePage() {
  return (
    <>
      <SeoMeta
        title="Global Offshore Accounting & Practice Support"
        description="Add reliable, accurate accounting capacity to your practice with NK Associates. Dedicated offshore bookkeeping, reconciliations, and white-label delivery pods from India for accounting firms worldwide."
        canonical="/"
      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Why Partner With Us */}
      <WhyPartner />

      {/* 4. Services Preview (with link to deep-dive) */}
      <ServicesGrid showAll={false} />

      {/* 5. How It Works (4-Step Timeline) */}
      <ProcessTimeline />

      {/* 6. Regions We Serve */}
      <RegionsServed />

      {/* 7. Security & Confidentiality */}
      <SecurityPillars />

      {/* 8. White-Label Partnership */}
      <WhiteLabelBanner />

      {/* 9. Engagement Models */}
      <EngagementModels />

      {/* 10. Testimonials (Placeholders) */}
      <Testimonials />

      {/* 11. FAQ Accordion */}
      <FaqAccordion limit={6} />

      {/* 12. Final High-Impact CTA & Direct Consultation Form */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 pt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Get Started in 72 Hours</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Ready to add capacity?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
                  Let’s discuss your workflow.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Schedule a 15-minute introductory conversation or request a 2–4 week pilot for 1 or 2 client ledgers. Review our accuracy and communication before making any commitment.
              </p>

              <div className="space-y-4 pt-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong>2–4 Week Risk-Free Pilot:</strong> Test our turnaround speed and workpaper quality firsthand.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong>Bilateral NDA Signed First:</strong> Total confidentiality guaranteed before any access is granted.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong>Guaranteed Response:</strong> Our senior practice coordinator responds within 12 business hours.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-3">
                  Prefer an immediate video call?
                </p>
                <a
                  href={siteContent.contact.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3.5 rounded-full text-xs font-bold transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  <span>Schedule 15-Min Zoom / Teams Call</span>
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultIntent="pilot" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
