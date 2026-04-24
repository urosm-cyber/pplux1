"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import { useBooking } from '@/components/booking/BookingContext';
import { subscribeToNewsletter } from '@/app/actions';

export default function ZoofaContent() {
  const { openBooking } = useBooking();
  const [subscribeMessage, setSubscribeMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [subscribePending, setSubscribePending] = useState(false);

  async function handleSubscribe(formData: FormData) {
    setSubscribePending(true);
    setSubscribeMessage(null);
    const result = await subscribeToNewsletter(formData);
    if (result.success) {
      setSubscribeMessage({ text: result.message || 'Hvala. Ostajava v stiku.', type: 'success' });
    } else {
      setSubscribeMessage({ text: result.error || 'Prišlo je do napake. Poskusite znova.', type: 'error' });
    }
    setSubscribePending(false);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO — personal welcome for ZOOFA visitors */}
        <section className="relative h-[85vh] min-h-[620px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/studio-pp/interior.png"
              alt="Studio PP — prostor, kjer se zgodba nadaljuje"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)] opacity-60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white pb-12"
          >
            <div className="max-w-3xl space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-2 drop-shadow-sm"
              >
                Osebno pismo za stranke ZOOFE
              </motion.span>

              <Heading
                as="h1"
                size="xl"
                className="text-white drop-shadow-lg font-light tracking-wide leading-[1.15]"
              >
                Dobrodošli iz ZOOFE.
              </Heading>

              <p className="text-lg md:text-xl font-light drop-shadow-md max-w-2xl mx-auto opacity-90 leading-relaxed">
                Če ste nas spoznali na Miklošičevi, se lahko vaša zgodba s
                Patricia Pie nadaljuje tukaj — še bolj osebno, mirno in blizu.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[220px] shadow-xl hover:shadow-tertiary/20 transition-all font-medium tracking-wide h-14 text-base"
                  onClick={openBooking}
                >
                  Rezervirajte svoj termin
                </Button>
                <Link href="/kolekcije" className="inline-flex">
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[220px] border-white text-white hover:bg-white hover:text-black transition-all h-14 text-base"
                  >
                    Odkrijte kolekcije
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TRANSITION STORY — why this page exists */}
        <Section className="bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <Heading size="lg" className="font-light tracking-tight">
              Zgodba, ki se samo nadaljuje.
            </Heading>

            <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              <p>ZOOFA je bila mnogo let prostor srečanj.</p>
              <p>
                Prostor, kjer se moda ni zgodila hitro, ampak skozi pogovor,
                pogled, občutek in izbiro.
              </p>
              <p>
                Morda ste tam prvič srečali Patricia Pie. Morda ste pri nas že
                našli nekaj, kar vas je spremljalo dlje, kot ste pričakovali.
              </p>
              <p className="text-tertiary italic font-serif text-2xl md:text-3xl pt-4">
                Zdaj se ta odnos ne konča. Samo nadaljuje se drugje.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* STUDIO PP INVITATION */}
        <Section className="bg-secondary/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-3/4 lg:aspect-square overflow-hidden rounded-sm"
            >
              <CloudinaryImage
                src="showroom-detail_je8xir"
                alt="Studio PP — osebni sprejem"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="h-full w-full"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Heading size="lg">Zdaj vas lahko sprejmemo še bolj osebno.</Heading>

              <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                <p>V Studio PP ni naglice.</p>
                <p>
                  Je miren prostor, kjer si vzamemo čas za vas, za vaše telo,
                  za vaš način življenja in za občutek, ki ga želite nositi s
                  seboj.
                </p>
                <p>
                  Barbara vas sprejme osebno. Pogovor se začne nežno. Potem
                  pride trenutek pred ogledalom.
                </p>
                <p className="italic text-tertiary/90">
                  In včasih se zgodi nekaj zelo tihega — ženska se neha
                  popravljati.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[240px]"
                  onClick={openBooking}
                >
                  Rezervirajte obisk v Studio PP
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* PERFECT FIT CONTINUATION */}
        <Section className="bg-background">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative aspect-4/3 lg:aspect-square overflow-hidden rounded-sm"
            >
              <CloudinaryImage
                src="HeartstringsOfPassion__17_lidjwq"
                alt="Perfect Fit — prilagoditev Patricia Pie modelov"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="h-full w-full"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 space-y-8"
            >
              <Heading size="lg">Ko nekaj postane vaše.</Heading>

              <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                <p>Pri Patricia Pie ne iščemo samo naslednjega kosa.</p>
                <p>Iščemo občutek, da ničesar ni treba popravljati.</p>
                <p>
                  Izbirate lahko med Patricia Pie modeli, ki so nastajali skozi
                  naše kolekcije, nato pa jih skozi Perfect Fit prilagodimo vam
                  — vašemu telesu, vašemu gibanju in vašemu občutku.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/perfect-fit">
                  <Button variant="outline" size="lg" className="min-w-[220px]">
                    Spoznajte Perfect Fit
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* TESTIMONIAL — quiet bridge before the browse moment */}
        <Section className="bg-tertiary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <svg
                className="w-10 h-10 mx-auto text-tertiary/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-light text-foreground mb-8 italic leading-relaxed">
              &quot;Prišla sem z občutkom, da spet ne bom čisto vedela, kaj mi
              zares pristaja.<br className="hidden md:block" />
              Potem pa sem se v nekem trenutku samo umirila.<br className="hidden md:block" />
              Barbara me je res poslušala in prvič sem imela občutek, da mi ni
              treba ničesar popravljati.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-0.5 bg-tertiary/30" />
              <p className="font-medium text-foreground">Maja, Ljubljana</p>
              <div className="w-10 h-0.5 bg-tertiary/30" />
            </div>
          </motion.div>
        </Section>

        {/* COLLECTIONS — visual browse path */}
        <Section className="bg-secondary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6 mb-14"
          >
            <Heading size="lg">Tudi, ko niste v studiu.</Heading>
            <div className="space-y-5 text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              <p>
                Nekatere zgodbe se začnejo z obiskom. Druge z ogledom od doma.
              </p>
              <p>
                V naših kolekcijah lahko odkrijete Patricia Pie modele in
                začutite, kaj vas pokliče naprej.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { title: 'Symphonia Look 01', image: 'Obleka_Ajda_6_nka2k4' },
              { title: 'Symphonia Look 02', image: 'Suknjič_Ana_in_Krilo_Ana_4_i7fzyd' },
              { title: 'Symphonia Look 03', image: 'Bluza_Karo_biseri_3_ljbdr5' },
            ].map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="/kolekcije/fw25-symphonia" className="group block">
                  <div className="relative overflow-hidden aspect-3/4 mb-4 rounded-sm">
                    <CloudinaryImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      containerClassName="h-full w-full"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-medium group-hover:text-tertiary transition-colors">
                    {item.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center pt-14"
          >
            <Link href="/kolekcije" className="inline-flex">
              <Button variant="primary" size="lg" className="min-w-[240px]">
                Odkrijte vse kolekcije
              </Button>
            </Link>
          </motion.div>
        </Section>

        {/* BARBARA CLOSING NOTE */}
        <Section className="bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-secondary/10 border border-secondary/20 p-8 md:p-14 rounded-sm space-y-10">
              <Heading size="lg" className="font-light tracking-tight">
                Če ste bile del ZOOFINE zgodbe, ste pri nas že domače.
              </Heading>

              <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
                <p>Vesela bom, če se srečamo znova.</p>
                <p>
                  Morda v Studio PP. Morda ob pomerjanju. Morda samo v tistem
                  tihem trenutku, ko pogledate vase in začutite: to sem jaz.
                </p>
              </div>

              <p className="font-serif text-3xl md:text-4xl text-tertiary">
                Barbara
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[240px]"
                  onClick={openBooking}
                >
                  Rezervirajte svoj termin
                </Button>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* QUIET SUBSCRIBE — for those not ready to book yet */}
        <Section className="bg-secondary/5 border-t border-secondary/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center space-y-10"
          >
            <div className="space-y-5">
              <Heading size="md" className="font-light tracking-tight">
                Če še ni pravi trenutek.
              </Heading>
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                Pustite mi svoj e-naslov in vam občasno napišem —<br className="hidden md:block" />
                ko se v Studio PP sprosti nov termin, ko nastane nov model<br className="hidden md:block" />
                ali ko je kaj, kar z vami delim tiše kot z drugimi.
              </p>
            </div>

            <form
              action={handleSubscribe}
              className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                name="email"
                type="email"
                placeholder="Vaš e-naslov"
                required
                aria-label="E-naslov"
                className="flex-1 px-4 py-3 bg-white border border-secondary/30 focus:border-tertiary outline-none transition-colors placeholder:text-muted-foreground/40 font-light"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={subscribePending}
                className="whitespace-nowrap px-8"
              >
                {subscribePending ? 'Pošiljam…' : 'Ostanite blizu'}
              </Button>
            </form>

            {subscribeMessage && (
              <div
                className={`mx-auto max-w-md p-3 text-sm font-light ${
                  subscribeMessage.type === 'success'
                    ? 'text-tertiary bg-tertiary/5 border border-tertiary/20'
                    : 'text-red-600 bg-red-50 border border-red-100'
                }`}
              >
                {subscribeMessage.text}
              </div>
            )}

            <p className="text-xs text-muted-foreground/60 max-w-sm mx-auto leading-loose pt-2">
              Občasno. Nikoli prepogosto.<br className="hidden md:block" />
              Odjava je vedno mogoča. S prijavo se strinjate z našo politiko zasebnosti.
            </p>

            <p className="font-serif text-xl text-tertiary/80 italic pt-2">— Barbara</p>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
