import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "Adbetton - Maçonnerie Générale & Pose de Menuiserie en Bretagne et Normandie",
  description: "Adbetton, auto-entrepreneur spécialisé en maçonnerie générale (gros second œuvre) et pose de menuiserie. Devis gratuit en Ille-et-Vilaine, Côtes-d'Armor et Manche.",
  keywords: [
    "maçonnerie générale Bretagne",
    "gros second œuvre Ille-et-Vilaine",
    "pose menuiserie Côtes-d'Armor",
    "artisan maçon Manche",
    "construction Bretagne",
    "maçon Rennes",
    "menuiserie Saint-Brieuc",
    "maçonnerie Cherbourg",
    "gros œuvre",
    "cloisons",
    "devis gratuit",
    "Adbetton",
    "travaux maison",
    "garantie décennale",
    "auto-entrepreneur bâtiment"
  ],
  author: "Adbetton",
  siteUrl: "https://adbetton.fr",
  siteName: "Adbetton - Maçonnerie Générale",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "Adbetton",
  "legalName": "Adbetton",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Adbetton"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Bretagne",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33749229392",
    "contactType": "customer service",
    "email": "adbetton32@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Ille-et-Vilaine"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Côtes-d'Armor"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Manche"
    }
  ],
  "serviceType": [
    "Maçonnerie générale",
    "Gros second œuvre", 
    "Pose de menuiserie",
    "Construction",
    "Rénovation"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de construction",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maçonnerie générale",
          "description": "Élévation de murs, cloisons, dalles, chapes, gros second œuvre"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Pose de menuiserie",
          "description": "Installation de fenêtres, portes, volets, cloisons"
        }
      }
    ]
  }
};
