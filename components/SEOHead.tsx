'use client';

import Head from 'next/head';
import { seoConfig } from '@/lib/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  noindex = false
}: SEOHeadProps) {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaKeywords = [...seoConfig.keywords, ...keywords].join(', ');
  const metaImage = ogImage || seoConfig.image;
  const canonicalUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={seoConfig.author} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${seoConfig.siteUrl}${metaImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${seoConfig.siteUrl}${metaImage}`} />
      {seoConfig.twitterHandle && (
        <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      )}
      
      {/* Données géographiques */}
      <meta name="geo.region" content="FR-NAQ" />
      <meta name="geo.placename" content="Nouvelle-Aquitaine" />
      <meta name="ICBM" content="45.5, 0.5" />
    </Head>
  );
}
