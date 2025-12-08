'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9F6F3] text-center px-4">
      <h2 className="font-heading text-3xl md:text-4xl text-[#3D3535] mb-4">Nekaj je šlo narobe</h2>
      <p className="text-muted-foreground text-lg max-w-md mb-8 font-light">
        Opravičujemo se za nevšečnosti. Prosimo, poskusite ponovno.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="primary">
          Poskusi ponovno
        </Button>
        <Button onClick={() => window.location.href = '/'} variant="outline">
          Nazaj na vstopno stran
        </Button>
      </div>
    </div>
  );
}
