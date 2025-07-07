'use client';

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/imagenes/pesfrescohielo.jpg')" 
        }}
      />
      
      {/* Overlay con gradiente más oscuro para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/80" />
      
      {/* Overlay adicional para texto central */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Título principal con mejor sombra */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white drop-shadow-2xl text-shadow-strong">
              Del Mar a Tu Mesa,
            </span>
            <span className="block text-sky-300 drop-shadow-2xl text-shadow-strong mt-2 font-extrabold">
              Calidad Premium
            </span>
          </h1>
          
          {/* Subtítulo con fondo semi-transparente */}
          <div className="inline-block bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed drop-shadow-lg">
              Descubre la frescura y calidad excepcional de nuestros productos del mar, 
              seleccionados diariamente para garantizar la mejor experiencia gastronómica.
            </p>
          </div>

          {/* Botones con mejor espaciado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#productos"
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Productos
            </motion.a>
            <motion.a
              href="#contacto"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Indicadores de calidad con mejor contraste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 lg:mt-24 mb-16"
        >
          {[
            { numero: "24h", texto: "Entrega en el día" },
            { numero: "100%", texto: "Garantía de Frescura" },
            { numero: "Premium", texto: "Calidad Certificada" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl lg:text-3xl font-bold text-sky-300 mb-2 drop-shadow-lg">
                  {item.numero}
                </h3>
                <p className="text-white font-medium drop-shadow-lg">
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - movido fuera del contenido principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}; 