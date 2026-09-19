import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight, Calendar, Phone, MessageCircle } from 'lucide-react';
import { siteContent } from '../../data/content';
import { useModal } from '../../context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { openConsultation } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top micro-bar for global trust reassurance */}
      <div className="bg-navy-950 text-white text-xs py-1.5 px-4 sm:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">Global Delivery Hub (India):</span>
            <span className="text-slate-400">Serving Accounting Practices & Firms Worldwide</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="tel:+917568820015" 
              className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call: +91 75688 20015</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`https://wa.me/${siteContent.contact.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 75688 20015</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3 border-b border-slate-200/80' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with clean white presentation */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
            aria-label="NK Associates Home"
          >
            <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-100 flex items-center justify-center">
              <img 
                src={siteContent.company.logo} 
                alt="NK Associates Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold">International</span>
              <span className="block text-xs font-semibold text-brand-blue tracking-tight">Offshore Accounting</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-blue bg-sky-50 font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Consultation CTA Button & Direct Call Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917568820015"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-navy-900 hover:text-brand-blue bg-slate-100 hover:bg-sky-50 border border-slate-200 transition-colors"
              title="Call direct partner line"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>+91 75688 20015</span>
            </a>
            <button
              type="button"
              onClick={() => openConsultation('schedule')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 hover:from-brand-hover hover:to-sky-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm shadow-sky-500/20 hover:shadow-md hover:shadow-sky-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-200" />
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+917568820015"
              className="p-2 rounded-full bg-slate-100 text-brand-blue hover:bg-sky-50 border border-slate-200 flex items-center justify-center"
              aria-label="Call +91 75688 20015"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => openConsultation('schedule')}
              className="bg-brand-blue text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs cursor-pointer"
            >
              Book Call
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-white border-b border-slate-200 shadow-elevated p-6 animate-slide-up max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {siteContent.navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-brand-blue font-bold border-l-4 border-brand-blue'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
              
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openConsultation('schedule');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-sky-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+917568820015"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 text-navy-900 hover:bg-sky-50 font-bold text-xs border border-slate-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-slate-500">
                    Direct Line: <a href="tel:+917568820015" className="font-bold text-brand-blue hover:underline">+91 75688 20015</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
