import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteContent } from '../../data/content';

export default function SeoMeta({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/logo-nk.png'
}) {
  const fullTitle = title 
    ? `${title} | ${siteContent.company.name}` 
    : `${siteContent.company.name} | Global Offshore Accounting & Back-Office Support`;

  const metaDesc = description || siteContent.hero.subheadline;
  const siteUrl = 'https://nkassociates.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteContent.company.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
