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
      subtitle: "Construction et rénovation",
      content: "Réalisation de fondations, dalles béton, murs porteurs, cloisons, escaliers en béton. Construction neuve et extension de maison dans la région de Toulouse.",
      image: "/macon.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b"
    },
    {
      title: "Charpente",
      subtitle: "Charpente traditionnelle et moderne",
      content: "Conception et réalisation de charpentes en bois traditionnelles et modernes. Rénovation et création de structures de toiture adaptées à vos besoins.",
      image: "/joint-de-pierre.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    {
      title: "Terrassement",
      subtitle: "Préparation et aménagement",
      content: "Travaux de terrassement pour préparation de terrain, création de fondations, aménagement extérieur et préparation pour construction de piscines.",
      image: "/terrassementee.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997"
    },
    {
      title: "Construction de Piscines",
      subtitle: "Piscines enterrées et semi-enterrées",
      content: "Conception et réalisation de piscines enterrées et semi-enterrées. Du terrassement à la finition, nous gérons votre projet de A à Z.",
      image: "/facade.png",
      gradientFrom: "#fd7e14",
      gradientTo: "#ffc107"
    }
  ];



  const contactInfo = {
    address: "Région de Toulouse (31)\nIntervention dans un rayon de 50 km\nautour de Toulouse",
    phone: "07 69 43 81 55",
    email: "contact@amri-maconnerie.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=Toulouse,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
        subtitle="Parlons de votre projet de maçonnerie, charpente, terrassement ou construction de piscine dans la région de Toulouse"
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
