'use client';

import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { useBooking } from '@/components/booking/BookingContext';
import { BOOKABLE_LOCATIONS } from '@/lib/locations';

export default function HomepageLocations() {
  const { openBooking } = useBooking();

  return (
    <Section className="bg-secondary/10">
      <div className="text-center mb-12">
        <Heading size="lg">Kje nas najdeš</Heading>
        <p className="mt-4 text-muted-foreground text-lg">
          4 lokacije. Ena filozofija.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BOOKABLE_LOCATIONS.map((location) => (
          <div
            key={location.id}
            className="bg-background p-6 rounded-sm border border-secondary/50 flex flex-col gap-4"
          >
            <div className="space-y-1">
              <h3 className="font-heading text-lg font-semibold">
                {location.shortName}
              </h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{location.city}</span>
              </div>
            </div>

            {location.tagline && (
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {location.tagline}
              </p>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={openBooking}
              className="w-full mt-auto"
            >
              Rezerviraj termin
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
