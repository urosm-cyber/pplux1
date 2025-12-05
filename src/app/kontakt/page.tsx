"use client";

import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="bg-secondary/10 py-12 md:py-20">
           <div className="text-center max-w-3xl mx-auto">
              <Heading as="h1" size="xl" className="mb-6">Kontakt</Heading>
              <p className="text-lg text-muted-foreground">
                 Tukaj smo za vas. Rezervirajte termin, povprašajte o kolekcijah ali pa nas preprosto pozdravite.
              </p>
           </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-10">
               <div>
                  <Heading size="md" className="mb-6">Lokacije</Heading>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <MapPin className="h-6 w-6 text-tertiary shrink-0" />
                        <div>
                           <h3 className="font-bold">Showroom Ljubljana</h3>
                           <p className="text-muted-foreground">Stegne 7, 1000 Ljubljana</p>
                           <p className="text-sm text-muted-foreground mt-1">Po dogovoru</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <MapPin className="h-6 w-6 text-tertiary shrink-0" />
                        <div>
                           <h3 className="font-bold">Atelje Gornja Radgona</h3>
                           <p className="text-muted-foreground">Jurkovičeva ulica 1, 9250 Gornja Radgona</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <MapPin className="h-6 w-6 text-tertiary shrink-0" />
                        <div>
                           <h3 className="font-bold">Trgovina Zoofa</h3>
                           <p className="text-muted-foreground">Miklošičeva cesta 4, 1000 Ljubljana</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <Heading size="md" className="mb-6">Stopite v stik</Heading>
                  <div className="space-y-4">
                     <div className="flex gap-4 items-center">
                        <Phone className="h-5 w-5 text-tertiary" />
                        <a href="tel:+38641988384" className="hover:text-tertiary transition-colors">+386 41 988 384</a>
                     </div>
                     <div className="flex gap-4 items-center">
                        <Mail className="h-5 w-5 text-tertiary" />
                        <a href="mailto:info@patriciapie.com" className="hover:text-tertiary transition-colors">info@patriciapie.com</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background border border-secondary p-8 rounded-sm shadow-sm">
               <Heading size="md" className="mb-6">Pošljite sporočilo</Heading>
               {formState === 'success' ? (
                  <div className="text-center py-12 space-y-4">
                     <div className="text-4xl">✨</div>
                     <h3 className="text-xl font-bold">Hvala za vaše sporočilo!</h3>
                     <p className="text-muted-foreground">Odgovorili vam bomo v najkrajšem možnem času.</p>
                     <Button variant="outline" onClick={() => setFormState('idle')}>Pošlji novo sporočilo</Button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label htmlFor="name" className="text-sm font-medium">Ime in priimek</label>
                           <input 
                              type="text" 
                              id="name" 
                              required 
                              className="w-full h-11 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-tertiary transition-all"
                              placeholder="Janez Novak"
                           />
                        </div>
                        <div className="space-y-2">
                           <label htmlFor="email" className="text-sm font-medium">E-naslov</label>
                           <input 
                              type="email" 
                              id="email" 
                              required 
                              className="w-full h-11 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-tertiary transition-all"
                              placeholder="janez@example.com"
                           />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="type" className="text-sm font-medium">Vrsta povpraševanja</label>
                        <select 
                           id="type" 
                           className="w-full h-11 px-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-tertiary transition-all"
                        >
                           <option>Splošno povpraševanje</option>
                           <option>Rezervacija termina (Showroom)</option>
                           <option>Perfect Fit svetovanje</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Sporočilo</label>
                        <textarea 
                           id="message" 
                           required 
                           rows={5}
                           className="w-full p-4 border border-input bg-background focus:outline-none focus:ring-1 focus:ring-tertiary transition-all resize-none"
                           placeholder="Vaše sporočilo..."
                        />
                     </div>
                     <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full"
                        disabled={formState === 'submitting'}
                     >
                        {formState === 'submitting' ? 'Pošiljanje...' : 'Pošlji sporočilo'}
                     </Button>
                  </form>
               )}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
