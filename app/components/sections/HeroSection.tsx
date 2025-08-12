'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="inicio"
      aria-label="Pescadería y Distribuidora en San Nicolás – Estrellita de Mar"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-sky-950 via-[#05263f] to-[#041b2e] pt-28"
    >
      {/* Fondo con efecto paralax sutil */}
      <div className="absolute inset-0 bg-[url('/imagenes/pesmuestrafresco.jpg')] bg-cover bg-center opacity-10 scale-105 motion-safe:animate-subtle-zoom"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#041e31]/95 via-[#031a2a]/90 to-[#021524]/95"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-112px)] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          
          {/* Información - 3 columnas en pantallas grandes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 lg:col-span-3 pr-0 lg:pr-8 space-y-6 md:space-y-8"
          >
            {/* Título con diseño más moderno */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="inline-block mb-2 bg-sky-700/30 backdrop-blur-sm text-sky-300 text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-sky-400/20">
                Pescadería & Distribuidora
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight">
                Del Mar a <br/>
                <span className="bg-gradient-to-r from-sky-300 to-cyan-400 text-transparent bg-clip-text">Tu Mesa</span>
              </h1>
              
              <p className="mt-6 text-base md:text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed">
                Más de <span className="font-semibold text-sky-300">20 años</span> ofreciendo los mejores productos del mar y río
                seleccionados diariamente para garantizar frescura y calidad excepcional.
              </p>
            </motion.div>
            
            {/* Características en diseño más moderno */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {[
                {icon: "🔍", text: "Selección diaria", desc: "Productos frescos seleccionados cada mañana"},
                {icon: "🚚", text: "Entrega mayorista", desc: "Abastecemos hoteles y restaurantes"},
                {icon: "🌊", text: "Mar y río", desc: "Amplia variedad de productos"},
                {icon: "👨‍🍳", text: "Asesoramiento", desc: "Orientación profesional personalizada"}
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group p-3 rounded-xl transition-all duration-300 hover:bg-sky-800/20">
                  <div className="bg-sky-600/40 w-12 h-12 flex items-center justify-center rounded-xl border border-sky-500/20 group-hover:bg-sky-600/60 transition-colors shadow-lg">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <span className="text-white text-base md:text-lg font-medium block">{item.text}</span>
                    <span className="text-sky-100/70 text-sm block mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Botones CTA */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <a
                href="#productos"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium py-3.5 px-8 rounded-xl text-sm md:text-base transition-all duration-300 min-w-[160px] shadow-lg shadow-sky-900/40 hover:shadow-sky-900/60 hover:scale-105 transform"
              >
                Ver Catálogo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium py-3.5 px-8 rounded-xl text-sm md:text-base transition-all duration-300 min-w-[160px] shadow-lg shadow-green-900/40 hover:shadow-green-900/60 hover:scale-105 transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
            
            {/* Badge de clientes satisfechos - Nuevo elemento moderno */}
            <motion.div 
              className="flex items-center gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-sky-900 bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-xs font-bold`}>
                    {["JC", "MP", "AL", "RS"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-sky-100 font-medium">+850 clientes satisfechos</p>
                <p className="text-sky-300/80 text-xs">Confían en nuestra calidad</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Imagen - 2 columnas en pantallas grandes */}
          <motion.div 
            className="order-1 lg:order-2 lg:col-span-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-xl">
              {/* Elementos decorativos modernos */}
              <motion.div 
                className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.2, duration: 1 }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-sky-500/20 to-emerald-500/20 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
              
              {/* Marco decorativo moderno */}
              <motion.div 
                className="absolute -inset-1 border-2 border-sky-400/40 rounded-2xl transform -rotate-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.div 
                className="absolute -inset-1 border-2 border-sky-400/20 rounded-2xl transform rotate-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              
              {/* Imagen principal con sombra profunda y esquinas más redondeadas */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,107,157,0.4)]">
                <Image 
                  src="/imagenes/pesmuestrafresco.jpg" 
                  alt="Selección de pescados y mariscos frescos" 
                  width={700}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay sutil con gradiente moderno */}
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/30 to-transparent"></div>
                
                {/* Etiqueta de calidad renovada */}
                <motion.div 
                  className="absolute top-5 right-5 bg-sky-600/90 backdrop-blur-md text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-lg border border-sky-400/30 flex items-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd"></path>
                  </svg>
                  Calidad Premium
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonios mejorados */}
        <motion.div 
          className="absolute bottom-10 lg:bottom-12 right-4 lg:right-8 max-w-sm bg-sky-700/30 backdrop-blur-md p-6 rounded-2xl border border-sky-400/30 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <div className="flex items-center text-amber-300 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white text-base italic leading-relaxed">
            "Productos siempre frescos y servicio excepcional. La mejor pescadería de la zona sin duda."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-sky-600/60 flex items-center justify-center text-white font-semibold">
              FC
            </div>
            <div>
              <p className="text-white/90 text-sm font-medium">Fausto Cardone</p>
              <p className="text-sky-300/80 text-xs">Cliente desde 2015</p>
            </div>
          </div>
        </motion.div>
        
        {/* Indicador de scroll */}
        <motion.div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.8 : 0 }}
          transition={{ 
            delay: 1.5,
            duration: 0.4
          }}
        >
          <svg className="w-6 h-6 text-sky-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;