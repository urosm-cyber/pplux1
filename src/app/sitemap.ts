import { MetadataRoute } from 'next';

// Define collections manually since we can't easily import the object from page.tsx (it's not exported for reuse easily without refactoring)
// We will maintain this list or better yet, if we refactored collections to a shared file, we could import it.
// For now, hardcoding the known IDs to ensure stability.
const collectionIds = [
  'fw25-symphonia',
  'fw24-heartstrings',
  'ss24-couture-collective',
  'ss25-voyage-blanc',
  'fw23-new-elegance',
  'ss23-bon-voyage',
  'fw22-teatro',
  'ss22-dolce-vita',
  'dreamscape'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.patriciapie.si';

  const staticRoutes = [
    '',
    '/kolekcije',
    '/perfect-fit',
    '/showroom',
    '/o-znamki',
    '/kontakt',
    '/zasebnost',
    '/piskotki',
    '/pravna-obvestila',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const collectionRoutes = collectionIds.map((id) => ({
    url: `${baseUrl}/kolekcije/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...collectionRoutes];
}
