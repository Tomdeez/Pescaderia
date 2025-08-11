export interface MenuDia {
  dia: string;
  imagenes: string[];
}

// Edita las rutas según los nombres reales en `public/imagenes/`.
// Se aceptan nombres con espacios como "martes 2.jpg".
export const menuDelDia: MenuDia[] = [
  { dia: 'Lunes', imagenes: ['/imagenes/lunes.jpeg'] },
  { dia: 'Martes', imagenes: ['/imagenes/martes.jpeg'] },
  { dia: 'Miércoles', imagenes: ['/imagenes/miercoles.jpeg'] },
  { dia: 'Jueves', imagenes: ['/imagenes/jueves.jpeg'] },
  { dia: 'Viernes', imagenes: ['/imagenes/viernes.jpeg'] },
  { dia: 'Sábado', imagenes: ['/imagenes/sabado.jpeg'] },
];


