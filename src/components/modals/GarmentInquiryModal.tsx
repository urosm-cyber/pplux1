"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import { sendGarmentInquiry } from "@/app/actions";

type GarmentInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imagePublicId: string;
  collectionTitle: string;
  imageAlt: string;
};

export default function GarmentInquiryModal({
  isOpen,
  onClose,
  imagePublicId,
  collectionTitle,
  imageAlt,
}: GarmentInquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);

    // Construct the full image URL to send to the server
    const imageUrl = `https://res.cloudinary.com/dqofx6x3k/image/upload/${imagePublicId}`;
    formData.append("imageUrl", imageUrl);
    formData.append("collectionTitle", collectionTitle);

    const result = await sendGarmentInquiry(formData);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || "Prišlo je do napake.");
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background w-full max-w-lg rounded-sm shadow-2xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="font-heading text-2xl text-tertiary">
                      Povpraševanje uspešno poslano
                    </h2>
                    <p className="text-muted-foreground">
                      Hvala za tvoje zanimanje. Na tvoj email smo poslali potrditev.
                      Kmalu te bomo kontaktirali.
                    </p>
                    <Button variant="outline" onClick={onClose} className="mt-6">
                      Zapri
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl mb-2">Povpraševanje za kos</h2>
                    <p className="text-muted-foreground text-sm mb-6">
                      Zanima te kos iz kolekcije <strong>{collectionTitle}</strong>.
                      Izpolni obrazec in odgovorili ti bomo glede razpoložljivosti.
                    </p>

                    <div className="flex gap-6 mb-8 bg-secondary/10 p-4 rounded-sm items-center">
                      <div className="relative w-24 h-32 shrink-0 rounded-sm overflow-hidden border border-border">
                        <CloudinaryImage
                          src={imagePublicId}
                          alt={imageAlt}
                          fill
                          containerClassName="h-full w-full"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="block font-medium text-foreground mb-1">Izbrani stil</span>
                        {imageAlt}
                      </div>
                    </div>

                    <form action={handleSubmit} className="space-y-4">
                      {/* Honeypot field for spam protection */}
                      <input 
                        type="text" 
                        name="_honey" 
                        style={{ display: 'none' }} 
                        tabIndex={-1} 
                        autoComplete="off"
                      />
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Ime in priimek
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-3 py-2 border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-tertiary"
                          placeholder="Tvoje ime"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-poštni naslov
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-tertiary"
                          placeholder="tvoj@email.si"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Sporočilo (neobvezno)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full px-3 py-2 border border-input rounded-sm bg-background focus:outline-none focus:ring-1 focus:ring-tertiary resize-none"
                          placeholder="Zanima me..."
                        />
                      </div>

                      {error && (
                        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-sm">
                          {error}
                        </div>
                      )}

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="w-full bg-tertiary text-white hover:bg-tertiary/90 rounded-sm font-medium tracking-wide"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Pošiljanje...
                            </>
                          ) : (
                            "Pošlji povpraševanje"
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
