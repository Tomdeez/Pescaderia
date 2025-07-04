import React from "react";
import Image from "next/image";

interface CardProductoProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  precio?: string;
  onClick?: () => void;
  className?: string;
}

export const CardProducto: React.FC<CardProductoProps> = ({
  titulo,
  descripcion,
  imagen,
  precio,
  onClick,
  className = ""
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#003049] mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        {precio && (
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-[#F77F00]">{precio}</span>
            <button className="px-4 py-2 bg-[#F77F00] text-white rounded-lg hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition-colors duration-200">
              Ver más
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProducto; 