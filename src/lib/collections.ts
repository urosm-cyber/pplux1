export const COLLECTION_SLUGS = [
  'fw25-symphonia',
  'fw24-heartstrings',
  'ss24-couture-collective',
  'ss25-voyage-blanc',
  'fw23-new-elegance',
  'ss23-bon-voyage',
  'fw22-teatro',
  'ss22-dolce-vita',
  'dreamscape',
] as const;

export type CollectionSlug = (typeof COLLECTION_SLUGS)[number];
