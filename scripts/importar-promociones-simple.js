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

async function importarPromociones() {
  try {
    console.log('Intentando importar promociones...')
    
    // Insertar cada promoción individualmente para evitar errores
    for (const promocion of promociones) {
      console.log(`Importando promoción: ${promocion.titulo}`)
      
      const { data, error } = await supabase
        .from('promociones')
        .upsert(promocion, { onConflict: 'id' })
      
      if (error) {
        console.error(`Error al insertar promoción ${promocion.id}:`, error.message)
      } else {
        console.log(`✅ Promoción ${promocion.id} importada correctamente`)
      }
    }
    
    console.log('Proceso de importación completado')
  } catch (err) {
    console.error('Error general durante la importación:', err)
  }
}

// Ejecutar importación
importarPromociones()