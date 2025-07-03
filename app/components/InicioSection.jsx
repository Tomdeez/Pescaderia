"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Hero Section de la landing page de Estrellita de Mar
export default function InicioSection() {
  // Parallax sutil (opcional)
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollY, [0, 200], ["0px", "40px"]);

  return (
    <section
      id="inicio"
      aria-label="Sección de inicio y bienvenida"
      ref={ref}
      className="relative flex items-center justify-center min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100"
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
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-4 py-24">
        {/* Título principal animado */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-5 tracking-tight leading-tight drop-shadow-xl"
        >
          Pescadería Premium en San Nicolás
        </motion.h1>
        {/* Subtítulo animado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl text-sky-800 font-medium mb-8 drop-shadow"
        >
          Mariscos frescos, atención personalizada y calidad garantizada para tu mesa o negocio. Viví la experiencia Estrellita de Mar.
        </motion.p>
        {/* Botón CTA animado */}
        <motion.a
          href="#productos"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-2xl border border-cyan-100/60 hover:border-cyan-300/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 backdrop-blur-sm"
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
        <div className="flex gap-6 mt-12 justify-center">
          <span className="text-cyan-400 text-3xl" title="Pescado">🐟</span>
          <span className="text-emerald-400 text-3xl" title="Concha">🐚</span>
          <span className="text-cyan-500 text-3xl" title="Delivery">🚚</span>
        </div>
      </div>
    </section>
  );
} 