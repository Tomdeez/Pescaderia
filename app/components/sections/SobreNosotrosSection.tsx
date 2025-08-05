'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const EASING = [0.4, 0, 0.2, 1] as const;

const RecetasSection = () => {
  const recetas = [
    {
      titulo: "Pescado a la Plancha Express",
      descripcion: "En solo 15 minutos, disfruta de un filete de pescado dorado y jugoso. Condimentado con ajo, perejil y limón para una comida saludable y deliciosa.",
      emoji: "⚡",
      complexity: "Rápida"
    },
    {
      titulo: "Salmón al Horno con Verduras",
      descripcion: "Una receta completa y nutritiva que combina salmón fresco con vegetales de temporada. Perfecta para una cena familiar balanceada.",
      emoji: "🍽️",
      complexity: "Intermedia"
    },
    {
      titulo: "Ceviche Gourmet de Langostinos",
      descripcion: "Una experiencia gastronómica única con langostinos frescos, marinados en jugos cítricos y acompañados de especias aromáticas.",
      emoji: "👨‍🍳",
      complexity: "Gourmet"
    }
  ];

  return (
    <section
      id="recetas"
      aria-label="Recetas - Incorpora más pescado a tu dieta"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASING }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Sabor, Salud y Simplicidad en Cada Plato
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto text-center">
          Descubre cómo el pescado puede transformar tu alimentación. Rico en omega-3, proteínas de alto valor y más fácil de digerir que las carnes tradicionales. ¡Prepara platos deliciosos en minutos!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Imagen decorativa a la izquierda (arriba en mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASING }}
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          >
            <Image
              src="/imagenes/peslimon.jpg"
              alt="Delicioso plato de pescado preparado con limón y especias"
              width={400}
              height={256}
              className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg border border-sky-100"
              priority={false}
            />
          </motion.div>
          {/* Lista de recetas a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASING, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-1 rounded-full mb-6 text-sm shadow">Recetas recomendadas</span>
            
            <div className="space-y-6 w-full">
              {recetas.map((receta, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: EASING, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-slate-50 to-sky-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-1">{receta.emoji}</span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#003049]">{receta.titulo}</h3>
                        <span className="text-xs font-medium text-[#F77F00] bg-orange-100 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start sm:self-auto">
                          {receta.complexity}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {receta.descripcion}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#productos"
              className="inline-block mt-6 rounded-lg px-8 py-3 text-lg font-semibold bg-[#F77F00] text-white shadow-md hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              tabIndex={0}
            >
              Ver todos los productos
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RecetasSection; 