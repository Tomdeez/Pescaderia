'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Receta } from "@data/recetas";

interface RecetaCardProps {
  receta: Receta;
  index: number;
}

const RecetaCard = ({ receta, index }: RecetaCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderStars = (dificultad: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < dificultad ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-premium cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{receta.emoji}</div>
        <div className="flex items-center space-x-1 text-sm">
          {renderStars(receta.dificultad)}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-3">
        {receta.titulo}
      </h3>
      
      <p className="text-text-light mb-4">
        {receta.descripcion}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
          {receta.complexity}
        </span>
        <div className="flex items-center space-x-2 text-sm text-text-light">
          <span>⏱️ {receta.tiempo}</span>
          {receta.calorias && <span>🔥 {receta.calorias}</span>}
        </div>
      </div>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t pt-4 mt-4"
        >
          <div className="mb-4">
            <h4 className="font-semibold text-primary mb-2">Ingredientes:</h4>
            <ul className="text-sm text-text-light space-y-1">
              {receta.ingredientes.map((ingrediente, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {ingrediente}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2">Instrucciones:</h4>
            <ol className="text-sm text-text-light space-y-2">
              {receta.instrucciones.map((instruccion, idx) => (
                <li key={idx} className="flex">
                  <span className="font-bold text-accent mr-2 min-w-[20px]">
                    {idx + 1}.
                  </span>
                  {instruccion}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      )}
      
      <div className="mt-4 text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(!showDetails);
          }}
          className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
        >
          {showDetails ? "Ver menos" : "Ver receta completa"}
        </button>
      </div>
    </motion.div>
  );
};

export default RecetaCard; 