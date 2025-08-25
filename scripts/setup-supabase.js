const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupSupabase() {
  console.log('Iniciando configuración de Supabase...')
  
  try {
    // Creamos la tabla con una inserción (se crea automáticamente)
    console.log('Creando tabla productos...')
    
    // Primero consultamos si la tabla ya existe
    const { error: queryError } = await supabase
      .from('productos')
      .select('id')
      .limit(1)
    
    if (queryError && queryError.code === '42P01') {
      console.log('La tabla no existe, creándola con una inserción temporal...')
      
      // La tabla no existe, intentamos crearla con una inserción
      const { error } = await supabase
        .from('productos')
        .insert({
          id: 999999,
          titulo: 'Temporal',
          descripcion: 'Temporal',
          imagen: '/temporal.jpg',
          categoria: 'Temporal',
          disponibilidad: 'En Stock'
        })
      
      if (error) {
        console.error('Error al crear tabla:', error.message)
        return
      }
      
      // Eliminamos el registro temporal
      await supabase
        .from('productos')
        .delete()
        .eq('id', 999999)
      
      console.log('¡Tabla productos creada correctamente!')
    } else {
      console.log('La tabla productos ya existe')
    }
    
    console.log('Configuración completada')
  } catch (error) {
    console.error('Error en la configuración:', error)
  }
}

setupSupabase()
