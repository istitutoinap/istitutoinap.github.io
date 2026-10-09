"use client";

import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-4ERE85KFBC";
const CONSENT_KEY = "inap-analytics-consent-v1";
const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000;
const SCRIPT_ID = "inap-google-analytics";

type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as { choice?: ConsentChoice; savedAt?: number };
    if (!parsed.choice || !parsed.savedAt || Date.now() - parsed.savedAt > CONSENT_DURATION) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed.choice;
  } catch {
    return null;
  }
}

function saveConsent(choice: ConsentChoice) {
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, savedAt: Date.now() }));
}

function enableAnalytics() {
  if (document.getElementById(SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0]?.trim();
    if (name?.startsWith("_ga")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);
  const [hasSavedChoice, setHasSavedChoice] = useState(false);

  useEffect(() => {
    const choice = readConsent();
    setHasSavedChoice(choice !== null);
    setVisible(choice === null);
    if (choice === "accepted") enableAnalytics();

    const openSettings = () => {
      setHasSavedChoice(readConsent() !== null);
      setVisible(true);
    };
    window.addEventListener("inap:open-cookie-settings", openSettings);
    return () => window.removeEventListener("inap:open-cookie-settings", openSettings);
  }, []);

  const choose = (choice: ConsentChoice) => {
    const analyticsWasLoaded = Boolean(document.getElementById(SCRIPT_ID));
    saveConsent(choice);
    setHasSavedChoice(true);
    setVisible(false);

    if (choice === "accepted") {
      enableAnalytics();
      return;
    }

    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    clearAnalyticsCookies();
    if (analyticsWasLoaded) window.location.reload();
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div>
        <p className="cookie-kicker">PRIVACY E COOKIE</p>
        <h2 id="cookie-title">{hasSavedChoice ? "Gestisci le tue preferenze" : "Possiamo usare cookie statistici?"}</h2>
        <p>Usiamo Google Analytics soltanto con il tuo consenso, per capire come viene consultato il sito e migliorarlo. Se rifiuti, Analytics non viene caricato.</p>
        <button type="button" className="cookie-privacy-link" onClick={() => window.dispatchEvent(new Event("inap:open-privacy"))}>Leggi l’informativa privacy e cookie</button>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-button cookie-reject" onClick={() => choose("rejected")}>Rifiuta</button>
        <button type="button" className="cookie-button cookie-accept" onClick={() => choose("accepted")}>Accetta</button>
      </div>
    </aside>
  );
}
