'use client';

import { useState, useEffect } from 'react';

/**
 * Componente de accesibilidad que permite a los usuarios de lectores de pantalla saltar directamente al contenido principal.
 * Este enlace solo es visible cuando tiene el foco, lo que lo hace útil para usuarios de teclado y lectores de pantalla.
 */
export default function SkipToContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizamos nada durante el SSR para evitar errores de hidratación
  if (!mounted) {
    return null;
  }

  return (
    <a
      href="#inicio"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] 
                focus:bg-white focus:px-4 focus:py-2 focus:text-sky-700 focus:font-medium 
                focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      Saltar al contenido principal
    </a>
  );
}
