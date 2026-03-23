"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/booking/BookingContext';

const menuItems = [
  { label: 'Domov', href: '/' },
  { label: 'Kolekcije', href: '/kolekcije' },
  { label: 'Perfect Fit', href: '/perfect-fit' },
  { label: 'Studio PP', href: '/studio-pp' },
  { label: 'Zgodba', href: '/o-znamki' },
  { label: 'Zapiski', href: '/zapiski' },
  { label: 'Kontakt', href: '/kontakt' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.32, 0.72, 0, 1] as const
    } 
  }
};


interface MobileMenuProps {
  isScrolled: boolean;
}

export default function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
        className={`hover:bg-transparent ${isScrolled ? 'text-[#3D3535]' : 'text-white'}`}
      >
        <Menu className="h-8 w-8" />
      </Button>



      {mounted && createPortal(
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[999] flex flex-col bg-[#FDFBF9]"
          >
            <div className="flex items-center justify-between p-6">
              <div className="relative h-10 w-40">
                <Image 
                  src="/logos/logo-black.png"
                  alt="Patricia Pie"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="160px"
                />
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMenu} 
                aria-label="Close menu"
                className="text-[#3D3535] hover:bg-transparent"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>

            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 flex flex-col items-center justify-center space-y-6 -mt-10"
            >
              {menuItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-3xl font-heading font-medium tracking-wide text-[#3D3535] hover:text-[#C9A66B] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-8">
                 <Button 
                    variant="primary" 
                    onClick={() => {
                      toggleMenu();
                      openBooking();
                    }} 
                    className="w-64 text-lg py-7 bg-[#C9A66B] hover:bg-[#b08d55] text-white rounded-none tracking-wider uppercase"
                 >
                    Rezerviraj termin
                 </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}

      </AnimatePresence>,
      document.body
      )}
    </div>
  );
}
