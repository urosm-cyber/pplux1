"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "Kako dolgo traja izdelava?",
    answer: "Običajno traja proces od prvega posveta do končnega izdelka 5 do 10 delovnih dni. To vključuje izbiro materiala, krojenje, šivanje in morebitne vmesne probe."
  },
  {
    question: "Koliko stane storitev Perfect Fit?",
    answer: "Cena je odvisna od zahtevnosti kosa in izbranega materiala. Prilagoditev obstoječih modelov je pogosto vključena v ceno ali pa znaša med 20€ in 50€. Za popolnoma unikaten kos po meri se cena določi po posvetu."
  },
  {
    question: "Kje potekajo meritve?",
    answer: "Meritve in posveti potekajo v našem showroomu v Ljubljani (Stegne 7) ali v ateljeju v Gornji Radgoni. Po dogovoru se lahko oglasimo tudi pri vas."
  },
  {
    question: "Kaj če ne vem točno, kaj želim?",
    answer: "Brez skrbi! Naš proces se začne s sproščenim pogovorom, kjer skupaj raziščemo vaš stil, potrebe in želje ter najdemo idealno rešitev za vas."
  }
];

// Accordion Component
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-tertiary/20 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center py-4 text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-tertiary transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-tertiary" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-tertiary transition-colors" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function PerfectFitPage() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src="HeartstringsOfPassion__13_cqrkyk" // Updated from provided link
              alt="Perfect Fit - Oblačila po meri"
              fill
              className="object-cover"
              containerClassName="h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-tertiary/20 to-black/40" />
          </div>
          <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl font-light tracking-wide"
            >
              Perfect Fit
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-white/90 tracking-wide"
            >
              Osebno. Natančno. Vaše.
            </motion.p>
          </div>
        </section>

        {/* What Is It */}
        <Section className="bg-background text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Heading size="lg">Srce znamke Patricia Pie</Heading>
            <p className="text-xl font-medium text-foreground leading-relaxed">
              Perfect Fit = izdelava kosa Patricia Pie po meritvah in specifičnih merah stranke.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perfect Fit predstavlja srce znamke Patricia Pie — osebno couture izkušnjo, zasnovano za ženske, ki pričakujejo več kot samo oblačilo.
              Je kombinacija natančnosti, intuicije, strokovnosti in iskrene želje, da se vsaka ženska počuti samozavestno, elegantno in avtentično.
            </p>
          </div>
        </Section>

        {/* Locations */}
        <Section className="bg-secondary/10">
          <Heading size="lg" className="text-center mb-12">Tri lokacije. Ena filozofija.</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Showroom S7 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-sm border border-tertiary/20 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/showroom-s7.png"
                  alt="Showroom Ljubljana S7"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-2 text-tertiary">Showroom Ljubljana S7</h3>
                <p className="text-sm text-muted-foreground mb-4">Stegne 7, Ljubljana</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Najbolj intimna, mirna, luksuzna izkušnja</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Popolna osredotočenost na stranko</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Idealen za meritve, svetovanje, final fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Zasebno, 1 stranka = 1 termin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Brezplačno parkirišče pred stavbo</span>
                  </li>
                </ul>
                <p className="text-sm italic text-tertiary/80">Premium izbira in priporočena lokacija za celostno izkušnjo.</p>
              </div>
            </motion.div>

            {/* Zoofa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background rounded-sm border border-tertiary/20 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <CloudinaryImage
                  src="HeartstringsOfPassion__2_qjedlh"
                  alt="Zoofa Butik"
                  fill
                  containerClassName="h-full w-full"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-2 text-tertiary">Zoofa Butik</h3>
                <p className="text-sm text-muted-foreground mb-4">Center Ljubljane</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Pomerjanje in svetovanje možno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Idealno za stranke, ki so v centru mesta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Barbara izvede meritve in posvet</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                     <span className="w-4 text-center mr-2">⟳</span>
                     <span>Možne motnje (druge stranke)</span>
                  </li>
                </ul>
                <p className="text-sm italic text-tertiary/80">Odlična alternativa za hitro opravljene meritve.</p>
              </div>
            </motion.div>

            {/* Atelje */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-sm border border-tertiary/20 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <CloudinaryImage
                  src="collections/Symphonia/Symphonia_190_xchxis"
                  alt="Atelje Gornja Radgona"
                  fill
                  containerClassName="h-full w-full"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading mb-2 text-tertiary">Atelje Gornja Radgona</h3>
                <p className="text-sm text-muted-foreground mb-4">Gornja Radgona</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Polna kreativna atmosfera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Najgloblje povezovanje z nastankom oblačil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-tertiary mt-1 flex-shrink-0" />
                    <span>Idealno za stranke iz severovzhodne Slovenije</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground/70">
                     <span className="w-4 text-center mr-2">⟳</span>
                     <span>Bolj delovno-kreativno okolje</span>
                  </li>
                </ul>
                <p className="text-sm italic text-tertiary/80">Za ženske, ki želijo &ldquo;iza kulis&rdquo; izkušnjo.</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Process Timeline */}
        <Section className="bg-secondary/10">
          <Heading size="lg" className="text-center mb-16">Kako poteka proces?</Heading>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-tertiary/30 z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-background shadow-lg">
                 <CloudinaryImage
                    src="HeartstringsOfPassion__13_cqrkyk"
                    alt="Osebni uvodni posvet"
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover"
                 />
              </div>
              <div className="bg-background px-4 py-1 rounded-full border border-tertiary/30 text-tertiary font-heading font-bold text-xl">
                FAZA 1
              </div>
              <h3 className="text-2xl font-heading">Osebni uvodni posvet</h3>
              <p className="text-muted-foreground">
                Barbara vodi topel, sproščen, prijateljski pogovor: osebni stil, življenjski slog, posebne priložnosti, barve, silhuete in želje.
                V showroomu ta del poteka v lounge kotičku ob kavi ali penini.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-background shadow-lg">
                 <CloudinaryImage
                    src="collections/Symphonia/Symphonia_190_xchxis"
                    alt="Natančne meritve"
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover"
                 />
              </div>
              <div className="bg-background px-4 py-1 rounded-full border border-tertiary/30 text-tertiary font-heading font-bold text-xl">
                FAZA 2
              </div>
              <h3 className="text-2xl font-heading">Natančne meritve & analiza</h3>
              <p className="text-muted-foreground">
                Barbara izvede 12+ meritev, opazuje držo, oceni proporce in gibanje. Poda priporočila za linije, dolžine in materiale.
                To je temelj za &quot;perfect fit&quot; občutek.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-background shadow-lg">
                 <CloudinaryImage
                    src="HeartstringsOfPassion__2_qjedlh"
                    alt="Final fitting"
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover"
                 />
              </div>
              <div className="bg-background px-4 py-1 rounded-full border border-tertiary/30 text-tertiary font-heading font-bold text-xl">
                FAZA 3
              </div>
              <h3 className="text-2xl font-heading">Final fitting</h3>
              <p className="text-muted-foreground">
                Ko je oblačilo narejeno do 90%, sledi final fitting. Najlepše se izvede v showroomu zaradi miru in svetlobe.
                Poskrbimo za vsak detajl, udobje in tisti &quot;to je to&quot; občutek.
              </p>
            </div>
          </div>
        </Section>

        {/* Why It Matters & Pricing */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Heading size="lg">Zakaj izbrati Perfect Fit?</Heading>
              <ul className="space-y-6">
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Couture natančnost v butičnem pristopu</h4>
                    <p className="text-muted-foreground">Vrhunska kakovost ročnega dela v toplem, osebnem okolju.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Osebna pozornost na najvišji ravni</h4>
                    <p className="text-muted-foreground">1 termin = 1 stranka. Barbara se ti popolnoma posveti.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Premium silhuete, ki poudarijo prednosti</h4>
                    <p className="text-muted-foreground">Kroj prilagodimo tvoji edinstveni postavi in poudarimo, kar je najlepše.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">5-10 dni izdelave</h4>
                    <p className="text-muted-foreground">Hiter proces brez kompromisov pri kakovosti.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Celostno svetovanje, ne samo merjenje</h4>
                    <p className="text-muted-foreground">Barbara te vodi skozi barve, silhuete, priložnosti in dolgoročno strategijo garderobe.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Gradnja garderobe, ne kosov</h4>
                    <p className="text-muted-foreground">Dolgoročna vizija, kjer vsak kos dela skupaj z drugimi.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Emocionalna transformacija</h4>
                    <p className="text-muted-foreground">Ne gre le za oblačilo, ampak za obučutek samozavesti, ko ga obleke.</p>
                  </div>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-tertiary/10 h-fit">
                    <Check className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-1">Barbara kot osebni modni zaveznik</h4>
                    <p className="text-muted-foreground">Dolgoročno partnerstvo, ne enkratna transakcija.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <CloudinaryImage
                src="collections/Symphonia/Symphonia_209_gasqsx"
                alt="Patricia Pie Perfect Fit"
                fill
                containerClassName="h-full w-full"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Section>

        {/* Testimonial */}
        <Section className="bg-secondary/30 text-center py-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl italic font-heading text-foreground/80 mb-6">
              &quot;Vedno sem imela težave z iskanjem plašča, ker sem visoka. Pri Patricii Pie so mi rokave in dolžino prilagodili do milimetra natančno. Počutim se kot kraljica.&quot;
            </p>
            <div className="text-base text-muted-foreground">
              <span className="font-bold text-foreground block">Maja H.</span>
              Ljubljana
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="bg-background">
          <div className="max-w-3xl mx-auto">
            <Heading size="lg" className="text-center mb-12">Pogosta vprašanja</Heading>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-tertiary/10 text-center py-24">
          <Heading size="xl" className="mb-6">Želite izkusiti Perfect Fit?</Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Rezervirajte svoj termin v našem showroomu in dovolite, da ustvarimo nekaj posebnega samo za vas.
          </p>
          <Link href="/showroom">
            <Button variant="primary" size="lg">
              Rezerviraj termin
            </Button>
          </Link>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
