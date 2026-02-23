"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Trigger GA initialization
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie-consent-updated'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 bg-background border-t border-secondary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <p className="font-heading text-lg font-medium text-foreground">
            Vaša zasebnost
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Spletno mesto Patricia Pie uporablja piškotke za boljšo uporabniško izkušnjo. 
            Nujni piškotki so vedno vklopljeni, analitični pa le z vašim dovoljenjem. 
            <Link href="/piskotki" className="text-tertiary hover:underline ml-1">
              Več o piškotkih
            </Link>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[300px]">
          <Button 
            variant="outline" 
            onClick={handleRejectAll}
            className="w-full sm:flex-1 border-tertiary/30 hover:bg-secondary/10 hover:text-foreground text-muted-foreground font-light tracking-wide uppercase text-xs"
          >
            Zavrni vse
          </Button>
          <Button 
            variant="primary" 
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 font-medium tracking-wide text-xs"
          >
            Sprejmi vse
          </Button>
        </div>
      </div>
    </div>
  );
}
