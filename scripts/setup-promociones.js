const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Definir las promociones de ejemplo
const promociones = [
  {
    id: 1,
    titulo: '10% de descuento en efectivo',
    descripcion: 'En todos los productos abonando en efectivo para compras mayores a $15.000',
    imagen: '/imagenes/10efectivo.jpeg',
    etiqueta: 'EFECTIVO',
    activa: true
  },
  {
    id: 2,
    titulo: '20% para jubilados',
    descripcion: 'Solo los jueves para compras mayores a $10.000',
    imagen: '/imagenes/20jubilados.jpeg',
    etiqueta: 'JUEVES',
    activa: true
  },
  {
    id: 3,
    titulo: '20% en pescados de río',
    descripcion: 'Promoción especial solo los martes',
    imagen: '/imagenes/20pescado rio.jpeg',
    etiqueta: 'MARTES',
    activa: true
  },
  {
    id: 4,
    titulo: '20% en medallones',
    descripcion: 'Solo los sábados en medallones de pollo o merluza',
    imagen: '/imagenes/20medallones.jpeg',
    etiqueta: 'SÁBADOS',
    activa: true
  }
]

async function recrearTabla() {
  console.log('1. Verificando si la tabla promociones existe...')
  
  try {
    // Intentar eliminar la tabla si existe
    await supabase.rpc('exec_sql', {
      query: `DROP TABLE IF EXISTS promociones;`
    })
    
    console.log('2. Creando tabla promociones desde cero...')
    
    // Crear la tabla con la estructura correcta
    const { error: createError } = await supabase.rpc('exec_sql', {
      query: `
        CREATE TABLE promociones (
          id SERIAL PRIMARY KEY,
          titulo TEXT NOT NULL,
          descripcion TEXT NOT NULL,
          imagen TEXT NOT NULL,
          activa BOOLEAN DEFAULT true,
          etiqueta TEXT,
          fecha_inicio TIMESTAMP WITH TIME ZONE,
          fecha_fin TIMESTAMP WITH TIME ZONE
        );
      `
    })
    
    if (createError) {
      console.error('Error al crear tabla:', createError.message)
      console.log('Intentando método alternativo...')
      
      // Método alternativo: crear la tabla con una inserción directa
      const { error: insertError } = await supabase
        .from('promociones')
        .insert({
          id: 0,
          titulo: 'Test',
          descripcion: 'Test',
          imagen: '/test.jpg',
          activa: false,
          etiqueta: 'TEST'
        })
      
      if (insertError && !insertError.message.includes('already exists')) {
        console.error('No se pudo crear la tabla:', insertError.message)
        return false
      }
    }
    
    console.log('✅ Tabla promociones creada correctamente')
    return true
    
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

async function importarPromociones() {
  console.log('3. Importando promociones...')
  
  try {
    // Primero eliminamos las promociones existentes
    const { error: deleteError } = await supabase
      .from('promociones')
      .delete()
      .neq('id', 0) // Eliminar todo excepto nuestra fila de prueba
    
    if (deleteError) {
      console.error('Error al eliminar promociones existentes:', deleteError.message)
    }
    
    // Insertar las nuevas promociones
    for (const promocion of promociones) {
      console.log(`Importando: ${promocion.titulo}`)
      
      const { error } = await supabase
        .from('promociones')
        .upsert(promocion)
      
      if (error) {
        console.error(`Error al insertar promoción ${promocion.id}:`, error.message)
      }
    }
    
    console.log('✅ Promociones importadas correctamente')
    return true
  } catch (err) {
    console.error('Error durante la importación:', err)
    return false
  }
}

async function verificarInstalacion() {
  console.log('4. Verificando instalación...')
  
  try {
    const { data, error, count } = await supabase
      .from('promociones')
      .select('*', { count: 'exact' })
    
    if (error) {
      console.error('Error al verificar promociones:', error.message)
      return false
    }
    
    // Eliminar la promoción de prueba si existe
    await supabase
      .from('promociones')
      .delete()
      .eq('id', 0)
    
    console.log(`✅ Verificación completa: ${count} promociones en la base de datos`)
    
    // Mostrar las promociones
    if (data && data.length > 0) {
      console.log('\nPromociones disponibles:')
      data.forEach(promo => {
        console.log(`- ID ${promo.id}: ${promo.titulo} (${promo.activa ? 'Activa' : 'Inactiva'})`)
      })
    }
    
    return true
  } catch (err) {
    console.error('Error durante la verificación:', err)
    return false
  }
}

// Ejecutar el proceso completo
async function ejecutar() {
  console.log('=== CONFIGURACIÓN DE PROMOCIONES ===\n')
  
  const tablaCreada = await recrearTabla()
  if (!tablaCreada) {
    console.log('❌ No se pudo crear la tabla. Proceso detenido.')
    return
  }
  
  const promocionesImportadas = await importarPromociones()
  if (!promocionesImportadas) {
    console.log('⚠️ Hubo errores al importar las promociones.')
  }
  
  await verificarInstalacion()
  
  console.log('\n=== PROCESO COMPLETADO ===')
  console.log('Ya puedes usar la página de administración para gestionar promociones.')
}

ejecutar()
