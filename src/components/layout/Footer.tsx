import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-secondary">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="block relative h-12 w-48">
               <Image 
                  src="/logos/logo-black.png"
                  alt="Patricia Pie"
                  fill
                  className="object-contain object-left"
                />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Slovenska butična modna hiša, kjer se eleganca sreča z udobjem in popolnim prileganjem.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Razišči</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kolekcije" className="hover:text-tertiary transition-colors">Kolekcije</Link></li>
              <li><Link href="/perfect-fit" className="hover:text-tertiary transition-colors">Perfect Fit</Link></li>
              <li><Link href="/showroom" className="hover:text-tertiary transition-colors">Showroom</Link></li>
              <li><Link href="/o-znamki" className="hover:text-tertiary transition-colors">O znamki</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Stegne 7, 1000 Ljubljana</li>
              <li>Jurkovičeva ulica 1, 9250 Gornja Radgona</li>
              <li><a href="mailto:info@patriciapie.com" className="hover:text-tertiary transition-colors">info@patriciapie.com</a></li>
              <li>+386 41 988 384</li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Sledite nam</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="mailto:info@patriciapie.com" className="hover:text-tertiary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/50 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Patricia Pie. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
}
