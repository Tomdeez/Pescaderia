'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { menuDelDia } from '@data/menu';

function ImageWithFallback({ src, alt }: { src: string; alt: string }) {
  const candidates = useMemo(() => {
    const list = new Set<string>();
    list.add(src);
    
    // Variantes numeradas comunes: " nombre 1", "-1" antes de la extensión
    const dotIndex = src.lastIndexOf('.');
    if (dotIndex > 0) {
      const base = src.slice(0, dotIndex);
      const ext = src.slice(dotIndex);
      for (let i = 1; i <= 5; i += 1) {
        list.add(`${base} ${i}${ext}`);
        list.add(`${base}-${i}${ext}`);
      }
    }
    
    // Intercambiar entre directorios images e imagenes
    if (src.startsWith('/images/')) {
      list.add(src.replace('/images/', '/imagenes/'));
    }
    if (src.startsWith('/imagenes/')) {
      list.add(src.replace('/imagenes/', '/images/'));
    }
    
    // Intercambiar entre extensiones de imagen
    if (src.endsWith('.jpg')) {
      list.add(src.replace(/\.jpg$/, '.jpeg'));
      list.add(src.replace(/\.jpg$/, '.png'));
    }
    if (src.endsWith('.jpeg')) {
      list.add(src.replace(/\.jpeg$/, '.jpg'));
      list.add(src.replace(/\.jpeg$/, '.png'));
    }
    if (src.endsWith('.png')) {
      list.add(src.replace(/\.png$/, '.jpg'));
      list.add(src.replace(/\.png$/, '.jpeg'));
    }
    
    return Array.from(list);
  }, [src]);

  const [index, setIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const current = candidates[index] ?? src;

  // Si todas las imágenes fallan, mostrar un placeholder
  if (hasError && index >= candidates.length - 1) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🍽️</div>
          <p className="text-sm">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover"
      priority={false}
      onError={() => {
        if (index < candidates.length - 1) {
          setIndex(index + 1);
        } else {
          setHasError(true);
        }
      }}
    />
  );
}

function useHoyYManiana() {
  const ordenDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const date = new Date();
  const day = date.getDay(); // 0 = Domingo, 1 = Lunes, ... 6 = Sábado
  let hoyName: string | null = null;
  let manianaName: string | null = null;
  let hoyEtiqueta = 'Hoy';
  let mananaEtiqueta = 'Mañana';

  if (day === 0) {
    // Domingo: no hay menú; mostrar lunes y martes como próximos
    hoyName = 'Lunes';
    manianaName = 'Martes';
    hoyEtiqueta = 'Próximo';
    mananaEtiqueta = 'Siguiente';
  } else if (day >= 1 && day <= 5) {
    hoyName = ordenDias[day - 1];
    const idx = day - 1;
    manianaName = ordenDias[(idx + 1) % ordenDias.length];
  } else if (day === 6) {
    // Sábado: solo mostrar hoy. Mañana (domingo) no hay menú.
    hoyName = 'Sábado';
    manianaName = null;
    hoyEtiqueta = 'Hoy';
  }

  return { hoyName, manianaName, hoyEtiqueta, mananaEtiqueta };
}

