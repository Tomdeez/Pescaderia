
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "5491122334455"; // Reemplaza por el número real

// Categorías disponibles
const CATEGORIAS = [
  { id: "todos", label: "Todos" },
  { id: "frescos", label: "Frescos" },
  { id: "empanados", label: "Empanados" },
  { id: "congelados", label: "Congelados" },
];

// Datos de ejemplo de productos
const PRODUCTOS = [
  // Frescos
  {
    id: 1,
    nombre: "Filet de Merluza",
    descripcion: "Filet fresco de merluza listo para cocinar.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    alt: "Filet de merluza fresco"
  },
  {
    id: 2,
    nombre: "Tubo de Calamar",
    descripcion: "Tubos de calamar limpios y frescos.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Tubos de calamar frescos"
  },
  {
    id: 3,
    nombre: "Anillas de Calamar",
    descripcion: "Anillas de calamar fresco listas para cocinar.",
    categoria: "frescos",
    peso: "1kg",
    imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=600&q=80",
    alt: "Anillas de calamar frescas"
  },
  {
    id: 4,
    nombre: "Langostinos Pelados",
    descripcion: "Langostinos pelados premium.",
    categoria: "frescos",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    alt: "Langostinos pelados frescos"
  },

  // Empanados
  {
    id: 5,
    nombre: "Anillas de Calamar Rebozadas",
    descripcion: "Anillas de calamar empanadas listas para freír.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Anillas de calamar rebozadas"
  },
  {
    id: 6,
    nombre: "Langostino Rebozado",
    descripcion: "Langostinos rebozados crocantes.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    alt: "Langostinos rebozados"
  },
  {
    id: 7,
    nombre: "Milanesas de Merluza",
    descripcion: "Milanesas listas para hornear o freír.",
    categoria: "empanados",
    peso: "6 unidades",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Milanesas de merluza"
  },
  {
    id: 8,
    nombre: "Medallones de Merluza",
    descripcion: "Medallones prácticos y sabrosos.",
    categoria: "empanados",
    peso: "4 unidades",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Medallones de merluza"
  },
  {
    id: 9,
    nombre: "Croquetas",
    descripcion: "Croquetas crocantes listas para freír.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    alt: "Croquetas empanadas"
  },
  {
    id: 10,
    nombre: "Patitas de Pollo",
    descripcion: "Patitas de pollo listas para cocinar.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Patitas de pollo empanadas"
  },
  {
    id: 11,
    nombre: "Bastones de Mozzarella",
    descripcion: "Bastones de mozzarella crocantes.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Bastones de mozzarella empanados"
  },
  {
    id: 12,
    nombre: "Bastones Caprese",
    descripcion: "Bastones sabor caprese listos para cocinar.",
    categoria: "empanados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Bastones caprese empanados"
  },
  {
    id: 13,
    nombre: "Milanesa de Soja",
    descripcion: "Milanesas vegetarianas de soja.",
    categoria: "empanados",
    peso: "6 unidades",
    imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Milanesas de soja"
  },

  // Congelados
  {
    id: 14,
    nombre: "Frutos Rojos Congelados",
    descripcion: "Mezcla de frutos rojos congelados.",
    categoria: "congelados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Frutos rojos congelados"
  },
  {
    id: 15,
    nombre: "Cebolla Congelada",
    descripcion: "Cebolla trozada congelada lista para cocinar.",
    categoria: "congelados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    alt: "Cebolla congelada"
  },
  {
    id: 16,
    nombre: "Espinaca Congelada",
    descripcion: "Espinaca congelada lista para usar.",
    categoria: "congelados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=600&q=80",
    alt: "Espinaca congelada"
  },
  {
    id: 17,
    nombre: "Primavera Congelada",
    descripcion: "Mix primavera congelado.",
    categoria: "congelados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Mix primavera congelado"
  },
  {
    id: 18,
    nombre: "Kani Kama",
    descripcion: "Kani kama congelado.",
    categoria: "congelados",
    peso: "500g",
    imagen: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    alt: "Kani kama congelado"
  }
];

