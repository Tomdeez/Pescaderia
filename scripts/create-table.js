const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createTables() {
  console.log('Creando tabla de productos...')
  
  // Crear tabla productos
  const { error: errorProductos } = await supabase.rpc('create_table', {
    name: 'productos',
    columns: [
      { name: 'id', type: 'int8', is_primary: true },
      { name: 'titulo', type: 'text' },
      { name: 'descripcion', type: 'text' },
      { name: 'imagen', type: 'text' },
      { name: 'categoria', type: 'text' },
      { name: 'disponibilidad', type: 'text' }
    ]
  })
  
  if (errorProductos) {
    console.error('Error al crear tabla productos:', errorProductos.message)
    
    // Intenta crear la tabla con SQL directo si el RPC falla
    console.log('Intentando crear tabla con SQL...')
    
    const { error: sqlError } = await supabase.from('productos').insert({
      id: 999999, // Temporal para crear la tabla
      titulo: 'Temporal',
      descripcion: 'Temporal',
      imagen: 'Temporal',
      categoria: 'Temporal',
      disponibilidad: 'Temporal'
    })
    
    if (sqlError && !sqlError.message.includes('already exists')) {
      console.error('Error al crear tabla con SQL:', sqlError.message)
    } else {
      // Eliminar entrada temporal
      await supabase.from('productos').delete().eq('id', 999999)
      console.log('Tabla productos creada correctamente con SQL')
    }
  } else {
    console.log('Tabla productos creada correctamente')
  }
}

createTables()
