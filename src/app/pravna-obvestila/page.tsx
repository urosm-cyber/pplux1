import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Pravna obvestila in Splošni pogoji | Patricia Pie',
  description: 'Pravna obvestila, splošni pogoji poslovanja in podatki o podjetju Patricia Pie (Barbara Franjić s.p.).',
};

export default function PravnaObvestilaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Heading size="xl">Pravna obvestila</Heading>
              <p className="text-muted-foreground text-lg">Splošni pogoji poslovanja in podatki o podjetju</p>
            </div>

            <div className="prose prose-stone max-w-none text-muted-foreground">
              <h3>1. Podatki o podjetju (Impressum)</h3>
              <p>
                Spletno mesto <strong>Patricia Pie</strong> upravlja:<br />
                <strong>PATRICIA PIE, MODNO OBLIKOVANJE, BARBARA FRANJIĆ S.P.</strong><br />
                Jurkovičeva ulica 1, 9250 Gornja Radgona<br />
                Slovenija
              </p>
              <p>
                <strong>Matična številka:</strong> 6048293000<br />
                <strong>Davčna številka:</strong> SI49639757 (zavezanec za DDV)<br />
                <strong>Vpis v register:</strong> AJPES, izpostava Murska Sobota, datum vpisa 1. 11. 2011<br />
                <strong>Kontakt:</strong> <a href="mailto:info@patriciapie.si" className="text-tertiary underline">info@patriciapie.si</a> | +386 41 988 384
              </p>

              <h3>2. Splošni pogoji poslovanja</h3>
              <p>
                Splošni pogoji poslovanja določajo delovanje spletnega mesta Patricia Pie, pravice in obveznosti uporabnika in trgovine ter urejajo poslovni odnos med ponudnikom in kupcem.
                Splošni pogoji so sestavljeni v skladu z Zakonom o varstvu potrošnikov (ZVPot-1), Zakonom o varstvu osebnih podatkov (ZVOP-2) in Zakonom o elektronskih komunikacijah (ZEKom-2).
              </p>

              <h4>Cene in ponudba</h4>
              <p>
                Vse cene vsebujejo DDV, razen če je izrecno napisano drugače. Cene veljajo v trenutku oddaje povpraševanja ali rezervacije termina in nimajo vnaprej določene veljavnosti.
                Zaradi narave ročnega dela in &quot;made-to-order&quot; (Perfect Fit) koncepta, so končne cene izdelkov po meri informativne narave in se dokončno potrdijo ob svetovanju.
              </p>

              <h4>Pravica do odstopa od nakupa in vračila</h4>
              <p>
                Skladno z ZVPot-1 ima potrošnik pravico, da v 14 dneh od prevzema blaga odstopi od pogodbe brez navedbe razloga.
                To pravico uveljavlja tako, da nas o tem pisno obvesti na <a href="mailto:info@patriciapie.si">info@patriciapie.si</a> in izpolni obrazec za vračilo.
              </p>
              <p>
                <strong>IZJEMA (Perfect Fit):</strong> Skladno s 135. členom ZVPot-1 potrošnik nima pravice do odstopa od pogodbe pri pogodbah, katerih predmet je blago,
                ki je izdelano po natančnih navodilih potrošnika in prilagojeno njegovim osebnim potrebam (npr. oblačila po meri, prilagojene mere).
              </p>

              <h4>Reklamacije</h4>
              <p>
                V primeru stvarne napake na izdelku se potrošnik lahko sklicuje na pravice iz naslova stvarne napake skladno z ZVPot-1.
                Podjetje odgovarja za stvarne napake, ki jih je blago imelo takrat, ko je nevarnost prešla na kupca.
              </p>

              <h3>3. Intelektualna lastnina</h3>
              <p>
                Vsebina spletnega mesta (besedila, slike, grafike, blagovne znamke) je zaščitena avtorska dela in so v lasti podjetja Barbara Franjić s.p. ali njegovih partnerjev.
                Vsakršno kopiranje, distribucija ali drugačna uporaba brez pisnega dovoljenja je prepovedana.
              </p>

              <h3>4. Reševanje sporov</h3>
              <p>
                Ponudnik spoštuje veljavno zakonodajo o varstvu potrošnikov. Morebitne spore si prizadeva reševati sporazumno.
                Skladno z zakonskimi normativi ne priznavamo nobenega izvajalca izvensodnega reševanja potrošniških sporov kot pristojnega za reševanje potrošniškega spora,
                ki bi ga potrošnik lahko sprožil v skladu z Zakon o izvensodnem reševanju potrošniških sporov.
                <br />
                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=SL" target="_blank" rel="noopener noreferrer" className="text-tertiary underline">
                  Platforma za spletno reševanje potrošniških sporov (SRPS)
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
