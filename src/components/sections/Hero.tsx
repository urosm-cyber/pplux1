"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import CloudinaryImage from "@/components/shared/CloudinaryImage";

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <CloudinaryImage
          src="collections/Symphonia/Symphonia_190_xchxis"
          alt="Patricia Pie Couture - Symphonia kolekcija"
          fill
          className="object-cover"
          containerClassName="h-full w-full"
          crop="fill"
          gravity="auto"
          zoom="1.05"  // lahko kasneje prilagodiš (1.0–1.2)
          priority
        />

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Hero content */}
      <div className="relative h-full w-full px-4 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide drop-shadow-xl">
            Oblačila, ki vas razumejo
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-2xl max-w-2xl mb-12 font-light tracking-wider drop-shadow-md text-white/90">
            Popolna mera. Osebni pristop. Brezčasna eleganca.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/showroom">
            <Button
              variant="primary"
              size="lg"
              className="min-w-[220px] bg-white text-black hover:bg-white/90 border-none"
            >
              Rezerviraj termin
            </Button>
          </Link>
          <Link href="/kolekcije">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[220px] border-white text-white hover:bg-white hover:text-black backdrop-blur-sm"
            >
              Poglej kolekcijo
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
      >
        <span className="text-sm tracking-widest uppercase text-[10px]">
          Razišči
        </span>
      </motion.div>
    </section>
  );
}
