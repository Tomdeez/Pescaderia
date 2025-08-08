export default function Head() {
  const description = "Pescadería premium especializada en pescados y mariscos frescos de mar y río. Productos de alta calidad para mayoristas y minoristas. Envíos a todo el país.";
  const title = "Estrellita de Mar – Pescadería Premium | Pescados y Mariscos Frescos";
  const domain = "https://tudominio.vercel.app";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#003049" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={domain} />
      
      {/* Keywords relevantes para SEO */}
      <meta name="keywords" content="pescadería, mariscos frescos, pescados frescos, venta mayorista, venta minorista, productos del mar, pescados premium, mariscos premium" />
      
      {/* Etiquetas Open Graph mejoradas */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${domain}/imagenes/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domain} />
      <meta property="og:site_name" content="Estrellita de Mar" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}/imagenes/og-image.jpg`} />
      
      {/* Metadatos adicionales */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Estrellita de Mar" />
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