"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, MapPin } from 'lucide-react';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import type { Location } from '@/lib/locations';

interface LocationCardProps {
  location: Location;
  index?: number;
  showBadge?: boolean;
  showMapLink?: boolean;
}

export default function LocationCard({
  location,
  index = 0,
  showBadge,
  showMapLink,
}: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-background border border-tertiary/20 rounded-sm overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        {location.imageIsCloudinary ? (
          <CloudinaryImage
            src={location.imageSrc}
            alt={location.name}
            fill
            containerClassName="h-full w-full"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <Image
            src={location.imageSrc}
            alt={location.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {showBadge && (
          <div className="absolute top-3 left-3">
            {location.type === 'own' ? (
              <span className="bg-tertiary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                Naša lokacija
              </span>
            ) : (
              <span className="bg-background/90 text-tertiary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-tertiary/30">
                Partner
              </span>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading leading-snug mb-2 text-tertiary">{location.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {location.address}, {location.city}
        </p>

        <ul className="space-y-3 text-muted-foreground mb-6">
          {location.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-tertiary mt-1 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {location.caveat && (
            <li className="flex items-start gap-2 text-muted-foreground/70">
              <span className="w-4 text-center mr-2">⟳</span>
              <span>{location.caveat}</span>
            </li>
          )}
        </ul>

        {location.tagline && (
          <p className="text-sm italic text-tertiary/80">{location.tagline}</p>
        )}

        {showMapLink && (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs text-muted-foreground hover:text-tertiary transition-colors"
          >
            <MapPin className="h-3.5 w-3.5" />
            Odpri v Google Maps
          </a>
        )}
      </div>
    </motion.div>
  );
}
