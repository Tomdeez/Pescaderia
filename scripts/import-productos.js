const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

// Crear cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Función para extraer productos del archivo TypeScript
function extractProductsFromTS() {
  try {
    // Leer el archivo productos.ts
    const filePath = path.join(__dirname, '..', 'data', 'productos.ts')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    // Extraer la sección de los productos
    const productArrayMatch = fileContent.match(/export const productos: Producto\[\] = \[([\s\S]*)\];/)
    
    if (!productArrayMatch || !productArrayMatch[1]) {
      throw new Error('No se pudo encontrar el array de productos en el archivo')
    }
    
    // Preparamos el texto para evaluarlo
    const productsText = `[${productArrayMatch[1]}]`
    
    // Eliminamos comentarios
    const cleanText = productsText.replace(/\/\/.*$/gm, '')
    
    // Evaluamos para obtener el array de objetos (seguro porque conocemos la fuente)
    const productos = eval(cleanText)
    return productos
  } catch (error) {
    console.error('Error al extraer productos:', error)
    return []
  }
}

// Función para importar productos a Supabase
async function importProductos() {
  console.log('Iniciando importación de productos...')
  
  // Extraer productos del archivo
  const productos = extractProductsFromTS()
  
  if (!productos.length) {
    console.error('No se encontraron productos para importar')
    return
  }
  
  console.log(`Se encontraron ${productos.length} productos para importar`)
  
  // Importar en lotes de 20 para evitar límites de tamaño
  const chunkSize = 20
  let successCount = 0
  
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
      successCount += chunk.length
      console.log(`✅ Lote ${chunkNum} importado correctamente`)
    }
  }
  
  console.log(`=== Importación finalizada ===`)
  console.log(`✅ ${successCount} productos importados correctamente`)
  
  if (successCount < productos.length) {
    console.log(`⚠️ ${productos.length - successCount} productos no pudieron importarse`)
  }
}

// Ejecutar la importación
importProductos()
