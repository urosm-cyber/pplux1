import { Metadata } from 'next';
import PerfectFitContent from './PerfectFitContent';

export const metadata: Metadata = {
  title: 'Perfect Fit | Oblačila po meri | Patricia Pie',
  description: 'Naša signaturna storitev Perfect Fit. Oblačila, prilagojena vašim meram, za popolno prileganje in brezčasno eleganco.',
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dyjqa5ky9/image/upload/HeartstringsOfPassion__11_rkb2xm',
        width: 1200,
        height: 630,
        alt: 'Patricia Pie Perfect Fit — Oblačila po meri',
      },
    ],
  },
};

export default function PerfectFitPage() {
  return <PerfectFitContent />;
}
