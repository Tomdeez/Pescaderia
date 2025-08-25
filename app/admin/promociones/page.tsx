'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../utils/supabaseClient';

interface Promocion {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  activa: boolean;
  fecha_inicio?: string;
  fecha_fin?: string;
}

export default function PromocionesAdmin() {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function cargarPromociones() {
      try {
        setLoading(true);
        console.log('Cargando promociones desde Supabase...');
        
        const { data, error, count } = await supabase
          .from('promociones')
          .select('*', { count: 'exact' })
          .order('id');
          
        if (error) {
          console.error('Error de Supabase:', error);
          throw error;
        }
        
        console.log(`Promociones encontradas: ${count}`, data);
        setPromociones(data || []);
      } catch (err) {
        console.error('Error al cargar promociones:', err);
        setError('No se pudieron cargar las promociones. Verifica que la tabla exista y tenga los campos correctos.');
      } finally {
        setLoading(false);
      }
    }
    
    cargarPromociones();
  }, []);

  // Eliminar promoción
  async function eliminarPromocion(id: number) {
    if (!confirm('¿Estás seguro de eliminar esta promoción?')) return;
    
    try {
      const { error } = await supabase
        .from('promociones')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setPromociones(promociones.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error al eliminar:', err);
      alert('No se pudo eliminar la promoción');
    }
  }

  // Cambiar estado de activación
  async function toggleActiva(id: number, activa: boolean) {
    try {
      const { error } = await supabase
        .from('promociones')
        .update({ activa: !activa })
        .eq('id', id);
        
      if (error) throw error;
      
      setPromociones(promociones.map(p => 
        p.id === id ? {...p, activa: !p.activa} : p
      ));
    } catch (err) {
      console.error('Error al cambiar estado:', err);
      alert('No se pudo actualizar el estado');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link href="/admin" className="text-blue-600 hover:text-blue-800">
              ← Volver al panel
            </Link>
            <h1 className="text-2xl font-bold mt-2">Gestión de Promociones</h1>
          </div>
          <Link 
            href="/admin/nueva-promocion"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Nueva promoción
          </Link>
        </div>
        
        {/* Lista de promociones */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
              <p className="mt-2 text-gray-500">Cargando promociones...</p>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">
              {error}
              <button 
                onClick={() => window.location.reload()} 
                className="block mx-auto mt-2 text-blue-600 hover:underline"
              >
                Reintentar
              </button>
            </div>
          ) : promociones.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No hay promociones disponibles
              <Link 
                href="/admin/nueva-promocion"
                className="block mx-auto mt-2 text-green-600 hover:underline"
              >
                Crear primera promoción
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Imagen
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Título
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fechas
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {promociones.map((promocion) => (
                    <tr key={promocion.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {promocion.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-10 w-10 rounded-md bg-gray-200 overflow-hidden">
                          <img
                            src={promocion.imagen}
                            alt={promocion.titulo}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/imagenes/picadamar.jpg';
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {promocion.titulo}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {promocion.descripcion}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => toggleActiva(promocion.id, promocion.activa)}
                          className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded ${
                            promocion.activa
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {promocion.activa ? 'Activa' : 'Inactiva'}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {promocion.fecha_inicio && (
                          <div>Inicio: {new Date(promocion.fecha_inicio).toLocaleDateString()}</div>
                        )}
                        {promocion.fecha_fin && (
                          <div>Fin: {new Date(promocion.fecha_fin).toLocaleDateString()}</div>
                        )}
                        {!promocion.fecha_inicio && !promocion.fecha_fin && (
                          <span className="text-gray-400">Sin fechas</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/admin/editar-promocion/${promocion.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => eliminarPromocion(promocion.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
