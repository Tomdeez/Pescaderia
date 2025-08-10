'use client';

import { useState, useEffect } from 'react';
import { CardProducto } from '@components/ui/CardProducto';
import ProductSkeleton from '@components/ui/ProductSkeleton';
import { productos } from '@data/productos';
import { useCarritoValidation } from '@hooks/useCarritoValidation';
import { useWhatsapp } from '@hooks/useWhatsapp';

const ProductosSection = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [carrito, setCarrito] = useState<{[id:number]: number}>({});
  const [isLoading, setIsLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const INCREMENTO_LISTA = 6; // 3 filas en md (2 col) => 6 ítems
  const [cantidadVisible, setCantidadVisible] = useState(INCREMENTO_LISTA);
  
  // Validación del carrito
  const { hasErrors, messages } = useCarritoValidation({ carrito, productos });
  
  // Simular carga de productos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Generar categorías dinámicamente
  const categorias = ['Todos', ...new Set(productos.map(p => p.categoria))];

  // Filtro por categoría y búsqueda (intuitivo y tolerante a mayúsculas/acentos simples)
  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

  const criterio = normalizar(busqueda);

  const productosPorCategoria = categoriaActiva === 'Todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva);

  const productosFiltrados = criterio
    ? productosPorCategoria.filter(p =>
        normalizar(p.titulo).includes(criterio) ||
        normalizar(p.descripcion).includes(criterio) ||
        normalizar(p.categoria).includes(criterio)
      )
    : productosPorCategoria;

  const productosParaMostrar = productosFiltrados.slice(0, cantidadVisible);

  // Resetear paginación al cambiar categoría o búsqueda
  useEffect(() => {
    setCantidadVisible(INCREMENTO_LISTA);
  }, [categoriaActiva, busqueda]);

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

  const { sendWhatsAppMessage } = useWhatsapp();

  const handleSolicitarCotizacion = () => {
    const phone = '+5493364010667'; // Número de teléfono de la pescadería
    const productosMensaje = productosSeleccionados.map(p => `${p.titulo} - Cantidad: ${carrito[p.id]}`).join('\n');
    const mensaje = `Hola, me gustaría cotizar los siguientes productos:\n${productosMensaje}`;
    sendWhatsAppMessage(phone, mensaje);
  };

  return (
    <section id="productos" className="py-8 md:py-14 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Encabezado con instrucciones claras */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-700 mb-6">
            Explore nuestra selección de productos frescos. Para hacer su pedido:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-base text-gray-600">
            <div className="flex items-center gap-2">
              <span className="bg-sky-100 rounded-full w-8 h-8 flex items-center justify-center text-sky-700 font-semibold">1</span>
              <span>Elija una categoría</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-sky-100 rounded-full w-8 h-8 flex items-center justify-center text-sky-700 font-semibold">2</span>
              <span>Seleccione cantidad</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-sky-100 rounded-full w-8 h-8 flex items-center justify-center text-sky-700 font-semibold">3</span>
              <span>Solicite cotización</span>
            </div>
          </div>
        </div>

          {/* Buscador accesible */}
          <div className="max-w-2xl mx-auto mb-6">
            <label htmlFor="buscador-productos" className="sr-only">Buscar productos</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.3-4.3"></path>
                </svg>
              </span>
              <input
                id="buscador-productos"
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre, categoría o descripción"
                aria-label="Buscar productos"
                className="w-full pl-10 pr-24 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-gray-800"
              />
              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700"
                  aria-label="Limpiar búsqueda"
                >
                  Limpiar
                </button>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-600 text-center">
              {productosFiltrados.length} resultado{productosFiltrados.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Filtros simplificados */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                categoriaActiva === categoria
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Productos y Resumen de Pedido */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Lista de Productos */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? (
              // Mostrar esqueletos durante la carga
              Array.from({ length: 4 }).map((_, index) => (
                <div key={`skeleton-${index}`}>
                  <ProductSkeleton />
                </div>
              ))
            ) : productosFiltrados.length === 0 ? (
              <div className="md:col-span-2 text-center py-10">
                <p className="text-gray-500">No se encontraron productos para su búsqueda.</p>
              </div>
            ) : (
              // Mostrar productos una vez cargados
              <>
                {productosParaMostrar.map((producto) => (
                  <div key={producto.id}>
                    <CardProducto
                      {...producto}
                      cantidad={carrito[producto.id] || 0}
                      onSumar={() => handleSumar(producto.id)}
                      onRestar={() => handleRestar(producto.id)}
                    />
                  </div>
                ))}
                {productosFiltrados.length > cantidadVisible && (
                  <div className="md:col-span-2 flex justify-center mt-2">
                    <button
                      type="button"
                      onClick={() => setCantidadVisible(prev => prev + INCREMENTO_LISTA)}
                      className="px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium border border-gray-300"
                    >
                      Ver más
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Panel de Resumen y Cotización */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen del Pedido</h3>
              
              {productosSeleccionados.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500">No ha seleccionado ningún producto</p>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {productosSeleccionados.map(producto => (
                    <div key={producto.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium text-gray-900">{producto.titulo}</p>
                        <p className="text-sm text-gray-500">Cantidad: {carrito[producto.id]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {/* Mensajes de error */}
                {hasErrors && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <ul className="list-disc list-inside space-y-1">
                      {messages.map((message, index) => (
                        <li key={index} className="text-sm text-red-600">{message}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Botón de cotización */}
                <button
                  onClick={handleSolicitarCotizacion}
                  disabled={productosSeleccionados.length === 0 || hasErrors}
                  className="w-full bg-sky-600 text-white py-4 px-6 rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {productosSeleccionados.length === 0 ? (
                    'Seleccione productos'
                  ) : hasErrors ? (
                    'Revise los errores'
                  ) : (
                    <>
                      Solicitar Cotización
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Nota informativa */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Nota:</span> Los precios se cotizarán según disponibilidad y mercado. Nos contactaremos con usted para confirmar su pedido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosSection; 