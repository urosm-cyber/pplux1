"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useBooking } from '@/components/booking/BookingContext';
import { Info } from "lucide-react";
import CloudinaryImage from '@/components/shared/CloudinaryImage';

export default function StudioPPContent() {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Kako dolgo traja obisk?",
      answer: "Običajno 1-2 uri, odvisno od tebe! Vzamemo si čas, da res najdemo kose, ki ti ustrezajo. Ni naglice."
    },
    {
      question: "Ali je rezervacija obvezna?",
      answer: "Da, Studio PP deluje samo po predhodni rezervaciji. Tako lahko zagotovimo, da je termin rezerviran samo za tebe in da imaš našo popolno pozornost."
    },
    {
      question: "Kje parkiram?",
      answer: "Parkiranje je brezplačno pred stavbo S7. Dostop je enostaven iz smeri Dunajske ceste ali obvoznice."
    },
    {
      question: "Kaj če ne vem, kaj iščem?",
      answer: "Še bolje! Ravno zato smo tukaj - da skupaj odkrijemo tvoj slog in najdemo kose, ki se ti res prilegajo. Ni treba priti s pripravljenim seznamom."
    },
    {
      question: "Ali lahko prinesem prijateljico ali sestro?",
      answer: "Seveda! Včasih je res koristno imeti zaupanja vredno mnenje. Prosimo te le, da nas obvestiš, da lahko poskrbimo za dovolj prostora in ugodja."
    },
    {
      question: "Ali je obisk Studia PP plačljiv?",
      answer: "Prvo srečanje v Studiu PP je brezplačno in brez obveznosti. To je čas za spoznavanje, pogovor o tvojem stilu in prvi stik z modeli Patricia Pie. Verjamemo, da se lahko z znamko resnično povežeš šele, ko kose začutiš v živo."
    }
  ];

  const services = [
    { title: "Osebna usmeritev", desc: "Ne gledava samo krojev. Najprej začutiva, kaj ti zares pristaja in v čem se počutiš kot ti." },
    { title: "Perfect Fit meritve", desc: "Meritve vzamem tukaj, v miru in brez motenj. Da ti ni treba razmišljati, ali bo stvar res sedla." },
    { title: "Zadnje prilagoditve", desc: "Ko je treba, naredimo še zadnje prilagoditve. Tisti drobni koraki, zaradi katerih je občutek na koncu res pravi." },
    { title: "Pie Philosophy", desc: "Pri meni ne gre za posamezen kos. Gre za garderobo, ki ima smisel zate in za tvoje življenje." },
    { title: "Pogovor o tebi", desc: "Pogovoriva se o tvojem ritmu, željah in načinu življenja. Da izbira ni naključna, ampak res tvoja." },
    { title: "Novi kosi", desc: "V Studio PP lahko v miru vidiš tudi nove kose. Brez hitenja, da začutiš, kaj te res nagovori." },
    { title: "Posebni izbori", desc: "Nekatere stvari ti pokažem tudi bolj osebno. Ker želim, da imaš občutek bližine, ne množice." },
    { title: "Prilagoditve zate", desc: "Kadar je mogoče, skupaj uskladimo dolžino, barvo ali detajl. Da stvar ne deluje samo lepo, ampak kot da je res tvoja." },
    { title: "Popolna zasebnost", desc: "V enem terminu si pri meni samo ti. Da imaš mir, pozornost in prostor, da se res vidiš." }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/studio-pp/detail.png"
              alt="Patricia Pie Studio PP Detail" 
              fill 
              className="object-cover"
              priority
            />
            {/* Overlay: subtly darker at bottom to ground the text, with a soft vignette */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60 md:bg-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-60" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pb-16"
          >
            <div className="max-w-4xl space-y-8">
              {/* EYEBROW */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-4 drop-shadow-sm"
              >
                Studio PP
              </motion.span>

              {/* HEADLINE */}
              <Heading as="h1" size="xl" className="text-white drop-shadow-lg font-light tracking-wide leading-[1.15]">
                Studio PP ni trgovina.<br/>
                <span className="italic font-serif block mt-2 opacity-95">Je miren, oseben trenutek zate.</span>
              </Heading>

              {/* SUBTITLE/BODY */}
              <p className="text-lg md:text-xl font-light drop-shadow-md max-w-2xl mx-auto opacity-90 leading-relaxed">
                Tukaj ni hitenja. Ni prilagajanja.<br className="hidden md:block" />
                Samo prostor, kjer se lahko v miru pogledaš drugače.
              </p>
              
              {/* CTA ACTIONS */}
              <div className="pt-6 flex flex-col items-center gap-6">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="min-w-[240px] shadow-xl hover:shadow-tertiary/20 transition-all font-medium tracking-wide h-14 text-base"
                  onClick={openBooking}
                >
                  Rezerviraj svoj termin
                </Button>

                {/* TRUST SIGNAL BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                    <span className="tracking-wide">Prvi obisk je brezplačen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ATMOSPHERE & WELCOME */}
        <Section className="bg-background">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-12"
          >
            <div className="space-y-8 max-w-3xl mx-auto">
              <Heading size="lg" className="font-light tracking-tight">Pri meni si lahko vzameš čas.</Heading>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                  V Studio PP te sprejmem brez hitenja in brez pritiska. 
                  Želim, da si vzameš čas, se umiriš in začutiš, da ti ni treba ničesar vedeti vnaprej.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Najprej se usedeva. Spiješ kavo, čaj ali kozarec penine. Potem se pogovoriva. 
                  Počasi, v miru, tako da se lahko začneš resnično začutiti.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 bg-secondary/5 rounded-sm border border-secondary/10 hover:border-tertiary/20 transition-all text-left"
              >
                <h3 className="font-serif text-2xl mb-4 text-foreground">Sprejem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Najprej te osebno sprejmem. Toplo, mirno in brez distance. Pomembno mi je, da se pri meni počutiš sproščeno.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 bg-secondary/5 rounded-sm border border-secondary/10 hover:border-tertiary/20 transition-all text-left"
              >
                <h3 className="font-serif text-2xl mb-4 text-foreground">Dobrodošlica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ponudim ti kavo, čaj ali kozarec penine. Ne kot formalnost, ampak kot trenutek, da se umiriš in zadihaš.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8 bg-secondary/5 rounded-sm border border-secondary/10 hover:border-tertiary/20 transition-all text-left"
              >
                <h3 className="font-serif text-2xl mb-4 text-foreground">Pogovor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Potem se pogovoriva o tebi. O tem, kako se želiš počutiti. In kaj želiš videti, ko se pogledaš v ogledalo.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Section>

        {/* STUDIO PP SERVICES */}
        <Section className="bg-secondary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Heading size="lg" className="mb-4">V Studio PP se vse poveže.</Heading>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Želim, da pri meni ne dobiš samo enega trenutka,<br className="hidden md:block" />
                ampak občutek, da se stvari sestavljajo na pravi način.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-background p-8 rounded-sm border border-secondary/20 hover:border-tertiary/30 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </Section>

        {/* BOOKING POLICY SECTION */}
        <Section className="bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-secondary/5 border border-secondary/20 p-8 md:p-12 rounded-sm text-center space-y-8">
              <Heading size="lg">V Studio PP si vzamem čas samo zate.</Heading>
              
              <p className="text-xl text-foreground/90 leading-relaxed font-light max-w-2xl mx-auto">
                V Studio PP delam samo po dogovoru,<br className="hidden md:block" />
                da si lahko zate res vzamem čas.<br className="hidden md:block" />
                Vsak termin je oseben, miren in brez drugih strank.<br className="hidden md:block" />
                Običajno traja od 60 do 90 minut.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 text-left">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground">Prvo srečanje</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Prvo srečanje je brezplačno in brez obveznosti.
                    To je najin čas za pogovor, usmeritev in prvi občutek,
                    ali je Patricia Pie pravi prostor zate.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground">Osebni termin</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ko si pri meni, si pri meni samo ti.
                    Brez hitenja, brez motenj in brez občutka,
                    da moraš karkoli vedeti ali izbrati prehitro.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* BARBARA PERSONA SECTION */}
        <Section className="bg-background overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-3/4 lg:aspect-square bg-secondary/10 rounded-sm overflow-hidden"
            >
               {/* Placeholder for Barbara's photo - using abstract for now to maintain vibe */}
               <CloudinaryImage 
                src="showroom-detail_je8xir" 
                alt="Barbara - Osebna stilistka" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="h-full w-full"
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Heading size="lg">Ob meni si lahko preprosto ti.</Heading>
              <div className="space-y-6 text-xl text-foreground/90 leading-relaxed font-light">
                <p>
                  V Studio PP te pričakam jaz, Barbara.<br />
                  Mirno, osebno in brez občutka, da moraš karkoli vedeti vnaprej.
                </p>
                <p>
                  Pomembno mi je, da se ob meni počutiš sproščeno, razumljeno in v dobrih rokah.<br />
                  Da si vzameva čas. Da te poslušam. In da skupaj začutiva, v čem se zares vidiš.
                </p>
                <p>
                  Ko odideš, ne želim, da odneseš le oblačilo.<br />
                  Želim, da odneseš občutek, da si bolj ti.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="font-serif text-3xl text-tertiary">Barbara</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* PRACTICAL INFO + MAP */}
        <Section className="bg-secondary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Heading size="lg">K meni prideš tukaj.</Heading>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-background rounded-full flex items-center justify-center text-tertiary shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Studio PP v Ljubljani</h3>
                    <p>Stegne 7, 1000 Ljubljana</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-background rounded-full flex items-center justify-center text-tertiary shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dostop in parkiranje</h3>
                    <p>Pred stavbo je na voljo brezplačno parkiranje.<br />Do mene lahko enostavno prideš tudi z obvoznice.</p>
                  </div>
                </div>

                <div className="p-4 bg-background border border-tertiary/20 rounded-sm mt-6">
                  <div className="text-sm text-center font-medium text-foreground">
                    <div className="flex items-center gap-2 text-tertiary font-medium">
                      <Info className="w-5 h-5" />
                      <span>V Studio PP te sprejmem po predhodnem dogovoru.</span>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Stegne+7+Ljubljana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline">Odpri lokacijo v Google Maps</Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-4/3 overflow-hidden rounded-sm shadow-lg bg-background"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.1!2d14.552!3d46.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA0JzQwLjgiTiAxNMKwMzMnMDcuMiJF!5e0!3m2!1sen!2ssi!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </div>
        </Section>

        {/* TESTIMONIAL */}
        <Section className="bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <svg className="w-10 h-10 mx-auto text-tertiary/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-light text-foreground mb-8 italic leading-relaxed">
              &quot;Prišla sem z občutkom, da spet ne bom čisto vedela, kaj mi zares pristaja.<br />
              Potem pa sem se v nekem trenutku samo umirila.<br />
              Barbara me je res poslušala in prvič sem imela občutek, da mi ni treba ničesar popravljati.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-tertiary/30"></div>
              <p className="font-medium text-foreground">Maja, Ljubljana</p>
              <div className="w-10 h-0.5 bg-tertiary/30"></div>
            </div>
          </motion.div>
        </Section>

        {/* CTA SECTION */}
        <Section className="bg-linear-to-b from-tertiary/5 to-background text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <Heading size="xl">Pripravljena na svojo izkušnjo?</Heading>
            <p className="text-lg text-muted-foreground">
              Rezerviraj svoj termin in odkrij, kako oblačila postanejo tvoja zgodba.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="min-w-[200px]"
                onClick={openBooking}
              >
                Rezerviraj termin
              </Button>
              <Link href="/perfect-fit">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Več o Perfect Fit
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              💌 Odgovorimo v 24 urah
            </p>
          </motion.div>
        </Section>

        {/* FAQ SECTION */}
        <Section className="bg-background border-t border-secondary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Heading size="lg" className="text-center mb-12">Pogosta vprašanja</Heading>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-secondary/20 last:border-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 text-left flex items-center justify-between hover:text-tertiary transition-colors group"
                  >
                    <span className="font-medium text-foreground group-hover:text-tertiary transition-colors">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-tertiary' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-6 pr-8"
                    >
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </Section>
        
      </main>
      <Footer />
    </div>
  );
}
