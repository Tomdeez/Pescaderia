const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

async function verificarPromociones() {
  console.log('Verificando tabla de promociones...')
  
  try {
    // Intentar leer las promociones existentes
    const { data, error, count } = await supabase
      .from('promociones')
      .select('*', { count: 'exact' })
    
    if (error) {
      console.error('Error al consultar promociones:', error.message)
      return
    }
    
    console.log(`✅ Se encontraron ${count} promociones:`)
    
    // Mostrar las promociones encontradas
    if (data && data.length > 0) {
      data.forEach(promo => {
        console.log(`ID: ${promo.id} | Título: ${promo.titulo} | Activa: ${promo.activa}`)
      })
    } else {
      console.log('No se encontraron promociones en la tabla.')
      console.log('Ejecuta el script importar-promociones-simple.js para añadir promociones.')
    }
    
    // Verificar estructura de la tabla
    console.log('\nVerificando estructura de la tabla promociones...')
    
    // Intentamos insertar una promoción temporal para verificar estructura
    const tempPromo = {
      id: 9999,
      titulo: 'PROMOCIÓN DE PRUEBA - IGNORAR',
      descripcion: 'Esta es una promoción temporal para verificar estructura',
      imagen: '/test.jpg',
      activa: false,
      etiqueta: 'TEST'
    }
    
    const { error: insertError } = await supabase
      .from('promociones')
      .insert(tempPromo)
      .select()
      
    if (insertError) {
      console.error('Error en la estructura de la tabla:', insertError.message)
      if (insertError.message.includes('etiqueta')) {
        console.log('⚠️ Falta el campo "etiqueta" en la tabla promociones')
      }
      console.log('\nSe recomienda ejecutar:')
      console.log('1. node scripts/create-promociones-table.js')
      console.log('2. node scripts/importar-promociones-simple.js')
    } else {
      console.log('✅ La estructura de la tabla es correcta')
      
      // Eliminar la promoción de prueba
      await supabase
        .from('promociones')
        .delete()
        .eq('id', 9999)
        
      console.log('✅ Promoción de prueba eliminada')
    }
    
  } catch (err) {
    console.error('Error durante la verificación:', err)
  }
}

// Ejecutar la verificación
verificarPromociones()
