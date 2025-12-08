import { Metadata } from 'next';
import ShowroomContent from './ShowroomContent';

export const metadata: Metadata = {
  title: 'Showroom Ljubljana | Patricia Pie',
  description: 'Obiščite naš intimni modni salon v Ljubljani. Osebno svetovanje, pomerjanje in couture izkušnja z Barbaro Franjić.',
};

export default function ShowroomPage() {
  return <ShowroomContent />;
}
