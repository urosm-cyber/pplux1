"use client";

import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingContext';
import Link from 'next/link';

export default function BookingCTA({ title }: { title: string }) {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg" onClick={openBooking}>
        Rezerviraj termin
      </Button>
      <Link href="/perfect-fit">
        <Button variant="outline" size="lg">
          Več o Perfect Fit
        </Button>
      </Link>
    </div>
  );
}
