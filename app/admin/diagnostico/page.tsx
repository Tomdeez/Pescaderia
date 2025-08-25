'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../utils/supabaseClient';

export default function DiagnosticoPage() {
  const [status, setStatus] = useState<{
    connection: boolean;
    productosTable: boolean;
    productCount: number;
    error: string | null;
  }>({
    connection: false,
    productosTable: false,
    productCount: 0,
    error: null
  });
  
  const [loading, setLoading] = useState(true);
  const [showImportForm, setShowImportForm] = useState(false);
  const [importRunning, setImportRunning] = useState(false);
  const [importResult, setImportResult] = useState<string | null>(null);

  useEffect(() => {
    async function checkConnection() {
      try {
        setLoading(true);
        
        // Verificar conexión a Supabase
        const { data: connectionData, error: connectionError } = await supabase.from('_tables').select('*').limit(1);
        
        if (connectionError && !connectionError.message.includes('permission denied')) {
          throw new Error(`Error de conexión: ${connectionError.message}`);
        }
        
        // Verificar tabla productos
        const { data: productosData, error: productosError } = await supabase.from('productos').select('count');
        
        const productosExists = !productosError || !productosError.message.includes('does not exist');
        const productCount = productosData ? productosData.length : 0;
        
        setStatus({
          connection: true,
          productosTable: productosExists,
          productCount: productCount,
          error: null
        });
      } catch (err: any) {
        console.error('Error en diagnóstico:', err);
        setStatus({
          connection: false,
          productosTable: false,
          productCount: 0,
          error: err.message
        });
      } finally {
        setLoading(false);
      }
    }
    
    checkConnection();
  }, []);

  // Función para importar productos manualmente
  async function importProductos() {
    try {
      setImportRunning(true);
      setImportResult(null);
      
      // Crear la tabla productos si no existe
      const { error: createError } = await supabase.rpc('create_table_if_not_exists', {
        table_name: 'productos',
        columns: `
          id integer primary key,
          titulo text,
          descripcion text,
          imagen text,
          categoria text,
          disponibilidad text
        `
      }).select();
      
      if (createError && !createError.message.includes('does not exist')) {
        // Intentar crear con SQL directo
        await supabase.from('productos').insert({
          id: 999999,
          titulo: 'Producto temporal',
          descripcion: 'Este producto será eliminado',
          imagen: '/temp.jpg',
          categoria: 'Temporal',
          disponibilidad: 'En Stock'
        });
        
        // Eliminar el producto temporal
        await supabase.from('productos').delete().eq('id', 999999);
      }
      
      // Importar productos de prueba
      const productosEjemplo = [
        {
          id: 1,
          titulo: 'Salmon rosado rodaja',
          descripcion: 'Salmón rosado fresco en rodajas',
          imagen: '/imagenes/pesfrescohielo.jpg',
          categoria: 'Mar',
          disponibilidad: 'En Stock',
        },
        {
          id: 2,
          titulo: 'Trucha salmonada',
          descripcion: 'Trucha salmonada fresca',
          imagen: '/imagenes/pesfrescohielo.jpg',
          categoria: 'Mar',
          disponibilidad: 'En Stock',
        },
        {
          id: 3,
          titulo: 'Surubí en rodajas',
          descripcion: 'Surubí de río en rodajas',
          imagen: '/imagenes/pesfrescohielo.jpg',
          categoria: 'Río',
          disponibilidad: 'En Stock',
        }
      ];
      
      const { error: importError } = await supabase
        .from('productos')
        .upsert(productosEjemplo, { onConflict: 'id' });
      
      if (importError) {
        throw new Error(`Error al importar productos: ${importError.message}`);
      }
      
      setImportResult('Productos importados correctamente');
      
      // Actualizar estado
      const { data: updatedData } = await supabase.from('productos').select('count');
      setStatus({
        ...status,
        productosTable: true,
        productCount: updatedData ? updatedData.length : productosEjemplo.length,
        error: null
      });
      
    } catch (err: any) {
      console.error('Error importando productos:', err);
      setImportResult(`Error: ${err.message}`);
    } finally {
      setImportRunning(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/admin" className="text-blue-600 hover:text-blue-800">
            ← Volver al panel
          </Link>
          <h1 className="text-2xl font-bold mt-2">Diagnóstico de Supabase</h1>
          <p className="text-gray-600">Verifiquemos la conexión con la base de datos</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-medium mb-4">Estado del sistema</h2>
          
          {loading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 ${status.connection ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="font-medium">Conexión a Supabase:</span>
                <span className="ml-2">{status.connection ? 'Conectado' : 'Error'}</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 ${status.productosTable ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="font-medium">Tabla de productos:</span>
                <span className="ml-2">{status.productosTable ? 'Disponible' : 'No encontrada'}</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 ${status.productCount > 0 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="font-medium">Productos en la base de datos:</span>
                <span className="ml-2">{status.productCount}</span>
              </div>
              
              {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {status.error}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Acciones</h2>
          
          {!status.productosTable || status.productCount === 0 ? (
            <div>
              <button
                onClick={() => setShowImportForm(!showImportForm)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Importar datos de prueba
              </button>
              
              {showImportForm && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-4">
                    Esto creará la tabla de productos e importará algunos productos de prueba.
                  </p>
                  
                  <button
                    onClick={importProductos}
                    disabled={importRunning}
                    className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ${
                      importRunning ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {importRunning ? 'Importando...' : 'Confirmar importación'}
                  </button>
                  
                  {importResult && (
                    <p className={`mt-3 text-sm ${
                      importResult.includes('Error') ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {importResult}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-700">
                  ✅ La conexión con Supabase está funcionando correctamente y hay {status.productCount} productos en la base de datos.
                </p>
              </div>
              
              <div className="mt-4">
                <Link 
                  href="/admin/productos"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Ver productos
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
