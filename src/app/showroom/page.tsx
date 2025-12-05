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

export default function ShowroomPage() {
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
      answer: "Da, showroom deluje samo po predhodni rezervaciji. Tako lahko zagotovimo, da je termin rezerviran samo za tebe in da imaš našo popolno pozornost."
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
      question: "Ali je obisk showrooma plačljiv?",
      answer: "Da. Showroom termin je zasnovan kot osebno modno svetovanje in Perfect Fit seansa, v kateri je prostor v celoti rezerviran samo za vas. Zato ima termin svojo vrednost (69 €), ki se vam ob nakupu v celoti všteje v izbrani kos. Za nove stranke je prvi showroom obisk brezplačen – verjamemo, da se lahko z znamko resnično povežete šele, ko kose začutite v živo."
    }
  ];

  const services = [
    { title: "Individualno stiliranje", desc: "Svetovanje glede na tvoj osebni stil, karakter in postavo." },
    { title: "Perfect Fit meritve", desc: "Meritve se izvajajo direktno v showroomu, brez motenj." },
    { title: "Final fitting", desc: "Miren prostor za zadnje prilagoditve in popolno prileganje." },
    { title: "Pie Philosophy", desc: "Gradimo garderobo, ne le posameznih kosov." },
    { title: "Osebno svetovanje", desc: "Globji pogovor o tvojem stilu in dolgotrajni garderobi." },
    { title: "Najnovejše kreacije", desc: "Dostop do najbolj svežih kosov Patricia Pie." },
    { title: "VIP kolekcije", desc: "Ogled novih kolekcij pred vsemi ostalimi." },
    { title: "Personalizacije", desc: "Posebne dolžine, barve in detajli po tvoji meri." },
    { title: "100% zasebnost", desc: "1 stranka = 1 termin. Popolna pozornost samo zate." }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/showroom/detail.png"
              alt="Patricia Pie Showroom Detail" 
              fill 
              className="object-cover"
              priority
            />
            {/* Subtle overlay for atmosphere only */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pb-16"
          >
            <div className="max-w-4xl space-y-6">
              <Heading as="h1" size="xl" className="text-white drop-shadow-lg font-light tracking-wide">
                Showroom ni trgovina.<br/>
                <span className="italic font-serif">Showroom je doživetje.</span>
              </Heading>
              <p className="text-xl md:text-2xl font-light drop-shadow-md max-w-2xl mx-auto opacity-90">
                Intimna, privatna couture izkušnja v osrčju Ljubljane.
              </p>
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
            <div className="space-y-6">
              <span className="text-tertiary uppercase tracking-widest text-sm font-medium">Parižsko šik · Cozy & Chic · Modern & Clean</span>
              <Heading size="lg">Tvoj zasebni modni atelje</Heading>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Prostor deluje kot mešanica parižskega stanovanja, intimnega ateljeja in couture svetovalnice. 
                Bele stene, lesena obloga za toplino, mehka naravna svetloba in veliko ogledalo za popolne silhuete.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                To je varen pristan, kjer se čas ustavi. Brez drugih strank, brez motenj, brez pritiska.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-secondary/5 rounded-sm">
                <h3 className="font-serif text-2xl mb-3 text-foreground">Sprejem</h3>
                <p className="text-muted-foreground">Osebno te sprejme Barbara. Topel, iskren pozdrav – kot bi obiskala prijateljico.</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-sm">
                <h3 className="font-serif text-2xl mb-3 text-foreground">Dobrodošlica</h3>
                <p className="text-muted-foreground">Kava, čaj ali kozarec penine. Trenutek, da zadihaš in se sprostiš.</p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-sm">
                <h3 className="font-serif text-2xl mb-3 text-foreground">Pogovor</h3>
                <p className="text-muted-foreground">V lounge kotičku se pogovoriva o tvojih željah, stilu in potrebah. Brez hitenja.</p>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* SHOWROOM SERVICES */}
        <Section className="bg-secondary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <Heading size="lg" className="mb-4">Showroom Izkušnja</Heading>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vse ključne elemente Patricia Pie filozofije smo združili v eno celovito doživetje.
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
            <div className="bg-secondary/5 border border-secondary/20 p-8 md:p-12 rounded-sm text-center space-y-6">
              <Heading size="lg">Showroom termini & styling storitev</Heading>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ljubljanski showroom Patricia Pie deluje izključno po dogovoru. Vsak termin je 
                <span className="font-medium text-foreground"> osebna styling & Perfect Fit seansa</span>, 
                v kateri si Barbara vzame 60–90 minut samo za vas – brez drugih strank, brez gneče.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 text-left">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-foreground">Vrednost storitve</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Styling & Perfect Fit seansa ima svojo ceno (69 €), ki se vam ob nakupu ali naročilu kosa 
                    <span className="font-medium text-foreground"> v celoti všteje v izbrani kos</span>.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-foreground">Prvi obisk</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Za nove stranke je prvi obisk <span className="font-medium text-foreground">posebno povabilo v naš svet – brezplačno</span>, 
                    kot darilo ob prvem spoznanju z znamko Patricia Pie.
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
              className="relative aspect-[3/4] lg:aspect-square bg-secondary/10 rounded-sm overflow-hidden"
            >
               {/* Placeholder for Barbara's photo - using abstract for now to maintain vibe */}
               <Image 
                src="/images/showroom/hero.png" 
                alt="Barbara - Osebna stilistka" 
                fill 
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
              <Heading size="lg">Tvoja modna zaveznica</Heading>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  V showroomu te pričakam jaz, Barbara. Ne kot modna urednica, ki sodi, ampak kot zaveznica, ki posluša.
                </p>
                <p>
                  Moja želja je, da se počutiš <span className="text-foreground font-medium">razumljeno, slišano in posebno</span>. 
                  S svojim izurjenim očesom za linije, proporce in barve ti bom pomagala poudariti tvoje prednosti 
                  in skriti tisto, kar želiš.
                </p>
                <p>
                  Ko odideš, ne želim le, da si zadovoljna z obleko. Želim, da se počutiš 
                  <span className="text-foreground font-medium italic"> transformirano, navdihnjeno in samozavestno</span>.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="font-serif text-2xl text-tertiary">Barbara</p>
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
              <Heading size="lg">Kje nas najdeš?</Heading>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-background rounded-full flex items-center justify-center text-tertiary shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Poslovna stavba S7</h3>
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
                    <h3 className="font-semibold text-foreground mb-1">Parkiranje & Dostop</h3>
                    <p>Brezplačno parkiranje pred stavbo. Enostaven dostop z obvoznice.</p>
                  </div>
                </div>

                <div className="p-4 bg-background border border-tertiary/20 rounded-sm mt-6">
                  <p className="text-sm text-center font-medium text-foreground">
                    ⭐ Showroom deluje izključno po predhodni rezervaciji
                  </p>
                </div>
              </div>

              <a 
                href="https://maps.google.com/?q=Stegne+7+Ljubljana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline">Prikaži na Google Maps</Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-sm shadow-lg bg-background"
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
              &quot;Nisem pričakovala, da bo tak obisk lahko tako sproščujoč. Občutek je bil, 
              kot da sem ob kavi s prijateljico, ne pa v trgovini. Patricia si je vzela 
              ves čas sveta in res me je poslušala.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-tertiary/30"></div>
              <p className="font-medium text-foreground">Ana, Ljubljana</p>
              <div className="w-10 h-0.5 bg-tertiary/30"></div>
            </div>
          </motion.div>
        </Section>

        {/* CTA SECTION */}
        <Section className="bg-gradient-to-b from-tertiary/5 to-background text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <Heading size="xl">Pripravljena na svojo izkušnjo?</Heading>
            <p className="text-lg text-muted-foreground">
              Rezerviraj svoj termin in odkri, kako iz oblačil postane tvoja zgodba.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Rezerviraj termin
                </Button>
              </Link>
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
