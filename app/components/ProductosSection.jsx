"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Sección Productos Premium de la landing page
export default function ProductosSection() {
  // Estado para el carrito de productos
  const [carrito, setCarrito] = useState({});

  // Datos de productos organizados por categorías
  const categorias = [
    {
      id: "pescados-frescos",
      titulo: "Pescados y Mariscos Frescos",
      descripcion: "La mejor selección de pescados y mariscos frescos del día",
      productos: [
        {
          id: 1,
          nombre: "Filet de Merluza",
          descripcion: "Filet premium de merluza fresca, perfecto para cualquier preparación",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Filet de merluza fresca"
        },
        {
          id: 2,
          nombre: "Langostinos Tigre",
          descripcion: "Langostinos frescos de excelente calidad, ideales para paella o grill",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Langostinos tigre frescos"
        },
        {
          id: 3,
          nombre: "Mejillones Gallegos",
          descripcion: "Mejillones frescos importados, perfectos para mariscadas",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Mejillones gallegos frescos"
        },
        {
          id: 4,
          nombre: "Calamar en Anillas",
          descripcion: "Anillas de calamar frescas, listas para freír o grill",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Anillas de calamar frescas"
        },
        {
          id: 5,
          nombre: "Pulpo Cocido",
          descripcion: "Pulpo cocido premium, tierno y sabroso para ensaladas",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Pulpo cocido premium"
        },
        {
          id: 6,
          nombre: "Salmón Fresco",
          descripcion: "Salmón fresco de primera calidad, rico en omega 3",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Salmón fresco premium"
        }
      ]
    },
    {
      id: "empanados",
      titulo: "Empanados y Rebozados",
      descripcion: "Productos empanados de la mejor calidad, listos para cocinar",
      productos: [
        {
          id: 7,
          nombre: "Nuggets de Merluza",
          descripcion: "Nuggets de merluza empanados, crocantes y sabrosos",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Nuggets de merluza empanados"
        },
        {
          id: 8,
          nombre: "Bastones de Merluza",
          descripcion: "Bastones de merluza empanados, ideales para acompañar",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Bastones de merluza empanados"
        },
        {
          id: 9,
          nombre: "Rabas Empanadas",
          descripcion: "Rabas empanadas premium, crocantes por fuera y tiernas por dentro",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Rabas empanadas premium"
        },
        {
          id: 10,
          nombre: "Medallones de Pescado",
          descripcion: "Medallones de pescado empanados, perfectos para sándwiches",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Medallones de pescado empanados"
        },
        {
          id: 11,
          nombre: "Filet de Pescado Empanado",
          descripcion: "Filet de pescado empanado, listo para freír o hornear",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Filet de pescado empanado"
        },
        {
          id: 12,
          nombre: "Croquetas de Mariscos",
          descripcion: "Croquetas de mariscos empanadas, cremosas y sabrosas",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Croquetas de mariscos empanadas"
        }
      ]
    },
    {
      id: "vegetales",
      titulo: "Bolsas Congeladas de Vegetales y Frutos",
      descripcion: "Vegetales y frutos congelados de la mejor calidad",
      productos: [
        {
          id: 13,
          nombre: "Mix Primavera",
          descripcion: "Mezcla de vegetales primavera congelados, coloridos y nutritivos",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Mix de vegetales primavera congelados"
        },
        {
          id: 14,
          nombre: "Arvejas Congeladas",
          descripcion: "Arvejas verdes congeladas, dulces y tiernas",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Arvejas verdes congeladas"
        },
        {
          id: 15,
          nombre: "Brócoli en Flores",
          descripcion: "Brócoli en flores congelado, rico en vitaminas y minerales",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Brócoli en flores congelado"
        },
        {
          id: 16,
          nombre: "Frutos Rojos Bolsa",
          descripcion: "Mezcla de frutos rojos congelados, perfectos para postres",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Mezcla de frutos rojos congelados"
        },
        {
          id: 17,
          nombre: "Espinaca Congelada",
          descripcion: "Espinaca congelada picada, ideal para sopas y guisos",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Espinaca congelada picada"
        },
        {
          id: 18,
          nombre: "Zanahorias Baby",
          descripcion: "Zanahorias baby congeladas, dulces y tiernas",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Zanahorias baby congeladas"
        }
      ]
    },
    {
      id: "papas",
      titulo: "Papas (McCain)",
      descripcion: "Papas congeladas de la marca McCain, la mejor calidad",
      productos: [
        {
          id: 19,
          nombre: "Papas Bastón",
          descripcion: "Papas bastón congeladas McCain, crocantes y doradas",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Papas bastón congeladas McCain"
        },
        {
          id: 20,
          nombre: "Papas Noisette",
          descripcion: "Papas noisette McCain, pequeñas y perfectas para acompañar",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Papas noisette McCain"
        },
        {
          id: 21,
          nombre: "Papas Deluxe",
          descripcion: "Papas deluxe McCain, premium y extra crocantes",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Papas deluxe McCain"
        },
        {
          id: 22,
          nombre: "Papas Rústicas",
          descripcion: "Papas rústicas McCain, con piel y sabor natural",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Papas rústicas McCain"
        },
        {
          id: 23,
          nombre: "Papas Espiral",
          descripcion: "Papas espiral McCain, divertidas y deliciosas",
          imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          alt: "Papas espiral McCain"
        },
        {
          id: 24,
          nombre: "Papas Wedges",
          descripcion: "Papas wedges McCain, en forma de cuña y extra sabrosas",
          imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=300&fit=crop",
          alt: "Papas wedges McCain"
        }
      ]
    }
  ];

  // Función para obtener todos los productos en un array plano
  const obtenerTodosLosProductos = () => {
    return categorias.flatMap(categoria => categoria.productos);
  };

  // Función para actualizar cantidad de un producto
  const actualizarCantidad = (productoId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      const nuevoCarrito = { ...carrito };
      delete nuevoCarrito[productoId];
      setCarrito(nuevoCarrito);
    } else {
      setCarrito(prev => ({
        ...prev,
        [productoId]: nuevaCantidad
      }));
    }
  };

  // Función para obtener el nombre del producto por ID
  const obtenerNombreProducto = (productoId) => {
    const producto = obtenerTodosLosProductos().find(p => p.id === productoId);
    return producto ? producto.nombre : 'Producto no encontrado';
  };

  // Función para generar mensaje de WhatsApp
  const generarMensajeWhatsApp = () => {
    const productosSeleccionados = Object.entries(carrito);
    
    if (productosSeleccionados.length === 0) {
      return "Hola! Me gustaría consultar por productos especiales";
    }

    let mensaje = "Hola, quiero solicitar una cotización:\n\n";
    
    productosSeleccionados.forEach(([productoId, cantidad]) => {
      const nombre = obtenerNombreProducto(parseInt(productoId));
      mensaje += `• ${nombre}: ${cantidad} unidad${cantidad > 1 ? 'es' : ''}\n`;
    });

    return mensaje;
  };

  // Función para abrir WhatsApp con cotización
  const abrirWhatsAppCotizacion = () => {
    const mensaje = generarMensajeWhatsApp();
    const url = `https://wa.me/5493361234567?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Obtener productos seleccionados para el resumen
  const productosSeleccionados = Object.entries(carrito).map(([productoId, cantidad]) => ({
    id: parseInt(productoId),
    nombre: obtenerNombreProducto(parseInt(productoId)),
    cantidad
  }));

  // Animaciones para las categorías
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="productos" 
      aria-label="Sección de productos destacados"
      className="w-full py-20 bg-gradient-to-br from-sky-50 to-blue-50"
    >
      {/* Contenedor principal centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-900 mb-6">
            Nuestros Productos Destacados
          </h2>
          <p className="text-lg md:text-xl text-sky-800 max-w-3xl mx-auto leading-relaxed">
            Seleccioná la mejor calidad para tu mesa o comercio. Frescura y variedad premium.
          </p>
        </motion.div>

        {/* Contenedor de categorías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {categorias.map((categoria, index) => (
            <motion.div
              key={categoria.id}
              variants={categoryVariants}
              className="space-y-8"
            >
              {/* Header de categoría */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-sky-800 mb-3">
                  {categoria.titulo}
                </h3>
                <p className="text-sky-700 text-lg max-w-2xl mx-auto">
                  {categoria.descripcion}
                </p>
              </div>

              {/* Grid de productos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoria.productos.map((producto) => (
                  <motion.div
                    key={producto.id}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Imagen del producto */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={producto.imagen}
                        alt={producto.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Overlay sutil en hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>

                    {/* Contenido de la card */}
                    <div className="p-6 space-y-4">
                      <h4 className="text-lg font-semibold text-sky-900 group-hover:text-sky-700 transition-colors">
                        {producto.nombre}
                      </h4>
                      <p className="text-sky-700 text-sm leading-relaxed">
                        {producto.descripcion}
                      </p>
                      
                      {/* Selector de cantidad */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-sky-700">Cantidad:</span>
                        <div className="flex items-center space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => actualizarCantidad(producto.id, (carrito[producto.id] || 0) - 1)}
                            className="w-8 h-8 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-full flex items-center justify-center transition-colors"
                            aria-label={`Reducir cantidad de ${producto.nombre}`}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </motion.button>
                          
                          <span className="w-8 text-center font-semibold text-sky-900">
                            {carrito[producto.id] || 0}
                          </span>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => actualizarCantidad(producto.id, (carrito[producto.id] || 0) + 1)}
                            className="w-8 h-8 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center transition-colors"
                            aria-label={`Aumentar cantidad de ${producto.nombre}`}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resumen del carrito y botón de cotización */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-sky-200"
        >
          {/* Resumen del carrito */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-sky-900 mb-4">Resumen de tu pedido</h3>
            
            {productosSeleccionados.length === 0 ? (
              <p className="text-sky-600 text-center py-4">No has seleccionado productos aún.</p>
            ) : (
              <div className="space-y-3">
                {productosSeleccionados.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-sky-100 last:border-b-0">
                    <span className="text-sky-800 font-medium">{item.nombre}</span>
                    <div className="flex items-center gap-2">
                      {/* Botón restar cantidad */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                        className="w-7 h-7 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-full flex items-center justify-center transition-colors"
                        aria-label={`Reducir cantidad de ${item.nombre}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </motion.button>
                      {/* Cantidad actual */}
                      <span className="w-8 text-center font-semibold text-sky-900">
                        {item.cantidad}
                      </span>
                      {/* Botón sumar cantidad */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                        className="w-7 h-7 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label={`Aumentar cantidad de ${item.nombre}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </motion.button>
                      {/* Etiqueta de unidades */}
                      <span className="text-sky-600 font-semibold ml-2 text-sm hidden sm:inline-block">
                        unidad{item.cantidad > 1 ? 'es' : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botón de cotización por WhatsApp */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={abrirWhatsAppCotizacion}
              disabled={productosSeleccionados.length === 0}
              className={`font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-3 text-lg ${
                productosSeleccionados.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-sky-600 hover:bg-sky-700 text-white shadow-lg hover:shadow-xl'
              }`}
              aria-label="Solicitar cotización por WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Solicitar Cotización por WhatsApp
            </motion.button>
            
            <p className="text-sky-700 text-sm mt-4 max-w-md mx-auto">
              Los precios se cotizan por WhatsApp ya que varían frecuentemente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 