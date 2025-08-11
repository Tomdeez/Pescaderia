import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tudominio.vercel.app';
  return [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: 'weekly', lastModified: new Date() },
  ];
}


