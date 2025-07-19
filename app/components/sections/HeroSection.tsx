'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <>
      {/* Hero Section Principal */}
      <section 
        id="inicio"
        aria-label="Pescadería y Distribuidora en San Nicolás – Estrellita de Mar"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/imagenes/pesfrescohielo.jpg')" 
          }}
        />
        
        {/* Overlay semitransparente mejorado */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido centrado */}
        <div className="relative w-full max-w-4xl mx-auto px-4 z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/imagenes/Claro.png" 
              alt="Estrellita de Mar - Pescadería y Distribuidora en San Nicolás" 
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-white/90 shadow-2xl" 
            />
          </motion.div>

          {/* Bloque de texto con fondo redondeado */}
                     <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }}
             className="bg-black/40 backdrop-blur-md rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-2xl border border-white/10"
           >
             {/* H1 SEO optimizado */}
             <motion.h1 
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
             >
               <span className="block text-white drop-shadow-2xl">
                 Del Mar a Tu Mesa
               </span>
               <span className="block mt-3 font-extrabold" style={{ color: '#669BBC' }}>
                 Calidad Premium
               </span>
             </motion.h1>
             
             {/* Subtítulo explicativo */}
             <motion.p 
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
             >
               Pescadería y distribuidora en San Nicolás con más de 20 años de experiencia. 
               Ofrecemos productos del mar frescos y de primera calidad, 
               seleccionados diariamente para garantizar la excelencia en tu mesa.
             </motion.p>

             {/* Botones */}
             <motion.div
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
             >
              <motion.a
                href="#productos"
                className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Productos
              </motion.a>
              <motion.a
                href="#contacto"
                className="px-10 py-4 bg-transparent border-3 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Beneficios - Below the fold */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icono: "🚚", 
                titulo: "24h Entrega en el día", 
                descripcion: "Entrega rápida y segura en San Nicolás y zona metropolitana" 
              },
              { 
                icono: "❄️", 
                titulo: "100% Garantía de Frescura", 
                descripcion: "Cadena de frío garantizada desde el mar hasta tu mesa" 
              },
              { 
                icono: "⭐", 
                titulo: "Premium – Calidad Certificada", 
                descripcion: "Selección diaria y certificación de calidad en todos nuestros productos" 
              }
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{beneficio.icono}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}; 