export default function Head() {
  return (
    <>
      <title>Estrellita de Mar – Pescadería Premium</title>
      <meta name="description" content="Pescados y mariscos frescos, congelados y empanados. Calidad premium para consumo mayorista y minorista." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#003049" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      {/* Etiquetas Open Graph para mejor visualización en redes sociales */}
      <meta property="og:title" content="Estrellita de Mar – Pescadería Premium" />
      <meta property="og:description" content="Consultanos por nuestros productos frescos y congelados." />
      <meta property="og:image" content="/imagenes/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tudominio.vercel.app" />
    </>
  );
}

// <title>: Define el título de la pestaña y cómo aparece en buscadores.
// <meta name="description">: Resumen para SEO y redes sociales.
// <meta name="viewport">: Hace el sitio responsive.
// <meta name="theme-color">: Color de la barra del navegador en móviles.
// <meta name="robots">: Indica a los buscadores que indexen el sitio.
// <link rel="icon">: Ícono de la pestaña.
// Etiquetas Open Graph: Mejoran la apariencia al compartir el sitio en redes sociales. 