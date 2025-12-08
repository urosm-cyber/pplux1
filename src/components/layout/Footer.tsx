import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import FooterNewsletter from '@/components/layout/FooterNewsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-secondary">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block relative h-10 w-40">
               <Image 
                  src="/logos/logo-black.png"
                  alt="Patricia Pie"
                  fill
                  className="object-contain object-left"
                />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Slovenska modna hiša, kjer se eleganca sreča z udobjem. Kroji, ki te razumejo, osebni pristop in brezčasen dizajn.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Razišči svet Pie</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground/80">
              <Link href="/kolekcije" className="hover:text-tertiary transition-colors w-fit">Kolekcije</Link>
              <Link href="/perfect-fit" className="hover:text-tertiary transition-colors w-fit">Perfect Fit</Link>
              <Link href="/showroom" className="hover:text-tertiary transition-colors w-fit">Showroom</Link>
              <Link href="/o-znamki" className="hover:text-tertiary transition-colors w-fit">O znamki</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground/80">
              <li className="flex flex-col">
                <span className="font-medium text-foreground">Showroom</span>
                <span>Stegne 7, 1000 Ljubljana</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-foreground">Atelje</span>
                <span>Jurkovičeva ulica 1, 9250 Gornja Radgona</span>
              </li>
              <li className="pt-2">
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">Rezervacije & Klepet</span>
                <a href="mailto:info@patriciapie.si" className="hover:text-tertiary transition-colors block">info@patriciapie.si</a>
                <a href="tel:+38641988384" className="hover:text-tertiary transition-colors block">+386 41 988 384</a>
              </li>
              <li className="text-xs pt-1 italic">
                Odprto po predhodnem dogovoru.
              </li>
            </ul>
          </div>

          {/* Newsletter & Socials Column */}
          <div className="space-y-8">
            <FooterNewsletter />
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Spremljaj nas</h4>
              <div className="flex space-x-4 text-muted-foreground">
                <a href="https://www.instagram.com/patricia_pie/" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/PatriciaPieFashion" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/in/barbara-franjic/" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Patricia Pie. Vse pravice pridržane.</p>
          <div className="flex space-x-6">
            <Link href="/pravna-obvestila" className="hover:text-tertiary transition-colors">Pravna obvestila</Link>
            <Link href="/zasebnost" className="hover:text-tertiary transition-colors">Zasebnost</Link>
            <Link href="/piskotki" className="hover:text-tertiary transition-colors">Piškotki</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
