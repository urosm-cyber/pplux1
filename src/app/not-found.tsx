import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9F6F3] text-center px-4">
      <h1 className="font-heading text-6xl md:text-8xl text-tertiary mb-6 font-light">404</h1>
      <h2 className="font-heading text-3xl md:text-4xl text-[#3D3535] mb-4">Stran ne obstaja</h2>
      <p className="text-muted-foreground text-lg max-w-md mb-8 font-light">
        Opravičujemo se, a stran, ki jo iščete, ni bila najdena ali je bila premaknjena.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">
          Nazaj na vstopno stran
        </Button>
      </Link>
    </div>
  );
}
