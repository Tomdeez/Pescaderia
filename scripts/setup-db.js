const { createClient } = require('@supabase/supabase-js')

// Credenciales de Supabase
const supabaseUrl = 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTcwNDQwNCwiZXhwIjoyMDcxMjgwNDA0fQ.ShXTaa_UEuUE_Rc1j3dXSK5C9bouNsF_T_vH6IS7Eg8'

console.log('Iniciando configuración...')

// Crear el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

// Función para probar la conexión
async function testConnection() {
  try {
    console.log('Probando conexión con Supabase...')
    
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Error de conexión:', error.message)
      return false
    }
    
    console.log('Conexión exitosa!')
    return true
  } catch (err) {
    console.error('Error inesperado:', err)
    return false
  }
}

// Ejecutar la prueba
testConnection()
