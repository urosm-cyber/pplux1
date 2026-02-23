export interface Location {
  id: string;
  name: string;
  shortName: string;
  type: 'own' | 'partner';
  address: string;
  postalCode: string;
  city: string;
  description: string;
  features: string[];
  caveat?: string;
  tagline?: string;
  imageSrc: string;
  imageIsCloudinary: boolean;
  mapsUrl: string;
  bookable: boolean;
  bookingNote?: string;
}

export const LOCATIONS: Location[] = [
  {
    id: 'showroom',
    name: 'Showroom Ljubljana S7',
    shortName: 'Showroom S7',
    type: 'own',
    address: 'Stegne 7',
    postalCode: '1000',
    city: 'Ljubljana',
    description: 'Intimna, zasebna couture izkušnja v srcu Ljubljane.',
    features: [
      'Najbolj intimna, mirna, luksuzna izkušnja',
      'Popolna osredotočenost na stranko',
      'Idealen za meritve, svetovanje, final fitting',
      'Zasebno, 1 stranka = 1 termin',
      'Brezplačno parkirišče pred stavbo',
    ],
    tagline: 'Premium izbira in priporočena lokacija za celostno izkušnjo.',
    imageSrc: '/images/showroom_ipad_coffeetable_pov.png',
    imageIsCloudinary: false,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Stegne+7%2C+1000+Ljubljana',
    bookable: true,
    bookingNote: 'Priporočeno',
  },
  {
    id: 'zoofa',
    name: 'Zadruga Zoofa',
    shortName: 'Zoofa',
    type: 'partner',
    address: 'Miklošičeva cesta 4',
    postalCode: '1000',
    city: 'Ljubljana',
    description: 'Butik konceptne trgovine za slovensko oblikovanje v centru Ljubljane.',
    features: [
      'Pomerjanje in svetovanje možno',
      'Idealno za stranke, ki so v centru mesta',
      'Barbara izvede meritve in posvet',
    ],
    caveat: 'Možne motnje (druge stranke)',
    tagline: 'Odlična alternativa za hitro opravljene meritve.',
    imageSrc: 'zoofa_bjsg0t',
    imageIsCloudinary: true,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Miklo%C5%A1i%C4%8Deva+cesta+4%2C+1000+Ljubljana',
    bookable: true,
  },
  {
    id: 'atelje',
    name: 'Atelje Gornja Radgona',
    shortName: 'Atelje',
    type: 'own',
    address: 'Jurkovičeva ulica 1',
    postalCode: '9250',
    city: 'Gornja Radgona',
    description: 'Srce ustvarjalnosti — kjer nastajajo vsi kosi Patricia Pie.',
    features: [
      'Polna kreativna atmosfera',
      'Najgloblje povezovanje z nastankom oblačil',
      'Idealno za stranke iz severovzhodne Slovenije',
    ],
    caveat: 'Bolj delovno-kreativno okolje',
    tagline: 'Za ženske, ki želijo \u201eiza kulis\u201c izkušnjo.',
    imageSrc: '/images/atelier_sewing_machine_final.png',
    imageIsCloudinary: false,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jurkovi%C4%8Deva+ulica+1%2C+9250+Gornja+Radgona',
    bookable: true,
  },
  {
    id: 'habakuk',
    name: 'Perfect DressCode @ Hotel Habakuk',
    shortName: 'Maribor / Habakuk',
    type: 'partner',
    address: 'Pohorska ulica 59',
    postalCode: '2000',
    city: 'Maribor',
    description: 'Boutique Perfect DressCode s Katjo v elegantnem Hotelu Habakuk — posvet v srcu Maribora.',
    features: [
      'Posvet v elegantnem hotelskem okolju',
      'Idealno za stranke iz Maribora in okolice',
      'Boutique izkušnja s Katjo',
    ],
    tagline: 'Maribor dobiva svojo Patricia Pie točko.',
    imageSrc: 'habakuk-zunaj_r16bvi',
    imageIsCloudinary: true,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pohorska+ulica+59%2C+2000+Maribor',
    bookable: true,
  },
];

export const BOOKABLE_LOCATIONS = LOCATIONS.filter((l) => l.bookable);
export const OWN_LOCATIONS = LOCATIONS.filter((l) => l.type === 'own');
export const PARTNER_LOCATIONS = LOCATIONS.filter((l) => l.type === 'partner');
