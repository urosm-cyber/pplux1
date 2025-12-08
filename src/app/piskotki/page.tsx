import { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Politika piškotkov | Patricia Pie',
  description: 'Informacije o piškotkih, ki jih uporablja spletno mesto Patricia Pie, in upravljanje privolitev.',
};

export default function PiskotkiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Heading size="xl">Politika piškotkov</Heading>
              <p className="text-muted-foreground text-lg">Transparentnost uporabe piškotkov</p>
            </div>

            <div className="prose prose-stone max-w-none text-muted-foreground">
              <p>
                Spletno mesto <strong>Patricia Pie</strong> uporablja piškotke za zagotavljanje boljše uporabniške izkušnje, varnosti in nemotenega delovanja spletne strani.
                Skladno z Zakonom o elektronskih komunikacijah (ZEKom-2) uporabljamo le nujne piškotke samodejno, medtem ko za analitične in oglaševalske piškotke potrebujemo vašo izrecno privolitev.
              </p>

              <h3>Kaj so piškotki?</h3>
              <p>
                Piškotki so majhne besedilne datoteke, ki jih spletno mesto shrani na vašo napravo, ko ga obiščete. Omogočajo prepoznavo vaše naprave in nastavitev (npr. jezik, prijava) za določeno obdobje.
              </p>

              <h3>Vrste piškotkov, ki jih uporabljamo</h3>

              <div className="not-prose overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-secondary/5 rounded-sm text-sm">
                  <thead>
                    <tr className="border-b border-secondary/20 text-foreground">
                      <th className="p-4 font-heading font-medium">Ime</th>
                      <th className="p-4 font-heading font-medium">Ponudnik</th>
                      <th className="p-4 font-heading font-medium">Namen</th>
                      <th className="p-4 font-heading font-medium">Trajanje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary/10">
                    {/* Nujni */}
                    <tr className="bg-secondary/10">
                      <td colSpan={4} className="p-4 font-medium text-tertiary uppercase tracking-wider text-xs">Nujni piškotki (dovoljeni brez privolitve)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono">cookie-consent</td>
                      <td className="p-4">Patricia Pie</td>
                      <td className="p-4">Shrani vašo odločitev o nastavitvah piškotkov.</td>
                      <td className="p-4">1 leto</td>
                    </tr>
                    
                    {/* Analitika */}
                    <tr className="bg-secondary/10">
                      <td colSpan={4} className="p-4 font-medium text-tertiary uppercase tracking-wider text-xs">Analitični piškotki (zahtevana privolitev)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono">_ga, _gid</td>
                      <td className="p-4">Google Analytics</td>
                      <td className="p-4">Statistika obiska in vedenja uporabnikov (anonimizirano).</td>
                      <td className="p-4">2 leti</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Upravljanje piškotkov</h3>
              <p>
                Svojo odločitev o uporabi piškotkov lahko kadarkoli spremenite s klikom na &quot;Nastavitve piškotkov&quot; v nogi spletne strani ali pa piškotke izbrišete v nastavitvah vašega brskalnika.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
