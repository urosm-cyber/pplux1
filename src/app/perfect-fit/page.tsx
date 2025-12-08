import { Metadata } from 'next';
import PerfectFitContent from './PerfectFitContent';

export const metadata: Metadata = {
  title: 'Perfect Fit | Oblačila po meri | Patricia Pie',
  description: 'Naša signaturna storitev Perfect Fit. Oblačila, prilagojena vašim meram, za popolno prileganje in brezčasno eleganco.',
};

export default function PerfectFitPage() {
  return <PerfectFitContent />;
}
