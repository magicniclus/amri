import { ImageResponse } from 'next/og';
import { seoConfig } from '@/lib/seo-config';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = seoConfig.title;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '60px',
            margin: '40px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Belrhali
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#6b7280',
              margin: '0 0 30px 0',
              lineHeight: '1.3',
            }}
          >
            Artisan du Bâtiment
          </p>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              fontSize: '24px',
              color: '#374151',
            }}
          >
            <span>Maçonnerie</span>
            <span>•</span>
            <span>Terrassement</span>
            <span>•</span>
            <span>Menuiserie</span>
          </div>
          <p
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              margin: '30px 0 0 0',
            }}
          >
            Nouvelle-Aquitaine
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
