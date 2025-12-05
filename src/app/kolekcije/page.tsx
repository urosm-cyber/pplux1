"use client";

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import Link from 'next/link';

export default function CollectionsPage() {
  const collections = [
    { id: 'ss22-dolce-vita', title: 'SS22 Dolce Vita', season: 'Pomlad/Poletje', year: '2022', image: 'Dolce_Vita___122_wsk6ub' },
    { id: 'fw22-teatro', title: 'FW22 Teatro', season: 'Jesen/Zima', year: '2022', image: 'Teatro_lookbook_103_pvu6bb' },
    { id: 'ss23-bon-voyage', title: 'SS23 Bon Voyage', season: 'Pomlad/Poletje', year: '2023', image: 'BonVoyage_Lookbook__49_azbqhx' },
    { id: 'fw23-new-elegance', title: 'FW23 New Elegance', season: 'Jesen/Zima', year: '2023', image: 'Hlače_Enita_pepita_gube_široke_hlačnice_zavihek_na_dolžini_4_vyhiu8' },
    { id: 'ss24-couture-collective', title: 'SS24 Couture Collective', season: 'Pomlad/Poletje', year: '2024', image: 'Bianca_bela_bluza_print_detajli_rože_18_l80ggm' },
    { id: 'fw24-heartstrings', title: 'FW24 Heartstrings Of Passion', season: 'Jesen/Zima', year: '2024', image: 'HeartstringsOfPassion__2_qjedlh' },
    { id: 'ss25-voyage-blanc', title: 'SS25 Voyage Blanc', season: 'Pomlad/Poletje', year: '2025', image: '10_Vijola_obleka_15_hbchcq' },
    { id: 'fw25-symphonia', title: 'FW25 Symphonia', season: 'Jesen/Zima', year: '2025', image: 'collections/Symphonia/Symphonia_209_gasqsx', featured: true },
    { id: 'dreamscape', title: 'Dreamscape', season: 'Special Couture', year: 'Couture', image: '_P0A5393_oxlnyf' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src="collections/Symphonia/Symphonia_209_gasqsx"
              alt="Patricia Pie Kolekcije"
              fill
              containerClassName="h-full w-full"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-tertiary/30 to-black/50" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4 max-w-4xl mx-auto space-y-6"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-wide">
              Kolekcije
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto tracking-wide">
              Garderoba, grajena skozi čas. Vsaka kolekcija je poglavje tvoje zgodbe.
            </p>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <Section className="bg-background text-center py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-tertiary">Pie Filozofija</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vsak kos je sestavina. Vsaka kolekcija je del celote. 
              Naše kolekcije so zasnovane tako, da se med seboj dopolnjujejo — 
              kosi iz različnih sezon delujejo skupaj in gradijo tvojo popolno garderobo.
            </p>
            <p className="text-base text-muted-foreground italic">
              Ne sledimo hitrim trendom. Ustvarjamo kose, ki jih boš nosila leta.
            </p>
          </motion.div>
        </Section>

        {/* Collections Grid */}
        <Section className="bg-secondary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/kolekcije/${collection.id}`} className="group block">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-3/4 mb-6 rounded-sm shadow-lg">
                    <CloudinaryImage 
                      src={collection.image} 
                      alt={collection.title}
                      fill
                      containerClassName="h-full w-full"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Featured Badge */}
                    {collection.featured && (
                      <div className="absolute top-4 left-4 bg-tertiary text-white px-4 py-2 text-sm font-medium rounded-sm">
                        Najnovejše
                      </div>
                    )}
                  </div>
                  
                  {/* Collection Info */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-heading text-3xl md:text-4xl font-medium group-hover:text-tertiary transition-colors">
                        {collection.title}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="text-base">{collection.season}</span>
                      <span className="w-1 h-1 rounded-full bg-tertiary/50"></span>
                      <span className="text-base">{collection.year}</span>
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-tertiary group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium uppercase tracking-wide">Poglej kolekcijo</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-tertiary/10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading">Želiš videti kose v živo?</h2>
            <p className="text-lg text-muted-foreground">
              Pridi v naš showroom na kavo in ogled. Preizkusi oblačila, pogovorimo se o Perfect Fit možnostih in skupaj najdimo kose, ki so popolni za tebe.
            </p>
            <div className="pt-4">
              <Link 
                href="/showroom"
                className="inline-block bg-tertiary text-white px-8 py-4 rounded-sm font-medium hover:bg-tertiary/90 transition-colors"
              >
                Rezerviraj termin
              </Link>
            </div>
          </motion.div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
