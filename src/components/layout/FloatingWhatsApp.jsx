import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteContent } from '../../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMsg = encodeURIComponent(
    "Hello NK Associates team, I would like to inquire about your offshore accounting and practice support services."
  );
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Optional dismissible floating greeting badge */}
      {showTooltip && (
        <div className="relative bg-white text-navy-900 text-xs px-3.5 py-2 sm:py-2.5 rounded-2xl shadow-elevated border border-slate-200 flex items-center gap-2 max-w-[210px] sm:max-w-[240px] animate-fade-in">
          <span className="text-[11px] sm:text-xs">Need quick answers? <strong>WhatsApp us</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 shrink-0 ml-auto"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NK Associates on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 stroke-white" />
      </a>
    </div>
  );
}
