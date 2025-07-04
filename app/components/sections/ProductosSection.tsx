"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "5491122334455"; // Reemplaza por el número real

interface Categoria {
  id: string;
  label: string;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  peso: string;
  imagen: string;
  alt: string;
}

// Categorías disponibles
const CATEGORIAS: Categoria[] = [
  { id: "todos", label: "Todos" },
  { id: "frescos", label: "Frescos" },
  { id: "empanados", label: "Empanados" },
  { id: "congelados", label: "Congelados" },
];

// Datos de ejemplo de productos
const PRODUCTOS: Producto[] = [
  // Frescos
  {
    id: 1,
    nombre: "Filet de Merluza",
    descripcion: "Filet fresco de merluza listo para cocinar.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "/imagenes/pesfrescohielo.jpg",
    alt: "Filet de merluza fresco"
  },
  {
    id: 2,
    nombre: "Tubo de Calamar",
    descripcion: "Tubos de calamar limpios y frescos.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "/imagenes/camaron.jpg",
    alt: "Tubos de calamar frescos"
  },
  {
    id: 3,
    nombre: "Anillas de Calamar",
    descripcion: "Anillas de calamar fresco listas para cocinar.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "/imagenes/langostinos.jpg",
    alt: "Anillas de calamar frescas"
  },
  {
    id: 4,
    nombre: "Langostinos Pelados",
    descripcion: "Langostinos pelados premium.",
    categoria: "frescos",
    peso: "500g",
    imagen: "/imagenes/marifrescos.jpg",
    alt: "Langostinos pelados frescos"
  },
  // Empanados
  {
    id: 5,
    nombre: "Anillas de Calamar Rebozadas",
    descripcion: "Anillas de calamar empanadas listas para freír.",
    categoria: "empanados",
    peso: "500g",
    imagen: "/imagenes/pesmuestrafresco.jpg",
    alt: "Anillas de calamar rebozadas"
  },
  {
    id: 6,
    nombre: "Langostino Rebozado",
    descripcion: "Langostinos rebozados crocantes.",
    categoria: "empanados",
    peso: "500g",
    imagen: "/imagenes/picadamar.jpg",
    alt: "Langostinos rebozados"
  },
  // Congelados
  {
    id: 7,
    nombre: "Frutos Rojos Congelados",
    descripcion: "Mezcla de frutos rojos congelados.",
    categoria: "congelados",
    peso: "500g",
    imagen: "/imagenes/pesfrescohielo.jpg",
    alt: "Frutos rojos congelados"
  },
  {
    id: 8,
    nombre: "Cebolla Congelada",
    descripcion: "Cebolla trozada congelada lista para cocinar.",
    categoria: "congelados",
    peso: "500g",
    imagen: "/imagenes/camaron.jpg",
    alt: "Cebolla congelada"
  }
];

export const ProductosSection: React.FC = () => {
  // Estado para la cantidad seleccionada por producto
  const [cantidades, setCantidades] = useState<Record<number, number>>({});
  // Estado de categoría activa
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  // Filtrar productos por categoría
  const productosFiltrados = categoriaActiva === "todos" 
    ? PRODUCTOS 
    : PRODUCTOS.filter(prod => prod.categoria === categoriaActiva);

  // Debug: verificar que el componente se ejecuta
  console.log("ProductosSection renderizado", {
    categoriaActiva,
    productosFiltradosLength: productosFiltrados.length,
    productosFiltrados
  });

  // Manejar cambio de cantidad
  const handleCantidad = (prodId: number, delta: number) => {
    setCantidades(prev => ({
      ...prev,
      [prodId]: Math.max(0, (prev[prodId] || 0) + delta)
    }));
  };

  // Generar mensaje de WhatsApp
  const generarMensaje = (): string => {
    const productosSeleccionados = Object.entries(cantidades)
      .filter(([_, cantidad]) => cantidad > 0)
      .map(([prodId, cantidad]) => {
        const producto = PRODUCTOS.find(p => p.id === parseInt(prodId));
        return `${producto?.nombre} x${cantidad}`;
      });

    if (productosSeleccionados.length === 0) {
      return "Hola, me gustaría consultar sobre sus productos.";
    }

    return `Hola, me gustaría solicitar cotización para:\n${productosSeleccionados.join('\n')}`;
  };

  // Solicitar cotización
  const solicitarCotizacion = () => {
    const mensaje = generarMensaje();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Nuestros Productos
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto text-center">
          Seleccionamos personalmente cada producto para garantizar frescura y calidad premium. Consultanos por disponibilidad y precios.
        </p>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIAS.map((categoria) => (
            <motion.button
              key={categoria.id}
              onClick={() => setCategoriaActiva(categoria.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 ${
                categoriaActiva === categoria.id
                  ? "bg-[#F77F00] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoria.label}
            </motion.button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={producto.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen eliminada temporalmente para mejorar la carga */}
              <div className="relative h-48 flex items-center justify-center bg-gray-100">
                {/* Aquí irá la imagen cuando se agreguen las oficiales */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003049] mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{producto.peso}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCantidad(producto.id, -1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00]"
                      disabled={!cantidades[producto.id]}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {cantidades[producto.id] || 0}
                    </span>
                    <button
                      onClick={() => handleCantidad(producto.id, 1)}
                      className="w-8 h-8 rounded-full bg-[#F77F00] hover:bg-[#e76b00] text-white flex items-center justify-center focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de cotización */}
        <div className="text-center">
          <motion.button
            onClick={solicitarCotizacion}
            className="inline-flex items-center gap-2 bg-[#F77F00] hover:bg-[#e76b00] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Solicitar Cotización
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductosSection; 