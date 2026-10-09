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
  title: "INAP — Neuroscienze e psicologia al servizio della società",
  description: "Istituto per le Neuroscienze Applicate e il Benessere Psicologico: formazione, ricerca applicata e progetti per persone, professionisti e organizzazioni.",
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
