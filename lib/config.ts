import siteConfig from '@/config/site-config.json';

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: string;
  phone: string;
  email: string;
  siret: string;
  ceo: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface AboutSection {
  smallTitle: string;
  title: string;
  subtitle: string;
  content: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
  buttonText: string;
  buttonHref: string;
  reversed: boolean;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface GalleryConfig {
  title: string;
  subtitle: string;
  initialDisplayCount: number;
  images?: GalleryImage[];
}

export interface ContactConfig {
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

export interface TeamConfig {
  members: TeamMember[];
}

export interface PartnerLogo {
  src: string;
  alt: string;
  name: string;
}

export interface PartnersConfig {
  logos: PartnerLogo[];
}

export interface ColorsConfig {
  primary: string;
  secondary: string;
  accent: string;
}

export interface SiteConfig {
  company: CompanyInfo;
  hero: HeroConfig;
  about: AboutConfig;
  gallery: GalleryConfig;
  contact: ContactConfig;
  team: TeamConfig;
  partners: PartnersConfig;
  colors: ColorsConfig;
}

// Configuration par défaut non utilisée - supprimée pour éviter les warnings ESLint

// Export the config directly
export const config = siteConfig;
