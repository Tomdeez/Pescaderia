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

        {/* CTA - Botón WhatsApp Mayorista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => {
              const phone = "+5493364562480"; // DG Congelados - Distribuidora
              const message = "Hola, quiero consultar por compras mayoristas de pescados y mariscos.";
              const cleanPhone = phone.replace(/[^\d]/g, '');
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-3 bg-[#F77F00] text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-[#e76b00] transition-colors focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Cotizar distribución mayorista por WhatsApp"
          >
            {/* Ícono de WhatsApp */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Cotizar Distribución Mayorista
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DistribuidoraSection; 