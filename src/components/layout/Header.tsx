"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm border-b border-secondary/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50 block">
          <div className="relative h-10 w-48 md:h-12 md:w-56 transition-all duration-300">
            <Image 
              src={isScrolled ? "/logos/logo-black.png" : "/logos/logo-white.png"}
              alt="Patricia Pie"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 192px, 224px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
          <Link href="/kolekcije" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity font-medium">
            Kolekcije
          </Link>
          <Link href="/perfect-fit" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity font-medium">
            Perfect Fit
          </Link>
          <Link href="/showroom" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity font-medium">
            Showroom
          </Link>
          <Link href="/o-znamki" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity font-medium">
            O Znamki
          </Link>
          <Link href="/kontakt">
            <Button variant={isScrolled ? 'primary' : 'outline'} size="sm" className={!isScrolled ? 'border-white text-white hover:bg-white hover:text-black' : ''}>
              Kontakt
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}
