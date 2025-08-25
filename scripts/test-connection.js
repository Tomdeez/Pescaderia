const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
// Usamos tanto la clave anónima como la service_role para probar ambas
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MDQ0MDQsImV4cCI6MjA3MTI4MDQwNH0.aFL7x96QyRxK03jr9LrWcIYonoNKDIZAVL-Hg3zVb2s'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear clientes de Supabase
const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey)
const supabaseService = createClient(supabaseUrl, supabaseServiceKey)

async function testConnection() {
  console.log('=== PRUEBA DE CONEXIÓN A SUPABASE ===\n')
  
  console.log('1. Verificando conexión con clave anónima...')
  try {
    const { data: healthData, error: healthError } = await supabaseAnon.from('productos').select('count(*)').limit(1)
    
    if (healthError) {
      console.error('❌ Error de conexión anónima:', healthError.message)
    } else {
      console.log('✅ Conexión anónima exitosa')
    }
  } catch (err) {
    console.error('❌ Error general con clave anónima:', err.message)
  }
  
  console.log('\n2. Verificando conexión con clave de servicio...')
  try {
    const { data: healthServiceData, error: healthServiceError } = await supabaseService.from('productos').select('count(*)').limit(1)
    
    if (healthServiceError) {
      console.error('❌ Error de conexión servicio:', healthServiceError.message)
    } else {
      console.log('✅ Conexión de servicio exitosa')
    }
  } catch (err) {
    console.error('❌ Error general con clave de servicio:', err.message)
  }
  
  console.log('\n3. Verificando tabla de productos...')
  try {
    const { data: productosData, error: productosError } = await supabaseService.from('productos').select('count(*)')
    
    if (productosError) {
      console.error('❌ Error al consultar productos:', productosError.message)
    } else {
      console.log(`✅ Tabla de productos disponible. Cantidad: ${productosData[0].count}`)
    }
  } catch (err) {
    console.error('❌ Error general al consultar productos:', err.message)
  }
  
  console.log('\n4. Verificando tabla de promociones...')
  try {
    const { data: promocionesData, error: promocionesError } = await supabaseService.from('promociones').select('count(*)')
    
    if (promocionesError) {
      console.error('❌ Error al consultar promociones:', promocionesError.message)
    } else {
      console.log(`✅ Tabla de promociones disponible. Cantidad: ${promocionesData[0].count}`)
    }
  } catch (err) {
    console.error('❌ Error general al consultar promociones:', err.message)
  }
  
  console.log('\n5. Recuperando datos específicos de promociones...')
  try {
    const { data: promocionesCompletas, error: promocionesCompletasError } = await supabaseService
      .from('promociones')
      .select('*')
    
    if (promocionesCompletasError) {
      console.error('❌ Error al recuperar datos de promociones:', promocionesCompletasError.message)
    } else if (!promocionesCompletas || promocionesCompletas.length === 0) {
      console.log('⚠️ No hay datos en la tabla de promociones')
    } else {
      console.log('✅ Datos de promociones recuperados correctamente:')
      console.log(JSON.stringify(promocionesCompletas, null, 2))
    }
  } catch (err) {
    console.error('❌ Error general al recuperar datos de promociones:', err.message)
  }

  console.log('\n=== FIN DE LA PRUEBA DE CONEXIÓN ===')
}

testConnection()
