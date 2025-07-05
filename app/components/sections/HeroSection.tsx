import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

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
    <section
      id="inicio"
      className="relative -mt-16 w-screen h-screen flex items-center justify-center overflow-hidden bg-[#003049]"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Fondo mar Estrellita de Mar"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay decorativo para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" aria-hidden="true" />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-20" aria-hidden="true" />
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-30 flex flex-col items-center w-full px-4">
        {/* Badge de distribuidor */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={0}
          className="bg-[#F77F00] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 drop-shadow-lg"
        >
          Distribuidor Mayorista y Minorista
        </motion.div>
        {/* Título animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={1}
        >
          Estrellita de Mar
        </motion.h1>
        {/* Sello de confianza */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={2}
          className="flex items-center gap-2 text-white text-sm mt-2 mb-4 drop-shadow-lg"
        >
          <ShieldCheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
          Calidad certificada por proveedores locales
        </motion.div>
        {/* Subtítulo animado */}
        <motion.p
          className="text-lg md:text-2xl text-white mb-8 font-medium drop-shadow-lg text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          custom={3}
        >
          Calidad premium, frescura garantizada.
        </motion.p>
        {/* Botones animados */}
        <div className="flex flex-col md:flex-row gap-4">
          <motion.a
            href="#comprar"
            className="inline-block rounded-lg px-8 py-3 text-lg font-semibold bg-[#F77F00] text-white shadow-md hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition-colors duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            custom={4}
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
            custom={5}
          >
            Ver Productos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 