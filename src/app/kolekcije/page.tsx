import { Metadata } from 'next';
import CollectionsContent from './CollectionsContent';

export const metadata: Metadata = {
  title: 'Kolekcije | Patricia Pie',
  description: 'Raziščite naše modne kolekcije. Brezčasna eleganca, trajnostni materiali in vrhunsko krojaštvo slovenskega ateljeja.',
};

export default function CollectionsPage() {
  return <CollectionsContent />;
}
