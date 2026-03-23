"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useBooking } from '@/components/booking/BookingContext';

// Testimonial Data
const testimonials = [
  {
    quote: "Dolgo sem imela občutek, da moram pri oblačilih vedno nekaj sprejeti kot kompromis. Pri Patricia Pie sem prvič stala pred ogledalom in si nisem želela ničesar popraviti. Samo vedela sem, da je to to.",
    name: "Maja H.",
    location: "Ljubljana"
  },
  {
    quote: "Ker sem visoka, sem zelo težko našla plašč, v katerem bi bilo vse na svojem mestu. Pri Patricia Pie sem prvič imela občutek, da mi ni treba ničesar prilagajati. To je bil res poseben mir.",
    name: "Nina R.",
    location: "Maribor"
  },
  {
    quote: "Najlepši del ni bil samo to, kako je kos izgledal. Bil je občutek, da sem v njem končno jaz. Mirna, samozavestna in brez tistega notranjega vprašanja, ali je res prav.",
    name: "Petra K.",
    location: "Celje"
  }
];

// FAQ Data
const faqs = [
  {
    question: "Ali je prvo srečanje res brezplačno?",
    answer: "Da.\nPrvo srečanje je brezplačno in brez obveznosti.\nNi pa površno.\nTo je čas za pogovor, usmeritev in občutek, kateri Patricia Pie modeli bi ti lahko zares ustrezali."
  },
  {
    question: "Kaj dobim na prvem srečanju?",
    answer: "Dobiš čas, pozornost in jasno smer.\nSkupaj pogledamo, kaj iščeš, kako želiš, da se v oblačilu počutiš, in kateri Patricia Pie modeli bi bili zate pravi.\nVelikokrat ženska že po tem srečanju natančno ve, kaj je njen naslednji korak."
  },
  {
    question: "Ali je Perfect Fit namenjen kateremukoli modelu?",
    answer: "Perfect Fit je na voljo za Patricia Pie modele.\nIzbiraš lahko med modeli, ki so nastajali skozi leta in skozi kolekcije Patricia Pie."
  },
  {
    question: "Ali lahko prinesem fotografijo drugega oblačila in ga date izdelati?",
    answer: "Fotografije, ideje in občutki so lahko dobrodošlo izhodišče za pogovor.\nPerfect Fit pa ne vključuje izdelave oblačil po fotografijah drugih znamk ali naključnih referencah.\nKončna izbira vedno temelji na Patricia Pie modelih."
  },
  {
    question: "Ali se cena oblačila določi že vnaprej?",
    answer: "Da.\nKo izberemo model, material in smer izvedbe, končno ceno določimo vnaprej.\nTako od začetka veš, kaj pričakovati."
  },
  {
    question: "Koliko obiskov je običajno potrebnih?",
    answer: "Najpogosteje sta potrebna dva do trije obiski.\nPrvi za pogovor in izbor modela, nato meritve, pomerjanje oziroma prevzem, odvisno od kosa."
  },
  {
    question: "Kako hitro je kos pripravljen?",
    answer: "Običajno je kos pripravljen v 5 do 10 delovnih dneh.\nČe ga potrebuješ za poseben datum, se vedno potrudimo poiskati najboljšo možnost."
  },
  {
    question: "Kaj če ne vem točno, kaj želim?",
    answer: "To je popolnoma v redu.\nVčasih je dovolj že občutek, ki ga iščeš — med srečanjem skupaj poiščemo Patricia Pie model, ki ti najbolj ustreza."
  },
  {
    question: "Ali lahko s sabo prinesem fotografije, ideje ali oblačilo, ki mi je všeč?",
    answer: "Seveda.\nVse, kar pomaga pokazati občutek, silhueto ali smer, je dobrodošlo kot izhodišče za pogovor.\nPerfect Fit pa vedno izhaja iz Patricia Pie modelov."
  },
  {
    question: "Je Perfect Fit primeren tudi, če težko najdem nekaj, kar mi res lepo stoji?",
    answer: "Prav takrat je Perfect Fit pogosto najlepša rešitev.\nKo Patricia Pie model prilagodimo tebi, se spremeni tudi občutek, kako ga nosiš."
  },
  {
    question: "Kje poteka prvo srečanje?",
    answer: "Srečanje lahko poteka v Studiu PP, v ateljeju, v butiku ali na izbranih Patricia Pie lokacijah.\nSkupaj izberemo prostor, ki ti najbolj ustreza."
  },
  {
    question: "Ali je Perfect Fit namenjen samo posebnim priložnostim?",
    answer: "Ne.\nVčasih nastane kos za pomemben dogodek, pogosto pa prav tisti, ki ga potem najraje nosiš znova in znova."
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
        <p className="pb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function PerfectFitContent() {
  const { openBooking } = useBooking();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src="HeartstringsOfPassion__11_rkb2xm"
              alt="Perfect Fit - Oblačila po meri"
              fill
              className="object-cover"
              containerClassName="h-full w-full"
              priority
              sizes="100vw"
            />
            {/* Subtle multi-layer overlay for depth and readability */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          
          <div className="relative z-10 px-4 max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-xs uppercase tracking-[0.4em] font-light text-white/70"
              >
                Perfect Fit
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
              >
                Ko ni več <br className="hidden md:block" /> ničesar za popraviti.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl font-light text-white/90 max-w-xl mx-auto leading-relaxed"
              >
                Perfect Fit je trenutek, ko oblačilo ne zahteva prilagajanja. <br className="hidden md:block" />
                Ko stojiš pred ogledalom in prvič začutiš mir. <br className="hidden md:block" />
                Ker se je nekaj končno prilagodilo tebi.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-8 pt-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={openBooking}
                  className="min-w-[220px] bg-white text-black hover:bg-white/90 border-white px-10"
                >
                  Rezerviraj termin
                </Button>
                <Link 
                  href="#proces" 
                  className="group relative text-white text-sm tracking-widest uppercase font-light overflow-hidden py-2"
                >
                  <span className="relative z-10">Kako poteka Perfect Fit</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-white/30 transition-transform duration-500 scale-x-100 group-hover:scale-x-0 group-hover:origin-right" />
                  <span className="absolute bottom-0 left-0 w-full h-px bg-white transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-[10px] tracking-[0.2em] uppercase text-white/50"
              >
                Prvi obisk je brezplačen in brez obveznosti.
              </motion.p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="h-6 w-6 text-white/30 animate-bounce" />
          </motion.div>
        </section>

        {/* Emotional Recognition Section */}
        <Section className="bg-background py-32 lg:py-48">
          <div className="max-w-4xl mx-auto text-center space-y-16 lg:space-y-24">
            {/* Opening Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto space-y-8"
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.15]">
                Ko veš, kako je, ko nič zares ne sede.
              </h2>
              <div className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                <p>
                  Včasih ni težava v tem, da ne najdeš pravega kosa. <br />
                  Težava je v občutku, da moraš skoraj vedno nekaj popraviti.
                </p>
              </div>
            </motion.div>

            {/* Quiet List of Frustrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-base md:text-lg font-light text-muted-foreground/60 space-y-2 md:space-y-3 italic">
                <p>Povleči blago nižje.</p>
                <p>Popraviti dolžino.</p>
                <p>Skrivati, kar nočeš skrivati.</p>
                <p>In ves čas misliti na oblačilo, namesto nase.</p>
              </div>
            </motion.div>

            {/* Concluding Emotional Shift */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto pt-8 md:pt-16"
            >
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
                Perfect Fit nastane prav tukaj. <br />
                V trenutku, ko si ne želiš več prilagajanja, <br />
                ampak občutek, da je nekaj končno <br className="hidden md:block" /> narejeno zate.
              </p>
            </motion.div>

            {/* Refined Emphasis Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-16 md:pt-24 border-t border-tertiary/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-[11px] md:text-xs tracking-[0.4em] uppercase font-medium text-tertiary/80">
                <div className="flex flex-col items-center gap-2">
                  <span>Brez popravljanja.</span>
                </div>
                <span className="hidden md:block w-px h-8 bg-tertiary/20" />
                <div className="flex flex-col items-center gap-2">
                  <span>Brez ugibanja.</span>
                </div>
                <span className="hidden md:block w-px h-8 bg-tertiary/20" />
                <div className="flex flex-col items-center gap-2">
                  <span>Brez prilagajanja.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Locations */}
        <Section className="bg-secondary/5 py-32">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Heading size="lg" className="mb-4">Štiri lokacije. Ena filozofija.</Heading>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Naj bo v Studiu PP v Ljubljani, ateljeju, butiku ali v hotelu Habakuk v Mariboru — bistvo ostaja isto. <br />
                Miren prostor. Osebna pozornost. Občutek, da si vzeta zares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Studio Patricia Pie */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-sm border border-tertiary/10 overflow-hidden group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/showroom_ipad_coffeetable_pov.png"
                    alt="Studio PP Ljubljana"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center text-center">
                  <h3 className="text-xl font-heading mb-3 text-tertiary">Studio PP</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Za trenutke, ko si želiš miru, časa in popolne pozornosti.
                  </p>
                </div>
              </motion.div>

              {/* Zoofa */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-background rounded-sm border border-tertiary/10 overflow-hidden group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <CloudinaryImage
                    src="Zoofa_hmxuxr"
                    alt="Zoofa Butik"
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center text-center">
                  <h3 className="text-xl font-heading mb-3 text-tertiary">Zoofa butik</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Za prvi stik, občutek in pogovor, iz katerega se lahko začne nekaj več.
                  </p>
                </div>
              </motion.div>

              {/* Atelje */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-background rounded-sm border border-tertiary/10 overflow-hidden group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/atelier_sewing_machine_final.png"
                    alt="Atelje Gornja Radgona"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center text-center">
                  <h3 className="text-xl font-heading mb-3 text-tertiary">Atelje Gornja Radgona</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Za prostor, kjer ideja, roke in natančnost pridejo čisto blizu.
                  </p>
                </div>
              </motion.div>

              {/* Hotel Habakuk */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-background rounded-sm border border-tertiary/10 overflow-hidden group flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <CloudinaryImage
                    src="habakuk_cbtoan"
                    alt="Hotel Habakuk Maribor"
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-center text-center">
                  <h3 className="text-xl font-heading mb-3 text-tertiary">Hotel Habakuk Maribor</h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    Za osebno izkušnjo v Mariboru, kjer si vzameva čas, mir in pozornost samo zate.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Process Timeline */}
        <Section id="proces" className="bg-linear-to-b from-background to-secondary/20 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Kako poteka Perfect Fit</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                Štirje mirni koraki do kosa, ki se prilagodi tebi.
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Svetovanje in meritve</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    V Studiu PP začnemo s pogovorom.
                    O tvojem ritmu, željah in občutku, ki ga iščeš.
                    Nato sledijo natančne meritve, ki postanejo osnova za tvoj kos.
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Izdelava kosa</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    V ateljeju se začne proces izdelave.
                    Tam se ideja prevede v obliko, z vso pozornostjo do linije, občutka in detajlov.
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     />
                  </div>
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Vmesno pomerjanje</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Ko je kos skoraj pripravljen, sledi pomerjanje.
                    Takrat skupaj preveriva prileganje, gibanje in zadnje drobne prilagoditve.
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     />
                  </div>
                  {/* Last dot is different or hidden */}
                  <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary/40 rounded-full border-4 border-background hidden lg:block z-20 animate-pulse" />
                </div>
                
                <div className="px-2">
                  <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">Prevzem</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Na koncu prevzameš kos, ki ni narejen samo po meri,
                    ampak po občutku, da se v njem res prepoznaš.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </Section>

        {/* Kaj se spremeni */}
        <Section className="bg-background py-32 lg:py-48 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            {/* Content List */}
            <div className="space-y-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Heading size="lg" className="leading-[1.15] max-w-xl">
                  Kaj se spremeni, ko je nekaj res narejeno zate
                </Heading>
                <div className="text-xl font-light text-muted-foreground leading-relaxed pl-8 border-l border-tertiary/20">
                  <p>Perfect Fit ni samo način izdelave.</p>
                  <p>Je občutek, da ti ni treba več iskati kompromisa.</p>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.12 }
                  }
                }}
                className="space-y-16"
              >
                {[
                  { lead: "Ničesar ni treba popravljati.", sub: "Ko nekaj res sede, to začutiš takoj." },
                  { lead: "Pozornost je samo tvoja.", sub: "En termin. En pogovor. Čas, ki je namenjen tebi." },
                  { lead: "Ne izbiraš samo kosa.", sub: "Skupaj iščeva občutek, v katerem se prepoznaš." },
                  { lead: "Vsak detajl ima razlog.", sub: "Linija, dolžina in občutek nastajajo z mislijo nate." },
                  { lead: "Garderoba se začne sestavljati drugače.", sub: "Ne po kosih, ampak po življenju, ki ga živiš." },
                  { lead: "Na koncu ne odneseš samo oblačila.", sub: "Odneseš mir, samozavest in občutek, da je to res tvoje." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className="relative pl-10 group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-tertiary/10 group-hover:bg-tertiary/40 transition-colors duration-500" />
                    <div className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-tertiary/20 group-hover:bg-tertiary transition-colors duration-500" />
                    <h4 className="text-xl md:text-2xl font-heading text-foreground mb-2.5 tracking-tight group-hover:text-tertiary transition-colors duration-500">
                      {item.lead}
                    </h4>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-md">
                      {item.sub}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="sticky top-24 aspect-4/5 rounded-sm overflow-hidden shadow-2xl"
            >
              <CloudinaryImage
                src="Body_Andreja_2_osuvgy"
                alt="Patricia Pie Perfect Fit Detail"
                fill
                containerClassName="h-full w-full"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </motion.div>
          </div>
        </Section>

        {/* Testimonials Slider */}
        <Section className="bg-secondary/10 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-10"
                >
                  <blockquote className="text-2xl md:text-3xl font-heading text-foreground leading-[1.4] italic max-w-2xl mx-auto tracking-tight">
                    &quot;{testimonials[activeTestimonial].quote}&quot;
                  </blockquote>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="space-y-1"
                  >
                    <cite className="not-italic font-bold text-foreground block tracking-wider uppercase text-sm">
                      {testimonials[activeTestimonial].name}
                    </cite>
                    <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-light">
                      {testimonials[activeTestimonial].location}
                    </span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Subtle Navigation Dots */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`group relative p-2 transition-all duration-500 ${
                      activeTestimonial === i ? "opacity-100" : "opacity-30 hover:opacity-50"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <div className={`h-1 transition-all duration-500 rounded-full ${
                      activeTestimonial === i ? "w-8 bg-tertiary" : "w-4 bg-foreground"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Section>
        
        {/* Visual Proof / Gallery - NEW */}
        <Section className="bg-background overflow-hidden border-t border-secondary/20">
            <div className="max-w-6xl mx-auto space-y-12">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center max-w-3xl mx-auto space-y-4"
               >
                  <Heading size="lg">Razlika je v detajlih</Heading>
                  <p className="text-lg text-muted-foreground">
                    Perfect Fit ni samo v merah. <br />
                    Je v občutku, kako oblačilo stoji, sledi telesu in pusti, da prideš do izraza ti.
                  </p>
               </motion.div>
               
               <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
               >
                  {/* Detail 1 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="group space-y-4"
                  >
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Suknjič_Andreja_2_pv1mmn" 
                           alt="Detajl suknjiča Patricia Pie, ki prikazuje popolno prileganje v ramenih"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                           sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           RAMENA IN ROKAVI
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Ko je linija prava, ni ničesar, kar bi vleklo, stiskalo ali motilo.
                        Samo občutek, da vse stoji tako, kot mora.
                     </p>
                  </motion.div>

                  {/* Detail 2 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="group space-y-4"
                  >
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Body_Ana_6_hiytxl" 
                           alt="Poudarek na silhueti pasu pri Patricia Pie izdelavi po meri"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                           sizes="(max-width: 768px) 100vw, 33vw"
                        />
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           PAS IN SILHUETA
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Silhueta ne nastaja po konfekciji.
                        Nastaja po tebi, po tvojem gibanju in občutku v telesu.
                     </p>
                  </motion.div>

                  {/* Detail 3 */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="group space-y-4"
                  >
                     <div className="relative aspect-3/4 overflow-hidden rounded-sm">
                        <CloudinaryImage 
                           src="Suknjič_Ana_in_Krilo_Ana_4_i7fzyd" 
                           alt="Detajl suknjiča in krila, ki prikazuje naraven padec materiala"
                           fill
                           containerClassName="h-full w-full"
                           className="object-cover transition-transform duration-700 group-hover:scale-105"
                           sizes="(max-width: 768px) 100vw, 33vw"
                        />
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                           DOLŽINA IN PADEC
                        </div>
                     </div>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Najlepši trenutek je, ko se kos konča točno tam, kjer deluje najbolj naravno.
                        Mirno. Lahkotno. Pravilno.
                     </p>
                  </motion.div>
               </motion.div>
            </div>
        </Section>



        {/* FAQ */}
        <Section className="bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground mb-4 font-light">Vse, kar želiš vedeti, preden narediš prvi korak.</p>
            <Heading size="lg" className="text-center mb-12">Pogosta vprašanja</Heading>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="bg-tertiary/10 text-center py-32 lg:py-40">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-6">
              <Heading size="xl" className="font-light tracking-tight">Morda je to tvoj prvi korak.</Heading>
              <div className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                <p>Včasih je dovolj en miren pogovor, da začutiš, kaj ti zares ustreza.</p>
                <p>Prvo srečanje je brezplačno, osebno in brez obveznosti.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col items-center gap-6">
                <p className="text-sm tracking-[0.3em] uppercase font-medium text-tertiary/80">
                  Čas zate. Jasna smer. Brez pritiska.
                </p>
                
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-tertiary/10 text-[11px] uppercase tracking-[0.2em] text-tertiary font-medium">
                   <span>Prvo srečanje je brezplačno</span>
                   <span className="w-1 h-1 rounded-full bg-tertiary/30"></span>
                   <span>brez obveznosti</span>
                </div>
              </div>

              <div className="space-y-6">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={openBooking}
                  className="px-12 py-7 text-lg"
                >
                  Rezerviraj prvo srečanje
                </Button>
                
                <p className="text-xs tracking-widest uppercase font-light text-muted-foreground/60">
                  Perfect Fit vedno izhaja iz Patricia Pie modelov.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
