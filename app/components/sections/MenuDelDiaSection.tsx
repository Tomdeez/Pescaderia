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

// Modal global (único para toda la aplicación)
type ModalState = {
  isOpen: boolean;
  src: string | null;
  alt: string;
};

let modalListeners: ((state: ModalState) => void)[] = [];
let currentModal: ModalState = { isOpen: false, src: null, alt: '' };

function showImage(src: string, alt: string) {
  // Para depuración
  console.log('showImage llamado con:', src);
  
  // Asegurar que se ejecuta en el cliente
  if (typeof window !== 'undefined') {
    currentModal = { isOpen: true, src, alt };
    modalListeners.forEach(listener => listener({ ...currentModal }));
    document.body.style.overflow = 'hidden'; // Bloquear scroll
    
    // Para depuración
    console.log('Estado del modal actualizado:', currentModal);
  }
}

function closeModal() {
  if (typeof window !== 'undefined') {
    currentModal = { ...currentModal, isOpen: false };
    modalListeners.forEach(listener => listener({ ...currentModal }));
    document.body.style.overflow = ''; // Restaurar scroll
  }
}

function useImageModal() {
  const [state, setState] = useState<ModalState>(currentModal);
  
  useEffect(() => {
    function handleUpdate(newState: ModalState) {
      setState(newState);
    }
    
    modalListeners.push(handleUpdate);
    return () => {
      modalListeners = modalListeners.filter(l => l !== handleUpdate);
    };
  }, []);
  
  return state;
}

