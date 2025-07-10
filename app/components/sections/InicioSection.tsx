"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Hero Section de la landing page de Estrellita de Mar
export const InicioSection: React.FC = () => {
  // Parallax sutil (opcional)
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollY, [0, 200], ["0px", "40px"]);

  return (
    <section id="presentacion"
      aria-label="Sección de inicio y bienvenida"
      ref={ref}
      className="relative flex items-center justify-center min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 pt-24 md:pt-28" // antes pt-12
    >
      {/* Imagen de fondo local con parallax, blur y opacidad */}
      <motion.img
        src="/imagenes/marifrescos.jpg"
        alt="Variedad de mariscos frescos sobre hielo en la pescadería"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        style={{ y }}
        loading="lazy"
        aria-hidden="true"
      />
      {/* Overlay degradado azul y verde con más opacidad y blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-700/60 via-white/10 to-emerald-500/50 backdrop-blur-sm" />
      {/* Contenido central */}
      <div className="relative w-full max-w-5xl mx-auto px-4 z-10 flex flex-col items-center text-center justify-center min-h-[40vh]">
        {/* Logo isotipo más chico */}
        <div className="flex justify-center mb-6">
          <img src="/imagenes/Claro.png" alt="Logo Estrellita de Mar" className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full bg-white/80 shadow-2xl" />
        </div>
        {/* Título principal animado */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-sky-900 mb-3 tracking-tight leading-tight drop-shadow-xl w-full text-center"
        >
          Pescadería Premium en San Nicolás
        </motion.h1>
        {/* Subtítulo animado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base md:text-lg text-sky-800 font-medium mb-6 drop-shadow w-full text-center"
        >
          Mariscos frescos, atención personalizada y calidad garantizada para tu mesa o negocio. Viví la experiencia Estrellita de Mar.
        </motion.p>
        {/* Botón CTA animado */}
        <motion.a
          href="#productos"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full text-base shadow-2xl border border-cyan-100/60 hover:border-cyan-300/80 transition-all duration-300 focus-visible:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 backdrop-blur-sm"
          whileHover={{ scale: 1.09, boxShadow: "0 16px 48px rgba(14,116,144,0.22)" }}
          whileTap={{ scale: 0.97 }}
          aria-label="Ver productos"
          tabIndex={0}
          role="button"
        >
          {/* Ícono de pescado */}
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10 0v.01" /></svg>
          Ver Productos
        </motion.a>
        {/* Iconos decorativos sutiles */}
        <div className="flex gap-4 mt-8 justify-center">
          <span className="text-cyan-400 text-3xl" title="Pescado">🐟</span>
          <span className="text-emerald-400 text-3xl" title="Concha">🐚</span>
          <span className="text-cyan-500 text-3xl" title="Delivery">🚚</span>
        </div>
      </div>
    </section>
  );
};

export default InicioSection; 