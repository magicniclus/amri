'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Maçonnerie Générale",
      subtitle: "Construction neuve et extension",
      content: "Réalisation de fondations, dalles béton, murs porteurs, cloisons, escaliers en béton. Construction neuve et extension de maison avec garantie décennale.",
      image: "/macon.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Joints de Pierres",
      subtitle: "Technique traditionnelle à l'ancienne",
      content: "Pose de pierres naturelles et réalisation de joints de pierres à l'ancienne. Spécialisation en rénovation de bâtiments anciens avec respect des techniques traditionnelles.",
      image: "/joint-de-pierre.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Ouvertures & Extensions",
      subtitle: "Création et agrandissement",
      content: "Création d'ouvertures dans murs porteurs, extensions de maison. Nous adaptons votre habitat à vos besoins avec expertise technique.",
      image: "/extension.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Enduits de Façade",
      subtitle: "Finitions extérieures",
      content: "Application d'enduits de façade, finitions extérieures. Nous protégeons et embellissons vos murs avec des matériaux de qualité.",
      image: "/facade.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107"
    },
    {
      title: "Assainissement",
      subtitle: "Drainage et évacuation",
      content: "Assainissement, drainage, murs de soutènement. Solutions complètes pour la gestion des eaux et la stabilité de vos constructions.",
      image: "/assainissement.png",
      gradientFrom: "#6f42c1",
      gradientTo: "#e83e8c"
    },
    {
      title: "Terrassement",
      subtitle: "Petits travaux de terrassement",
      content: "Petits travaux de terrassement et finitions extérieures. Préparation de terrain et aménagements pour vos projets de construction.",
      image: "/terrassement.png",
      gradientFrom: "#17a2b8",
      gradientTo: "#6c757d"
    }
  ];



  const contactInfo = {
    address: "8 avenues de moka\n35400 Saint-Malo\nRayon d'intervention : 50 km",
    phone: "06 48 81 25 78",
    email: "adbetton32@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Saint-Malo,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de maçonnerie générale, joints de pierres, extensions ou assainissement autour de Saint-Malo"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
