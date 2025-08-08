"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Hero Section de la landing page de Estrellita de Mar
export const InicioSection: React.FC = () => {
  // Parallax sutil (opcional)
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollY, [0, 300], ["0px", "30px"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section id="presentacion"
      aria-label="Sección de inicio y bienvenida"
      ref={ref}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-16 sm:pt-20 md:pt-24 lg:pt-28"
    >
      {/* Imagen de fondo con efecto paralax suave */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <div className="relative w-full h-full">
          <img
            src="/imagenes/marifrescos.jpg"
            alt="Variedad de mariscos frescos sobre hielo en la pescadería"
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 to-transparent" />
        </div>
      </motion.div>
      {/* Contenido central */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center justify-center gap-6 sm:gap-8 md:gap-10">
        {/* Logo y título agrupados */}
        <div className="space-y-6">
          <img 
            src="/imagenes/Claro.png" 
            alt="Logo Estrellita de Mar" 
            className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] mx-auto rounded-full bg-white/90 shadow-lg" 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sky-950 tracking-tight">
              Pescadería de Calidad
            </h1>
            <p className="text-xl md:text-2xl font-medium text-sky-800/90">
              en San Nicolás
            </p>
          </motion.div>
        </div>

        {/* Descripción y CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl space-y-8"
        >
          <p className="text-lg md:text-xl text-sky-800/80 leading-relaxed">
            Mariscos frescos y atención personalizada para tu mesa o negocio. 
            <span className="block mt-2 font-medium">Viví la experiencia Estrellita de Mar.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#productos"
              className="group flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Productos
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InicioSection; 