"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Button } from "@/components/ui/Button";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import { useBooking } from "@/components/booking/BookingContext";

export default function Hero() {
  const { openBooking } = useBooking();
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative h-[95vh] w-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <CloudinaryImage
            src="Bluza_Pia_1_qelzxb"
            alt="Patricia Pie Couture - Symphonia kolekcija"
            fill
            className="object-cover"
            containerClassName="h-full w-full"
            crop="fill"
            gravity="auto"
            zoom="1.0"  // Reduced zoom to avoid unnecessary scaling work
            priority
            sizes="100vw" // Explicitly tell browser this is full width
          />
  
          {/* Elegant Gradient Overlay - Increased opacity for better text visibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
  
        {/* Hero content */}
        <div className="relative h-full w-full px-4 flex flex-col justify-center items-center text-center text-white">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wide drop-shadow-2xl">
              Včasih je dovolj en pogled.
            </h1>
          </m.div>
  
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl max-w-xl mb-16 font-light tracking-wider leading-loose drop-shadow-xl text-white/90">
              Tisti miren trenutek, ko ne popravljaš ničesar več.<br />
              Samo pogledaš se in veš: to sem jaz.
            </p>
          </m.div>
  
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Button
              variant="primary"
              size="lg"
              className="min-w-[220px] bg-white text-black hover:bg-white/90 border-none transition-all duration-300"
              onClick={openBooking}
            >
              Rezerviraj termin
            </Button>
            <Link href="/perfect-fit">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[220px] border-white/50 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300"
              >
                Odkrij Perfect Fit
              </Button>
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
