const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Función para extraer datos desde el archivo original
async function extractProductosData() {
  try {
    // Leer el archivo productos.ts
    const filePath = path.join(__dirname, '..', 'data', 'productos.ts')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Extraer la parte relevante entre los corchetes del array
    let match = fileContent.match(/export const productos: Producto\[\] = \[([\s\S]*)\];/)
    
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

// Función para importar productos a Supabase
async function importarProductos() {
  try {
    console.log('Extrayendo datos de productos.ts...')
    const productos = await extractProductosData()
    
    if (!productos || productos.length === 0) {
      console.error('No se encontraron productos para importar')
      return
    }
    
    console.log(`Se encontraron ${productos.length} productos para importar`)
    
    // Importamos en lotes de 20 para evitar límites
    const chunkSize = 20
    let totalImportados = 0
    
    for (let i = 0; i < productos.length; i += chunkSize) {
      const chunk = productos.slice(i, i + chunkSize)
      const chunkNum = Math.floor(i / chunkSize) + 1
      const totalChunks = Math.ceil(productos.length / chunkSize)
      
      console.log(`Importando lote ${chunkNum} de ${totalChunks} (${chunk.length} productos)`)
      
      const { data, error } = await supabase
        .from('productos')
        .upsert(chunk, { onConflict: 'id' })
      
      if (error) {
        console.error(`Error en lote ${chunkNum}:`, error.message)
      } else {
        totalImportados += chunk.length
        console.log(`✅ Lote ${chunkNum} importado correctamente`)
      }
    }
    
    console.log('\n=== Importación finalizada ===')
    console.log(`✅ ${totalImportados} productos importados correctamente`)
    
    if (totalImportados < productos.length) {
      console.log(`⚠️ ${productos.length - totalImportados} productos no pudieron importarse`)
    }
    
  } catch (error) {
    console.error('Error durante la importación:', error)
  }
}

// Ejecutar la importación
importarProductos()
