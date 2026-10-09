import CookieSettingsButton from "./cookie-settings-button";
import PrivacyButton from "./privacy-button";

export default function SiteFooter({ home = false }: { home?: boolean }) {
  const sectionHref = (id: string) => `${home ? "" : "/"}#${id}`;

  return (
    <footer id="contatti">
      <div className="footer-brand"><img src="/inap-logo-full.webp" alt="Logo INAP — Istituto per le Neuroscienze Applicate e il Benessere Psicologico" /></div>
      <div><h3>Contatti</h3><p>Palazzo Romagnoli<br />Via Uberti 48, Cesena</p><a href="mailto:info@istitutoinap.it">info@istitutoinap.it</a></div>
      <div><h3>Esplora</h3><a href={sectionHref("chi-siamo")}>Chi siamo</a><a href={sectionHref("formazione")}>Formazione ed eventi</a><a href={sectionHref("progetti")}>Progetti</a><a href={sectionHref("persone")}>Persone</a></div>
      <div><h3>Associazione</h3><a href="/associazione/">Associazione INAP</a><PrivacyButton className="footer-link-button" /><CookieSettingsButton /></div>
    </footer>
  );
}
