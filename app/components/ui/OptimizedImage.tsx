'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  onLoad?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '100vw',
  className = '',
  priority = false,
  quality = 80,
  onLoad,
}: OptimizedImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  
  // Reiniciar estados si cambia la URL de origen
  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  // Manejar la carga de la imagen
  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  // Manejar errores de carga
  const handleError = () => {
    setError(true);
    setLoading(false);
    
    // Intentar con WebP si la original falla
    if (!imgSrc.includes('.webp') && (imgSrc.includes('.jpg') || imgSrc.includes('.jpeg') || imgSrc.includes('.png'))) {
      const webpSrc = imgSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      setImgSrc(webpSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Estado de carga */}
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {/* Imagen optimizada */}
      <Image
        src={imgSrc}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        sizes={sizes}
        className={`
          transition-opacity duration-500 ease-in-out
          ${loading ? 'opacity-0' : 'opacity-100'}
          ${className}
        `}
        priority={priority}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Fallback para error final */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <span className="block text-3xl mb-2" aria-hidden="true">🖼️</span>
            <p className="text-sm text-gray-500">Imagen no disponible</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
