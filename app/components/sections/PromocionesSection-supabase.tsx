'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { supabase } from '../../../utils/supabaseClient';

interface Promocion {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  activa: boolean;
  etiqueta?: string; // Opcional para mantener compatibilidad con las promociones anteriores
  fecha_inicio?: string;
  fecha_fin?: string;
}

const PromocionesSection = () => {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function cargarPromociones() {
      try {
        setLoading(true);
        
        // Intentamos primero con un timeout para evitar problemas de conexión
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('La conexión ha expirado')), 10000)
        );
        
        const fetchPromise = supabase
          .from('promociones')
          .select('*')
          .eq('activa', true)
          .order('id');
          
        // Competimos entre el timeout y la petición
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        
        if (!isMounted) return;
        
        // Verificamos si hay errores
        if (response.error) {
          console.error('Error cargando promociones:', response.error);
          setError('No se pudieron cargar las promociones. Intenta recargar la página.');
          setLoading(false);
          return;
        }
        
        // Si todo salió bien, actualizamos el estado
        setPromociones(response.data || []);
        setLoading(false);
      } catch (err) {
        if (!isMounted) return;
        
        console.error('Error inesperado:', err);
        
        // Si falló la conexión, intentamos cargar las promociones locales como fallback
        const promocionesLocales = [
          {
            id: 1,
            titulo: "10% de descuento",
            descripcion: "En todos los productos abonando en efectivo para compras mayores a $15.000",
            imagen: "/imagenes/10efectivo.jpeg",
            etiqueta: "EFECTIVO",
            activa: true
          },
          {
            id: 2,
            titulo: "20% para jubilados",
            descripcion: "Solo los jueves para compras mayores a $10.000",
            imagen: "/imagenes/20jubilados.jpeg",
            etiqueta: "JUEVES",
            activa: true
          },
          {
            id: 3,
            titulo: "20% en pescados de río",
            descripcion: "Promoción especial solo los martes",
            imagen: "/imagenes/20pescado rio.jpeg",
            etiqueta: "MARTES",
            activa: true
          },
          {
            id: 4,
            titulo: "20% en medallones",
            descripcion: "Solo los sábados en medallones de pollo o merluza",
            imagen: "/imagenes/20medallones.jpeg",
            etiqueta: "SÁBADOS",
            activa: true
          },
        ];
        
        setPromociones(promocionesLocales);
        setError(null); // Quitamos el error ya que usamos datos de respaldo
        setLoading(false);
      }
    }
    
    cargarPromociones();
    
    // Cleanup function para evitar actualizar estados en componentes desmontados
    return () => {
      isMounted = false;
    };
  }, []);

  // Función para determinar la etiqueta basada en el título si no existe etiqueta
  const getEtiqueta = (promocion: Promocion) => {
    if (promocion.etiqueta) return promocion.etiqueta;
    
    // Extraer palabras clave comunes en promociones
    const titulo = promocion.titulo.toUpperCase();
    if (titulo.includes('EFECTIVO')) return 'EFECTIVO';
    if (titulo.includes('JUBILADO')) return 'JUBILADOS';
    if (titulo.includes('MARTES')) return 'MARTES';
    if (titulo.includes('JUEVES')) return 'JUEVES';
    if (titulo.includes('SÁBADO') || titulo.includes('SABADO')) return 'SÁBADOS';
    if (titulo.includes('MEDALLONES')) return 'MEDALLONES';
    if (titulo.includes('PESCADO') && titulo.includes('RÍO')) return 'RÍO';
    
    // Si no hay coincidencia, usar un valor por defecto
    return 'PROMO';
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Promociones
          </motion.h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        ) : promociones.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No hay promociones disponibles en este momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promociones.map((promo, index) => (
              <motion.div
                key={promo.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 ${
                  // Centrar el último elemento si está solo en la última fila
                  promociones.length % 3 === 1 && index === promociones.length - 1
                    ? 'lg:col-start-2'
                    : ''
                } ${
                  // Centrar el último elemento en pantallas medianas si está solo en la última fila
                  promociones.length % 2 === 1 && index === promociones.length - 1
                    ? 'md:col-span-2 md:max-w-md md:mx-auto'
                    : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image 
                    src={promo.imagen}
                    alt={promo.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {getEtiqueta(promo)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{promo.titulo}</h3>
                  <p className="text-gray-700">{promo.descripcion}</p>
                  
                  {/* Mostrar fechas si están disponibles */}
                  {(promo.fecha_inicio || promo.fecha_fin) && (
                    <div className="mt-3 text-sm text-gray-500">
                      {promo.fecha_inicio && (
                        <p>Desde: {new Date(promo.fecha_inicio).toLocaleDateString()}</p>
                      )}
                      {promo.fecha_fin && (
                        <p>Hasta: {new Date(promo.fecha_fin).toLocaleDateString()}</p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <motion.div
            className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-800 font-medium">
              Importante: Todas las promociones son válidas únicamente abonando en efectivo
            </p>
          </motion.div>
          
          <motion.a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 mt-6 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Consultar promociones
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PromocionesSection;
