// Server Component — no "use client"
// Interactive parts are delegated to client islands:
//   BookButton       → hero CTA + final CTA
//   TestimonialsSlider → testimonials carousel
//   FaqAccordion     → FAQ accordion list
// All motion.div animations use the thin MotionDiv client wrapper.

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CloudinaryImage from "@/components/shared/CloudinaryImage";
import { ChevronDown } from "lucide-react";
import { MotionDiv, MotionSpan } from "@/components/ui/Motion";
import { BookButton } from "./components/BookButton";
import { TestimonialsSlider } from "./components/TestimonialsSlider";
import { FaqAccordion } from "./components/FaqAccordion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const galleryContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const galleryItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const detailsItems = [
  { lead: "Ničesar ni treba popravljati.", sub: "Ko nekaj res sede, to začutiš takoj." },
  { lead: "Pozornost je samo tvoja.", sub: "En termin. En pogovor. Čas, ki je namenjen tebi." },
  { lead: "Ne izbiraš samo kosa.", sub: "Skupaj iščeva občutek, v katerem se prepoznaš." },
  { lead: "Vsak detajl ima razlog.", sub: "Linija, dolžina in občutek nastajajo z mislijo nate." },
  { lead: "Garderoba se začne sestavljati drugače.", sub: "Ne po kosih, ampak po življenju, ki ga živiš." },
  { lead: "Na koncu ne odneseš samo oblačila.", sub: "Odneseš mir, samozavest in občutek, da je to res tvoje." },
];

