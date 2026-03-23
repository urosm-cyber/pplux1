import { Metadata } from 'next';
import StudioPPContent from './StudioPPContent';

export const metadata: Metadata = {
  title: 'Studio PP Ljubljana | Patricia Pie',
  description: 'Obiščite naš intimni modni salon v Ljubljani. Osebno svetovanje, pomerjanje in couture izkušnja z Barbaro Franjić.',
};

export default function StudioPPPage() {
  return <StudioPPContent />;
}
