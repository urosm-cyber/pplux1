import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalyticsManager from "@/components/analytics/GoogleAnalyticsManager";
import { BookingProvider } from "@/components/booking/BookingContext";
import CookieConsent from "@/components/layout/CookieConsent";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.patriciapie.si'),
  title: {
    default: "Patricia Pie — Slovensko oblikovanje, Perfect Fit",
    template: "%s | Patricia Pie"
  },
  description: "Oblačila, ki vas razumejo. Patricia Pie ponuja storitev Perfect Fit, osebni pristop in brezčasno eleganco. Trajnostno slovensko oblikovanje za vašo garderobo.",
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    url: 'https://www.patriciapie.si',
    siteName: 'Patricia Pie',
    images: [
      {
        url: '/images/showroom-s7.png', // Fallback to showroom image
        width: 1200,
        height: 630,
        alt: 'Patricia Pie Couture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patricia Pie — Slovensko oblikovanje, Perfect Fit',
    description: 'Oblačila, ki vas razumejo. Patricia Pie ponuja storitev Perfect Fit, osebni pristop in brezčasno eleganco. Trajnostno slovensko oblikovanje za vašo garderobo.',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <BookingProvider>
          {children}
          <Analytics />
          <CookieConsent />
        </BookingProvider>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalyticsManager gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Patricia Pie",
              "image": "https://www.patriciapie.si/images/showroom-s7.png",
              "description": "Slovenska modna hiša, kjer se eleganca sreča z udobjem. Kroji, ki te razumejo, osebni pristop in brezčasen dizajn.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Stegne 7",
                "addressLocality": "Ljubljana",
                "postalCode": "1000",
                "addressCountry": "SI"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.0804,
                "longitude": 14.4867
              },
              "url": "https://www.patriciapie.si",
              "telephone": "+38641988384",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.instagram.com/patricia_pie/",
                "https://www.facebook.com/PatriciaPieFashion",
                "https://www.linkedin.com/in/barbara-franjic/"
              ]
            })
          }}
        /> 
      </body>
    </html>
  );
}
