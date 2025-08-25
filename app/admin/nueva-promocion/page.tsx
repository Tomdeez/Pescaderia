'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../utils/supabaseClient';

export default function NuevaPromocion() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    activa: true,
    fecha_inicio: '',
    fecha_fin: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: (e.target as HTMLInputElement).checked 
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validar datos
      if (!formData.titulo || !formData.descripcion || !formData.imagen) {
        throw new Error('Por favor completa los campos obligatorios: título, descripción e imagen');
      }

      // Obtener el último ID para generar uno nuevo
      const { data: lastPromocion, error: idError } = await supabase
        .from('promociones')
        .select('id')
        .order('id', { ascending: false })
        .limit(1);

      if (idError) {
        throw idError;
      }

      // Generar nuevo ID (último + 1 o empezar en 1)
      const newId = lastPromocion && lastPromocion.length > 0 ? lastPromocion[0].id + 1 : 1;

      // Crear objeto para insertar
      const promocionData = {
        id: newId,
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        imagen: formData.imagen,
        activa: formData.activa,
        fecha_inicio: formData.fecha_inicio || null,
        fecha_fin: formData.fecha_fin || null
      };

      // Insertar la nueva promoción
      const { error: insertError } = await supabase
        .from('promociones')
        .insert([promocionData]);

      if (insertError) {
        throw insertError;
      }

      // Redirigir a la página de administración de promociones
      router.push('/admin/promociones');
    } catch (err: any) {
      setError(err.message || 'Error al crear la promoción');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center">
            <Link 
              href="/admin/promociones" 
              className="text-blue-600 hover:text-blue-800 mr-2"
            >
              ← Volver
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Nueva Promoción</h1>
          </div>
        </header>

        <div className="bg-white shadow rounded-lg p-6">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                  Título *
                </label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción *
                </label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  rows={3}
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-1">
                  Ruta de imagen * (ejemplo: /imagenes/20jubilados.jpeg)
                </label>
                <input
                  type="text"
                  name="imagen"
                  id="imagen"
                  value={formData.imagen}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="/imagenes/ejemplo.jpg"
                  required
                />
                {formData.imagen && (
                  <div className="mt-2 border rounded p-2 inline-block">
                    <img 
                      src={formData.imagen} 
                      alt="Vista previa" 
                      className="h-20 w-auto object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/imagenes/picadamar.jpg';
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="activa"
                    id="activa"
                    checked={formData.activa}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="activa" className="ml-2 block text-sm text-gray-700">
                    Promoción activa
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fecha_inicio" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de inicio (opcional)
                  </label>
                  <input
                    type="date"
                    name="fecha_inicio"
                    id="fecha_inicio"
                    value={formData.fecha_inicio}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="fecha_fin" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de fin (opcional)
                  </label>
                  <input
                    type="date"
                    name="fecha_fin"
                    id="fecha_fin"
                    value={formData.fecha_fin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <Link
                  href="/admin/promociones"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-green-600 text-white rounded-md ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'
                  }`}
                >
                  {loading ? 'Guardando...' : 'Guardar Promoción'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
