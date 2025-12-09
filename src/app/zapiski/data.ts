export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const journalPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kako-zgraditi-popolno-garderobo",
    title: "Kako zgraditi popolno garderobo?",
    excerpt: "Spoznaj Pie filozofijo: manj kosov, več kombinacij in investicija v oblačila, ki ti služijo leta.",
    content: `
      <p>Se ti dogaja, da stojiš pred polno omaro in imaš občutek, da nimaš ničesar za obleči? Težava ni v količini, ampak v strategiji. V svetu hitre mode smo pozabili na umetnost gradnje garderobe.</p>
      <h3>Pie Filozofija: Sestavine tvojega stila</h3>
      <p>Pri Patricii Pie verjamemo, da je vsak kos oblačila kot sestavina v piti (od tod naše ime!). Vsak kos mora biti "okusen" sam zase, hkrati pa se mora popolnoma ujemati z drugimi.</p>
      <p>Namesto nenehnega kupovanja trendovskih kosov, ti predlagamo drugačen pristop:</p>
      <ul>
        <li><strong>Investiraj v ključne kose:</strong> Dober plašč, suknjič in popolno krojene hlače so temelj. To so kosi, ki jih nosiš 80% časa.</li>
        <li><strong>Cost-Per-Wear matematika:</strong> Obleka za 200€, ki jo nosiš 50-krat, stane 4€ na nošenje. Obleka za 50€, ki jo oblečeš enkrat, stane 50€. Kvaliteta se dolgoročno vedno splača.</li>
        <li><strong>Barvna harmonija:</strong> Izbiraj odtenke, ki laskajo tvoji polti in se med seboj dopolnjujejo.</li>
      </ul>
      <p>Začni z osnovami. Dobre krojene hlače so tvoj platno. Dodaj jim svileno bluzo za eleganco ali pletenino za udobje. Nadgradi s plaščem, ki te bo objel kot druga koža.</p>
    `,
    image: "Obleka_Ajda_6_nka2k4",
    date: "8. december 2025",
    category: "Styling"
  },
  {
    id: "2",
    slug: "vec-kot-le-mere",
    title: "Več kot le mere: Zakaj Perfect Fit?",
    excerpt: "Ko oblačilo ne le 'paše', ampak te razume. Odkrij razliko naše osebne Perfect Fit izkušnje.",
    content: `
      <p>Veliko ljudi misli, da je "šivanje po meri" le prilagajanje dolžine hlač ali oženje pasu. Pri nas je Perfect Fit filozofija, ki gre globlje. Gre za razumevanje tvojega telesa, tvojega gibanja in tvoje osebnosti.</p>
      <h3>Osebna preobrazba</h3>
      <p>Trenutek, ko oblečeš kos, ki je bil narejen točno zate, je magičen. Naramnice ne lezejo dol, pas je točno tam, kjer mora biti, blago pa te objame brez zategovanja. Spremeni se tvoja drža. Nenadoma hodiš bolj pokončno.</p>
      <p>Naš Perfect Fit proces vključuje:</p>
      <ul>
        <li><strong>Analizo postave:</strong> Ne gledamo le centimetrov, ampak proporce. Kako poudariti tvoje adute in skriti, kar želiš skriti?</li>
        <li><strong>Pogovor o življenjskem slogu:</strong> Kje boš kos nosila? V pisarni, na potovanjih, na igrišču z otroki? Material in kroj morata služiti tvojemu življenju.</li>
        <li><strong>Svetovanje o materialih:</strong> Izbira pravega blaga je ključna za to, kako se bo oblačilo obnašalo v gibanju.</li>
      </ul>
      <p>To ni le nakup. Je naložba v tvoje dobro počutje.</p>
    `,
    image: "HeartstringsOfPassion__13_cqrkyk",
    date: "5. december 2025",
    category: "Doživetje"
  },
  {
    id: "3",
    slug: "dan-v-showroomu",
    title: "Dan v Showroomu: Tvoja osebna modna oaza",
    excerpt: "Brez hitenja, ob kavi in sproščenem pogovoru. Kako izgleda obisk v našem Showroomu S7?",
    content: `
      <p>Showroom S7 ni običajna trgovina. Je prostor, ustvarjen z mislijo nate. Želeli smo ustvariti okolje, kjer se čas ustavi in kjer je edini fokus ti in tvoje počutje.</p>
      <h3>Kaj te čaka?</h3>
      <p>Ob prihodu te vedno pričakamo z nasmehom in dišečo kavo (ali kozarcem penine, če slavimo!). Ni gneče, ni vrste pred garderobo, ni vsiljive glasbe.</p>
      <p>V miru se sprehodiš med stojali, potipaš materiale in si ogledaš barve. Barbara ali naša stilistka ti je na voljo za pogovor – ne za prodajo, ampak za svetovanje. Skupaj pogledamo, kateri kroji bi ti pristajali, in izberemo kose za probo.</p>
      <p>Najlepši del? Ko najdeš tisti "pravi" kos in se pogledaš v ogledalo. Tisti nasmeh je razlog, zakaj to počnemo.</p>
      <p>Rezerviraj svoj termin in si vzemi uro časa samo zase.</p>
    `,
    image: "HeartstringsOfPassion__26_tg99tm",
    date: "3. december 2025",
    category: "Doživetje"
  },
  {
    id: "4",
    slug: "potovanje-niti",
    title: "Potovanje niti: Od skice do tvoje omare",
    excerpt: "Pokukaj v naš atelje v Gornji Radgoni, kjer se tradicija sreča s sodobnim dizajnom.",
    content: `
      <p>Vsak kos Patricia Pie ima svojo zgodbo, ki se začne dolgo preden pride v tvoje roke. Vse se začne v našem ateljeju v Gornji Radgoni, srcu naše blagovne znamke.</p>
      <h3>Slovensko srce, ročna izdelava</h3>
      <p>V času masovne proizvodnje smo ponosni, da ohranjamo tradicijo krojaštva. Vsaka skica nastane izpod Barbarinih rok. Vsak meter blaga je skrbno pregledan.</p>
      <p>Proces nastajanja oblačila je kot proces kuhanja vrhunske jedi:</p>
      <ul>
        <li><strong>Ideja in skica:</strong> Navdih iz narave, umetnosti ali utripa mesta.</li>
        <li><strong>Konstrukcija kroja:</strong> Tu se zgodi čarovnija. Dvodimenzionalno blago dobi tridimenzionalno obliko.</li>
        <li><strong>Šivanje:</strong> Natančni šivi, ročna dodelava gumbnic in detajlov.</li>
      </ul>
      <p>Ko nosiš Patricia Pie, ne nosiš le oblačila. Nosiš ure in ure predanega dela, znanja in ljubezni naše majhne ekipe.</p>
    `,
    image: "Bluza_Pia_1_qelzxb",
    date: "1. december 2025",
    category: "Iz Ateljeja"
  },
  {
    id: "5",
    slug: "jesenska-eleganca-symphonia",
    title: "Jesenska eleganca: Kolekcija Symphonia",
    excerpt: "Potopi se v svet toplih barv, mehkih tekstur in krojev, ki slavijo žensko silhueto.",
    content: `
      <p>Kolekcija Symphonia je naša oda jeseni. Nastala je iz navdiha nad prelivanjem barv v naravi, ko se zelena počasi prevesi v zlato, rjavo in globoko vinsko rdečo.</p>
      <h3>Materiali, ki te objamejo</h3>
      <p>V hladnejših dneh iščemo udobje. Zato so v ospredju naravni materiali – mehka volna, božajoč kašmir in tekoča viskoza. Teksture so bogate in vabijo k dotiku.</p>
      <p>Kroji so zasnovani tako, da dopuščajo gibanje, a hkrati poudarijo žensko silhueto. Plašči s poudarjenim pasom, hlače z visokim pasom in bluze z zanimivimi detajli na rokavih.</p>
      <p>To je kolekcija za žensko, ki svojo moč črpa iz elegancije in udobja.</p>
    `,
    image: "Suknjič_Lidija_4_lml22c",
    date: "10. december 2025",
    category: "Kolekcije"
  }
];
