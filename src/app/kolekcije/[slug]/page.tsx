"use client";

import { use } from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CloudinaryImage from '@/components/shared/CloudinaryImage';
import Link from 'next/link';

// Collection data
const collections:  Record<string, {
  id: string;
  title: string;
  season: string;
  year: string;
  tagline: string;
  description: string[];
  images: {
    hero: string[];
    looks: string[];
  };
  perfectFitAvailable: boolean;
}> = {
  'fw25-symphonia': {
    id: 'fw25-symphonia',
    title: 'FW25 Symphonia',
    season: 'Jesen/Zima',
    year: '2025',
    tagline: 'Monokromatsko popotovanje skozi črno in belo',
    description: [
      'Kolekcija SYMPHONIA predstavlja najdrznejšo vizijo Patricia Pie - monokromatsko popotovanje skozi črno in belo, obogateno z zlato-srebrnimi poudarki. To je kolekcija, ki razkriva vso globino znanja našega ateljeja - od prešitih tkanin za razkošne plašče do zahtevnih 3D aplikacij iz rož, metuljev in kristalov.',
      'Symphonia dokazuje, da lahko eleganca obstaja v vsakdanu, hkrati pa se povzpne do višin svečane mode. Predstavljeno bo preko 20 izhodov: od strukturiranih kostimov iz bukleja in doubleface volne, bogatih bluz iz chifon svile z volančki in čipkastimi detajli, do vintage srajčnih oblek iz 50. let in spektakularnih večernih kreacij s 3D aplikacijami.',
      'Trajnostni pristop kolekcije se kaže v uporabi revolucionarnih materialov - tkanine iz lotusovih vlaken, ki so popolnoma biorazgradljive, materiala iz pomarančnih olupkov in organskega bombaža. Transparentni in čipkasti materiali bodo pokazali mojstrstvo rokovanja z najzahtevnejšimi tkaninami, kjer vsak šiv in aplikacija zahteva popolno natančnost.'
    ],
    images: {
      hero: [
        'collections/Symphonia/Symphonia_90_ivi9nq'
      ],
      looks: [
        'collections/Symphonia/Symphonia_90_ivi9nq',
        'collections/Symphonia/Symphonia_69_h9cnih',
        'collections/Symphonia/Symphonia_16_lf4nl4',
        'collections/Symphonia/Symphonia_95_qjpldr',
        'collections/Symphonia/Symphonia_93_rfs9bs',
        'collections/Symphonia/Symphonia_79_h2eqll',
        'collections/Symphonia/Symphonia_73_ykpxwm',
        'collections/Symphonia/Symphonia_66_fzz49w',
        'collections/Symphonia/Symphonia_75_zgehsx',
        'collections/Symphonia/Symphonia_65_kh2plz',
        'collections/Symphonia/Symphonia_64_usfvvl',
        'collections/Symphonia/Symphonia_61_dcookf',
        'collections/Symphonia/Symphonia_60_ye1sud',
        'collections/Symphonia/Symphonia_54_faa5qq',
        'collections/Symphonia/Symphonia_50_w3d5fo',
        'collections/Symphonia/Symphonia_45_k6cn9q',
        'collections/Symphonia/Symphonia_40_dbxmw1',
        'collections/Symphonia/Symphonia_33_vllbr2',
        'collections/Symphonia/Symphonia_27_xaj83t',
        'collections/Symphonia/Symphonia_22_txlmnr',
        'collections/Symphonia/Symphonia_12_tseyuh',
        'collections/Symphonia/Symphonia_1_gdvwiy'
      ]
    },
    perfectFitAvailable: true
  },
  'fw24-heartstrings': {
    id: 'fw24-heartstrings',
    title: 'FW24 Heartstrings Of Passion',
    season: 'Jesen/Zima',
    year: '2024',
    tagline: 'Arhitekturna natančnost in umetniška svoboda',
    description: [
      'Kolekcija združuje arhitekturno natančnost z umetniško svobodo. Ostri, premišljeni kroji z dodanimi mehkimi teksturnimi elementi ustvarjajo dinamično napetost med strukturo in fluidnostjo, med klasičnim in sodobnim, med močjo in ženstvenostjo.',
      'Izraziti oblikovni detajli, premišljena barvna dramatika in dovršena konstrukcija so temelj te kolekcije, ki govori o strasti vpleteni v vsak šiv.'
    ],
    images: {
      hero: [
        'HeartstringsOfPassion__11_rkb2xm'
      ],
      looks: [
        'HeartstringsOfPassion__11_rkb2xm',
        'HeartstringsOfPassion__13_cqrkyk',
        'HeartstringsOfPassion__16_p2xdbb',
        'HeartstringsOfPassion__17_lidjwq',
        'HeartstringsOfPassion__19_zrbadq',
        'HeartstringsOfPassion__20_hljlk3',
        'HeartstringsOfPassion__21_aq8lc0',
        'HeartstringsOfPassion__22_znxjf8',
        'HeartstringsOfPassion__23_dcatzw',
        'HeartstringsOfPassion__24_gddxhh',
        'HeartstringsOfPassion__26_tg99tm',
        'HeartstringsOfPassion__28_mruuhb',
        'HeartstringsOfPassion__3_xuo9xt',
        'HeartstringsOfPassion__30_jnspqq',
        'HeartstringsOfPassion__4_mvt3ks',
        'HeartstringsOfPassion__6_xtm08g',
        'HeartstringsOfPassion__7_pvu0iv',
        'HeartstringsOfPassion__9_qt2ebt',
        'HeartstringsOfPassion__1_vaycor',
        'HeartstringsOfPassion__10_e3sobr',
        'HeartstringsOfPassion__12_duiwk9',
        'HeartstringsOfPassion__14_qp45pp',
        'HeartstringsOfPassion__15_kp7x7s',
        'HeartstringsOfPassion__18_jzs2lz',
        'HeartstringsOfPassion__2_qjedlh',
        'HeartstringsOfPassion__25_nln5dw',
        'HeartstringsOfPassion__27_ojc861',
        'HeartstringsOfPassion__29_jldc6b',
        'HeartstringsOfPassion__5_mnyiga',
        'HeartstringsOfPassion__8_jbik7w'
      ]
    },
    perfectFitAvailable: true
  },
  'ss24-couture-collective': {
    id: 'ss24-couture-collective',
    title: 'SS24 Couture Collective',
    season: 'Pomlad/Poletje',
    year: '2024',
    tagline: 'Sodobne klasike. Barvna harmonija.',
    description: [
      'Couture Collective uteleša brezčasno eleganco s sodobnim pridihom. V našem ateljeju ustvarjamo arhitekturno dovršene kose z izrazitimi linijami pasu in skulpturalnimi elementi, ki v svežih barvnih kombinacijah omogočajo preprost prehod iz poslovnega v družabno okolje.',
      'Združujemo ženstveno moč, trajnostne materiale in vrhunsko obrtništvo za garderobo, ki govori o vaši identiteti, ne le o trendu. Tehnična dovršenost se kaže v vsakem detajlu.'
    ],
    images: {
      hero: [
        'Greta_eko_umetno_usnje_puder_roza_1_d5bnxn'
      ],
      looks: [
        'Greta_eko_umetno_usnje_puder_roza_1_d5bnxn',
        'Dunaj_krilo_unikaten_print_gubice_50s_7_rjfwtf',
        'Malena_jeans_hlače_temno_modra_zlati_gumbi_1_bsy8pb',
        'Helly_moder_tranchcoat_nepremočljiv_klasika_18_rhhe7o',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_2_wljupy',
        'Chiara_bomber_jakna_puder_roza_logo_vezen_2_umm8lk',
        'Bianca_bela_bluza_print_detajli_rože_22_v8bi1f',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_1_ajfh96',
        'Aline_tranch_plašč_jeans_recikliran_bombaž_zlati_gumbi_8_of38xq',
        'Malena_jeans_hlače_temno_modra_zlati_gumbi_4_zhctze',
        'Bianca_bela_bluza_print_detajli_rože_23_xvqlij',
        'Ingrid_bluza_čipka_puder_roza_romantična_4_zkhyrl',
        'Dunaj_krilo_unikaten_print_gubice_50s_6_u28pi0',
        'Donna_jeans_pas_zlata_sponka_elastika_15_tk0sff',
        'Helly_moder_tranchcoat_nepremočljiv_klasika_21_gm32de',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_3_ey5ahj',
        'Helly_moder_tranchcoat_nepremočljiv_klasika_20_hnb4hk',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_3_n33cc4',
        'Malena_jeans_hlače_temno_modra_zlati_gumbi_3_uerdff',
        'Bianca_bela_bluza_print_detajli_rože_18_l80ggm',
        'Donna_jeans_pas_zlata_sponka_elastika_17_qsy5gm',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_4_ctm9zq',
        'Helly_moder_tranchcoat_nepremočljiv_klasika_15_ttaew8',
        'Bianca_bela_bluza_print_detajli_rože_19_gwm4je',
        'Malena_jeans_hlače_temno_modra_zlati_gumbi_6_woaeyq',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_6_fbosnr',
        'Helly_moder_tranchcoat_nepremočljiv_klasika_14_qybrg3',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_6_xguroi',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_7_njto9f',
        'Dunaj_krilo_unikaten_print_gubice_50s_8_kwrgfg',
        'Donna_jeans_pas_zlata_sponka_elastika_13_aqahef',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_2_yghbl0',
        'Adele_bluza_bela_unikaten_print_rože_gumbi_iz_školjk_1_v1zoka',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_9_uhvir4',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_7_mddlxw',
        'Donna_jeans_pas_zlata_sponka_elastika_16_lahkzo',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_10_dme8rs',
        'iris_hlače_modra_klasika_visoki_pas_1_zjllru',
        'Bianca_bela_bluza_print_detajli_rože_21_ofhsw6',
        'Malena_jeans_hlače_recikliran_bombaž_srebrni_gumbi_4_fuldfy',
        'Kelly_eko_umetno_usnje_črna_3d_rože_čipka_8_rdg8si'
      ]
    },
    perfectFitAvailable: true
  },
  'ss25-voyage-blanc': {
    id: 'ss25-voyage-blanc',
    title: 'SS25 Voyage Blanc',
    season: 'Pomlad/Poletje',
    year: '2025',
    tagline: 'Sijoče platno brezmadežno belih odtenkov',
    description: [
      'Navdihnjena z obsijanimi terasami Provanse in brezčasno eleganco toskanskih vil, kolekcija "Blanc Voyage" vabi prefinjeno žensko na potovanje samoraziskovanja in plemenitega razvajanja. Ta skrbno izdelana kolekcija presega običajno modo in predstavlja stilski odgovor za sofisticirano profesionalko, ki elegantno prehaja med poslovnimi sestanki in sproščenim uživanjem v sredozemskih sončnih zahodih.',
      'Sijoče platno brezmadežno belih odtenkov, okrašenih z nežnimi srebrnimi detajli, zajema eterično svetlobo, ki obliva apnenčaste fasade provansalskih vasi. Ta raznolika paleta, dopolnjena z nežnimi vijolični odtenki in spektrom očarljivih rožnatih tonov, pričara tako divja polja sivke kot zardevajoče nebo sredozemskega sončnega zahoda.',
      'Vsaka stvaritev "Blanc Voyage" priča o predanosti znamke Patricia Pie rokodelski odličnosti – oblačila, ki niso nastala v naglici zasledovanja trendov, temveč v mirni koncentraciji pravega rokodelstva. Onkraj svoje izjemne konstrukcije "Blanc Voyage" nosi globoko povabilo: da si vzamemo nazaj svoj čas, da damo prednost trenutkom miru in da se ponovno povežemo s čutnimi užitki sveta.'
    ],
    images: {
      hero: ['10_Vijola_obleka_15_hbchcq'],
      looks: ['10_Vijola_obleka_15_hbchcq']
    },
    perfectFitAvailable: true
  },
  'fw23-new-elegance': {
    id: 'fw23-new-elegance',
    title: 'FW23 New Elegance',
    season: 'Jesen/Zima',
    year: '2023',
    tagline: 'Sofisticirane silhuete. Teksturni kontrasti.',
    description: [
      'Kolekcija pooseblja eleganco in trajnost v vsakem šivu. Ročno izdelani kosi iz našega ateljeja združujejo klasične silhuete z inovativnimi detajli, ustvarjeni za sodobno poslovno žensko.',
      'Natančno krojenje, trajnostni materiali in brezčasni dizajn zagotavljajo, da bo vsak kos izjemna investicija v vašo profesionalno garderobo. Sofisticirane silhuete, teksturni kontrasti in strukturirani detajli so rdeča nit te kolekcije.'
    ],
    images: {
      hero: ['Hlače_Enita_pepita_gube_široke_hlačnice_zavihek_na_dolžini_4_vyhiu8'],
      looks: ['Hlače_Enita_pepita_gube_široke_hlačnice_zavihek_na_dolžini_4_vyhiu8']
    },
    perfectFitAvailable: true
  },
  'ss23-bon-voyage': {
    id: 'ss23-bon-voyage',
    title: 'SS23 Bon Voyage',
    season: 'Pomlad/Poletje',
    year: '2023',
    tagline: 'Umetniški potiski z namenom',
    description: [
      'Kolekcija Bon Voyage prepleta romantiko obalnih pokrajin z izpopolnjenostjo urbane elegance. Vsak kos služi kot platno, kjer se umetniški potiski srečajo z brezčasnimi silhuetami, izdelanimi v našem ateljeju.',
      'Od živahne srajčne obleke navdihnjene z obalo do popolnoma ukrojene poslovne obleke z nepričakovanimi detajli – ti kosi vas vabijo, da izrazite svojo individualnost ob ohranjanju izpopolnjene podobe, ki jo zahteva vaše poklicno življenje. Vsestranskost v dizajnu in odgovorno izdelana kakovost.'
    ],
    images: {
      hero: ['BonVoyage_Lookbook__49_azbqhx'],
      looks: ['BonVoyage_Lookbook__49_azbqhx']
    },
    perfectFitAvailable: true
  },
  'fw22-teatro': {
    id: 'fw22-teatro',
    title: 'FW22 Teatro',
    season: 'Jesen/Zima',
    year: '2022',
    tagline: 'Arhitekturna eleganca. Mojstrska izdelava.',
    description: [
      'Navdihnjena z dramatično eleganco gledaliških odrov in izdelana z obrtniško natančnostjo v našem ateljeju, kolekcija Teatro praznuje žensko moč skozi arhitekturne silhuete in prefinjene detajle.',
      'Plemeniti materiali se prelivajo v strukturirane plašče različnih dolžin in ikonične kose, kjer vsak element pripoveduje zgodbo o samozavestni eleganci. Brezčasna dramatičnost za vsak dan.'
    ],
    images: {
      hero: ['Teatro_lookbook_103_pvu6bb'],
      looks: ['Teatro_lookbook_103_pvu6bb']
    },
    perfectFitAvailable: true
  },
  'ss22-dolce-vita': {
    id: 'ss22-dolce-vita',
    title: 'SS22 Dolce Vita',
    season: 'Pomlad/Poletje',
    year: '2022',
    tagline: 'Umetniška izdelava. Arhitekturne silhuete.',
    description: [
      'Navdihnjena s sončnimi italijanskimi vrtovi in izdelana z obrtniško natančnostjo v našem slovenskem ateljeju, kolekcija Dolce Vita praznuje žensko arhitekturo skozi tekoče silhuete in ročno risane cvetlične vzorce.',
      'Umetniška izdelava, arhitekturne silhuete in trajnostna vrednost so ključni elementi te kolekcije, ki slavi življenje.'
    ],
    images: {
      hero: ['Dolce_Vita___122_wsk6ub'],
      looks: ['Dolce_Vita___122_wsk6ub']
    },
    perfectFitAvailable: true
  },
  'dreamscape': {
    id: 'dreamscape',
    title: 'Dreamscape',
    season: 'Special Couture',
    year: 'Couture',
    tagline: 'Očarljivo potovanje ženske gracioznosti',
    description: [
      'Kolekcija "Dreamscape" je poklon ženstvenosti, odeta v sanje iz svile in cvetličnih motivov.',
      'Očarljivo potovanje ženske gracioznosti in sanjskih cvetličnih motivov, kjer se vsak kos prelevi v umetniško delo.'
    ],
    images: {
      hero: ['_P0A5393_oxlnyf'],
      looks: ['_P0A5393_oxlnyf']
    },
    perfectFitAvailable: true
  },
};

