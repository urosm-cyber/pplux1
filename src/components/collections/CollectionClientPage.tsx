"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import type { ImageResource } from '@/lib/cloudinary-server';
import Link from 'next/link';
import BookingCTA from '@/components/booking/BookingCTA';
import GarmentInquiryModal from '@/components/modals/GarmentInquiryModal';

type CollectionData = {
  id: string;
  title: string;
  season: string;
  year: string;
  tagline: string;
  description: string[];
  images: {
    hero: string[];
    looks: string[];
  };
  perfectFitAvailable: boolean;
  cloudinaryFolder?: string;
};

export default function CollectionClientPage({ 
  collection, 
  galleryImages,
  otherCollections
}: { 
  collection: CollectionData;
  galleryImages: ImageResource[];
  otherCollections: CollectionData[];
}) {
  const [inquiryImage, setInquiryImage] = useState<{ id: string; alt: string } | null>(null);

  // We can use the context here if needed, but BookingCTA handles the button.
  // We kept 'useBooking' import just in case, or we can remove it if BookingCTA does the job.
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src={collection.images.hero[0]}
              alt={collection.title}
              fill
              containerClassName="h-full w-full"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4 pb-16 max-w-7xl mx-auto w-full"
          >
            <div className="max-w-3xl">
              <p className="text-white/80 text-lg mb-3 uppercase tracking-widest">
                {collection.season} {collection.year}
              </p>
              <h1 className="font-heading text-5xl md:text-7xl font-light text-white mb-4">
                {collection.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                {collection.tagline}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Collection Story */}
        <Section className="bg-background py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {collection.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            
            {collection.perfectFitAvailable && (
              <div className="pt-6 flex items-center gap-2 text-tertiary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium">Perfect Fit prilagoditev na voljo</span>
              </div>
            )}
          </motion.div>
        </Section>

        {/* Complete Looks Gallery - Optimized Masonry */}
        <Section className="bg-linear-to-b from-secondary/5 via-background to-secondary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <Heading size="lg" className="mb-4">Kolekcija</Heading>
              <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-tertiary to-transparent mx-auto"></div>
            </div>
            
            {/* Premium Grid Layout - Smart Spanning */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max">
              {galleryImages.map((image, index) => {
                const isLandscape = image.width > image.height;
                const imageAlt = `${collection.title} Look ${index + 1}`;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                    className={`group relative ${isLandscape ? 'md:col-span-2' : 'col-span-1'} cursor-pointer`}
                    onClick={() => setInquiryImage({ id: image.public_id, alt: imageAlt })}
                  >
                    <div className={`relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-500 bg-secondary/10 border border-tertiary/10 ${isLandscape ? 'aspect-3/2' : 'aspect-3/4'}`}>
                      <CloudinaryImage
                        src={image.public_id}
                        alt={`${collection.title} Look ${index + 1}`}
                        fill
                        sizes={isLandscape 
                          ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw" 
                          : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                        containerClassName="h-full w-full"
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      

                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-sm border border-tertiary/20 shadow-lg">
                            <span className="text-sm font-medium text-foreground tracking-wide">
                              Look {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <Button 
                            className="bg-tertiary text-white hover:bg-tertiary/90 shadow-lg rounded-sm tracking-widest uppercase text-xs px-5 py-2 font-medium border border-tertiary pointer-events-none"
                          >
                            Povpraševanje
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12 text-muted-foreground text-sm">
              <p>{galleryImages.length} fotografij v galeriji</p>
            </div>
          </motion.div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-tertiary/10 text-center py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <Heading size="xl">Želiš videti {collection.title} v živo?</Heading>
            <p className="text-lg text-muted-foreground">
              Pridi v naš Studio PP, preizkusi oblačila in se pogovorimo o Perfect Fit možnostih. 
              Vsak kos lahko prilagodimo tvoji popolni meri.
            </p>
            <BookingCTA title={collection.title} />
          </motion.div>
        </Section>

        {/* More Collections Navigation */}
        <Section className="bg-background py-16 border-t border-secondary/20">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-12">
               <Heading size="lg">Odkrijte več</Heading>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {otherCollections.map((otherCollection) => (
                 <Link key={otherCollection.id} href={`/kolekcije/${otherCollection.id}`} className="group block">
                   <div className="relative aspect-3/4 overflow-hidden mb-4 rounded-sm">
                     <CloudinaryImage
                       src={otherCollection.images.hero[0]}
                       alt={otherCollection.title}
                       fill
                       sizes="(max-width: 768px) 100vw, 33vw"
                       containerClassName="h-full w-full"
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                   </div>
                   <h3 className="font-heading text-xl text-center group-hover:text-tertiary transition-colors">
                     {otherCollection.title}
                   </h3>
                 </Link>
               ))}
             </div>
             <div className="text-center mt-12">
               <Link href="/kolekcije">
                  <Button variant="outline">Vse kolekcije</Button>
               </Link>
             </div>
          </div>
        </Section>

        <GarmentInquiryModal
          isOpen={!!inquiryImage}
          onClose={() => setInquiryImage(null)}
          imagePublicId={inquiryImage?.id || ''}
          collectionTitle={collection.title}
          imageAlt={inquiryImage?.alt || ''}
        />

      </main>
      
      <Footer />
    </div>
  );
}
