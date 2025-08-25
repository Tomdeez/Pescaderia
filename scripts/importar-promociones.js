const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Definir las promociones de ejemplo basadas en las imágenes existentes
const promociones = [
  {
    id: 1,
    titulo: '10% de descuento en efectivo',
    descripcion: 'Obtén un 10% de descuento pagando en efectivo en todos nuestros productos.',
    imagen: '/imagenes/10efectivo.jpeg',
    activa: true,
    fecha_inicio: null,
    fecha_fin: null
  },
  {
    id: 2,
    titulo: '20% de descuento para jubilados',
    descripcion: 'Los jubilados obtienen un 20% de descuento presentando su credencial.',
    imagen: '/imagenes/20jubilados.jpeg',
    activa: true,
    fecha_inicio: null,
    fecha_fin: null
  },
  {
    id: 3,
    titulo: '20% de descuento en medallones',
    descripcion: 'Aprovecha un 20% de descuento en todos nuestros medallones de pescado.',
    imagen: '/imagenes/20medallones.jpeg',
    activa: true,
    fecha_inicio: null,
    fecha_fin: null
  },
  {
    id: 4,
    titulo: '20% de descuento en pescado de río',
    descripcion: 'Disfruta de un 20% de descuento en nuestras variedades de pescado de río.',
    imagen: '/imagenes/20pescado rio.jpeg',
    activa: true,
    fecha_inicio: null,
    fecha_fin: null
  }
]

// Función para importar promociones
async function importarPromociones() {
  try {
    console.log('Iniciando importación de promociones...')
    
    // Crear la tabla promociones si no existe
    try {
      const { error: tableError } = await supabase.rpc('create_table_if_not_exists', {
        table_name: 'promociones',
        columns: `
          id integer primary key,
          titulo text not null,
          descripcion text not null,
          imagen text not null,
          activa boolean default true,
          fecha_inicio timestamp with time zone,
          fecha_fin timestamp with time zone
        `
      })
      
      if (tableError && !tableError.message.includes('does not exist')) {
        console.log('La tabla promociones ya existe o se creará al insertar')
      }
    } catch (tableErr) {
      console.log('Usando método alternativo para crear tabla...')
    }
    
    // Insertar las promociones
    const { data, error } = await supabase
      .from('promociones')
      .upsert(promociones, { onConflict: 'id' })
    
    if (error) {
      console.error('Error al insertar promociones:', error.message)
      return
    }
    
    console.log(`✅ ${promociones.length} promociones importadas correctamente`)
  } catch (err) {
    console.error('Error durante la importación:', err)
  }
}

// Ejecutar la importación
importarPromociones()
