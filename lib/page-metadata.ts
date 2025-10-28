import { Metadata } from 'next';
import { generateMetadata } from './seo-config';

// Métadonnées pour la page d'accueil
export const homeMetadata: Metadata = generateMetadata(
  "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie en Nouvelle-Aquitaine",
  "Belrhali, artisan du bâtiment spécialisé en maçonnerie, terrassement et menuiserie. Devis gratuit en Corrèze, Dordogne, Haute-Vienne, Lot, Gironde et Lot-et-Garonne. Expertise locale depuis 15 ans.",
  "/og-belrhali-home.jpg",
  "/"
);

// Métadonnées pour la section services
export const servicesMetadata = {
  title: "Services de Maçonnerie, Terrassement et Menuiserie | Belrhali",
  description: "Découvrez nos services : maçonnerie (fondations, murs porteurs), terrassement (excavation, drainage) et menuiserie (fenêtres, portes). Devis gratuit en Nouvelle-Aquitaine.",
  keywords: [
    "services maçonnerie",
    "terrassement professionnel", 
    "menuiserie sur mesure",
    "fondations béton",
    "excavation terrain",
    "fenêtres portes"
  ]
};

// Métadonnées pour la section réalisations
export const realisationsMetadata = {
  title: "Nos Réalisations en Maçonnerie et Construction | Belrhali",
  description: "Découvrez nos dernières réalisations en maçonnerie, terrassement et menuiserie en Nouvelle-Aquitaine. Projets résidentiels et commerciaux de qualité.",
  keywords: [
    "réalisations maçonnerie",
    "projets construction",
    "chantiers Nouvelle-Aquitaine",
    "travaux finis",
    "portfolio bâtiment"
  ]
};

// Métadonnées pour la section contact
export const contactMetadata = {
  title: "Contact et Devis Gratuit | Belrhali Artisan Bâtiment",
  description: "Contactez Belrhali pour un devis gratuit. Intervention en Corrèze, Dordogne, Haute-Vienne, Lot, Gironde et Lot-et-Garonne. Réponse rapide garantie.",
  keywords: [
    "devis gratuit maçonnerie",
    "contact artisan bâtiment",
    "Corrèze Dordogne",
    "Haute-Vienne Lot",
    "Gironde Lot-et-Garonne"
  ]
};

// Fonction pour générer des métadonnées de section
export function generateSectionMetadata(
  section: 'services' | 'realisations' | 'contact',
  baseUrl: string = ''
): Metadata {
  const sectionData = {
    services: servicesMetadata,
    realisations: realisationsMetadata,
    contact: contactMetadata
  }[section];

  return generateMetadata(
    sectionData.title,
    sectionData.description,
    `/og-belrhali-${section}.jpg`,
    `${baseUrl}#${section}`
  );
}
