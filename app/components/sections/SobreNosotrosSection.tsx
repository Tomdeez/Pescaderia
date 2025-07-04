"use client";
import { motion } from "framer-motion";

export const SobreNosotrosSection: React.FC = () => {
  return (
    <section
      id="sobre-nosotros"
      aria-label="Sobre Nosotros - Compromiso y Frescura"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Sobre Nosotros
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto text-center">
          Más de 20 años de trayectoria familiar dedicados a la excelencia en pescados y mariscos frescos. Seleccionamos personalmente cada pieza para garantizar frescura y calidad premium en cada entrega.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
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
            <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-1 rounded-full mb-4 text-sm shadow">20+ años de trayectoria</span>
            <p className="text-lg text-slate-800 mb-4">
              En <span className="font-bold text-[#003049]">Estrellita de Mar</span> somos una empresa familiar con más de dos décadas dedicadas a la excelencia en pescados y mariscos frescos. Nuestra historia comenzó en San Nicolás, impulsados por la pasión por el mar y el compromiso de llevar productos de calidad a cada hogar y comercio de la región. Seleccionamos personalmente cada pieza, garantizando frescura diaria y un trato cercano con nuestros clientes.
            </p>
            <p className="text-base text-gray-700 mb-2">
              Nos especializamos en atención personalizada, asesorando a familias, restaurantes y comercios para que siempre reciban lo mejor del mar. Nuestra distribución eficiente y la confianza de nuestros clientes nos avalan año tras año.
            </p>
            <motion.a
              href="#productos"
              className="inline-block mt-4 rounded-lg px-8 py-3 text-lg font-semibold bg-[#F77F00] text-white shadow-md hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              tabIndex={0}
            >
              Ver Productos
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreNosotrosSection; 