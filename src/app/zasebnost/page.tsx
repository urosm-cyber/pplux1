import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Politika zasebnosti | Patricia Pie',
  description: 'Kako Patricia Pie varuje vaše osebne podatke v skladu z ZVOP-2 in GDPR.',
};

export default function ZasebnostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Heading size="xl">Politika zasebnosti</Heading>
              <p className="text-muted-foreground text-lg">Varovanje osebnih podatkov</p>
            </div>

            <div className="prose prose-stone max-w-none text-muted-foreground">
              <p>
                V podjetju <strong>Patricia Pie (Barbara Franjić s.p.)</strong> spoštujemo vašo zasebnost in se zavezujemo, da bomo vaše osebne podatke varovali
                skrbno in v skladu z Zakonom o varstvu osebnih podatkov (ZVOP-2) ter Splošno uredbo o varstvu podatkov (GDPR).
              </p>

              <h3>1. Upravljavec podatkov</h3>
              <p>
                Upravljavec osebnih podatkov je:<br />
                <strong>BARBARA FRANJIĆ S.P.</strong><br />
                Jurkovičeva ulica 1, 9250 Gornja Radgona<br />
                E-naslov: <a href="mailto:info@patriciapie.si" className="text-tertiary">info@patriciapie.si</a>
              </p>

              <h3>2. Katere podatke zbiramo in zakaj</h3>
              <p>Vaše podatke zbiramo le, če nam jih prostovoljno posredujete:</p>
              <ul>
                <li>
                  <strong>Rezervacija termina / Povpraševanje:</strong> Ime, priimek, e-naslov, telefonska številka.
                  Namen: Komunikacija glede termina, izvedba storitve Perfect Fit.
                </li>
                <li>
                  <strong>Novice (Newsletter):</strong> E-naslov.
                  Namen: Obveščanje o novih kolekcijah in dogodkih. Obdelava temelji na vaši privolitvi gumb &quot;Prijava&quot;.
                </li>
                <li>
                  <strong>Naročilo izdelka:</strong> Podatki za dostavo in račun (naslov, telefon).
                  Namen: Izpolnitev kupoprodajne pogodbe.
                </li>
              </ul>

              <h3>3. Posredovanje podatkov tretjim osebam</h3>
              <p>
                Vaših podatkov ne prodajamo. Posredujemo jih le zaupanja vrednim partnerjem, ki so nujni za izvedbo storitve:
              </p>
              <ul>
                <li>Dostavne službe (Pošta Slovenije, GLS) – za dostavo paketov.</li>
                <li>Računovodski servis – za izpolnjevanje zakonskih davčnih obveznosti.</li>
                <li>IT ponudniki (gostovanje, e-poštna orodja) – ki zagotavljajo tehnično delovanje in so pogodbeno zavezani k varovanju podatkov.</li>
              </ul>

              <h3>4. Vaše pravice</h3>
              <p>
                Skladno z GDPR imate pravico do:
              </p>
              <ul>
                <li>Dostopa do svojih osebnih podatkov.</li>
                <li>Popravka netočnih podatkov.</li>
                <li>Izbrisa podatkov (&quot;pravica do pozabe&quot;), razen če zakon (npr. davčni) zahteva hrambo.</li>
                <li>Omejitve obdelave in ugovora.</li>
                <li>Prenosljivosti podatkov.</li>
              </ul>
              <p>
                Za uveljavljanje pravic nam pišite na <a href="mailto:info@patriciapie.si">info@patriciapie.si</a>.
                Imate tudi pravico do pritožbe pri Informacijskem pooblaščencu RS.
              </p>

              <h3>5. Hramba podatkov</h3>
              <p>
                Osebne podatke hranimo le toliko časa, kolikor je potrebno za namen, zaradi katerega so bili zbrani, ali dokler to zahteva zakonodaja (npr. računi se hranijo 10 let).
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
