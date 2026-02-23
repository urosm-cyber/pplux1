"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import LocationCard from "@/components/locations/LocationCard";
import { Check, ChevronDown, ChevronUp, Gift } from "lucide-react";
import { BOOKABLE_LOCATIONS } from "@/lib/locations";
import { useBooking } from '@/components/booking/BookingContext';

// FAQ Data
const faqs = [
  {
    question: "Koliko stane storitev Perfect Fit?",
    answer: "Naše cene so transparentne. Plašči po meri se običajno gibljejo od 580€, obleke od 320€, manjša popravila pa med 20€ in 50€. Končna cena je odvisna od izbranega materiala, a jo vedno določimo vnaprej na brezplačnem posvetu."
  },
  {
    question: "Ali je prvi obisk res brezplačen?",
    answer: "Da. Prvi obisk je namenjen temu, da se spoznamo, pogovorimo o vaših željah in vidimo, če smo pravi za vas. Je povsem neobvezujoč – če se ne odločite za naročilo, je to povsem v redu."
  },
  {
    question: "Koliko obiskov je potrebnih?",
    answer: "Cenimo vaš čas. Običajno sta potrebna le dva obiska: prvi za meritve in izbiro (30-45 min) ter drugi za prevzem in finalni fit. Za zelo zahtevne kose se včasih dogovorimo za eno vmesno probo."
  },
  {
    question: "Kako hitro je oblačilo narejeno?",
    answer: "Od potrditve do končnega izdelka običajno traja 5 do 10 delovnih dni. Če oblačilo potrebujete za določen datum ali dogodek, se bomo potrudili prilagoditi vašim rokom."
  },
  {
    question: "Kaj če ne vem točno, kaj želim?",
    answer: "To je naša specialnost. Barbara te bo vodila skozi proces, predlagala kroje glede na tvojo postavo in življenjski slog. Večina strank pride le z željo po \"nečem lepem\" in odide z najljubšim kosom v omari."
  }
];

