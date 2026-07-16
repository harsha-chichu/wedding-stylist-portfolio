import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ushaswini Munupaly — Bridal & Wedding Stylist",
  description:
    "Ushaswini Munupaly, Lead Fashion Stylist. Timeless Indian bridal styling — fashion, jewellery, and creative direction for weddings that photograph like editorials.",
  openGraph: {
    title: "Ushaswini Munupaly — Bridal & Wedding Stylist",
    description:
      "Timeless bridal experiences through fashion, styling & creative direction.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 800,
        alt: "South Indian bride in Kanchipuram silk and temple jewellery",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
