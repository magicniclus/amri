import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Adbetton - Maçonnerie Générale & Pose de Menuiserie en Bretagne et Normandie",
  description: "Adbetton, auto-entrepreneur spécialisé en maçonnerie générale (gros second œuvre) et pose de menuiserie. Devis gratuit en Ille-et-Vilaine, Côtes-d'Armor et Manche. Garantie décennale.",
  keywords: "maçonnerie générale Bretagne, gros second œuvre Ille-et-Vilaine, pose menuiserie Côtes-d'Armor, artisan maçon Manche, construction Bretagne, maçon Rennes, menuiserie Saint-Brieuc, maçonnerie Cherbourg, gros œuvre, cloisons, devis gratuit, Adbetton, travaux maison, garantie décennale, auto-entrepreneur bâtiment",
  authors: [{ name: "Adbetton" }],
  creator: "Adbetton",
  publisher: "Adbetton",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adbetton.fr"),
  alternates: {
    canonical: "https://adbetton.fr",
  },
  openGraph: {
    title: "Adbetton - Maçonnerie Générale & Pose de Menuiserie en Bretagne et Normandie",
    description: "Adbetton, auto-entrepreneur spécialisé en maçonnerie générale (gros second œuvre) et pose de menuiserie. Devis gratuit en Ille-et-Vilaine, Côtes-d'Armor et Manche.",
    url: "https://adbetton.fr",
    siteName: "Adbetton - Maçonnerie Générale",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adbetton - Maçonnerie Générale en Bretagne et Normandie",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adbetton - Maçonnerie Générale & Pose de Menuiserie",
    description: "Auto-entrepreneur en Bretagne et Normandie. Maçonnerie générale, pose de menuiserie. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - New */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script>

      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
