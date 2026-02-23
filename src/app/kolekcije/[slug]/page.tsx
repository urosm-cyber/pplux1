import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getCollectionImages, type ImageResource } from '@/lib/cloudinary-server';
import CollectionClientPage from '@/components/collections/CollectionClientPage';

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
  cloudinaryFolder: string;
}> = {
  'fw25-symphonia': {
    id: 'fw25-symphonia',
    title: 'FW25 Symphonia',
    season: 'Jesen/Zima',
    year: '2025',
    tagline: 'Monokromatsko popotovanje skozi črno in belo',
    cloudinaryFolder: 'Patricia Pie/Collections/Symphonia',
    description: [
      'Kolekcija SYMPHONIA predstavlja najdrznejšo vizijo Patricia Pie - monokromatsko popotovanje skozi črno in belo, obogateno z zlato-srebrnimi poudarki. To je kolekcija, ki razkriva vso globino znanja našega ateljeja - od prešitih tkanin za razkošne plašče do zahtevnih 3D aplikacij iz rož, metuljev in kristalov.',
      'Symphonia dokazuje, da lahko eleganca obstaja v vsakdanu, hkrati pa se povzpne do višin svečane mode. Predstavljeno bo preko 20 izhodov: od strukturiranih kostimov iz bukleja in doubleface volne, bogatih bluz iz chifon svile z volančki in čipkastimi detajli, do vintage srajčnih oblek iz 50. let in spektakularnih večernih kreacij s 3D aplikacijami.',
      'Trajnostni pristop kolekcije se kaže v uporabi revolucionarnih materialov - tkanine iz lotusovih vlaken, ki so popolnoma biorazgradljive, materiala iz pomarančnih olupkov in organskega bombaža. Transparentni in čipkasti materiali bodo pokazali mojstrstvo rokovanja z najzahtevnejšimi tkaninami, kjer vsak šiv in aplikacija zahteva popolno natančnost.'
    ],
    images: {
      hero: [
        'Hlače_Karo_črte_1_z9euyl'
      ],
      looks: [
        'Hlače_Karo_črte_1_z9euyl'
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
    cloudinaryFolder: 'Patricia Pie/Collections/Heartstrings of  passion',
    description: [
      'Kolekcija združuje arhitekturno natančnost z umetniško svobodo. Ostri, premišljeni kroji z dodanimi mehkimi teksturnimi elementi ustvarjajo dinamično napetost med strukturo in fluidnostjo, med klasičnim in sodobnim, med močjo in ženstvenostjo.',
      'Izraziti oblikovni detajli, premišljena barvna dramatika in dovršena konstrukcija so temelj te kolekcije, ki govori o strasti vpleteni v vsak šiv.'
    ],
    images: {
      hero: [
        'HeartstringsOfPassion__11_rkb2xm'
      ],
      looks: [
        'HeartstringsOfPassion__11_rkb2xm'
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
    cloudinaryFolder: 'Patricia Pie/Collections/Couture Collective',
    description: [
      'Couture Collective uteleša brezčasno eleganco s sodobnim pridihom. V našem ateljeju ustvarjamo arhitekturno dovršene kose z izrazitimi linijami pasu in skulpturalnimi elementi, ki v svežih barvnih kombinacijah omogočajo preprost prehod iz poslovnega v družabno okolje.',
      'Združujemo ženstveno moč, trajnostne materiale in vrhunsko obrtništvo za garderobo, ki govori o vaši identiteti, ne le o trendu. Tehnična dovršenost se kaže v vsakem detajlu.'
    ],
    images: {
      hero: [
        'Greta_eko_umetno_usnje_puder_roza_1_d5bnxn'
      ],
      looks: [
        'Greta_eko_umetno_usnje_puder_roza_1_d5bnxn'
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
    cloudinaryFolder: 'Patricia Pie/Collections/Voyage Blanc',
    description: [
      'Navdihnjena z obsijanimi terasami Provanse in brezčasno eleganco toskanskih vil, kolekcija "Blanc Voyage" vabi prefinjeno žensko na potovanje samoraziskovanja in plemenitega razvajanja. Ta skrbno izdelana kolekcija presega običajno modo in predstavlja stilski odgovor za sofisticirano profesionalko, ki elegantno prehaja med poslovnimi sestanki in sproščenim uživanjem v sredozemskih sončnih zahodih.',
      'Sijoče platno brezmadežno belih odtenkov, okrašenih z nežnimi srebrnimi detajli, zajema eterično svetlobo, ki obliva apnenčaste fasade provansalskih vasi. Ta raznolika paleta, dopolnjena z nežnimi vijolični odtenki in spektrom očarljivih rožnatih tonov, pričara tako divja polja sivke kot zardevajoče nebo sredozemskega sončnega zahoda.',
      'Vsaka stvaritev "Blanc Voyage" priča o predanosti znamke Patricia Pie rokodelski odličnosti – oblačila, ki niso nastala v naglici zasledovanja trendov, temveč v mirni koncentraciji pravega rokodelstva. Onkraj svoje izjemne konstrukcije "Blanc Voyage" nosi globoko povabilo: da si vzamemo nazaj svoj čas, da damo prednost trenutkom miru in da se ponovno povežemo s čutnimi užitki sveta.'
    ],
    images: {
      hero: ['10_Vijola_obleka_2_goidcs'],
      looks: ['10_Vijola_obleka_2_goidcs']
    },
    perfectFitAvailable: true
  },
  'fw23-new-elegance': {
    id: 'fw23-new-elegance',
    title: 'FW23 New Elegance',
    season: 'Jesen/Zima',
    year: '2023',
    tagline: 'Sofisticirane silhuete. Teksturni kontrasti.',
    cloudinaryFolder: 'Patricia Pie/Collections/New Elegance',
    description: [
      'Kolekcija pooseblja eleganco in trajnost v vsakem šivu. Ročno izdelani kosi iz našega ateljeja združujejo klasične silhuete z inovativnimi detajli, ustvarjeni za sodobno poslovno žensko.',
      'Natančno krojenje, trajnostni materiali in brezčasni dizajn zagotavljajo, da bo vsak kos izjemna investicija v vašo profesionalno garderobo. Sofisticirane silhuete, teksturni kontrasti in strukturirani detajli so rdeča nit te kolekcije.'
    ],
    images: {
      hero: ['Bomber_Jakna_in_krilo_Elena_New_Elegance_6_gdtdiv'],
      looks: ['Bomber_Jakna_in_krilo_Elena_New_Elegance_6_gdtdiv']
    },
    perfectFitAvailable: true
  },

  'ss23-bon-voyage': {
    id: 'ss23-bon-voyage',
    title: 'SS23 Bon Voyage',
    season: 'Pomlad/Poletje',
    year: '2023',
    tagline: 'Umetniški potiski z namenom',
    cloudinaryFolder: 'Patricia Pie/Collections/Bon-Voyage',
    description: [
      'Kolekcija Bon Voyage prepleta romantiko obalnih pokrajin z izpopolnjenostjo urbane elegance. Vsak kos služi kot platno, kjer se umetniški potiski srečajo z brezčasnimi silhuetami, izdelanimi v našem ateljeju.',
      'Od živahne srajčne obleke navdihnjene z obalo do popolnoma ukrojene poslovne obleke z nepričakovanimi detajli – ti kosi te vabijo, da izraziš svojo individualnost ob ohranjanju izpopolnjene podobe, ki jo zahteva tvoje poklicno življenje. Vsestranskost v dizajnu in odgovorno izdelana kakovost.'
    ],
    perfectFitAvailable: true,
    images: {
      hero: ['_P0A4012_sx2n4a'],
      looks: [
        'Čipkasta_bluza_5_eeku9w'
      ]
    },
  },
  'fw22-teatro': {
    id: 'fw22-teatro',
    title: 'FW22 Teatro',
    season: 'Jesen/Zima',
    year: '2022',
    tagline: 'Arhitekturna eleganca. Mojstrska izdelava.',
    cloudinaryFolder: 'Patricia Pie/Collections/Teatro',
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
    tagline: 'Umetniški izdelava. Arhitekturne silhuete.',
    cloudinaryFolder: 'Patricia Pie/Collections/Dolce Vita',
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
    cloudinaryFolder: 'Patricia Pie/Collections/Dreamscape',
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



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections[slug];

  if (!collection) {
    return {
      title: 'Kolekcija ni najdena | Patricia Pie',
      description: 'Iskana kolekcija ne obstaja.',
    };
  }

  return {
    title: `${collection.title} | Patricia Pie`,
    description: collection.tagline || `Odkrijte kolekcijo ${collection.title} znamke Patricia Pie.`,
    openGraph: {
      title: `${collection.title} | Patricia Pie`,
      description: collection.tagline || `Odkrijte kolekcijo ${collection.title} znamke Patricia Pie.`,
      images: [
        {
          url: `https://res.cloudinary.com/dtmp7z66d/image/upload/${collection.images.hero[0]}`,
          width: 1200,
          height: 630,
          alt: collection.title,
        },
      ],
    },
  };
}

export default async function CollectionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections[slug];

  if (!collection) {
    notFound();
  }

  // Live fetch from Cloudinary
  const fetchedImages = await getCollectionImages(collection.cloudinaryFolder);

  // Fallback to manual list if fetch fails or is empty
  let galleryImages: ImageResource[] = [];
  
  if (fetchedImages.length > 0) {
    galleryImages = fetchedImages;
  } else {
    // Convert manual string array to ImageResource objects (assume portrait)
    galleryImages = (collection.images.looks || []).map(id => ({
      public_id: id,
      width: 900,
      height: 1350
    }));
  }

  // Get other collections for the navigation
  const otherCollections = Object.values(collections)
    .filter(c => c.id !== collection.id)
    .slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domov",
        "item": "https://www.patriciapie.si"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kolekcije",
        "item": "https://www.patriciapie.si/kolekcije"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": collection.title,
        "item": `https://www.patriciapie.si/kolekcije/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CollectionClientPage
        collection={collection}
        galleryImages={galleryImages}
        otherCollections={otherCollections}
      />
    </>
  );
}
