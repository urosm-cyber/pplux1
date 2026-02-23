import { MetadataRoute } from 'next';
import { COLLECTION_SLUGS } from '@/lib/collections';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.patriciapie.si';

  const staticRoutes = [
    '',
    '/kolekcije',
    '/perfect-fit',
    '/showroom',
    '/o-znamki',
    '/kontakt',
    '/zapiski',
    '/zasebnost',
    '/piskotki',
    '/pravna-obvestila',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const collectionRoutes = COLLECTION_SLUGS.map((id) => ({
    url: `${baseUrl}/kolekcije/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...collectionRoutes];
}
