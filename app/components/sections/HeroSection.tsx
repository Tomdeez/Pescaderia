import { motion } from "framer-motion";
import Image from "next/image";

// URL de imagen de fondo de mar en alta resolución (Unsplash, libre de derechos)
const BACKGROUND_IMAGE = "/imagenes/pesfrescohielo.jpg";

export const HeroSection: React.FC = () => {
  // Variantes de animación para el fade in desde abajo
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="inicio" className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#003049]">
      {/* Imagen de fondo */}
      <Image
        src={BACKGROUND_IMAGE}
        alt="Fondo mar Estrellita de Mar"
        fill
        priority
        className="object-cover object-center w-full h-full z-0"
        sizes="100vw"
      />
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />

      {/* Contenido principal centrado */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-24 md:py-36">
        {/* Título animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={0}
        >
          Estrellita de Mar
        </motion.h1>
        {/* Subtítulo animado */}
        <motion.p
          className="text-lg md:text-2xl text-white mb-8 font-medium drop-shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={1}
        >
          Calidad premium, frescura garantizada.
        </motion.p>
        {/* Botones animados */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs mx-auto">
          <motion.a
            href="#comprar"
            className="inline-block rounded-lg px-8 py-3 text-lg font-semibold bg-[#F77F00] text-white shadow-md hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition-colors duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            custom={2}
          >
            Comprar Ahora
          </motion.a>
          <motion.a
            href="#productos"
            className="inline-block rounded-lg px-8 py-3 text-lg font-semibold border-2 border-[#F77F00] text-[#F77F00] bg-transparent hover:bg-[#F77F00]/10 focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition-colors duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            custom={3}
          >
            Ver Productos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 