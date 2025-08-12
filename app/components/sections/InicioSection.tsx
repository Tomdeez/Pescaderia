"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const InicioSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="presentacion"
      className="relative min-h-screen w-full overflow-hidden bg-red-600"
    >
      {/* TEST - FONDO ROJO PARA VERIFICAR CAMBIOS */}
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-6">TEST DE CAMBIOS</h1>
          <p className="text-xl mb-4">Si puedes ver este texto, los cambios están funcionando</p>
          <div className="border-4 border-red-600 p-5 inline-block">
            <p className="text-2xl font-bold">⚠️ PRUEBA ⚠️</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicioSection;