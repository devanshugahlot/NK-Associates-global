import React from 'react';

export default function SectionHeading({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  dark = false,
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} mb-12 lg:mb-16`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
          dark 
            ? 'bg-sky-500/10 text-sky-400 border border-sky-400/20' 
            : 'bg-sky-50 text-brand-blue border border-sky-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? 'bg-sky-400' : 'bg-brand-blue'}`}></span>
          {badge}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
        dark ? 'text-white' : 'text-navy-900'
      }`}>
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-500">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
