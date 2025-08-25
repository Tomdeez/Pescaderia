# Instrucciones para integrar Supabase en tu proyecto de Pescadería

## 1. Configuración completada

✅ Has creado tu proyecto en Supabase
✅ Hemos preparado los scripts necesarios

## 2. Pasos para terminar la implementación

### 2.1 Crear las tablas en Supabase

1. Accede a tu proyecto Supabase: https://ugbpkngzzdnldxjjxbos.supabase.co
2. Ve a Database → Table editor
3. Crea la tabla "productos" con estas columnas:
   - `id` (tipo: integer, primary key)
   - `titulo` (tipo: text)
   - `descripcion` (tipo: text)
   - `imagen` (tipo: text)
   - `categoria` (tipo: text)
   - `disponibilidad` (tipo: text)
4. Crea la tabla "promociones" con estas columnas:
   - `id` (tipo: integer, primary key)
   - `titulo` (tipo: text)
   - `descripcion` (tipo: text)
   - `imagen` (tipo: text)
   - `activa` (tipo: boolean)

### 2.2 Importar los productos

Ejecuta este comando en tu terminal:

```
node scripts/import-productos.js
```

### 2.3 Usar Supabase en tu aplicación

Para usar la integración:

1. Renombra el archivo de ejemplo a la versión definitiva:
   ```
   copy app\components\sections\ProductosSection-supabase.tsx app\components\sections\ProductosSection.tsx
   ```

2. Prueba la aplicación ejecutando:
   ```
   npm run dev
   ```

## 3. Panel de administración

Para crear un panel de administración simple:

1. Crea un nuevo archivo en `app/admin/page.tsx`
2. Implementa formularios para agregar/editar productos
3. Protege la ruta con autenticación básica o usando Supabase Auth

## 4. Mantenimiento

Para actualizar productos posteriormente:

1. Usa el panel de administración que crees (recomendado)
2. O modifica directamente desde la interfaz de Supabase Table Editor

¡Listo! Ahora tu pescadería tiene una base de datos conectada para gestionar productos y promociones fácilmente.
