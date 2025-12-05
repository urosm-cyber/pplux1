import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import Hero from '@/components/sections/Hero';
import { Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      
      <main className="flex-1 w-full">
        <Hero />

        {/* Social Proof Bar */}
        <Section className="bg-secondary/20 py-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
            <div className="space-y-1">
              <span className="block font-heading text-2xl text-foreground">8 let</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">na Ljubljana Fashion Week</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-tertiary/30" />
            <div className="space-y-1">
              <span className="block font-heading text-2xl text-foreground">100%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Slovensko oblikovanje</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-tertiary/30" />
            <div className="space-y-1">
              <span className="block font-heading text-2xl text-foreground">Atelje</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Lastna proizvodnja</span>
            </div>
          </div>
        </Section>

        {/* Intro / Philosophy Section */}
        <Section className="bg-background text-center py-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <Heading size="lg">Pie Filozofija</Heading>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vsak kos je sestavina. Vsaka kolekcija je del celote. 
              Patricia Pie ne sledi hitrim trendom, ampak gradi tvojo garderobo počasi, premišljeno in z ljubeznijo.
              Ustvarjamo kose, v katerih se počutiš samozavestno in avtentično.
            </p>
            <Link href="/o-znamki" className="inline-block pt-4 text-tertiary hover:text-foreground transition-colors font-medium border-b border-tertiary hover:border-foreground pb-1">
              Preberi več o naši zgodbi
            </Link>
          </div>
        </Section>

        {/* Collections Preview */}
        <Section className="bg-secondary/10">
          <div className="flex justify-between items-end mb-12">
            <Heading size="lg">Najnovejše: FW25 Symphonia</Heading>
            <Link href="/kolekcije/fw25-symphonia">
              <Button variant="ghost">Poglej kolekcijo &rarr;</Button>
            </Link>
          </div>
          {/* Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'look-1', title: 'Symphonia Look 01', image: 'collections/Symphonia/Symphonia_209_gasqsx' },
              { id: 'look-2', title: 'Symphonia Look 02', image: 'collections/Symphonia/Symphonia_190_xchxis' },
              { id: 'look-3', title: 'Symphonia Look 03', image: 'hero-homepage_4c9fd9' }
            ].map((item) => (
              <Link key={item.id} href="/kolekcije/fw25-symphonia" className="group block">
                <div className="relative overflow-hidden aspect-3/4 mb-4">
                  <CloudinaryImage 
                    src={item.image} 
                    alt={item.title}
                    fill
                    containerClassName="h-full w-full"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-medium group-hover:text-tertiary transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </Section>

        {/* Perfect Fit Teaser */}
        <Section className="bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/3]">
               <CloudinaryImage 
                  src="HeartstringsOfPassion__2_qjedlh" 
                  alt="Perfect Fit proces"
                  fill
                  containerClassName="h-full w-full"
                  className="object-cover rounded-sm"
               />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Heading size="xl">Perfect Fit</Heading>
              <h3 className="text-2xl font-light text-tertiary">Osebno. Natančno. Vaše.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pozabi na konfekcijske številke, ki se ti ne prilegajo. 
                Naša storitev Perfect Fit zagotavlja, da je vsak kos prilagojen tvojim meram in postavi.
                Od izbire materiala do končnega šiva – sodelujemo s teboj.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-tertiary/10">
                    <Check className="h-4 w-4 text-tertiary" />
                  </div>
                  <span className="text-lg">Individualno svetovanje</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-tertiary/10">
                    <Check className="h-4 w-4 text-tertiary" />
                  </div>
                  <span className="text-lg">Izdelava po meri v 5-10 dneh</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-tertiary/10">
                    <Check className="h-4 w-4 text-tertiary" />
                  </div>
                  <span className="text-lg">Trajnostni pristop k modi</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link href="/perfect-fit">
                  <Button variant="primary">Kako deluje Perfect Fit</Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Showroom Invite - Premium Experience */}
        <Section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
          <div className="absolute inset-0">
             <CloudinaryImage 
                src="/images/showroom/detail.png" 
                alt="Showroom Experience"
                fill
                containerClassName="h-full w-full"
                className="object-cover"
             />
             <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-8">
            <Heading size="xl" className="text-white drop-shadow-lg">
              Showroom ni trgovina.<br/>
              <span className="italic font-serif">Showroom je doživetje.</span>
            </Heading>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Intimna, privatna couture izkušnja v osrčju Ljubljane. 
              Prostor, kjer se čas ustavi in kjer si ti na prvem mestu.
            </p>
            <Link href="/showroom">
              <Button variant="primary" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black">
                Odkrij več
              </Button>
            </Link>
          </div>
        </Section>

        {/* Testimonials */}
        <Section className="bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <Heading size="lg" className="mb-12">Mnenja strank</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-lg italic font-heading text-foreground/80">
                  &quot;Prvič v življenju imam hlače, ki mi popolnoma sedijo. Barbara je razumela točno, kaj potrebujem, še preden sem znala povedati.&quot;
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground block">Katja Novak</span>
                  odvetnica, Ljubljana
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg italic font-heading text-foreground/80">
                  &quot;Oblačila, ki niso le lepa, ampak se v njih počutim močno. Perfect Fit je res vreden vsakega evra.&quot;
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground block">Ana Kovač</span>
                  podjetnica, Maribor
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