export default function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const collection = collections[slug];

  if (!collection) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <CloudinaryImage
              src={collection.images.hero[0]}
              alt={collection.title}
              fill
              containerClassName="h-full w-full"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4 pb-16 max-w-7xl mx-auto w-full"
          >
            <div className="max-w-3xl">
              <p className="text-white/80 text-lg mb-3 uppercase tracking-widest">
                {collection.season} {collection.year}
              </p>
              <h1 className="font-heading text-5xl md:text-7xl font-light text-white mb-4">
                {collection.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                {collection.tagline}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Collection Story */}
        <Section className="bg-background py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {collection.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            
            {collection.perfectFitAvailable && (
              <div className="pt-6 flex items-center gap-2 text-tertiary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium">Perfect Fit prilagoditev na voljo</span>
              </div>
            )}
          </motion.div>
        </Section>

        {/* Complete Looks Gallery - Optimized Masonry */}
        <Section className="bg-gradient-to-b from-secondary/5 via-background to-secondary/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <Heading size="lg" className="mb-4">Kolekcija</Heading>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto"></div>
            </div>
            
            {/* Premium Masonry Grid - CSS Columns Approach */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
              {collection.images.looks.map((image, index) => {
                // Detect landscape images based on naming pattern
                const isLandscape = image.includes('HeartstringsOfPassion__11') || 
                                   image.includes('HeartstringsOfPassion__13') ||
                                   image.includes('HeartstringsOfPassion__16') ||
                                   image.includes('HeartstringsOfPassion__17') ||
                                   image.includes('HeartstringsOfPassion__19') ||
                                   image.includes('HeartstringsOfPassion__20') ||
                                   image.includes('HeartstringsOfPassion__21') ||
                                   image.includes('HeartstringsOfPassion__22') ||
                                   image.includes('HeartstringsOfPassion__23') ||
                                   image.includes('HeartstringsOfPassion__24') ||
                                   image.includes('HeartstringsOfPassion__26') ||
                                   image.includes('HeartstringsOfPassion__28') ||
                                   image.includes('HeartstringsOfPassion__3_') ||
                                   image.includes('HeartstringsOfPassion__30') ||
                                   image.includes('HeartstringsOfPassion__4_') ||
                                   image.includes('HeartstringsOfPassion__6_') ||
                                   image.includes('HeartstringsOfPassion__7_') ||
                                   image.includes('HeartstringsOfPassion__9_') ||
                                   image.includes('Symphonia_90') ||
                                   image.includes('Symphonia_69') ||
                                   image.includes('Symphonia_16');
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.4) }}
                    className="break-inside-avoid group relative mb-6 lg:mb-8"
                  >
                    <div className="relative overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-secondary/10 border border-tertiary/10">
                      <CloudinaryImage
                        src={image}
                        alt={`${collection.title} Look ${index + 1}`}
                        width={isLandscape ? 1200 : 900}
                        height={isLandscape ? 800 : 1350}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        containerClassName="w-full"
                        className="object-cover transition-all duration-700 group-hover:scale-105 w-full h-auto"
                      />
                      
                      {/* Elegant gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Premium Look Badge - Slide up on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-sm border border-tertiary/20 shadow-lg">
                            <span className="text-sm font-medium text-foreground tracking-wide">
                              Look {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div className="w-8 h-0.5 bg-tertiary/50"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Optional: View count indicator */}
            <div className="text-center mt-12 text-muted-foreground text-sm">
              <p>{collection.images.looks.length} fotografij v galeriji</p>
            </div>
          </motion.div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-tertiary/10 text-center py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <Heading size="xl">Želiš videti {collection.title} v živo?</Heading>
            <p className="text-lg text-muted-foreground">
              Pridi v naš showroom, preizkusi oblačila in se pogovorimo o Perfect Fit možnostih. 
              Vsak kos lahko prilagodimo tvoji popolni meri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/showroom">
                <Button variant="primary" size="lg">
                  Rezerviraj termin
                </Button>
              </Link>
              <Link href="/perfect-fit">
                <Button variant="outline" size="lg">
                  Več o Perfect Fit
                </Button>
              </Link>
            </div>
          </motion.div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
