import { createClient } from '@supabase/supabase-js'

// Usar variables de entorno o valores predeterminados para desarrollo local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ugbpkngzzdnldxjjxbos.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnBrbmd6emRubGR4amp4Ym9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MDQ0MDQsImV4cCI6MjA3MTI4MDQwNH0.aFL7x96QyRxK03jr9LrWcIYonoNKDIZAVL-Hg3zVb2s'

// Importante: Para el cliente web usamos la clave anónima, NO la service_role
export const supabase = createClient(supabaseUrl, supabaseAnonKey)