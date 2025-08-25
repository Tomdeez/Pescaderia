const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

const supabase = createClient(supabaseUrl, supabaseKey)

// Función para extraer datos de productos
function extractProductosData() {
  try {
    const productosFile = fs.readFileSync('./data/productos.ts', 'utf8')
    
    // Extraemos la parte relevante entre los corchetes del array
    let match = productosFile.match(/export const productos: Producto\[\] = \[([\s\S]*)\];/)
    
    if (!match) {
      console.error('No se pudo encontrar la estructura de datos en productos.ts')
      return null
    }
    
    // Tomamos el contenido entre los corchetes
    const productosContent = match[1]
    
    // Construimos un string que podamos evaluar como JS
    const jsString = `[${productosContent}]`
    
    // Eliminamos los comentarios
    const withoutComments = jsString.replace(/\/\/[^\n]*/g, '')
    
    // Evaluamos el string para obtener el array de objetos
    // Usamos eval porque este es un caso controlado donde conocemos el contenido del archivo
    const productos = eval(withoutComments)
    return productos
  } catch (error) {
    console.error('Error al extraer datos:', error)
    return null
  }
}

async function importProductos() {
  try {
    console.log('Extrayendo datos de productos.ts...')
    const productos = extractProductosData()
    
    if (!productos || productos.length === 0) {
      console.error('No se encontraron productos para importar')
      return
    }
    
    console.log(`Encontrados ${productos.length} productos. Importando a Supabase...`)
    
    // Importamos de 20 en 20 para evitar límites de tamaño
    const chunkSize = 20
    for (let i = 0; i < productos.length; i += chunkSize) {
      const chunk = productos.slice(i, i + chunkSize)
      
      const { error } = await supabase
        .from('productos')
        .upsert(chunk, { onConflict: 'id' })
      
      if (error) {
        console.error(`Error al importar lote ${i/chunkSize + 1}:`, error)
      } else {
        console.log(`Importado lote ${i/chunkSize + 1} (${chunk.length} productos)`)
      }
    }
    
    console.log('Importación de productos completada')
  } catch (error) {
    console.error('Error durante la importación:', error)
  }
}

importProductos()
