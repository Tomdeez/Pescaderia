# Instrucciones para configurar Supabase

## 1. Crear la tabla de productos

1. Inicia sesión en tu proyecto de Supabase: https://ugbpkngzzdnldxjjxbos.supabase.co
2. Ve a la sección "Table Editor" en el menú lateral
3. Haz clic en "New Table"
4. Configura la tabla con estos campos:
   - Nombre de la tabla: `productos`
   - Columnas:
     - `id`: tipo integer, Primary Key
     - `titulo`: tipo text, Required
     - `descripcion`: tipo text
     - `imagen`: tipo text
     - `categoria`: tipo text
     - `disponibilidad`: tipo text
5. Haz clic en "Save" para crear la tabla

## 2. Crear la tabla de promociones

1. En la misma sección "Table Editor"
2. Haz clic en "New Table"
3. Configura la tabla con estos campos:
   - Nombre de la tabla: `promociones`
   - Columnas:
     - `id`: tipo integer, Primary Key
     - `titulo`: tipo text, Required
     - `descripcion`: tipo text
     - `imagen`: tipo text
     - `activa`: tipo boolean, default: true
     - `fecha_inicio`: tipo timestamp with time zone (opcional)
     - `fecha_fin`: tipo timestamp with time zone (opcional)
4. Haz clic en "Save" para crear la tabla

## 3. Importar datos existentes

Después de crear las tablas, vamos a importar los datos existentes con los scripts proporcionados.

## 4. Integrar con Next.js

Una vez importados los datos, ya puedes usar el cliente de Supabase integrado en tu aplicación.
