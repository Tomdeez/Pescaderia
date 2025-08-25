const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase con capacidades SQL
const supabase = createClient(supabaseUrl, supabaseKey)

async function crearTablaPromociones() {
  console.log('Creando tabla de promociones usando SQL...')
  
  try {
    // Intenta crear la tabla con SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      query: `
        CREATE TABLE IF NOT EXISTS promociones (
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
    
    if (error) {
      console.error('Error al crear la tabla de promociones:', error.message)
      return false
    }
    
    console.log('✅ Tabla de promociones creada correctamente')
    return true
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

// Método alternativo utilizando la API REST directamente
async function crearTablaMetodoAlternativo() {
  console.log('Intentando método alternativo para crear tabla promociones...')
  
  try {
    // Creamos un registro temporal para que Supabase cree la tabla
    const { data, error } = await supabase
      .from('promociones')
      .insert([
        { 
          id: 1,
          titulo: '10% de descuento en efectivo',
          descripcion: 'Obtén un 10% de descuento pagando en efectivo en todos nuestros productos.',
          imagen: '/imagenes/10efectivo.jpeg',
          activa: true,
          etiqueta: 'EFECTIVO'
        }
      ])
    
    if (error) {
      // Si el error indica que la tabla ya existe, es buena señal
      if (error.message.includes('already exists')) {
        console.log('La tabla promociones ya existe')
        return true
      } else if (error.message.includes('does not exist')) {
        console.log('La tabla promociones no existe. Intentaremos crearla con otro método...')
        
        // Configuración manual
        console.log('Por favor, crea la tabla manualmente en el dashboard de Supabase con esta estructura:')
        console.log(`
CREATE TABLE public.promociones (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  imagen TEXT NOT NULL,
  activa BOOLEAN DEFAULT true,
  etiqueta TEXT,
  fecha_inicio TIMESTAMP WITH TIME ZONE,
  fecha_fin TIMESTAMP WITH TIME ZONE
);
        `)
        
        return false
      } else {
        console.error('Error al verificar/crear tabla promociones:', error.message)
        return false
      }
    }
    
    console.log('✅ Tabla promociones verificada/creada correctamente')
    return true
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

// Ejecutamos las funciones en secuencia
async function run() {
  let result = await crearTablaPromociones()
  
  if (!result) {
    result = await crearTablaMetodoAlternativo()
  }
  
  if (result) {
    console.log('✅ Proceso completado exitosamente')
  } else {
    console.log('⚠️ No se pudo crear la tabla. Por favor, créala manualmente desde el Dashboard de Supabase')
  }
}

run()
