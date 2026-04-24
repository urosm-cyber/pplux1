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
                Vsaka zgodba se začne z občutkom.
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="text-xl md:text-2xl font-light italic max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
                “Blago mi zelo hitro pove, kaj želi postati”
              </p>
              <p className="mt-4 text-lg font-medium tracking-wide uppercase text-white/90">— Barbara Franjić</p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN STORY (Barbara) */}
        <Section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 order-2 lg:order-1 relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-xl">
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
                   <span className="text-tertiary uppercase tracking-widest text-sm font-semibold mb-2 block">USTANOVITELJICA</span>
                   <Heading size="xl" className="mb-6 text-foreground">Barbara Franjić</Heading>
                </div>
                
                <div className="space-y-6 text-lg text-warm-gray leading-relaxed font-light">
                  <p>
                    Od nekdaj sem oblačila doživljala drugače.
                  </p>
                  <p>
                    Ko vidim blago, ne vidim le materiala. Vidim občutek. Vidim držo. Vidim trenutek, ko se ženska pogleda v ogledalo in se v nečem končno umiri.
                  </p>
                  <p>
                    Ta odnos se je začel zelo zgodaj. Najprej kot tiha fascinacija nad blagom in formo. Kasneje kot vedno bolj jasna želja, da ne ustvarjam le oblek, ampak izkušnjo, v kateri se ženska začuti bolj kot ona sama.
                  </p>
                  <p>
                    Po tekstilni šoli in študiju sem vedela eno: ne želim ustvarjati na daljavo. Vedno me je privlačil bolj oseben pristop. Bližina. Pogovor. Občutek, da nekoga res vidiš.
                  </p>
                  <p>
                    Tako je nastala Patricia Pie.
                  </p>
                  <p>
                    Ne kot ideja o modi. Ampak kot prostor, kjer se garderoba gradi drugače. Bolj premišljeno. Bolj osebno. Bolj v skladu z življenjem ženske, ki jo nosi.
                  </p>
                  <p>
                    Še danes verjamem v isti trenutek: da se vse spremeni, ko nekaj res sede. Ko ni več popravljanja. Ko ni več občutka, da moraš nekaj skrivati. Ko samo stojiš pred ogledalom in veš: to sem jaz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PIE PHILOSOPHY */}
        <Section className="bg-soft-cream py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl cursor-default">
            <span className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3 block">KONCEPT</span>
            <Heading size="xl" className="mb-10 text-deep-warm">Pie Philosophy</Heading>
            
            <p className="text-xl md:text-2xl text-warm-gray leading-relaxed font-heading italic mb-12">
              &quot;Garderoba se ne začne pri tem, kaj še potrebuješ. Začne se pri tem, kako se želiš počutiti.&quot;
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-tertiary">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Kos, ki ostane</h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  Ne verjamem v oblačila za en trenutek. Verjamem v kose, po katerih posežeš znova. Ne zato, ker jih moraš nositi, ampak ker se v njih počutiš mirno, samozavestno in res kot ti.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-viola">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Garderoba, ne trend</h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  Zame garderoba ni zbirka lepih odločitev. Je tiha podpora tvojemu vsakdanu. Zgrajena počasi. Premišljeno. Tako, da posamezni kosi med seboj živijo in ti vsakič znova olajšajo izbiro.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-2 border-secondary">
                <h3 className="font-heading text-xl font-semibold mb-4 text-deep-warm">Perfect Fit</h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  Ni ti treba, da se prilagajaš obleki. Najlepši trenutek je prav ta, ko ničesar več ne popravljaš. Ko obleka samo sede in vse postane bolj mirno.
                </p>
              </div>
            </div>

            <div className="mt-20 space-y-4 text-warm-gray max-w-2xl mx-auto leading-relaxed italic">
              <p>
                Pri Patricia Pie zato garderobe ne gradimo iz naključij.<br />
                Gradimo jo iz občutka, da je vsak naslednji kos še bolj tvoj.
              </p>
            </div>
          </div>
        </Section>

        {/* VALUES */}
        <Section className="bg-background py-24">
           <div className="container mx-auto px-4">
              <Heading size="lg" className="text-center mb-20 relative inline-block w-full">
                 <span className="relative z-10 px-4 bg-background uppercase tracking-widest text-sm font-semibold">Vrednote znamke</span>
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
                 {/* 1. Da se v nečem prepoznaš */}
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
                       <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wider">Da se v nečem prepoznaš</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Vse se začne v trenutku, ko se pogledaš in ti ni treba ničesar popravljati. Ko obleka ne preusmeri pozornosti nate, ampak ti dovoli, da si samo ti.
                       </p>
                    </div>
                 </motion.div>

                 {/* 2. Osebna pozornost */}
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
                       <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wider">Osebna pozornost</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Pri Patricia Pie nič ne nastaja po občutku površine. Pomembno nam je, kako nekaj sede, kako te spremlja in kako se v tem počutiš od prvega trenutka naprej.
                       </p>
                    </div>
                 </motion.div>

                 {/* 3. Garderoba z razlogom */}
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
                       <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wider">Garderoba z razlogom</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Ne verjamemo v kose za en sam trenutek. Verjamemo v garderobo, ki nastaja počasi. Premišljeno. Tako, da ima vsak kos v tvojem življenju svoje mesto.
                       </p>
                    </div>
                 </motion.div>

                 {/* 4. Mirna izkušnja */}
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
                       <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wider">Mirna izkušnja</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Pravi luksuz ni v hrupu. Je v tem, da si vzeta resno. Da imaš čas. Da si slišana. In da lahko izbiraš brez pritiska.
                       </p>
                    </div>
                 </motion.div>

                 {/* 5. Blizu človeku */}
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
                       <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wider">Blizu človeku</h3>
                       <div className="w-8 h-px bg-tertiary mx-auto opacity-50"></div>
                       <p className="text-sm text-warm-gray leading-relaxed font-light">
                          Patricia Pie nastaja v Sloveniji, blizu rok, ki ustvarjajo, in blizu ženskam, za katere ustvarjamo. Ker verjamemo, da se najlepše stvari zgodijo takrat, ko je odnos oseben.
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
                 <span className="text-tertiary uppercase tracking-widest text-xs font-semibold mb-4 block">SRCE ZNAMKE</span>
                 <Heading size="lg" className="mb-6">Atelje v Gornji Radgoni</Heading>
                 <div className="space-y-6 text-warm-gray leading-relaxed">
                    <p>
                       Ko sem odprla atelje v Gornji Radgoni, nisem odprla le prostora za delo.
                    </p>
                    <p>
                       Odprla sem prostor, kjer lahko Patricia Pie nastaja tako, kot verjamem, da mora nastajati.<br />
                       Z občutkom. Z natančnostjo. In s časom, ki ga tak proces potrebuje.
                    </p>
                    <p>
                       To je kraj, kjer se ideja začne spreminjati v nekaj resničnega. Kjer blago dobi smer. 
                       Kjer kroj počasi najde svojo pravo obliko. In kjer vsak kos nastaja z mislijo na žensko, 
                       ki ga bo oblekla in se v njem želela počutiti mirno, samozavestno in kot ona sama.
                    </p>
                    <p>
                       Atelje mi pomeni bližino. Do procesa. Do dela. Do odločitev, ki jih morda ni vedno videti 
                       na prvi pogled, a naredijo razliko v občutku, ko nekaj oblečeš.
                    </p>
                    <p>
                       Pomeni pa mi tudi ljudi, brez katerih ta zgodba ne bi bila enaka.
                    </p>
                    <p>
                       Iz srca sem hvaležna Milanu in Zdenki za vso pomoč, znanje in predanost, ki ju delita z menoj. 
                       Za njima so desetletja izkušenj iz nekoč ponosne slovenske tekstilne industrije Mura. 
                       To znanje ni samo tehnično. Je občutek za delo, natančnost in spoštovanje do tega, kar nastaja v rokah.
                    </p>
                    <p>
                       Prav zato je ta atelje zame veliko več kot delovni prostor. Je srce znamke. 
                       In vsak dan znova tudi opomnik, da najlepše stvari ne nastanejo na hitro, 
                       ampak z ljudmi, ki v svoje delo prinesejo vse, kar so skozi leta živeli.
                    </p>
                 </div>
                 <div className="mt-10">
                    <Link 
                      href="/studio-pp" 
                      className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest hover:text-tertiary hover:border-tertiary transition-colors"
                    >
                       Obiščite Studio PP v Ljubljani
                    </Link>
                 </div>
              </div>
           </div>
        </Section>

        <Section className="py-24 text-center bg-secondary/20">
           <div className="container mx-auto px-4 max-w-2xl">
              <Heading size="lg" className="mb-6">Spoznajmo se osebno</Heading>
              <p className="text-lg text-warm-gray mb-10 leading-relaxed">
                 Patricia Pie lahko začutiš tam, kjer ti je najbližje.<br />
                 V Ljubljani, Mariboru ali Gornji Radgoni.<br />
                 Na vsaki lokaciji ostaja isto bistvo:<br />
                 miren prostor, osebna pozornost in občutek, da si vzeta zares.
              </p>
              <Link 
                 href="/kontakt" 
                 className="inline-block bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-tertiary transition-colors duration-300"
              >
                 REZERVIRAJ TERMIN
              </Link>
           </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
