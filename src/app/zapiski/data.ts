export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content, could be markdown in real scenarios
  image: string;
  date: string;
  category: string;
}

export const journalPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kako-zgraditi-popolno-garderobo",
    title: "Kako zgraditi popolno garderobo?",
    excerpt: "Spoznajte našo Pie filozofijo: manj kosov, več kombinacij in brezčasna eleganca, ki traja leta.",
    content: `
      <p>Si se kdaj vprašala, zakaj kljub polni omari pogosto nimaš "ničesar za obleči"? Težava ni v pomanjkanju oblačil, ampak v pomanjkanju strategije.</p>
      <h3>Pie Filozofija</h3>
      <p>Pri Patricii Pie verjamemo, da je vsak kos oblačila kot sestavina v piti (od tod naše ime!). Vsak kos mora delovati sam zase, hkrati pa dopolnjevati celoto. To pomeni:</p>
      <ul>
        <li>Investicija v ključne kose (plašč, hlače, suknjič)</li>
        <li>Barvna paleta, ki se ujema (ne kupujte kosov, ki ne gredo z ničemer drugim)</li>
        <li>Materiali, ki dihajo in trajajo</li>
      </ul>
      <p>Začni z osnovami. Dobre krojene hlače so temelj. Dodaj jim svileno bluzo za eleganco ali pletenino za udobje. Nadgradi s plaščem, ki ga boš nosila vsaj pet let.</p>
    `,
    image: "collections/Symphonia/Symphonia_209_gasqsx",
    date: "14. november 2024",
    category: "Styling"
  },
  {
    id: "2",
    slug: "zakaj-perfect-fit",
    title: "Zakaj Perfect Fit ni le 'šivanje po meri'?",
    excerpt: "Razlika med klasičnim krojaštvom in našo signaturno experience storitvijo, ki poudari vašo osebnost.",
    content: `
      <p>Veliko ljudi misli, da je Perfect Fit samo prilagajanje dolžine hlač. Ampak je veliko več. Je proces spoznavanja tvojega telesa in tvoje osebnosti.</p>
      <h3>Osebna preobrazba</h3>
      <p>Ko oblečeš kos, ki je narejen točno zate, se spremeni tvoja drža. Naramnice ne lezejo dol, pas je na pravem mestu, dolžina je takšna, da podaljša noge. Nenadoma se počutiš bolj samozavestno.</p>
      <p>Naš Perfect Fit proces vključuje:</p>
      <ul>
        <li>Analizo tvoje postave (ne samo mer, ampak proporcev)</li>
        <li>Pogovor o tvojem življenjskem slogu (kje boš kos nosila?)</li>
        <li>Svetovanje o materialih in barvah, ki ti najbolj pristajajo</li>
      </ul>
    `,
    image: "HeartstringsOfPassion__13_cqrkyk",
    date: "28. oktober 2024",
    category: "Iz Ateljeja"
  },
  {
    id: "3",
    slug: "jesenska-eleganca-symphonia",
    title: "Jesenska eleganca: Kolekcija Symphonia",
    excerpt: "Potopite se v svet toplih barv, mehkih tekstur in krojev, ki slavijo žensko silhueto.",
    content: `
      <p>Kolekcija Symphonia je nastala iz navdiha nad prelivanjem jesenskih barv v naravi. Želeli smo ujeti trenutek, ko se zelena prevesi v zlato in rjavo.</p>
      <h3>Materiali in teksture</h3>
      <p>V ospredju so naravni materiali - volna, kašmir in viskoza. Teksture so bogate, na otip mehke in tople. Želeli smo ustvariti oblačila, ki te objamejo.</p>
      <p>Barvna paleta se giblje od globoke vinsko rdeče do tople barve konjaka in nevtralne bež, ki umiri celotno podobo.</p>
    `,
    image: "collections/Symphonia/Symphonia_190_xchxis",
    date: "15. oktober 2024",
    category: "Kolekcije"
  }
];
