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
  title: "Amri Maçonnerie - Maçonnerie, Charpente, Terrassement & Piscines à Toulouse",
  description: "Amri Maçonnerie, auto-entrepreneur spécialisé en maçonnerie, charpente, terrassement et construction de piscines. Plus de 20 ans d'expérience dans la région de Toulouse. Devis gratuit.",
  keywords: [
    "maçonnerie Toulouse",
    "charpente Toulouse",
    "terrassement Toulouse",
    "construction piscine Toulouse",
    "artisan maçon Haute-Garonne",
    "maçonnerie générale 31",
    "charpente bois Toulouse",
    "terrassement piscine",
    "maçon Blagnac",
    "charpentier Colomiers",
    "piscine enterrée Muret",
    "devis gratuit",
    "Amri Maçonnerie",
    "travaux maison Toulouse",
    "auto-entrepreneur bâtiment"
  ],
  author: "Amri Maçonnerie",
  siteUrl: "https://amri-maconnerie.fr",
  siteName: "Amri Maçonnerie - Toulouse",
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
  "name": "Amri Maçonnerie",
  "legalName": "Amri Maçonnerie",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Zidane Amri"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Occitanie",
    "addressLocality": "Toulouse",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33769438155",
    "contactType": "customer service",
    "email": "contact@amri-maconnerie.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Haute-Garonne"
    },
    {
      "@type": "City", 
      "name": "Toulouse"
    },
    {
      "@type": "City",
      "name": "Blagnac"
    },
    {
      "@type": "City",
      "name": "Colomiers"
    }
  ],
  "serviceType": [
    "Maçonnerie générale",
    "Charpente", 
    "Terrassement",
    "Construction de piscines",
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
          "description": "Réalisation de fondations, dalles béton, murs porteurs, cloisons, escaliers en béton"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Charpente",
          "description": "Conception et réalisation de charpentes en bois traditionnelles et modernes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Terrassement",
          "description": "Travaux de terrassement, préparation de terrain, aménagement extérieur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Construction de piscines",
          "description": "Conception et réalisation de piscines enterrées et semi-enterrées"
        }
      }
    ]
  }
};
