import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Globe2,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { siteContent } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-100">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
                <img 
                  src={siteContent.company.logo} 
                  alt="NK Associates" 
                  className="h-12 w-auto object-contain" 
                />
              </div>
            </Link>
            
            <p className="text-sm font-semibold text-brand-blue italic tracking-tight">
              "{siteContent.company.tagline}"
            </p>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Providing dedicated offshore accounting, bookkeeping, and practice back-office support from India to accounting firms and businesses across the UK, Australia, UAE, Europe, Singapore, Canada, and the USA.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-brand-blue border border-sky-100">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% White-Label
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" /> 2–4 Week Pilot Available
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-navy-900 font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="hover:text-brand-blue hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-navy-900 font-bold mb-4">
              Key Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#reconciliations" className="hover:text-brand-blue transition-colors">
                  Bank Reconciliations
                </Link>
              </li>
              <li>
                <Link to="/services#month-end-close" className="hover:text-brand-blue transition-colors">
                  Month-End Close
                </Link>
              </li>
              <li>
                <Link to="/services#accounts-payable" className="hover:text-brand-blue transition-colors">
                  Accounts Payable & AR
                </Link>
              </li>
              <li>
                <Link to="/services#catchup-cleanup" className="hover:text-brand-blue transition-colors">
                  Historical Catch-Up
                </Link>
              </li>
              <li>
                <Link to="/services#tax-prep-support" className="hover:text-brand-blue transition-colors">
                  Tax Workpaper Prep
                </Link>
              </li>
              <li>
                <Link to="/services#dedicated-teams" className="hover:text-brand-blue transition-colors">
                  Dedicated Offshore Pods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Global Coverage */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-navy-900 font-bold mb-4">
              Contact & Coverage
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-brand-blue transition-colors break-all">
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <a href={`tel:${siteContent.contact.phoneRaw}`} className="hover:text-brand-blue transition-colors font-semibold">
                  Call: {siteContent.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <a 
                  href={`https://wa.me/${siteContent.contact.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-700 transition-colors font-semibold text-emerald-700"
                >
                  WhatsApp: {siteContent.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>{siteContent.contact.officeHours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>US, UK, CA, AU, UAE, EU, SG</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 text-xs text-slate-500">
          <p>© 2026 NK Associates. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/security" className="hover:text-brand-blue transition-colors">
              Security Architecture
            </Link>
            <Link to="/faq" className="hover:text-brand-blue transition-colors">
              Pilot & Engagement FAQs
            </Link>
            <Link to="/contact" className="hover:text-brand-blue transition-colors">
              Schedule 15-Min Call
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
