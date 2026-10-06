import { DM_Sans, Manrope } from "next/font/google";
import { siteUrl, siteTitle, siteDescription, indexable } from "../lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "ESM Empreiteira",
  alternates: { canonical: "/" },
  robots: {
    index: indexable,
    follow: true,
    googleBot: {
      index: indexable,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "ESM Empreiteira",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ESM Empreiteira — Construção e reformas em Lagarto e Sergipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "SbQPnZNy5dX3k-eJqduav1OC3Jmn_rBdgIKgKjOd8SY",
  },
};
export const viewport = { themeColor: "#122c4a" };
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
