import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import AnalyticsConsent from "./analytics-consent";
import PrivacyModal from "./privacy-modal";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://istitutoinap.it"),
  title: {
    default: "INAP — Neuroscienze e psicologia al servizio della società",
    template: "%s | INAP",
  },
  description: "Istituto per le Neuroscienze Applicate e il Benessere Psicologico: formazione, ricerca applicata e progetti per persone, professionisti e organizzazioni.",
  applicationName: "INAP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "INAP",
    title: "INAP — Neuroscienze e psicologia al servizio della società",
    description: "Istituto per le Neuroscienze Applicate e il Benessere Psicologico: formazione, ricerca applicata e progetti per persone, professionisti e organizzazioni.",
  },
  twitter: {
    card: "summary",
    title: "INAP — Neuroscienze e psicologia al servizio della società",
    description: "Istituto per le Neuroscienze Applicate e il Benessere Psicologico: formazione, ricerca applicata e progetti per persone, professionisti e organizzazioni.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
        <PrivacyModal />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
