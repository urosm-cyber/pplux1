import { Metadata } from 'next';
import PerfectFitContent from './PerfectFitContent';

export const metadata: Metadata = {
  title: 'Perfect Fit | Oblačila po meri | Patricia Pie',
  description: 'Naša signaturna storitev Perfect Fit. Oblačila, prilagojena vašim meram, za popolno prileganje in brezčasno eleganco.',
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Koliko stane storitev Perfect Fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Naše cene so transparentne. Plašči po meri se običajno gibljejo od 580€, obleke od 320€, manjša popravila pa med 20€ in 50€. Končna cena je odvisna od izbranega materiala, a jo vedno določimo vnaprej na brezplačnem posvetu."
      }
    },
    {
      "@type": "Question",
      "name": "Ali je prvi obisk res brezplačen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Prvi obisk je namenjen temu, da se spoznamo, pogovorimo o vaših željah in vidimo, če smo pravi za vas. Je povsem neobvezujoč – če se ne odločite za naročilo, je to povsem v redu."
      }
    },
    {
      "@type": "Question",
      "name": "Koliko obiskov je potrebnih?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cenimo vaš čas. Običajno sta potrebna le dva obiska: prvi za meritve in izbiro (30-45 min) ter drugi za prevzem in finalni fit. Za zelo zahtevne kose se včasih dogovorimo za eno vmesno probo."
      }
    },
    {
      "@type": "Question",
      "name": "Kako hitro je oblačilo narejeno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Od potrditve do končnega izdelka običajno traja 5 do 10 delovnih dni. Če oblačilo potrebujete za določen datum ali dogodek, se bomo potrudili prilagoditi vašim rokom."
      }
    },
    {
      "@type": "Question",
      "name": "Kaj če ne vem točno, kaj želim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To je naša specialnost. Barbara te bo vodila skozi proces, predlagala kroje glede na tvojo postavo in življenjski slog. Večina strank pride le z željo po \"nečem lepem\" in odide z najljubšim kosom v omari."
      }
    }
  ]
};

export default function PerfectFitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PerfectFitContent />
    </>
  );
}
