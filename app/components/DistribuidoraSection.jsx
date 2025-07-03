"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Sección Distribuidora premium para la landing
export default function DistribuidoraSection() {
  // Beneficios de la distribuidora
  const beneficios = [
    {
      icono: (
        <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1V8h-1m-4 0h-1v4H7m4 0h-1v4h-1" /></svg>
      ),
      titulo: "Logística Eficiente",
      descripcion: "Entregas puntuales y programadas para tu negocio."
    },
    {
      icono: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
      ),
      titulo: "Calidad Garantizada",
      descripcion: "Cadena de frío controlada y productos premium."
    },
    {
      icono: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h2l1 2h13l1-2h2M5 10V6a2 2 0 012-2h10a2 2 0 012 2v4" /></svg>
      ),
      titulo: "Cobertura Regional",
      descripcion: "Distribución a comercios y restaurantes de la zona."
    }
  ];

  return (
    <section id="distribuidora" aria-label="Sección de distribución y logística" className="w-full py-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen ilustrativa */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/imagenes/pesmuestrafresco.jpg"
            alt="Camión refrigerado de la distribuidora DG Congelados entregando productos frescos"
            width={520}
            height={380}
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md h-auto border-4 border-white"
            priority
          />
        </motion.div>

        {/* Contenido textual y beneficios */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          {/* Título principal SEO */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-sky-900 mb-4">
            Distribuidora DG Congelados - Logística y Frescura Garantizada
          </h2>
          {/* Subtítulo */}
          <p className="text-lg text-sky-800 mb-3">
            Abastecemos comercios y restaurantes con pescados y mariscos congelados premium.
          </p>
          {/* Descripción detallada */}
          <p className="text-base text-sky-700 mb-6 max-w-xl">
            Contamos con vehículos refrigerados propios, logística eficiente y entregas programadas para asegurar la frescura y calidad de cada producto. Nuestro equipo está preparado para abastecer a tu comercio o restaurante con la mejor atención y puntualidad.
          </p>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {beneficios.map((b, i) => (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-white/80 rounded-xl p-5 shadow-md h-full"
              >
                {b.icono}
                <span className="mt-3 font-semibold text-sky-900 text-base">{b.titulo}</span>
                <span className="text-sky-700 text-sm mt-1">{b.descripcion}</span>
              </motion.div>
            ))}
          </div>

          {/* Botón CTA */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            aria-label="Solicitar distribución o contacto por WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Solicitar Distribución
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 