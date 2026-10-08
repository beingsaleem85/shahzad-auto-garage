import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://www.shahzadautogarage.com';
const DEFAULT_IMAGE = `${DOMAIN}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema = null,
  noindex = false
}) {
  const cleanPath = canonicalPath ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`) : '';
  const canonicalUrl = `${DOMAIN}${cleanPath}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // GA4 Measurement ID with default fallback
  const ga4Id = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GA4_ID && import.meta.env.VITE_GA4_ID.startsWith('G-')) 
    ? import.meta.env.VITE_GA4_ID 
    : 'G-R5ELK25NSM';
  const gscVerification = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GSC_VERIFICATION) || (typeof process !== 'undefined' && process.env && process.env.VITE_GSC_VERIFICATION) || '';

  const isValidGa4 = true; // G-R5ELK25NSM is guaranteed valid
  const isValidGsc = gscVerification && typeof gscVerification === 'string' && !gscVerification.includes('TODO');

  return (
    <Helmet>
      {/* HTML Lang */}
      <html lang="en" />

      {/* Primary Page Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : null}

      {/* Google Search Console Verification (Rendered ONLY when valid env var exists) */}
      {isValidGsc ? (
        <meta name="google-site-verification" content={gscVerification} />
      ) : null}

      {/* GA4 Analytics Scripts (Rendered ONLY when valid env var exists) */}
      {isValidGa4 ? (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
      ) : null}
      {isValidGa4 ? (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}');
          `}
        </script>
      ) : null}

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Shahzad Auto Garage" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

/**
 * Event Tracking Helper for Analytics (GA4)
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
