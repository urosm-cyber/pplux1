import { Metadata } from 'next';
import ZoofaContent from './ZoofaContent';

export const metadata: Metadata = {
  title: 'Patricia Pie za stranke ZOOFE',
  description:
    'Dobrodošli v Patricia Pie. Če ste nas spoznali v ZOOFI, se lahko vaša zgodba nadaljuje v Studio PP, v spletni trgovini ali skozi osebni Perfect Fit.',
  alternates: {
    canonical: 'https://www.patriciapie.si/zoofa',
  },
  openGraph: {
    title: 'Patricia Pie za stranke ZOOFE',
    description:
      'Dobrodošli v Patricia Pie. Če ste nas spoznali v ZOOFI, se lahko vaša zgodba nadaljuje v Studio PP, v spletni trgovini ali skozi osebni Perfect Fit.',
    url: 'https://www.patriciapie.si/zoofa',
    images: [
      {
        url: 'https://res.cloudinary.com/dyjqa5ky9/image/upload/showroom-detail_je8xir',
        width: 1200,
        height: 630,
        alt: 'Patricia Pie — dobrodošli iz ZOOFE',
      },
    ],
  },
};

export default function ZoofaPage() {
  return <ZoofaContent />;
}
