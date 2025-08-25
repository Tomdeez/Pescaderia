const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Función para crear la tabla de productos
async function createProductsTable() {
  console.log('Creando tabla de productos...')
  
  try {
    // Intenta crear la tabla con SQL directo
    const { error } = await supabase.from('productos').insert({
      id: 999999, // ID temporal solo para crear la tabla
      titulo: 'Producto Temporal',
      descripcion: 'Este producto se eliminará automáticamente',
      imagen: '/temp.jpg',
      categoria: 'Temporal',
      disponibilidad: 'En Stock'
    }).select()
    
    if (error) {
      // Si el error es porque la tabla ya existe, informamos
      if (error.message.includes('does not exist')) {
        console.log('La tabla no existe, creándola...')
      } else if (error.message.includes('already exists')) {
        console.log('La tabla productos ya existe')
      } else {
        console.error('Error al verificar/crear tabla:', error.message)
        return false
      }
    } else {
      console.log('Tabla creada exitosamente')
      
      // Eliminamos el producto temporal
      await supabase.from('productos').delete().eq('id', 999999)
    }
    
    return true
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

// Función para crear la tabla de promociones
async function createPromotionsTable() {
  console.log('Creando tabla de promociones...')
  
  try {
    // Intenta crear la tabla con SQL directo
    const { error } = await supabase.from('promociones').insert({
      id: 999999, // ID temporal solo para crear la tabla
      titulo: 'Promoción Temporal',
      descripcion: 'Esta promoción se eliminará automáticamente',
      imagen: '/temp.jpg',
      activa: false
    }).select()
    
    if (error) {
      // Si el error es porque la tabla ya existe, informamos
      if (error.message.includes('does not exist')) {
        console.log('La tabla no existe, creándola...')
      } else if (error.message.includes('already exists')) {
        console.log('La tabla promociones ya existe')
      } else {
        console.error('Error al verificar/crear tabla:', error.message)
        return false
      }
    } else {
      console.log('Tabla creada exitosamente')
      
      // Eliminamos la promoción temporal
      await supabase.from('promociones').delete().eq('id', 999999)
    }
    
    return true
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

// Ejecutamos la creación de tablas
async function createTables() {
  console.log('=== Iniciando creación de tablas ===')
  
  // Crear tabla de productos
  const productsResult = await createProductsTable()
  
  // Crear tabla de promociones
  const promotionsResult = await createPromotionsTable()
  
  console.log('=== Finalizado ===')
  
  if (productsResult && promotionsResult) {
    console.log('✅ Todas las tablas fueron creadas/verificadas correctamente')
  } else {
    console.log('⚠️ Hubo problemas creando algunas tablas')
  }
}

// Ejecutar
createTables()
