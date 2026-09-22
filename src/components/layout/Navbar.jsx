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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top micro-bar for global trust reassurance */}
      <div className="bg-navy-950 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1.5 text-slate-300 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-semibold text-white truncate">Global Delivery (India)</span>
            <span className="hidden sm:inline text-slate-400">• Serving Accounting Practices Worldwide</span>
            <span className="inline sm:hidden text-sky-300 font-mono text-[10px]">• 24h SLA</span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 text-slate-300">
            <a 
              href="tel:+917568820015" 
              className="flex items-center gap-1 text-sky-300 hover:text-white transition-colors font-semibold"
              title="Call direct partner desk"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="hidden sm:inline">Call: +91 75688 20015</span>
              <span className="inline sm:hidden font-bold">Call</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`https://wa.me/${siteContent.contact.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="inline sm:hidden font-bold">Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-2.5 sm:py-3 border-b border-slate-200/80' 
            : 'bg-white py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with clean presentation */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-0.5"
            aria-label="NK Associates Home"
          >
            <div className="bg-white p-1 rounded-xl shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
              <img 
                src={siteContent.company.logo} 
                alt="NK Associates Logo" 
                className="h-9 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              />
            </div>
            <div className="block text-left">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold leading-none">Global</span>
              <span className="block text-[11px] sm:text-xs font-bold text-brand-blue tracking-tight leading-tight mt-0.5">Offshore Accounting</span>
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

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <a
              href="tel:+917568820015"
              className="w-9 h-9 rounded-full bg-slate-100 text-brand-blue hover:bg-sky-50 border border-slate-200 flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Call +91 75688 20015"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => openConsultation('schedule')}
              className="bg-gradient-to-r from-brand-blue to-sky-600 active:scale-95 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xs transition-transform cursor-pointer"
            >
              Book Call
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-xl text-navy-900 hover:bg-slate-100 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-95 transition-transform"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer with Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 top-[88px] bg-navy-950/60 backdrop-blur-xs z-40 lg:hidden animate-fade-in"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide Down Sheet */}
            <div className="lg:hidden fixed inset-x-0 top-[88px] bg-white border-b border-slate-200 shadow-2xl z-50 p-5 animate-slide-up max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="flex flex-col space-y-1.5">
                {siteContent.navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors min-h-[44px] ${
                        isActive
                          ? 'bg-sky-50 text-brand-blue border-l-4 border-brand-blue'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                ))}
                
                <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      openConsultation('schedule');
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-sky-600 text-white py-3.5 rounded-xl text-sm font-bold shadow-md shadow-sky-500/20 active:scale-[0.98] transition-transform cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Consultation</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="tel:+917568820015"
                      className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 text-navy-900 active:bg-slate-200 font-bold text-xs border border-slate-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-50 text-emerald-800 active:bg-emerald-100 font-bold text-xs border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="text-center pt-2 pb-1">
                    <span className="text-[11px] text-slate-500">
                      Partner Support: <a href="tel:+917568820015" className="font-bold text-brand-blue hover:underline">+91 75688 20015</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
