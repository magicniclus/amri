import Image from 'next/image';
import { ComponentProps } from 'react';

interface SEOImageProps extends Omit<ComponentProps<typeof Image>, 'alt'> {
  alt: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}

export default function SEOImage({ 
  alt, 
  title, 
  loading = 'lazy',
  ...props 
}: SEOImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      title={title || alt}
      loading={loading}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
}
