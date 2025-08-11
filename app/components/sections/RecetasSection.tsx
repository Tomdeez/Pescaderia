'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { recetas, categorias, Receta } from "@data/recetas";
import RecetaCard from "@/components/ui/RecetaCard";

const RecetasSection = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [mostrarTodas, setMostrarTodas] = useState(false);

  const recetasFiltradas = categoriaActiva === "Todas" 
    ? recetas 
    : recetas.filter(receta => receta.complexity === categoriaActiva || receta.categoria === categoriaActiva);

  // Mostrar solo 9 recetas (3 filas) cuando no se ha hecho clic en "Ver más"
  const recetasAMostrar = !mostrarTodas 
    ? recetasFiltradas.slice(0, 9) 
    : recetasFiltradas;

  const hayMasRecetas = recetasFiltradas.length > 9 && !mostrarTodas;

  const stats = {
    total: recetas.length,
    rapidas: recetas.filter(r => r.complexity === "Rápida").length,
    intermedias: recetas.filter(r => r.complexity === "Intermedia").length,
    gourmet: recetas.filter(r => r.complexity === "Gourmet").length
  };

  return (
    <section
      id="recetas"
      className="py-20 bg-white"
    >
      <div className="container-custom">
        <div className="section-title">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Recetas Simples y Saludables
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient text-center leading-title-relaxed py-2">
            Cocina Fácil y Nutritiva
          </h2>
          <p className="text-base text-center max-w-3xl mx-auto" aria-live="polite">
            Descubre recetas simples y saludables para aprovechar al máximo la frescura y calidad de nuestros productos del mar. 
            Desde opciones rápidas hasta platos gourmet para ocasiones especiales.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
          >
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm text-text-light">Recetas Totales</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg"
          >
            <div className="text-2xl font-bold text-green-600">{stats.rapidas}</div>
            <div className="text-sm text-text-light">Rápidas</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg"
          >
            <div className="text-2xl font-bold text-orange-600">{stats.intermedias}</div>
            <div className="text-sm text-text-light">Intermedias</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg"
          >
            <div className="text-2xl font-bold text-purple-600">{stats.gourmet}</div>
            <div className="text-sm text-text-light">Gourmet</div>
          </motion.div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorias.map((categoria) => (
            <motion.button
              key={categoria}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCategoriaActiva(categoria);
                setMostrarTodas(false); // Resetear cuando cambia categoría
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                categoriaActiva === categoria
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-primary hover:bg-primary/10'
              }`}
            >
              {categoria}
            </motion.button>
          ))}
        </div>

        {/* Grid de Recetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recetasAMostrar.map((receta, index) => (
            <RecetaCard key={receta.id} receta={receta} index={index} />
          ))}
        </div>

        {/* Botón Ver Más */}
        {hayMasRecetas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setMostrarTodas(true)}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              Ver Más Recetas ({recetasFiltradas.length - 9} más)
            </button>
          </motion.div>
        )}

        {/* Mensaje cuando no hay recetas */}
        {recetasFiltradas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              No hay recetas en esta categoría
            </h3>
            <p className="text-text-light">
              Prueba seleccionando otra categoría para ver más opciones.
            </p>
          </motion.div>
        )}


      </div>
    </section>
  );
};

export default RecetasSection; 