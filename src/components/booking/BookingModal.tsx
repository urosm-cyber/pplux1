"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Check, Sparkles } from 'lucide-react';
import { useBooking } from './BookingContext';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import Image from 'next/image';
import { sendBookingInquiry } from '@/app/actions';

const locations = [
  { id: 'studio-pp', name: 'Studio PP Ljubljana (Stegne 7)', label: 'Studio PP, Ljubljana (Priporočeno)' },
  { id: 'zoofa', name: 'Zoofa Butik (Ljubljana Center)', label: 'Zoofa Butik, Ljubljana Center' },
  { id: 'atelje', name: 'Atelje (Gornja Radgona)', label: 'Atelje, Gornja Radgona' }
];

export default function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const result = await sendBookingInquiry(formData);
    
    if (result.success) {
      setFormState('success');
      // Longer timeout for visibility (8 seconds)
      setTimeout(() => {
        closeBooking();
        setFormState('idle'); 
      }, 8000);
    } else {
      setFormState('error');
      // Reset error state after 5 seconds to let user try again
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-100"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-101 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="w-full max-w-5xl bg-background shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh] pointer-events-auto border border-secondary/20">
              
              {/* Left Side - Visual (Hidden on mobile) */}
              <div className="hidden md:flex w-1/3 lg:w-[35%] relative min-h-[600px] bg-secondary/10 flex-col">
                <Image
                  src="/images/studio-pp/detail.png"
                  alt="Patricia Pie Studio PP"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="font-serif italic text-3xl mb-4 tracking-tight">Se želiš oglasiti pri meni?</h3>
                  <div className="space-y-1 mb-10 opacity-90">
                     <p className="font-light tracking-wide">Stegne 7, Ljubljana</p>
                     <p className="font-light text-sm">+386 41 988 384</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <p className="font-medium text-white/95 text-lg">Osebno se ti oglasim</p>
                      <p className="font-light text-sm text-white/80 leading-relaxed">
                        Ko izpolniš obrazec, se ti oglasim osebno in skupaj uskladiva termin.
                      </p>
                    </div>
                    
                    <div className="space-y-1.5">
                       <p className="font-medium text-white/95 text-lg">Prvi obisk je brezplačen</p>
                       <p className="font-light text-sm text-white/80 leading-relaxed">
                         Prvi stik je namenjen temu, da se spoznava in v miru pogovoriva.
                       </p>
                    </div>
                  </div>

                  <p className="font-light text-xs mt-12 opacity-60 tracking-widest uppercase">
                    Miren, oseben trenutek brez pritiska.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 p-8 md:p-16 lg:p-20 overflow-y-auto relative bg-background">

                {/* Close Button */}
                <button 
                  onClick={closeBooking}
                  className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-tertiary transition-colors rounded-full hover:bg-secondary/10"
                >
                  <X className="w-6 h-6" />
                </button>

                {formState === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4"
                    >
                      <Check className="w-12 h-12" />
                    </motion.div>
                    <Heading size="lg">Hvala za tvoje sporočilo!</Heading>
                     <p className="text-muted-foreground text-lg max-w-md">
                      Tvoje sporočilo smo prejeli. Prejela boš tudi potrditveno e-pošto.
                      <br/><br/>
                      Barbara te bo kontaktirala v najkrajšem možnem času.
                    </p>
                    <Button variant="outline" onClick={closeBooking} className="mt-8">
                      Nazaj na stran
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <span className="text-tertiary uppercase tracking-[0.2em] text-[10px] font-bold block opacity-80">OSEBNI TERMIN</span>
                      <Heading size="lg" className="font-serif italic font-light tracking-tight">Dogovoriva se za termin.</Heading>
                      <p className="text-muted-foreground max-w-sm leading-relaxed">
                        Izpolni obrazec in oglasim se ti osebno, da skupaj najdeva termin, ki ti najbolj ustreza.
                      </p>
                      
                       <div className="pt-2">
                          <div className="inline-flex items-center gap-2.5 text-foreground/70 text-sm font-light italic">
                            <Sparkles className="w-3.5 h-3.5 text-tertiary/60" /> 
                            <span>Če se srečava prvič, je prvi obisk brezplačen.</span>
                          </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">

                      {/* Honeypot field for spam protection */}
                      <input 
                        type="text" 
                        name="_honey" 
                        style={{ display: 'none' }} 
                        tabIndex={-1} 
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                            Ime in priimek
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all placeholder:text-muted-foreground/30 rounded-t-sm"
                            placeholder="Ime in priimek"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                            Telefon (opcijsko)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all placeholder:text-muted-foreground/30 rounded-t-sm"
                            placeholder="040 123 456"
                          />
                        </div>
                      </div>


                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                          E-naslov
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all placeholder:text-muted-foreground/30 rounded-t-sm"
                          placeholder="vasje.ime@email.com"
                        />
                      </div>


                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label htmlFor="location" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                            Lokacija
                          </label>
                          <div className="relative">
                            <select
                              id="location"
                              name="location"
                              required
                              className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all text-foreground rounded-t-sm appearance-none"
                              defaultValue="Studio PP, Ljubljana (Priporočeno)"
                            >
                              {locations.map((loc) => (
                                <option key={loc.id} value={loc.label}>
                                  {loc.name}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="date" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                            Kateri termin ti okvirno ustreza?
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all text-muted-foreground rounded-t-sm"
                          />
                        </div>
                      </div>


                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-foreground/60 flex items-center gap-2">
                          Mi želiš še kaj napisati? (opcijsko)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-4 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-all placeholder:text-muted-foreground/30 rounded-t-sm resize-none"
                          placeholder="Na primer: zanima me Perfect Fit, iščem nekaj za poseben dogodek ali bi se rada najprej samo oglasila."
                        />
                      </div>


                      {formState === 'error' && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-sm">
                          Prišlo je do napake pri pošiljanju. Prosimo poskusite ponovno.
                        </div>
                      )}

                      <div className="pt-10">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg"
                          className="w-full md:w-auto min-w-[240px] h-14 text-base"
                          disabled={formState === 'submitting'}
                        >
                          {formState === 'submitting' ? 'Pošiljanje...' : 'Pošlji sporočilo'}
                        </Button>
                        <p className="text-[11px] text-muted-foreground mt-6 text-center md:text-left opacity-60">
                          Tvoji podatki so varni. Kontaktirali te bomo samo glede tvojega povpraševanja.
                        </p>

                        
                        <div className="mt-8 pt-6 border-t border-secondary/20">
                             <p className="text-sm text-muted-foreground mb-2">Se ti mudi?</p>
                             <a href="tel:+38641988384" className="flex items-center gap-2 text-foreground font-medium hover:text-tertiary transition-colors">
                                <Phone className="w-4 h-4" />
                                Pokličite Barbaro: +386 41 988 384
                             </a>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
