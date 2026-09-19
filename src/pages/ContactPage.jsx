import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import ContactForm from '../components/common/ContactForm';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';
import { siteContent } from '../data/content';
import { useModal } from '../context/ModalContext';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || '';
  const defaultIntent = searchParams.get('intent') || searchParams.get('model') || '';
  const { openConsultation } = useModal();

  const encodedMsg = encodeURIComponent(
    "Hello NK Associates, I would like to discuss offshore accounting support for my firm."
  );
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodedMsg}`;

  return (
    <>
      <SeoMeta
        title="Contact Us & Book Free Consultation"
        description="Connect with NK Associates to discuss your offshore accounting needs. Book a 15-minute discovery call, start a 2–4 week pilot, or contact our India delivery center."
        canonical="/contact"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-16 sm:py-24 border-b border-slate-100 bg-fine-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-blue border border-sky-200 shadow-2xs mb-4">
            <Clock className="w-4 h-4" />
            <span>Guaranteed Response Within 12 Hours</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight">
            Let’s Discuss Your Firm’s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
              Accounting Capacity
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you want to explore a risk-free 2–4 week pilot, discuss recurring bookkeeping, or build a dedicated offshore pod, our practice specialists are here to assist.
          </p>

          {/* Quick Contact Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917568820015"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy-900 hover:text-brand-blue border border-slate-200 text-xs font-bold shadow-2xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Call: +91 75688 20015</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: +91 75688 20015</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Contact Details & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Information & Interactive Scheduler Card (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Booking Card */}
              <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-8 border border-navy-800 shadow-elevated">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Instant Calendar Booking</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  Book a 15-Minute Call
                </h3>

                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Select a convenient slot on our live calendar for a direct Zoom or Teams conversation with our practice lead.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={() => openConsultation('schedule')}
                    className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-navy-950 py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all text-center cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Launch Interactive Call Scheduler</span>
                  </button>

                  <a
                    href={siteContent.contact.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs text-sky-300 hover:text-white underline"
                  >
                    Or open external scheduler in new tab →
                  </a>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 space-y-6">
                <h3 className="text-lg font-bold text-navy-900">
                  Direct Contact Channels
                </h3>

                <div className="space-y-4 text-sm">
                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-600">Email Inquiries</div>
                      <a 
                        href={`mailto:${siteContent.contact.email}`} 
                        className="font-semibold text-navy-900 hover:text-brand-blue transition-colors break-all"
                      >
                        {siteContent.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-600">WhatsApp Live Chat</div>
                      <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        {siteContent.contact.whatsappDisplay} (Click to Chat)
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-600">Direct Telephone</div>
                      <a 
                        href={`tel:${siteContent.contact.whatsappNumber}`} 
                        className="font-semibold text-navy-900 hover:text-brand-blue transition-colors"
                      >
                        {siteContent.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Operations Center */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 shadow-2xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-600">Delivery Operations Center</div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {siteContent.contact.address.line1}, {siteContent.contact.address.line2}<br />
                        {siteContent.contact.address.city}, {siteContent.contact.address.state}, {siteContent.contact.address.country}
                      </div>
                      <span className="text-[10px] text-slate-400 italic">
                        [Placeholder: Update with client's exact office address]
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 shadow-2xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold text-slate-600">Operating Coverage</div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {siteContent.contact.officeHours}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All communications are covered by strict non-disclosure obligations.</span>
                </div>
              </div>

            </div>

            {/* Right Contact Form (7 cols on lg) */}
            <div className="lg:col-span-7">
              <ContactForm defaultService={defaultService} defaultIntent={defaultIntent} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
