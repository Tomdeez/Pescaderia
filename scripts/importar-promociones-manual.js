const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Verificar si la tabla existe
async function checkTable() {
  try {
    console.log('Verificando tabla promociones...')
    
    const { data, error } = await supabase
      .from('promociones')
      .select('id')
      .limit(1)
    
    if (error && error.code === '42P01') {
      console.log('❌ La tabla promociones no existe')
      return false
    } else {
      console.log('✅ La tabla promociones existe')
      return true
    }
  } catch (err) {
    console.error('Error al verificar tabla:', err)
    return false
  }
}

// Importar datos manualmente
async function importManually() {
  try {
    // Lista de promociones
    const promociones = [
      {
        id: 1,
        titulo: '10% de descuento en efectivo',
        descripcion: 'Obtén un 10% de descuento pagando en efectivo en todos nuestros productos.',
        imagen: '/imagenes/10efectivo.jpeg',
        activa: true
      },
      {
        id: 2,
        titulo: '20% de descuento para jubilados',
        descripcion: 'Los jubilados obtienen un 20% de descuento presentando su credencial.',
        imagen: '/imagenes/20jubilados.jpeg',
        activa: true
      },
      {
        id: 3,
        titulo: '20% de descuento en medallones',
        descripcion: 'Aprovecha un 20% de descuento en todos nuestros medallones de pescado.',
        imagen: '/imagenes/20medallones.jpeg',
        activa: true
      },
      {
        id: 4,
        titulo: '20% de descuento en pescado de río',
        descripcion: 'Disfruta de un 20% de descuento en nuestras variedades de pescado de río.',
        imagen: '/imagenes/20pescado rio.jpeg',
        activa: true
      }
    ]

    console.log(`Intentando importar ${promociones.length} promociones...`)
    
    // Importar una por una
    for (const promocion of promociones) {
      console.log(`Importando: ${promocion.titulo}`)
      
      const { data, error } = await supabase
        .from('promociones')
        .insert([promocion])
      
      if (error) {
        console.error(`Error al importar "${promocion.titulo}":`, error)
      } else {
        console.log(`✅ Promoción "${promocion.titulo}" importada correctamente`)
      }
    }
    
    console.log('\n=== Importación finalizada ===')
  } catch (error) {
    console.error('Error general:', error)
  }
}

// Ejecución principal
async function main() {
  const tableExists = await checkTable()
  
  if (tableExists) {
    await importManually()
  } else {
    console.log('❌ Por favor crea la tabla promociones manualmente en Supabase')
  }
}

main()
