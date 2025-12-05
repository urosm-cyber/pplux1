"use client";

import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import Link from 'next/link';
import Image from 'next/image';
import { Crown, Scissors, Leaf, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <CloudinaryImage 
              src="IMG_2050a_Obd_ciiyvf.jpg" 
              alt="Barbara Franjić" 
              fill 
              containerClassName="h-full w-full"
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading as="h1" size="xl" className="mb-6 drop-shadow-2xl text-white">
                Zgodba Patricia Pie
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="text-xl md:text-2xl font-light italic max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
                &quot;Ko vidim blago, takoj vidim obleko.&quot;
              </p>
              <p className="mt-4 text-lg font-medium tracking-wide uppercase text-white/90">— Barbara Franjić</p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN STORY (Barbara) */}
        <Section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-3/4 w-full rounded-sm overflow-hidden shadow-xl">
                 <CloudinaryImage 
                   src="Barbara_-_PATRICIA_PIE_rax9v3.jpg" 
                   alt="Barbara Franjić v ateljeju" 
                   fill 
                   containerClassName="h-full w-full"
                   className="object-cover object-center"
                 />
              </div>
              
              <div className="lg:col-span-1 border-l border-tertiary/30 hidden lg:block order-last lg:order-2 mx-auto h-full min-h-[400px]"></div>

              <div className="lg:col-span-6 order-1 lg:order-3 space-y-8">
                <div>
                   <span className="text-tertiary uppercase tracking-widest text-sm font-semibold mb-2 block">Ustanoviteljica</span>
                   <Heading size="xl" className="mb-6 text-foreground">Barbara Franjić</Heading>
                </div>
                
                <div className="space-y-6 text-lg text-warm-gray leading-relaxed font-light">
                  <p>
                    Barbara Franjić je ustanoviteljica in glavna oblikovalka znamke Patricia Pie, butične &quot;couture&quot; znamke, 
                    ki že od leta 2011 oblikuje izrazito romantičen, ženstven univerzum. Njen odnos do oblačil se je začel 
                    že v otroštvu kot tiha fascinacija nad blagom in formo.
                  </p>
                  <p>
                    Po končani Srednji tekstilni šoli v Ljubljani je nadaljevala študij na Fakulteti za strojništvo v Mariboru 
                    (smer Oblikovanje tekstilij in oblačil), kjer je poglobila razumevanje materialov in krojev.
                  </p>
                  <p>
                    Kmalu je spoznala, da njena prava strast ne leži v industriji, temveč v intimnem, butičnem pristopu. 
                    Tako se je rodila <strong>Patricia Pie</strong>. Ime &quot;Patricia&quot; je bilo izbrano zaradi mednarodne elegance, 
                    &quot;Pie&quot; (pita) pa kot metafora: tako kot sestavine tvorijo popolno pito, se kosi Patricia Pie sestavijo 
                    v popolno garderobo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PIE PHILOSOPHY */}
        <Section className="bg-soft-cream py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl cursor-default">
            <span className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3 block">Koncept</span>
            <Heading size="xl" className="mb-10 text-deep-warm">The Pie Philosophy</Heading>
            
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed font-heading italic mb-12">
              &quot;Vsak kos je sestavina vaše popolne garderobe.&quot;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-tertiary">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Brezčasni Slog</h3>
                <p className="text-warm-gray leading-relaxed">
                  Podpis Barbare Franjić je romantičen in nežen. Mehke silhuete, poudarjen pas in A-linije 
                  združujejo nostalgijo 50ih in 60ih let z modernim pridihom.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-viola">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Garderoba, ne Trend</h3>
                <p className="text-warm-gray leading-relaxed">
                  Oblačila niso kostumi za socialna omrežja, ampak koherentna garderoba za resnično življenje. 
                  Kupi manj, izberi bolje, nosi dlje.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-secondary">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Perfect Fit</h3>
                <p className="text-warm-gray leading-relaxed">
                  Ni treba, da se vi prilagodite obleki. Obleka se mora prilagoditi vam. 
                  To je bistvo našega &apos;Perfect Fit&apos; pristopa že od samega začetka.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* VALUES */}
        <Section className="bg-background py-24">
           <div className="container mx-auto px-4">
              <Heading size="lg" className="text-center mb-20 relative inline-block w-full">
                 <span className="relative z-10 px-4 bg-background">Vrednote Znamke</span>
                 <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-tertiary/20 z-0"></span>
              </Heading>
              
              <motion.div 
                 className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={{
                   hidden: { opacity: 0 },
                   visible: {
                     opacity: 1,
                     transition: {
                       staggerChildren: 0.15
                     }
                   }
                 }}
              >
                 {/* 1. Femininity & Confidence */}
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center space-y-6 p-6 group rounded-sm border border-transparent hover:border-tertiary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50"
                 >
                    <div className="h-16 flex items-center justify-center text-highlight group-hover:scale-110 transition-transform duration-300">
                       <Crown strokeWidth={1} size={36} />
                    </div>
                    <div className="space-y-3">
                       <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">Ženskost & Samozavest</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Vsak kos je oblikovan tako, da podpira vašo prezenco in poudari vašo notranjo moč.
                       </p>
                    </div>
                 </motion.div>

                 {/* 2. Craftsmanship */}
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center space-y-6 p-6 group rounded-sm border border-transparent hover:border-tertiary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50"
                 >
                    <div className="h-16 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                       <Scissors strokeWidth={1} size={36} />
                    </div>
                    <div className="space-y-3">
                       <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">Rokodelska Odličnost</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Ohranjamo slovensko tekstilno dediščino. Vsak šiv je premišljen, vsak detajl ima pomen.
                       </p>
                    </div>
                 </motion.div>

                 {/* 3. Sustainability */}
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center space-y-6 p-6 group rounded-sm border border-transparent hover:border-tertiary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50"
                 >
                    <div className="h-16 flex items-center justify-center text-secondary-darker group-hover:scale-110 transition-transform duration-300">
                       <Leaf strokeWidth={1} size={36} />
                    </div>
                     <div className="space-y-3">
                       <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">Iskrena Trajnost</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                           Lokalna proizvodnja, majhne serije in transparenten odnos do materialov in okolja.
                       </p>
                    </div>
                 </motion.div>

                 {/* 4. Personal Transformation */}
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center space-y-6 p-6 group rounded-sm border border-transparent hover:border-tertiary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50"
                 >
                    <div className="h-16 flex items-center justify-center text-highlight group-hover:scale-110 transition-transform duration-300">
                       <Sparkles strokeWidth={1} size={36} />
                    </div>
                    <div className="space-y-3">
                       <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">Osebna Preobrazba</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Pomagamo vam, da z oblačili izrazite svojo avtentičnost in se počutite bolj &apos;vi&apos;.
                       </p>
                    </div>
                 </motion.div>

                 {/* 5. Local Pride, Global Vision */}
                 <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="text-center space-y-6 p-6 group rounded-sm border border-transparent hover:border-tertiary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/50"
                 >
                    <div className="h-16 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                       <Heart strokeWidth={1} size={36} />
                    </div>
                    <div className="space-y-3">
                       <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wider">Slovensko Srce</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Ponosni na korenine, z evropsko vizijo. Lokalno oblikovanje svetovnega formata.
                       </p>
                    </div>
                 </motion.div>
              </motion.div>
           </div>
        </Section>

        {/* ATELIER & TEAM */}
        <Section className="bg-white overflow-hidden py-0">
           <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[500px] lg:h-auto w-full">
                 <Image 
                   src="/images/atelier-closeup.jpg" 
                   alt="Atelje Patricia Pie Gornja Radgona" 
                   fill 
                   className="object-cover"
                 />
              </div>
              <div className="p-12 lg:p-24 flex flex-col justify-center bg-soft-cream/30">
                 <span className="text-tertiary uppercase tracking-widest text-xs font-semibold mb-4 block">Srce znamke</span>
                 <Heading size="lg" className="mb-6">Atelje Gornja Radgona</Heading>
                 <div className="space-y-6 text-warm-gray leading-relaxed">
                    <p>
                       Leta 2023 je Barbara odprla svoj lasten atelje v Gornji Radgoni. To je delovni dom njene ekipe – 
                       prostor, kjer se ideje vsak dan spreminjajo v nosljive kose.
                    </p>
                    <p>
                       Tukaj nastajajo vse Patricia Pie kolekcije. Barbara aktivno sodeluje tudi z mladimi oblikovalci 
                       iz Slovenije in EU, jim pomaga pri razvoju krojev in prototipov ter jim nudi podporo, 
                       ki jo je sama na začetku pogrešala.
                    </p>
                 </div>
                 <div className="mt-10">
                    <Link 
                      href="/showroom" 
                      className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-tertiary hover:border-tertiary transition-colors"
                    >
                      Obiščite Showroom v Ljubljani
                    </Link>
                 </div>
              </div>
           </div>
        </Section>

        {/* FINAL CTA */}
        <Section className="py-24 text-center bg-secondary/20">
           <div className="container mx-auto px-4 max-w-2xl">
              <Heading size="lg" className="mb-6">Spoznajte nas osebno</Heading>
              <p className="text-lg text-warm-gray mb-10 leading-relaxed">
                 Najboljši način, da začutite filozofijo Patricia Pie, je obisk našega showrooma. 
                 Pridite na kavo, pogovor in pomerjanje – brez obveznosti.
              </p>
              <Link 
                 href="/showroom" 
                 className="inline-block bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-tertiary transition-colors duration-300"
              >
                 Rezerviraj Termin
              </Link>
           </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
