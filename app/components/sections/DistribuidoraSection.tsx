'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const DistribuidoraSection = () => {
  return (
    <section
      id="distribuidora"
      aria-label="Servicios de Distribución - Estrellita de Mar"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gradient-to-br from-sky-50 to-emerald-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Servicios de Distribución
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto text-center">
          Llegamos a tu negocio o domicilio con la frescura y calidad que mereces. Distribución eficiente en San Nicolás y alrededores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1: Delivery a domicilio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#003049] mb-3 text-center">Delivery a Domicilio</h3>
            <p className="text-gray-600 text-center">
              Llevamos nuestros productos frescos directamente a tu puerta. Pedidos mínimos y horarios flexibles para tu comodidad.
            </p>
          </motion.div>

          {/* Servicio 2: Distribución a comercios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#003049] mb-3 text-center">Distribución a Comercios</h3>
            <p className="text-gray-600 text-center">
              Abastecemos restaurantes, pescaderías y comercios con productos de calidad premium. Pedidos programados y atención personalizada.
            </p>
          </motion.div>

          {/* Servicio 3: Atención personalizada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-[#F77F00] rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#003049] mb-3 text-center">Atención Personalizada</h3>
            <p className="text-gray-600 text-center">
              Asesoramiento especializado para cada cliente. Te ayudamos a elegir los mejores productos según tus necesidades.
            </p>
          </motion.div>
        </div>

        {/* Imagen decorativa */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Image
            src="/imagenes/dg logo.jpg"
            alt="Logo Estrellita de Mar - Distribución y calidad"
            width={300}
            height={200}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#F77F00] hover:bg-[#e76b00] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Consultar Distribución
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DistribuidoraSection; 