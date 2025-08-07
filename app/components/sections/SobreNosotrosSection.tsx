'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { beneficios } from "@data/beneficios";

const EASING = [0.4, 0, 0.2, 1] as const;

const SobreNosotrosSection = () => {
  return (
    <section
      id="sobre-nosotros"
      aria-label="Sobre Nosotros - Conoce nuestra historia y valores"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-sky-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASING }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Nuestra Historia y Compromiso
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-3xl mx-auto text-center">
          Desde hace más de 15 años, Estrellita de Mar se ha convertido en la pescadería de confianza para familias y comercios en San Nicolás. Ofrecemos productos del mar de la más alta calidad.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASING }}
            className="order-2 md:order-1"
          >
            <Image
              src="/imagenes/pesmuestrafresco.jpg"
              alt="Pescados frescos en nuestra pescadería"
              width={500}
              height={400}
              className="w-full h-80 object-cover rounded-2xl shadow-lg border border-sky-100"
              priority={false}
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASING, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-[#003049] mb-3">
                  🎯 Nuestra Misión
                </h3>
                <p className="text-slate-700">
                  Acercar los mejores productos del mar a tu mesa, garantizando frescura, calidad y un servicio personalizado que supere tus expectativas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-[#003049] mb-3">
                  ⭐ Nuestros Valores
                </h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• <strong>Calidad:</strong> Selección cuidadosa de proveedores</li>
                  <li>• <strong>Frescura:</strong> Productos del día, todos los días</li>
                  <li>• <strong>Confianza:</strong> Transparencia en cada transacción</li>
                  <li>• <strong>Servicio:</strong> Atención personalizada y profesional</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASING, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#003049] mb-8 text-center">
            ¿Por qué elegir Estrellita de Mar?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: EASING, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{beneficio.icono}</div>
                <h4 className="font-bold text-[#003049] mb-2">{beneficio.titulo}</h4>
                <p className="text-sm text-slate-600">{beneficio.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SobreNosotrosSection; 