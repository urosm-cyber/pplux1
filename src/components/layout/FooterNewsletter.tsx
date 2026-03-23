'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { subscribeToNewsletter } from '@/app/actions';
import { ArrowRight, Loader2, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      disabled={pending}
      variant="primary"
      size="sm"
      className="absolute right-1 top-1 h-8 w-8 p-0 shrink-0 rounded-sm"
    >
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
      <span className="sr-only">Prijavi se</span>
    </Button>
  );
}

export default function FooterNewsletter() {
  const [state, setState] = useState<{
    success: boolean;
    message?: string;
    error?: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await subscribeToNewsletter(formData);
    
    if (result.success) {
      setState({ success: true, message: 'Hvala za prijavo.' });
    } else {
      setState({ success: false, error: result.error || 'Napaka pri prijavi.' });
    }
  }

  if (state?.success) {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50/50 p-3 rounded-sm animate-in fade-in slide-in-from-bottom-2">
        <Check className="h-4 w-4 shrink-0" />
        <p className="font-medium">Hvala za prijavo.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h4 className="font-heading text-lg font-medium text-foreground/90">Ostani blizu</h4>
      <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
        Občasno pošljemo kaj lepega. <br />
        Vabilo v studio, nov pogled ali trenutek iz sveta Patricia Pie.
      </p>
      
      <form action={handleSubmit} className="relative max-w-xs">
        {/* Honeypot field for spam protection */}
        <input 
          type="text" 
          name="_honey" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Tvoj e-naslov"
          required
          className="w-full h-10 pl-3 pr-10 text-sm bg-background border border-input rounded-sm focus:outline-none focus:border-tertiary transition-colors placeholder:text-muted-foreground/50"
        />
        <SubmitButton />
      </form>

      {state?.error && (
        <div className="flex items-center gap-2 text-xs text-red-600 animate-in fade-in">
          <AlertCircle className="h-3 w-3 shrink-0" />
          <p>{state.error}</p>
        </div>
      )}
    </div>
  );
}
