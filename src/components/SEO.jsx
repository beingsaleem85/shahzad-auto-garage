import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://www.shahzadautogarage.com';
const DEFAULT_IMAGE = `${DOMAIN}/hero-bg.webp`;

// TODO PLACEHOLDERS FOR USER CONFIGURATION
export const SEO_TODOS = {
  ga4Id: 'G-XXXXXXXXXX', // TODO: Replace G-XXXXXXXXXX with your GA4 Measurement ID
  gscVerification: 'TODO_GSC_VERIFICATION_TOKEN', // TODO: Replace with Google Search Console verification token
  facebookUrl: 'https://www.facebook.com/TODO_SHAHZAD_AUTO_GARAGE', // TODO: Replace with official Facebook page URL
  instagramUrl: 'https://www.instagram.com/TODO_SHAHZAD_AUTO_GARAGE', // TODO: Replace with official Instagram profile URL
  geoLat: 33.6766, // Latitude for G-11/4 Golra Service Road, Islamabad
  geoLng: 72.9805  // Longitude for G-11/4 Golra Service Road, Islamabad
};

/**
 * Event Tracking Helper for Analytics (GA4)
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

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

      {/* Google Search Console Verification */}
      {SEO_TODOS.gscVerification && SEO_TODOS.gscVerification !== 'TODO_GSC_VERIFICATION_TOKEN' && (
        <meta name="google-site-verification" content={SEO_TODOS.gscVerification} />
      )}

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
