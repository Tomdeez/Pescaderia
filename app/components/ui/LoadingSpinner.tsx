'use client';

import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div 
      className="h-96 flex items-center justify-center"
      role="alert"
      aria-label="Cargando contenido"
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-12 h-12 border-4 border-sky-200 border-t-sky-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-gray-600 font-medium">Cargando...</p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;