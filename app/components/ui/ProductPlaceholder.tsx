'use client';

import { motion } from 'framer-motion';

interface ProductPlaceholderProps {
  categoria?: string;
  titulo?: string;
}

export const ProductPlaceholder = ({ 
  categoria = 'Producto', 
  titulo = 'Imagen próximamente' 
}: ProductPlaceholderProps) => {
  // Determinamos el ícono según la categoría
  let icon = '🐟'; // Default pescado
  
  if (categoria.toLowerCase().includes('marisco')) icon = '🦐';
  else if (categoria.toLowerCase().includes('congelado')) icon = '❄️';
  else if (categoria.toLowerCase().includes('picada')) icon = '🍽️';
  else if (categoria.toLowerCase().includes('rebozado')) icon = '🍤';
  
  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-sky-100 overflow-hidden"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 2.5 
      }}
    >
      <span className="text-5xl mb-4" aria-hidden="true">{icon}</span>
      <p className="text-sky-700 font-medium text-center px-4">{titulo}</p>
      <p className="text-xs text-sky-600/70 mt-2">Imagen en preparación</p>
      
      {/* Línea animada en la parte inferior */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-sky-400/50"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};

export default ProductPlaceholder;
