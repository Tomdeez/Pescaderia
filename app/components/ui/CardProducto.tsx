'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProductPlaceholder } from './ProductPlaceholder';

interface CardProductoProps {
  imagen: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
  cantidad: number;
  onSumar: () => void;
  onRestar: () => void;
}

export const CardProducto = ({
  imagen,
  titulo,
  descripcion,
  categoria,
  disponibilidad,
  cantidad,
  onSumar,
  onRestar,
}: CardProductoProps) => {
  const disponibilidadColor = {
    'En Stock': 'bg-green-100 text-green-800',
    'Bajo Pedido': 'bg-yellow-100 text-yellow-800',
    'Temporada': 'bg-blue-100 text-blue-800',
  }[disponibilidad];

  const [imageLoaded, setImageLoaded] = useState(false);

  // Determinar si es una URL o un placeholder
  const isPlaceholder = !imagen || imagen === 'placeholder';

  return (
    <motion.article
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      role="article"
      aria-labelledby={`producto-${titulo.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Imagen con tamaño fijo para mejor consistencia */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {isPlaceholder ? (
          <ProductPlaceholder categoria={categoria} titulo={titulo} />
        ) : (
          <Image
            src={imagen}
            alt={`Imagen de ${titulo}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            quality={80}
            onError={() => {
              console.log('Error al cargar imagen:', imagen);
            }}
          />
        )}
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-lg text-sm font-medium ${disponibilidadColor} shadow-sm`}>
            {disponibilidad}
          </span>
        </div>
      </div>

      {/* Contenido más legible y espaciado */}
      <div className="p-5">
        {/* Categoría y título */}
        <div className="mb-4">
          <span className="text-sm font-medium text-sky-600 block mb-1">
            {categoria}
          </span>
          <h3 
            id={`producto-${titulo.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xl font-bold text-gray-900"
          >
            {titulo}
          </h3>
        </div>

        {/* Descripción con mejor legibilidad */}
        <p 
          className="text-gray-600 text-base mb-6 line-clamp-2"
          role="contentinfo"
        >
          {descripcion}
        </p>

        {/* Controles de cantidad más grandes y accesibles */}
        <div 
          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
          role="group"
          aria-label="Control de cantidad"
        >
          <span className="text-gray-700 font-medium">Cantidad:</span>
          <div className="flex items-center gap-3">
            <motion.button 
              onClick={onRestar}
              className="bg-white text-sky-600 border-2 border-sky-600 rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              aria-label="Disminuir cantidad"
              whileTap={{ scale: 0.95 }}
              disabled={cantidad === 0}
            >
              −
            </motion.button>
            <span 
              className="w-8 text-center text-lg font-semibold text-gray-900"
              role="status"
              aria-label="Cantidad actual"
            >
              {cantidad}
            </span>
            <motion.button 
              onClick={onSumar}
              className="bg-sky-600 text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              aria-label="Aumentar cantidad"
              whileTap={{ scale: 0.95 }}
            >
              +
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}; 