export default function ProductosSection() {
  // Estado para la cantidad seleccionada por producto
  const [cantidades, setCantidades] = useState({});
  // Estado de categoría activa
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  // Variantes para animación de cards
  const fadeUpCard = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
    }),
  };

  // Manejar incremento y decremento de cantidad
  const handleCantidad = (prodId, delta) => {
    setCantidades((prev) => {
      const nuevaCantidad = Math.max(0, (prev[prodId] || 0) + delta);
      return { ...prev, [prodId]: nuevaCantidad };
    });
  };

  // Filtrar productos según la categoría activa
  const productosFiltrados =
    categoriaActiva === "todos"
      ? PRODUCTOS
      : PRODUCTOS.filter((prod) => prod.categoria === categoriaActiva);

  // Obtener productos seleccionados
  const productosSeleccionados = [];
  PRODUCTOS.forEach((prod) => {
    const cantidad = cantidades[prod.id] || 0;
    if (cantidad > 0) {
      productosSeleccionados.push({ nombre: prod.nombre, cantidad });
    }
  });

  // Generar mensaje de WhatsApp
  const generarMensaje = () => {
    if (productosSeleccionados.length === 0) return "";
    let mensaje = "Hola, quiero solicitar cotización por estos productos:%0A";
    productosSeleccionados.forEach((item) => {
      mensaje += `- ${item.nombre}: ${item.cantidad} unidad${item.cantidad > 1 ? "es" : ""}%0A`;
    });
    return mensaje;
  };

  // Abrir WhatsApp con el mensaje generado
  const solicitarCotizacion = () => {
    const mensaje = generarMensaje();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  return (
    <section id="productos" className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-[#F1F1F1]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
          Nuestros Productos
        </h2>
        <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl mx-auto text-center">
          Descubrí la mejor selección de pescados, mariscos y productos congelados premium, listos para tu mesa o negocio.
        </p>
        {/* Botones de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoriaActiva(cat.id)}
              className={`px-5 py-2 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 ${
                categoriaActiva === cat.id
                  ? "bg-[#F77F00] text-white shadow"
                  : "bg-white text-[#003049] hover:bg-[#F1F1F1]"
              }`}
              aria-pressed={categoriaActiva === cat.id}
              tabIndex={0}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Grid de productos filtrados */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {productosFiltrados.map((prod, i) => (
              <motion.div
                key={prod.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group border border-gray-100"
                custom={i}
                variants={fadeUpCard}
                initial="hidden"
                animate="visible"
                exit="hidden"
                tabIndex={0}
                layout
              >
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <Image
                    src={prod.imagen}
                    alt={prod.alt}
                    width={400}
                    height={224}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={i === 0}
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-lg md:text-xl font-semibold text-[#003049] mb-1 tracking-tight">
                    {prod.nombre}
                  </h4>
                  <p className="text-gray-600 text-base flex-1 mb-1">{prod.descripcion}</p>
                  <span className="text-sm text-slate-500 mb-2">{prod.peso}</span>
                  {/* Contador de cantidad */}
                  <div className="flex items-center gap-2 mt-2 mb-3">
                    <button
                      type="button"
                      aria-label={`Quitar una unidad de ${prod.nombre}`}
                      className="w-8 h-8 rounded-full bg-[#F1F1F1] text-[#003049] font-bold text-xl flex items-center justify-center border border-gray-200 hover:bg-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2 transition"
                      onClick={() => handleCantidad(prod.id, -1)}
                      tabIndex={0}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold text-[#003049] text-lg select-none">
                      {cantidades[prod.id] || 0}
                    </span>
                    <button
                      type="button"
                      aria-label={`Agregar una unidad de ${prod.nombre}`}
                      className="w-8 h-8 rounded-full bg-[#F1F1F1] text-[#003049] font-bold text-xl flex items-center justify-center border border-gray-200 hover:bg-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2 transition"
                      onClick={() => handleCantidad(prod.id, 1)}
                      tabIndex={0}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="mt-auto rounded-lg px-5 py-2 text-base font-semibold bg-[#F77F00] text-white shadow-md hover:bg-[#e76b00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition"
                    tabIndex={0}
                  >
                    Consultar
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Botón destacado para solicitar cotización */}
        <div className="flex justify-center">
          <button
            className="inline-block mt-8 rounded-lg px-8 py-3 text-lg font-semibold bg-[#003049] text-white shadow hover:bg-[#00233a] focus:outline-none focus:ring-2 focus:ring-[#003049] focus:ring-offset-2 transition"
            disabled={productosSeleccionados.length === 0}
            onClick={solicitarCotizacion}
            tabIndex={0}
            aria-disabled={productosSeleccionados.length === 0}
          >
            Solicitar Cotización
          </button>
        </div>
      </motion.div>
    </section>
  );
} 