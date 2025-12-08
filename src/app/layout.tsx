import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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
    default: "Patricia Pie | Boutique Couture House",
    template: "%s | Patricia Pie"
  },
  description: "Slovenian boutique couture brand offering Perfect Fit services and timeless elegance.",
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
    title: 'Patricia Pie | Boutique Couture House',
    description: 'Slovenian boutique couture brand offering Perfect Fit services and timeless elegance.',
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
          <CookieConsent />
        </BookingProvider> 
      </body>
    </html>
  );
}
