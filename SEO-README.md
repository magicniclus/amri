# Guide SEO - Site Belrhali

## 🎯 Optimisations SEO Implémentées

### 1. Métadonnées Optimisées
- **Titre principal** : "Belrhali - Artisan Maçonnerie, Terrassement & Menuiserie en Nouvelle-Aquitaine"
- **Description** : Optimisée avec mots-clés locaux et services
- **Mots-clés ciblés** : maçonnerie, terrassement, menuiserie + géolocalisation

### 2. Données Structurées (JSON-LD)
- ✅ Schema.org LocalBusiness
- ✅ Schema.org Service 
- ✅ Informations de contact structurées
- ✅ Zones géographiques desservies

### 3. Fichiers SEO Techniques
- ✅ `sitemap.xml` automatique
- ✅ `robots.txt` optimisé
- ✅ Open Graph image générée dynamiquement
- ✅ Favicon personnalisé

### 4. Mots-clés Stratégiques

#### Primaires
- "maçonnerie Nouvelle-Aquitaine"
- "terrassement Corrèze" 
- "menuiserie Dordogne"
- "artisan bâtiment"

#### Secondaires
- "construction rénovation"
- "devis gratuit"
- "fondations murs porteurs"
- "excavation nivellement"

#### Géographiques
- Corrèze (19)
- Dordogne (24) 
- Haute-Vienne (87)
- Lot (46)
- Gironde (33)
- Lot-et-Garonne (47)

## 📁 Structure des Fichiers SEO

```
/lib/
  ├── seo-config.ts          # Configuration SEO centralisée
  ├── page-metadata.ts       # Métadonnées par section
  └── analytics.ts           # Configuration tracking (optionnel)

/app/
  ├── layout.tsx             # Métadonnées globales
  ├── page.tsx               # Métadonnées page d'accueil + JSON-LD
  ├── sitemap.ts             # Sitemap automatique
  ├── robots.ts              # Robots.txt
  ├── opengraph-image.tsx    # Image Open Graph dynamique
  └── icon.tsx               # Favicon dynamique

/components/
  ├── SEOHead.tsx            # Composant métadonnées dynamiques
  ├── SEOImage.tsx           # Images optimisées SEO
  └── SEOBreadcrumbs.tsx     # Fil d'Ariane avec Schema
```

## 🚀 Prochaines Étapes Recommandées

### 1. Contenu
- [ ] Ajouter une page "Services" détaillée
- [ ] Créer des pages par zone géographique
- [ ] Rédiger des articles de blog techniques
- [ ] Optimiser les textes alt des images

### 2. Technique
- [ ] Configurer Google Search Console
- [ ] Vérifier les Core Web Vitals
- [ ] Optimiser la vitesse de chargement
- [ ] Ajouter un certificat SSL

### 3. Local SEO
- [ ] Créer une fiche Google My Business
- [ ] Obtenir des avis clients
- [ ] S'inscrire dans les annuaires locaux
- [ ] Créer des citations NAP cohérentes

## 📊 Métriques à Suivre

### Positions Cibles
1. "maçon Corrèze" → Top 3
2. "terrassement Dordogne" → Top 3  
3. "menuisier Nouvelle-Aquitaine" → Top 5
4. "artisan bâtiment [ville]" → Top 5

### KPIs SEO
- Trafic organique mensuel
- Positions moyennes mots-clés
- Taux de clics (CTR)
- Conversions devis/contact

## 🛠️ Utilisation

### Modifier les Métadonnées
Éditez `/lib/seo-config.ts` pour changer :
- Titre et description globaux
- Mots-clés principaux
- URL du site
- Informations entreprise

### Ajouter une Nouvelle Page
```typescript
import { generateMetadata } from '@/lib/seo-config';

export const metadata = generateMetadata(
  "Titre de la page",
  "Description optimisée",
  "/image-og.jpg",
  "/url-page"
);
```

### Tracking des Conversions
```typescript
import { trackContactForm, trackQuoteRequest } from '@/lib/analytics';

// Dans un formulaire
const handleSubmit = () => {
  trackContactForm();
  // ... logique formulaire
};
```

## 📞 Contact SEO
Pour toute question sur l'optimisation SEO, contactez l'équipe technique.
