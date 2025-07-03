"use client";
import { motion } from "framer-motion";

// Sección Sobre Nosotros de la landing page premium
export default function SobreNosotrosSection() {
  return (
    <section
      id="sobre-nosotros"
      aria-label="Sobre Nosotros - Compromiso y Frescura"
      className="relative w-full py-20 bg-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* Imagen decorativa a la izquierda (arriba en mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        >
          <img
            src="/imagenes/peslimon.jpg"
            alt="Filete de pescado fresco con rodajas de limón"
            className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg border border-sky-100"
            loading="lazy"
          />
        </motion.div>
        {/* Bloque de texto a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Badge de confianza */}
          <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-1 rounded-full mb-4 text-sm shadow">20+ años de trayectoria</span>
          {/* Título principal SEO */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4">Sobre Nosotros - Compromiso y Frescura</h2>
          {/* Párrafo principal */}
          <p className="text-lg text-sky-800 mb-4">
            En <span className="font-bold text-sky-900">Estrellita de Mar</span> somos una empresa familiar con más de dos décadas dedicadas a la excelencia en pescados y mariscos frescos. Nuestra historia comenzó en San Nicolás, impulsados por la pasión por el mar y el compromiso de llevar productos de calidad a cada hogar y comercio de la región. Seleccionamos personalmente cada pieza, garantizando frescura diaria y un trato cercano con nuestros clientes.
          </p>
          {/* Segundo párrafo opcional */}
          <p className="text-base text-gray-700 mb-2">
            Nos especializamos en atención personalizada, asesorando a familias, restaurantes y comercios para que siempre reciban lo mejor del mar. Nuestra distribución eficiente y la confianza de nuestros clientes nos avalan año tras año.
          </p>
        </motion.div>
      </div>
      {/* Onda decorativa sutil en el fondo (opcional) */}
      <svg className="absolute bottom-0 left-0 w-full h-12 md:h-16 text-sky-100" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
} 