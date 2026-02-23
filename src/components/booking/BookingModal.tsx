"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, MessageSquare, Check, MapPin, Sparkles } from 'lucide-react';
import { useBooking } from './BookingContext';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import { sendBookingInquiry } from '@/app/actions';
import { BOOKABLE_LOCATIONS } from '@/lib/locations';

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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="w-full max-w-5xl bg-background shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh] pointer-events-auto border border-secondary/20">
              
              {/* Left Side - Visual (Hidden on mobile) */}
              <div className="hidden md:block w-1/3 lg:w-2/5 relative min-h-[600px] bg-secondary/10">
                <CloudinaryImage
                  src="showroom-detail_je8xir"
                  alt="Patricia Pie Showroom"
                  fill
                  containerClassName="h-full w-full"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="font-heading text-3xl mb-2">Želiš svoj termin?</h3>
                  <div className="mb-8">
                     <p className="font-light text-sm opacity-75">+386 41 988 384</p>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm">
                    <p className="font-medium text-white mb-2">📞 Osebna potrditev</p>
                    <p className="font-light text-sm opacity-80 mb-4">
                      Barbara te bo poklicala v roku 24 ur za potrditev najboljšega termina zate.
                    </p>
                    
                     <div className="pt-4 border-t border-white/10">
                         <p className="font-medium text-white mb-1">🎁 Prvi obisk je brezplačen</p>
                         <p className="font-light text-sm opacity-80">
                           Spoznaj nas brez obveznosti.
                         </p>
                     </div>
                  </div>

                  <p className="font-light text-sm mt-8 opacity-75">
                    &quot;Intimna, privatna couture izkušnja.&quot;
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto relative bg-background">
                {/* Close Button */}
                <button
                  onClick={closeBooking}
                  aria-label="Zapri"
                  className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-tertiary transition-colors rounded-full hover:bg-secondary/10"
                >
                  <X className="w-6 h-6" />
                </button>

                {formState === 'success' ? (
                  <div role="status" aria-live="polite" className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
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
                  <div className="space-y-8">
                    <div>
                      <span className="text-tertiary uppercase tracking-widest text-xs font-bold mb-2 block">Osebni dogovor</span>
                      <Heading size="lg" className="mb-3">Kdaj se vidimo?</Heading>
                      <p className="text-muted-foreground mb-4">
                        Izpolni obrazec in Barbara te bo kontaktirala za uskladitev termina, ki ti najbolj ustreza.
                      </p>
                      
                       <div className="flex flex-col gap-3">
                          <div className="inline-block bg-secondary/10 px-4 py-2 rounded-sm border border-secondary/20 w-fit">
                            <span className="text-foreground font-medium text-sm flex items-center gap-2"><Sparkles className="w-4 h-4 text-tertiary" /> Prvič pri nas? Prvi obisk je popolnoma brezplačen.</span>
                          </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot field for spam protection */}
                      <input 
                        type="text" 
                        name="_honey" 
                        style={{ display: 'none' }} 
                        tabIndex={-1} 
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                            <User className="w-4 h-4 text-tertiary" /> Tvoje ime
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/50 rounded-t-sm"
                            placeholder="Ime in priimek"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-tertiary" /> Telefon (neobvezno)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/50 rounded-t-sm"
                            placeholder="040 123 456"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-tertiary" /> E-naslov
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/50 rounded-t-sm"
                          placeholder="vasje.ime@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="location" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-tertiary" /> Lokacija
                          </label>
                          <div className="relative">
                            <select
                              id="location"
                              name="location"
                              required
                              className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors text-foreground rounded-t-sm appearance-none"
                              defaultValue="showroom"
                            >
                              {BOOKABLE_LOCATIONS.map((loc) => (
                                <option
                                  key={loc.id}
                                  value={loc.id}
                                >
                                  {loc.shortName}{loc.bookingNote ? ` — ${loc.bookingNote}` : ''}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="date" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-tertiary" /> Kdaj ti ustreza?
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors text-muted-foreground rounded-t-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-tertiary" /> Imaš kakšno vprašanje ali željo? (opcijsko)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-4 py-3 bg-secondary/5 border-b border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/50 rounded-t-sm resize-none"
                          placeholder="Želim posvet glede Perfect Fit, iščem obleko za poroko..."
                        />
                      </div>

                      {formState === 'error' && (
                        <div role="alert" className="p-3 bg-red-50 text-red-600 text-sm rounded-sm">
                          Prišlo je do napake pri pošiljanju. Prosimo poskusite ponovno.
                        </div>
                      )}

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          className="w-full md:w-auto min-w-[200px]"
                          disabled={formState === 'submitting'}
                        >
                          {formState === 'submitting' ? 'Pošiljanje...' : 'Pošlji povpraševanje'}
                        </Button>
                        <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
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
