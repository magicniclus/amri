import { useEffect } from 'react';
import { seoConfig } from '@/lib/seo-config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
}

export function useSEO({ title, description, keywords, canonical }: SEOProps = {}) {
  useEffect(() => {
    // Mise à jour du titre
    if (title) {
      document.title = `${title} | ${seoConfig.siteName}`;
    }

    // Mise à jour de la description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Mise à jour des mots-clés
    if (keywords && keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords.join(', '));
      }
    }

    // Mise à jour de l'URL canonique
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', `${seoConfig.siteUrl}${canonical}`);
    }
  }, [title, description, keywords, canonical]);
}

// Hook pour ajouter des données structurées dynamiquement
export function useStructuredData(schema: object) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
}