function MiniCarrusel({ imagenes, etiquetaDia }: { imagenes: string[]; etiquetaDia: string }) {
  const [active, setActive] = useState(0);
  const total = imagenes.length;
  const [isOpen, setIsOpen] = useState(false);

  const go = (dir: -1 | 1) => {
    setActive((prev) => (prev + dir + total) % total);
  };

  // Accesibilidad: cerrar con Escape y navegar con flechas en el lightbox
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const openLightbox = () => setIsOpen(true);
  const onContainerKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox();
    }
  };

  return (
    <div
      className="relative w-full aspect-[16/9] cursor-zoom-in transition-transform duration-200 hover:scale-[1.02] group"
      role="button"
      tabIndex={0}
      onClick={openLightbox}
      onKeyDown={onContainerKey}
    >
      <ImageWithFallback src={imagenes[active]} alt={`Menú del día - ${etiquetaDia}${total > 1 ? ` (${active + 1}/${total})` : ''}`} />
      
      {/* Overlay con indicador de zoom */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-3 shadow-lg">
          <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-sm font-semibold text-sky-900 shadow">
        {etiquetaDia}
      </div>
      
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 grid place-items-center shadow border"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 grid place-items-center shadow border"
            aria-label="Siguiente"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {imagenes.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 bg-sky-600' : 'w-3 bg-white/80 border'}`} />
            ))}
          </div>
        </>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={imagenes[active]}
              alt={`Vista ampliada - ${etiquetaDia}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            
            {/* Botón de cerrar mejorado */}
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-12 h-12 grid place-items-center shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Información de la imagen */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-800">{etiquetaDia}</p>
              {total > 1 && (
                <p className="text-xs text-gray-600">{active + 1} de {total}</p>
              )}
            </div>
            
            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 grid place-items-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 grid place-items-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const MenuDelDiaSection = () => {
  const { hoyName, manianaName, hoyEtiqueta, mananaEtiqueta } = useHoyYManiana();

  const rawHoy = menuDelDia.find((m) => m.dia === hoyName) ?? null;
  const rawManiana = menuDelDia.find((m) => m.dia === manianaName) ?? null;

  // Regla solicitada: para Martes, dejar solo la imagen ubicada en `public/images` si existe
  const filterTuesday = (entry: typeof rawHoy) => {
    if (!entry) return null;
    if (entry.dia !== 'Martes') return entry;
    const onlyImagesDir = entry.imagenes.filter((p) => p.startsWith('/images/'));
    if (onlyImagesDir.length > 0) {
      return { ...entry, imagenes: [onlyImagesDir[0]] };
    }
    // Si no hay en /images, dejar solo la primera para evitar duplicados
    return { ...entry, imagenes: entry.imagenes.slice(0, 1) };
  };

  const hoyData = filterTuesday(rawHoy);
  const manianaData = filterTuesday(rawManiana);

  return (
    <section className="py-16 bg-white" aria-label="Menú del día">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950">Menú del día</h2>
          <p className="text-gray-600 mt-2">Hoy y mañana, cocina casera lista para llevar.</p>
          <p className="text-sky-600 mt-2 text-sm font-medium">💡 Haz clic en las imágenes para verlas en tamaño completo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Hoy */}
          {hoyData ? (
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="p-4 pb-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">{hoyEtiqueta === 'Hoy' ? 'H' : 'P'}</span>
                  <h3 className="text-lg font-semibold text-sky-900">{hoyEtiqueta} · {hoyData.dia}</h3>
                </div>
                {hoyData.imagenes.length > 1 && (
                  <span className="text-xs text-gray-500">{hoyData.imagenes.length} fotos</span>
                )}
              </div>
              <MiniCarrusel imagenes={hoyData.imagenes} etiquetaDia={`${hoyEtiqueta} · ${hoyData.dia}`} />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-8 flex items-center justify-center text-center">
              <div>
                <div className="text-2xl mb-2">🍽️</div>
                <p className="text-gray-700 font-medium">Hoy no hay menú disponible</p>
                {manianaData && <p className="text-gray-500 mt-1">Mirá el menú de mañana</p>}
              </div>
            </div>
          )}

          {/* Mañana */}
          {manianaData ? (
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
              <div className="p-4 pb-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">{mananaEtiqueta === 'Mañana' ? 'M' : 'S'}</span>
                  <h3 className="text-lg font-semibold text-sky-900">{mananaEtiqueta} · {manianaData.dia}</h3>
                </div>
                {manianaData.imagenes.length > 1 && (
                  <span className="text-xs text-gray-500">{manianaData.imagenes.length} fotos</span>
                )}
              </div>
              <MiniCarrusel imagenes={manianaData.imagenes} etiquetaDia={`${mananaEtiqueta} · ${manianaData.dia}`} />
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-8 flex items-center justify-center text-center">
              <div>
                <div className="text-2xl mb-2">🗓️</div>
                <p className="text-gray-700 font-medium">Pronto publicaremos el menú de mañana</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuDelDiaSection;


