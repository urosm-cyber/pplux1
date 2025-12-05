"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const menuItems = [
  { label: 'Kolekcije', href: '/kolekcije' },
  { label: 'Perfect Fit', href: '/perfect-fit' },
  { label: 'Showroom', href: '/showroom' },
  { label: 'Atelje', href: '/o-znamki' }, // Using 'o-znamki' for Atelier/About based on plan
  { label: 'Kontakt', href: '/kontakt' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-heading font-medium text-foreground hover:text-tertiary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-8">
                 <Button variant="primary" onClick={toggleMenu} className="w-48">
                    Rezervacija
                 </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