export default function PerfectFitContent() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
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
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 px-4 max-w-5xl mx-auto space-y-12">
            <div className="space-y-6">
              <MotionSpan
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-xs uppercase tracking-[0.4em] font-light text-white/70"
              >
                Perfect Fit
              </MotionSpan>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
                // Using div+h1-styled text because MotionDiv renders a div; heading semantics handled below
              >
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]">
                  Ko ni več <br className="hidden md:block" /> ničesar za popraviti.
                </h1>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl font-light text-white/90 max-w-xl mx-auto leading-relaxed"
              >
                <p>
                  Perfect Fit je trenutek, ko oblačilo ne zahteva prilagajanja.{" "}
                  <br className="hidden md:block" />
                  Ko stojiš pred ogledalom in prvič začutiš mir.{" "}
                  <br className="hidden md:block" />
                  Ker se je nekaj končno prilagodilo tebi.
                </p>
              </MotionDiv>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-8 pt-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* BookButton island handles useBooking */}
                <BookButton
                  className="min-w-[220px] bg-white text-black hover:bg-white/90 border-white px-10"
                />
                <Link
                  href="#proces"
                  className="hidden sm:block group relative text-white text-sm tracking-widest uppercase font-light overflow-hidden py-2"
                >
                  <span className="relative z-10">Kako poteka Perfect Fit</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-white/30 transition-transform duration-500 scale-x-100 group-hover:scale-x-0 group-hover:origin-right" />
                  <span className="absolute bottom-0 left-0 w-full h-px bg-white transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left" />
                </Link>
              </div>

              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-[10px] tracking-[0.2em] uppercase text-white/50"
              >
                <p>Prvi obisk je brezplačen in brez obveznosti.</p>
              </MotionDiv>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <ChevronDown className="h-6 w-6 text-white/30 animate-bounce" />
          </MotionDiv>
        </section>

        {/* ── Emotional Recognition ────────────────────────────────────────── */}
        <Section className="bg-background py-32 lg:py-48">
          <div className="max-w-4xl mx-auto text-center space-y-16 lg:space-y-24">
            <MotionDiv
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
            </MotionDiv>

            <MotionDiv
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
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto pt-8 md:pt-16"
            >
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
                Perfect Fit nastane prav tukaj. <br />
                V trenutku, ko si ne želiš več prilagajanja, <br />
                ampak občutek, da je nekaj končno{" "}
                <br className="hidden md:block" /> narejeno zate.
              </p>
            </MotionDiv>

            <MotionDiv
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
            </MotionDiv>
          </div>
        </Section>

        {/* ── Locations ────────────────────────────────────────────────────── */}
        <Section className="bg-secondary/5 py-32">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <Heading size="lg" className="mb-4">Štiri lokacije. Ena filozofija.</Heading>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Naj bo v Studiu PP v Ljubljani, ateljeju, butiku ali v hotelu Habakuk v Mariboru — bistvo ostaja isto.{" "}
                <br />
                Miren prostor. Osebna pozornost. Občutek, da si vzeta zares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  src: "showroom_ipad_coffeetable_pov",
                  alt: "Studio PP Ljubljana",
                  title: "Studio PP",
                  desc: "Za trenutke, ko si želiš miru, časa in popolne pozornosti.",
                  delay: 0,
                },
                {
                  src: "Zoofa_hmxuxr",
                  alt: "Zoofa Butik",
                  title: "Zoofa butik",
                  desc: "Za prvi stik, občutek in pogovor, iz katerega se lahko začne nekaj več.",
                  delay: 0.1,
                },
                {
                  src: "atelier_sewing_machine_final",
                  alt: "Atelje Gornja Radgona",
                  title: "Atelje Gornja Radgona",
                  desc: "Za prostor, kjer ideja, roke in natančnost pridejo čisto blizu.",
                  delay: 0.2,
                },
                {
                  src: "habakuk_cbtoan",
                  alt: "Hotel Habakuk Maribor",
                  title: "Hotel Habakuk Maribor",
                  desc: "Za osebno izkušnjo v Mariboru, kjer si vzameva čas, mir in pozornost samo zate.",
                  delay: 0.3,
                },
              ].map((loc) => (
                <MotionDiv
                  key={loc.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: loc.delay }}
                  className="bg-background rounded-sm border border-tertiary/10 overflow-hidden group flex flex-col h-full"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <CloudinaryImage
                      src={loc.src}
                      alt={loc.alt}
                      fill
                      containerClassName="h-full w-full"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-center text-center">
                    <h3 className="text-xl font-heading mb-3 text-tertiary">{loc.title}</h3>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">{loc.desc}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Process Timeline ──────────────────────────────────────────────── */}
        <Section id="proces" className="bg-linear-to-b from-background to-secondary/20 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">Kako poteka Perfect Fit</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                Štirje mirni koraki do kosa, ki se prilagodi tebi.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-linear-to-r from-transparent via-tertiary/20 to-transparent z-0" />

              {[
                { n: "01", src: "Patricia Pie/Process/perfect_fit_consultation", alt: "Svetovanje in Meritve", title: "Svetovanje in meritve", body: "V Studiu PP začnemo s pogovorom. O tvojem ritmu, željah in občutku, ki ga iščeš. Nato sledijo natančne meritve, ki postanejo osnova za tvoj kos.", delay: 0, pulse: false },
                { n: "02", src: "Patricia Pie/Process/perfect_fit_atelier", alt: "Izdelava v ateljeju", title: "Izdelava kosa", body: "V ateljeju se začne proces izdelave. Tam se ideja prevede v obliko, z vso pozornostjo do linije, občutka in detajlov.", delay: 0.1, pulse: false },
                { n: "03", src: "Patricia Pie/Process/perfect_fit_fitting", alt: "Vmesno pomerjanje", title: "Vmesno pomerjanje", body: "Ko je kos skoraj pripravljen, sledi pomerjanje. Takrat skupaj preveriva prileganje, gibanje in zadnje drobne prilagoditve.", delay: 0.2, pulse: false },
                { n: "04", src: "Patricia Pie/Process/perfect_fit_delivery", alt: "Finalizacija in Prevzem", title: "Prevzem", body: "Na koncu prevzameš kos, ki ni narejen samo po meri, ampak po občutku, da se v njem res prepoznaš.", delay: 0.3, pulse: true },
              ].map((step) => (
                <MotionDiv
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="relative z-10 group"
                >
                  <div className="relative mb-8">
                    <div className="text-8xl font-heading text-tertiary/5 absolute -top-10 -left-4 z-0 group-hover:text-tertiary/10 transition-colors duration-500">
                      {step.n}
                    </div>
                    <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-md border border-tertiary/10 group-hover:shadow-xl transition-all duration-500">
                      <CloudinaryImage
                        src={step.src}
                        alt={step.alt}
                        fill
                        containerClassName="h-full w-full"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    {step.pulse ? (
                      <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary/40 rounded-full border-4 border-background hidden lg:block z-20 animate-pulse" />
                    ) : (
                      <div className="absolute top-8 -right-3 w-6 h-6 bg-tertiary rounded-full border-4 border-background hidden lg:block z-20 shadow-sm" />
                    )}
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-heading mb-3 text-foreground group-hover:text-tertiary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Kaj se spremeni ───────────────────────────────────────────────── */}
        <Section className="bg-background py-32 lg:py-48 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-stretch">
            <div className="space-y-20">
              <MotionDiv
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
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-16"
              >
                {detailsItems.map((item, i) => (
                  <MotionDiv key={i} variants={staggerItem} className="relative pl-10 group">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-tertiary/10 group-hover:bg-tertiary/40 transition-colors duration-500" />
                    <div className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-tertiary/20 group-hover:bg-tertiary transition-colors duration-500" />
                    <h4 className="text-xl md:text-2xl font-heading text-foreground font-medium mb-2.5 tracking-tight">
                      {item.lead}
                    </h4>
                    <p className="text-muted-foreground font-light text-base leading-relaxed max-w-md">{item.sub}</p>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </div>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="sticky top-24 self-start rounded-sm overflow-hidden shadow-2xl min-h-[600px] lg:min-h-[900px]"
            >
              <CloudinaryImage
                src="Krilo_Karo_2_v16cus"
                alt="Silhueta po meri — Patricia Pie Perfect Fit"
                fill
                containerClassName="absolute inset-0"
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </MotionDiv>
          </div>
        </Section>

        {/* ── Testimonials (client island) ──────────────────────────────────── */}
        <Section className="bg-secondary/10 py-32 lg:py-40">
          <div className="max-w-4xl mx-auto px-6">
            <TestimonialsSlider />
          </div>
        </Section>

        {/* ── Gallery / "Razlika je v detajlih" ────────────────────────────── */}
        <Section className="bg-background overflow-hidden border-t border-secondary/20 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto space-y-12">
            <MotionDiv
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
            </MotionDiv>

            <MotionDiv
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={galleryContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  src: "Suknjič_Andreja_2_pv1mmn",
                  alt: "Detajl suknjiča Patricia Pie, ki prikazuje popolno prileganje v ramenih",
                  label: "RAMENA IN ROKAVI",
                  desc: "Ko je linija prava, ni ničesar, kar bi vleklo, stiskalo ali motilo. Samo občutek, da vse stoji tako, kot mora.",
                },
                {
                  src: "Body_Ana_6_hiytxl",
                  alt: "Poudarek na silhueti pasu pri Patricia Pie izdelavi po meri",
                  label: "PAS IN SILHUETA",
                  desc: "Silhueta ne nastaja po konfekciji. Nastaja po tebi, po tvojem gibanju in občutku v telesu.",
                },
                {
                  src: "Suknjič_Ana_in_Krilo_Ana_4_i7fzyd",
                  alt: "Detajl suknjiča in krila, ki prikazuje naraven padec materiala",
                  label: "DOLŽINA IN PADEC",
                  desc: "Najlepši trenutek je, ko se kos konča točno tam, kjer deluje najbolj naravno. Mirno. Lahkotno. Pravilno.",
                },
              ].map((card) => (
                <MotionDiv key={card.src} variants={galleryItem} className="group space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <CloudinaryImage
                      src={card.src}
                      alt={card.alt}
                      fill
                      containerClassName="h-full w-full"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-tertiary">
                      {card.label}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </Section>

        {/* ── FAQ (client island) ───────────────────────────────────────────── */}
        <Section className="bg-background py-32 lg:py-40">
          <div className="max-w-3xl mx-auto">
            <Heading size="lg" className="text-center mb-4">Pogosta vprašanja</Heading>
            <p className="text-center text-muted-foreground mb-12 font-light">
              Vse, kar želiš vedeti, preden narediš prvi korak.
            </p>
            <FaqAccordion />
          </div>
        </Section>

        {/* ── Final CTA ─────────────────────────────────────────────────────── */}
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
                  <span className="w-1 h-1 rounded-full bg-tertiary/30" />
                  <span>brez obveznosti</span>
                </div>
              </div>

              <div className="space-y-6">
                <BookButton
                  label="Rezerviraj prvo srečanje"
                  className="px-12 py-7 text-lg"
                />
                <p className="text-xs tracking-widest uppercase font-light text-muted-foreground/60">
                  Vsak kos nastane skupaj z nami.
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
