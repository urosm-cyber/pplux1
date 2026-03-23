'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export default function Newsletter() {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setMessage(null);

    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setMessage({ text: result.message || 'Hvala vpis!', type: 'success' });
    } else {
      setMessage({ text: result.error || 'Napaka.', type: 'error' });
    }
    setPending(false);
  }

  return (
    <Section className="bg-secondary/10 py-24 md:py-32">
       <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6">
             <Heading size="lg" className="tracking-tight">Ostani blizu.</Heading>
             <p className="text-muted-foreground/80 leading-relaxed text-lg max-w-xl mx-auto">
               Občasno pošljemo novico, ki ni samo novica. <br className="hidden md:block" />
               Vabilo v studio, nov pogled, nov občutek — in trenutke, ki jih delimo le redko.
             </p>
          </div>

          <form action={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto pt-2">
             {/* Honeypot field for spam protection */}
             <input 
               type="text" 
               name="_honey" 
               style={{ display: 'none' }} 
               tabIndex={-1} 
               autoComplete="off"
             />
             <input 
               name="email"
               type="email" 
               placeholder="Tvoj e-naslov"
               required
               className="flex-1 px-4 py-3 bg-white border border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/40 font-light"
             />
             <Button type="submit" variant="primary" disabled={pending} className="whitespace-nowrap px-10">
               {pending ? 'Pošiljanje...' : 'Pridruži se'}
             </Button>
          </form>

          {message && (
            <div className={`p-4 text-sm ${message.type === 'success' ? 'text-[#C9A66B] bg-[#C9A66B]/10' : 'text-red-500 bg-red-50'}`}>
              {message.text}
            </div>
          )}
          
          <p className="text-xs text-muted-foreground/50 max-w-sm mx-auto leading-loose">
             S prijavo se strinjaš z našo politiko zasebnosti. <br className="hidden md:block" />
             Odjaviš se lahko kadarkoli.
          </p>
       </div>
    </Section>
  );
}
