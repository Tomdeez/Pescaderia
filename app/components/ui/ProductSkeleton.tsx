'use client';

const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Imagen */}
      <div className="h-48 bg-gray-200" />
      
      {/* Contenido */}
      <div className="p-4">
        {/* Título */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
        
        {/* Descripción */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        
        {/* Disponibilidad */}
        <div className="mt-4 h-5 bg-gray-200 rounded w-1/3" />
        
        {/* Botones */}
        <div className="mt-6 flex justify-between items-center">
          <div className="h-10 bg-gray-200 rounded w-1/3" />
          <div className="h-10 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;