// Componente de Modal (se usa solo una vez en la aplicación)
function ImageModal() {
  const { isOpen, src, alt } = useImageModal();
  
  // Para depuración
  useEffect(() => {
    console.log('ImageModal renderizado, isOpen:', isOpen, 'src:', src);
  }, [isOpen, src]);
  
  // Cerrar con ESC
  useEffect(() => {
    if (!isOpen) return;
    
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
    }
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);
  
  // Si no está abierto, no renderizamos nada
  if (!isOpen) {
    return null;
  }
  
  // Función para manejar el cierre
  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    closeModal();
  };
  
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4" 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
    >
      <div 
        className="relative max-w-[98%] max-h-[95vh] overflow-hidden flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {src && (
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl" 
          />
        )}
        
        {/* Botón de cerrar */}
        <button
          type="button"
          className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleClose}
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MenuImage({ src, alt, etiquetaDia }: { src: string; alt: string; etiquetaDia: string }) {
  // Función directa para mostrar la imagen
  const handleShowImage = () => {
    console.log('Mostrando imagen:', src);
    showImage(src, alt);
  };

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group">
      {/* Imagen con respaldo */}
      <div className="absolute inset-0">
        <ImageWithFallback src={src} alt={alt} />
      </div>
      
      {/* Overlay al pasar el mouse - con evento de clic mejorado */}
      <button 
        type="button"
        onClick={handleShowImage}
        className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-200 
                 cursor-pointer flex items-center justify-center border-0"
        aria-label={`Ampliar imagen de ${etiquetaDia}`}
      >
        <div className="opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 
                     bg-white/90 rounded-full p-3 shadow-lg">
          <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </button>
      
      {/* Etiqueta del día */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-sm font-semibold text-sky-900 shadow z-10">
        {etiquetaDia}
      </div>
      
      {/* Botón de accesibilidad para ver la imagen */}
      <div className="absolute bottom-3 right-3 z-10">
        <button 
          type="button"
          onClick={handleShowImage}
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-md 
                   shadow-md transition-all duration-200 hover:scale-105 font-medium"
          title={`Ampliar imagen del menú de ${etiquetaDia}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Ver más grande</span>
        </button>
      </div>
    </div>
  );
}

function MiniCarrusel({ imagenes, etiquetaDia }: { imagenes: string[]; etiquetaDia: string }) {
  const [active, setActive] = useState(0);
  const total = imagenes.length;

  const go = (dir: -1 | 1) => {
    setActive((prev) => (prev + dir + total) % total);
  };

  // Accesibilidad: navegar con flechas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="relative w-full">
      <MenuImage 
        src={imagenes[active]} 
        alt={`Menú del día - ${etiquetaDia}${total > 1 ? ` (${active + 1}/${total})` : ''}`} 
        etiquetaDia={etiquetaDia}
      />
      
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 grid place-items-center shadow border z-30"
            aria-label="Anterior"
          >
            <span className="text-xl">‹</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 grid place-items-center shadow border z-30"
            aria-label="Siguiente"
          >
            <span className="text-xl">›</span>
          </button>
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1 z-30">
            {imagenes.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)} 
                className={`h-2 transition-all rounded-full ${i === active ? 'w-8 bg-sky-600' : 'w-4 bg-white/80 border'}`}
                aria-label={`Ir a imagen ${i+1}`}
                aria-current={i === active ? "true" : "false"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MenuDelDiaSection() {
  // Orden fijo de los días de la semana para mostrar
  const ordenDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
  // Determinar el día de la semana actual
  const determinarDiaActual = () => {
    const hoy = new Date();
    const diaDeLaSemana = hoy.getDay(); // 0 es domingo, 1 es lunes, etc.
    
    // Si es domingo (0) o sábado por la tarde, mostrar el lunes
    if (diaDeLaSemana === 0 || (diaDeLaSemana === 6 && hoy.getHours() >= 14)) {
      return 0; // Lunes
    }
    
    // Para el resto de días, ajustar el índice (restamos 1 porque nuestro array empieza con Lunes en posición 0)
    return Math.min(diaDeLaSemana - 1, 5); // Máximo 5 (Sábado)
  };
  
  // Estado para el día seleccionado, inicializado con el día actual
  const [selectedDayIndex, setSelectedDayIndex] = useState(determinarDiaActual());
  
  // Función para navegar entre días
  const navigateDay = (dir: -1 | 1) => {
    setSelectedDayIndex((prev) => {
      const newIndex = prev + dir;
      // Ciclamos entre 0 y la longitud del array
      if (newIndex < 0) return ordenDias.length - 1;
      if (newIndex >= ordenDias.length) return 0;
      return newIndex;
    });
  };
  
  // Obtener el día actual basado en el índice seleccionado
  const currentDay = ordenDias[selectedDayIndex];
  
  // Verificar si el día seleccionado es el día actual
  const isDayToday = selectedDayIndex === determinarDiaActual();
  
  // Buscar datos del menú para el día seleccionado
  const currentDayData = menuDelDia.find((m) => m.dia === currentDay) ?? null;

  // Regla solicitada: para Martes, dejar solo la imagen ubicada en `public/images` si existe
  const filterTuesday = (entry: typeof currentDayData) => {
    if (!entry) return null;
    if (entry.dia !== 'Martes') return entry;
    const onlyImagesDir = entry.imagenes.filter((p) => p.startsWith('/images/'));
    if (onlyImagesDir.length > 0) {
      return { ...entry, imagenes: [onlyImagesDir[0]] };
    }
    // Si no hay en /images, dejar solo la primera para evitar duplicados
    return { ...entry, imagenes: entry.imagenes.slice(0, 1) };
  };

  const currentDayFiltered = filterTuesday(currentDayData);

  return (
    <section className="py-16 bg-white" aria-label="Menú del día">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950">Menú del día</h2>
          <p className="text-gray-600 mt-2">Descubre nuestros menús de toda la semana</p>
          <p className="text-sky-600 mt-2 text-sm font-medium">
            💡 Haz clic en "Ver más grande" para ampliar el menú
          </p>
        </div>
        
        {/* Controles de navegación para toda la semana */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex justify-center items-center gap-4 mb-2">
            <button
              type="button"
              onClick={() => navigateDay(-1)}
              className="flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
              aria-label="Ver día anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Día anterior</span>
              <span className="sm:hidden">Anterior</span>
            </button>
            
            <div className={`px-4 py-2 rounded-md shadow-sm relative ${isDayToday ? 'bg-green-100' : 'bg-sky-100'}`}>
              <span className={`font-semibold ${isDayToday ? 'text-green-800' : 'text-sky-800'}`}>
                {ordenDias[selectedDayIndex]}
              </span>
              
              {/* Indicador de "Hoy" */}
              {isDayToday && (
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  HOY
                </span>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => navigateDay(1)}
              className="flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
              aria-label="Ver día siguiente"
            >
              <span className="hidden sm:inline">Día siguiente</span>
              <span className="sm:hidden">Siguiente</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Días de la semana en miniatura para navegación rápida */}
          <div className="flex justify-center space-x-2">
            {ordenDias.map((dia, index) => (
              <button
                key={dia}
                onClick={() => setSelectedDayIndex(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${selectedDayIndex === index 
                    ? 'bg-sky-600 text-white ring-2 ring-sky-300 ring-offset-2' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  ${index === determinarDiaActual() ? 'border-2 border-green-500' : ''}
                `}
                aria-label={`Ver menú de ${dia}`}
                aria-current={selectedDayIndex === index ? 'true' : 'false'}
                title={dia}
              >
                {dia.substring(0, 2)}
              </button>
            ))}
          </div>
        </div>

        {/* Un solo día centrado */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            {currentDayFiltered ? (
              <div className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <div className="p-4 pb-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">{currentDayFiltered.dia.charAt(0)}</span>
                    <h3 className="text-lg font-semibold text-sky-900">{currentDayFiltered.dia}</h3>
                  </div>
                  {currentDayFiltered.imagenes.length > 1 && (
                    <span className="text-xs text-gray-500">{currentDayFiltered.imagenes.length} fotos</span>
                  )}
                </div>
                <MiniCarrusel imagenes={currentDayFiltered.imagenes} etiquetaDia={currentDayFiltered.dia} />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-8 flex items-center justify-center text-center">
                <div>
                  <div className="text-2xl mb-2">🍽️</div>
                  <p className="text-gray-700 font-medium">No hay menú disponible para {ordenDias[selectedDayIndex]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal global (único) */}
      <ImageModal />
    </section>
  );
}

export default MenuDelDiaSection;