// Accordion Component
function AccordionItem({ question, answer, id }: { question: string; answer: string; id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-tertiary/20 last:border-none">
      <button
        id={triggerId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
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
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
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

export default function PerfectFitContent() {
  const { openBooking } = useBooking();
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src="HeartstringsOfPassion__11_rkb2xm"
              alt="Perfect Fit - Oblačila po meri"
              fill
              className="object-cover"
              containerClassName="h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-tertiary/20 to-black/40" />
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
              Osebno. Natančno. Tvoje.
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
          <Heading size="lg" className="text-center mb-12">Štiri lokacije. Ena filozofija.</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKABLE_LOCATIONS.map((loc, i) => (
              <LocationCard key={loc.id} location={loc} index={i} showBadge showMapLink />
            ))}
          </div>
        </Section>

        {/* Process Timeline */}
        <Section className="bg-linear-to-b from-background to-secondary/20 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Potek procesa</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                Od prvega srečanja do končnega nasmeha. Tvoja pot do popolnega kosa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {/* Elegant Connecting Line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-linear-to-r from-transparent via-tertiary/20 to-transparent z-0" />
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 group"
              >
                <div className="relative mb-8">
                  <div className="text-8xl font-heading text-tertiary/5 absolute -top-10 -left-4 z-0 group-hover:text-tertiary/10 transition-colors duration-500">01</div>
                  <div className="relative z-10 aspect-3/4 overflow-hidden rounded-sm shadow-md border border-tertiary/10 group-hover:shadow-xl transition-all duration-500">
                     <CloudinaryImage
                        src="Patricia Pie/Process/perfect_fit_consultation"
                        alt="Svetovanje in Meritve"
                        fill
                        containerClassName="h-full w-full"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Svetovanje & Meritve</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Srečanje v showroomu. Pogovor o tvojem stilu in željah. <strong>Barbara opravi natančne telesne meritve</strong>, ki postanejo osnova za tvoj osebni kroj.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10 group"
              >
                <div className="relative mb-8">
                  <div className="text-8xl font-heading text-tertiary/5 absolute -top-10 -left-4 z-0 group-hover:text-tertiary/10 transition-colors duration-500">02</div>
                  <div className="relative z-10 aspect-3/4 overflow-hidden rounded-sm shadow-md border border-tertiary/10 group-hover:shadow-xl transition-all duration-500">
                     <CloudinaryImage
                        src="Patricia Pie/Process/perfect_fit_atelier"
                        alt="Izdelava v ateljeju"
                        fill
                        containerClassName="h-full w-full"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Izdelava (90%)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    V našem ateljeju v Gornji Radgoni ekipa ukroji in zašije oblačilo do 90% končne podobe. Pripravljeno za finalno prilagajanje.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 group"
              >
                <div className="relative mb-8">
                  <div className="text-8xl font-heading text-tertiary/5 absolute -top-10 -left-4 z-0 group-hover:text-tertiary/10 transition-colors duration-500">03</div>
                  <div className="relative z-10 aspect-3/4 overflow-hidden rounded-sm shadow-md border border-tertiary/10 group-hover:shadow-xl transition-all duration-500">
                     <CloudinaryImage
                        src="Patricia Pie/Process/perfect_fit_fitting"
                        alt="Vmesno pomerjanje"
                        fill
                        containerClassName="h-full w-full"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Vmesno pomerjanje</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Pomerite skoraj končan kos. Preverimo prileganje, udobje in silhueto. Označimo še zadnje milimetrske popravke.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-10 group"
              >
                <div className="relative mb-8">
                  <div className="text-8xl font-heading text-tertiary/5 absolute -top-10 -left-4 z-0 group-hover:text-tertiary/10 transition-colors duration-500">04</div>
                  <div className="relative z-10 aspect-3/4 overflow-hidden rounded-sm shadow-md border border-tertiary/10 group-hover:shadow-xl transition-all duration-500">
                     <CloudinaryImage
                        src="Patricia Pie/Process/perfect_fit_delivery"
                        alt="Finalizacija in Prevzem"
                        fill
                        containerClassName="h-full w-full"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     />
                  </div>
                  {/* Last dot is different or hidden */}
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary/40 rounded-full border-4 border-background hidden lg:block z-20 animate-pulse" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Prevzem & Užitek</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Tvoj unikatni kos je končan. Prevzameš ga, pripravljenega, da postane tvoj najljubši kos garderobe.
                  </p>
                </div>
              </motion.div>

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
              className="relative aspect-4/5 rounded-sm overflow-hidden shadow-2xl"
            >
              <CloudinaryImage
                src="Body_Andreja_2_osuvgy"
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
        
        {/* Visual Proof / Gallery - NEW */}
        <Section className="bg-background overflow-hidden border-t border-secondary/20">
            <div className="max-w-6xl mx-auto space-y-12">
               <div className="text-center max-w-3xl mx-auto space-y-4">
                  <Heading size="lg">Razlika je v detajlih</Heading>
                  <p className="text-lg text-muted-foreground">
                    Perfect Fit ni le o merah. Je o tem, kako oblačilo &apos;pade&apos;, kako se giblje z vami in kako poudari tisto najboljše.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Detail 1 */}
                  <div className="group space-y-4">
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Suknjič_Andreja_2_pv1mmn" 
                           alt="Perfect Fit ramena"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           Ramena & Rokavi
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Nič več predugih rokavov ali utesnjenih ramen. Kroje prilagodimo vaši drži in dolžini rok.
                     </p>
                  </div>

                  {/* Detail 2 */}
                  <div className="group space-y-4">
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Body_Ana_6_hiytxl" 
                           alt="Perfect Fit pas"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           Pas & Silhueta
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Poudarimo pas tam, kjer dejansko je. Linije, ki laskajo vaši postavi, ne konfekcijski številki.
                     </p>
                  </div>

                  {/* Detail 3 */}
                  <div className="group space-y-4">
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Suknjič_Ana_in_Krilo_Ana_4_i7fzyd" 
                           alt="Material & Padec"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           Dolžina & Padec
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Plašči in obleke, ki se končajo točno tam, kjer je za vašo višino najbolj elegantno.
                     </p>
                  </div>
               </div>
            </div>
        </Section>



        {/* FAQ */}
        <Section className="bg-background">
          <div className="max-w-3xl mx-auto">
            <Heading size="lg" className="text-center mb-12">Pogosta vprašanja</Heading>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} id={String(index)} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-tertiary/10 text-center py-24">
          <Heading size="xl" className="mb-6">Želiš izkusiti Perfect Fit?</Heading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Rezervirajte svoj termin v našem showroomu in dovolite, da ustvarimo nekaj posebnega samo za vas.
          </p>
          
          <div className="mb-10 inline-flex items-center gap-3 px-6 py-3 bg-tertiary/5 rounded-full border border-tertiary/20 text-tertiary hover:bg-tertiary/10 transition-colors cursor-default">
             <Gift className="w-5 h-5" strokeWidth={1.5} />
             <span className="font-medium tracking-wide">Prvi obisk je brezplačen</span>
             <span className="w-1 h-1 rounded-full bg-tertiary/40"></span>
             <span className="text-sm opacity-80 uppercase tracking-widest font-light">Brez obveznosti</span>
          </div>

          <br />
          
          <Button variant="primary" size="lg" onClick={openBooking}>
            Rezerviraj termin
          </Button>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
