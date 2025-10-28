// Configuration pour Google Analytics et autres outils de tracking

export const analyticsConfig = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  },
  googleTagManager: {
    containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
  },
  facebookPixel: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  },
  hotjar: {
    hjid: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
    hjsv: process.env.NEXT_PUBLIC_HOTJAR_SV || '6',
  },
};

// Fonction pour tracker les événements
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Événements spécifiques pour Belrhali
export const trackContactForm = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'phone_number',
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
  });
};

export const trackQuoteRequest = () => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: 'devis_request',
  });
};

// Déclaration des types pour TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
