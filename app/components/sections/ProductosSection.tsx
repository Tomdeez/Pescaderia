'use client';

import { useState } from 'react';
import { CardProducto } from '@components/ui/CardProducto';

const productos = [
  {
    id: 1,
    titulo: 'Salmón Fresco Premium',
    descripcion: 'Salmón noruego de la más alta calidad, ideal para preparaciones en crudo o cocidas.',
    imagen: '/imagenes/pesfrescohielo.jpg',
    categoria: 'Pescados',
    disponibilidad: 'En Stock' as const,
  },
  {
    id: 2,
    titulo: 'Langostinos Patagónicos',
    descripcion: 'Langostinos salvajes de la Patagonia, perfectos para parrilla o preparaciones gourmet.',
    imagen: '/imagenes/langostinos.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'Bajo Pedido' as const,
  },
  {
    id: 3,
    titulo: 'Pulpo Gallego',
    descripcion: 'Pulpo certificado de las rías gallegas, textura tierna y sabor excepcional.',
    imagen: '/imagenes/picadamar.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'Temporada' as const,
  },
  {
    id: 4,
    titulo: 'Camarones Premium',
    descripcion: 'Camarones frescos seleccionados, perfectos para cócteles y entradas.',
    imagen: '/imagenes/camaron.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'En Stock' as const,
  },
];

const categorias = ['Todos', 'Pescados', 'Mariscos'];

const ProductosSection = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [carrito, setCarrito] = useState<{[id:number]: number}>({});

  const productosFiltrados = categoriaActiva === 'Todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva);

  const handleSumar = (id: number) => {
    setCarrito(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  const handleRestar = (id: number) => {
    setCarrito(prev => {
      const nuevaCantidad = (prev[id] || 0) - 1;
      if (nuevaCantidad <= 0) {
        const nuevo = { ...prev };
        delete nuevo[id];
        return nuevo;
      }
      return { ...prev, [id]: nuevaCantidad };
    });
  };

  const productosSeleccionados = productos.filter(p => carrito[p.id]);

  return (
    <section id="productos" className="py-8 md:py-14 bg-background-alt">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="section-title">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gradient text-center w-full max-w-full whitespace-normal leading-tight">Selección Premium del Mar</h2>
          <p className="text-base">
            Descubre nuestra cuidadosa selección de productos del mar, 
            donde la calidad y la frescura son nuestra prioridad.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center space-x-2 mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                categoriaActiva === categoria
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-primary/5'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="reveal">
              <CardProducto
                {...producto}
                cantidad={carrito[producto.id] || 0}
                onSumar={() => handleSumar(producto.id)}
                onRestar={() => handleRestar(producto.id)}
              />
            </div>
          ))}
        </div>

        {/* Nota de Calidad */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
            <p className="text-text-light">
              <span className="font-semibold text-primary">Nota:</span>{' '}
              Todos nuestros productos son seleccionados diariamente para garantizar 
              la máxima frescura y calidad. Los precios pueden variar según el mercado 
              y la temporada.
            </p>
          </div>
        </div>

        {/* Botón de consultar cotización */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={productosSeleccionados.length === 0}
            onClick={() => {
              // Aquí podrías abrir un modal, redirigir o mostrar un formulario de contacto
              window.location.href = '#contacto';
            }}
          >
            Consultar Cotización
          </button>
        </div>
      </div>

      {/* Script para animaciones de scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            reveals.forEach((reveal) => {
              var windowHeight = window.innerHeight;
              var elementTop = reveal.getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
              }
            });
          }
          window.addEventListener("scroll", reveal);
          reveal();
        `
      }} />
    </section>
  );
};

export default ProductosSection; 