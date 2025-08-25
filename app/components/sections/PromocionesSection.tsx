'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Array de promociones que puedes actualizar fácilmente
const promociones = [
  {
    id: 1,
    titulo: "10% de descuento",
    descripcion: "En todos los productos abonando en efectivo para compras mayores a $15.000",
    imagen: "/imagenes/10efectivo.jpeg",
    etiqueta: "EFECTIVO"
  },
  {
    id: 2,
    titulo: "20% para jubilados",
    descripcion: "Solo los jueves para compras mayores a $10.000",
    imagen: "/imagenes/20jubilados.jpeg",
    etiqueta: "JUEVES"
  },
  {
    id: 3,
    titulo: "20% en pescados de río",
    descripcion: "Promoción especial solo los martes",
    imagen: "/imagenes/20pescado rio.jpeg",
    etiqueta: "MARTES"
  },
  {
    id: 4,
    titulo: "20% en medallones",
    descripcion: "Solo los sábados en medallones de pollo o merluza",
    imagen: "/imagenes/20medallones.jpeg",
    etiqueta: "SÁBADOS"
  },
];

const PromocionesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Promociones
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promociones.map((promo, index) => (
            <motion.div
              key={promo.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 ${
                // Centrar el último elemento si está solo en la última fila
                promociones.length % 3 === 1 && index === promociones.length - 1
                  ? 'lg:col-start-2'
                  : ''
              } ${
                // Centrar el último elemento en pantallas medianas si está solo en la última fila
                promociones.length % 2 === 1 && index === promociones.length - 1
                  ? 'md:col-span-2 md:max-w-md md:mx-auto'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image 
                  src={promo.imagen}
                  alt={promo.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promo.etiqueta}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{promo.titulo}</h3>
                <p className="text-gray-700">{promo.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <motion.div
            className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-800 font-medium">
              Importante: Todas las promociones son válidas únicamente abonando en efectivo
            </p>
          </motion.div>
          
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Consultar promociones
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PromocionesSection;
