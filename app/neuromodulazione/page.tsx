import type { Metadata } from "next";
import ContactSection from "../contact-section";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Neuroscienze applicate e neuromodulazione",
  description: "Ricerca, formazione e sviluppo di servizi clinici di neuromodulazione mediante stimolazione magnetica transcranica.",
  alternates: {
    canonical: "/neuromodulazione/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/neuromodulazione/",
    siteName: "INAP",
    title: "Neuroscienze applicate e neuromodulazione | INAP",
    description: "Ricerca, formazione e sviluppo di servizi clinici di neuromodulazione mediante stimolazione magnetica transcranica.",
  },
};

const applications = [
  "Depressione",
  "Dipendenze e craving",
  "Disturbo ossessivo-compulsivo",
  "Dolore neuropatico cronico",
  "Recupero motorio o cognitivo dopo un ictus",
  "Decadimento cognitivo e demenze",
  "Altre patologie psichiatriche e neurologiche",
];

export default function NeuromodulazionePage() {
  return <main className="neuro-page">
    <SiteHeader />

    <section className="neuro-hero">
      <div className="neuro-hero-copy"><p className="eyebrow">NEUROSCIENZE APPLICATE</p><h1>Neuromodulazione e stimolazione magnetica transcranica.</h1><p>INAP promuove ricerca e formazione nel campo della neuromodulazione e lavora allo sviluppo di servizi clinici fondati su competenza scientifica, personalizzazione e integrazione delle cure.</p></div>
      <figure className="neuro-hero-image"><img src="/tms-treatment-illustrative.webp" alt="Rappresentazione di una seduta di stimolazione magnetica transcranica con paziente e professionista sanitario" /><figcaption>Immagine illustrativa</figcaption></figure>
    </section>

    <section className="neuro-intro">
      <div><p className="section-number">RICERCA E FORMAZIONE</p><h2>Studiare la neuroplasticità.<br /><span>Sviluppare interventi di precisione.</span></h2></div>
      <p>Il Comitato scientifico di INAP riunisce studiosi e professionisti di riconosciuta esperienza nelle neuroscienze cognitive e cliniche. Le attività riguardano lo studio della neuroplasticità e lo sviluppo di protocolli di neurostimolazione sempre più personalizzati e di precisione.</p>
    </section>

    <section className="tms-explainer">
      <div className="tms-definition"><p className="section-number">LA TECNICA</p><h2>Che cos’è la TMS?</h2><p>La stimolazione magnetica transcranica è una tecnica non invasiva che utilizza impulsi magnetici per modulare l’attività di specifiche aree e reti cerebrali.</p></div>
      <div className="tms-applications"><h3>Può trovare applicazione in diverse condizioni:</h3><ul>{applications.map(item=><li key={item}>{item}</li>)}</ul></div>
    </section>

    <section className="integrated-care">
      <div><p className="section-number">UN PERCORSO INTEGRATO</p><h2>Valutazione, personalizzazione e monitoraggio.</h2></div>
      <div><p>Ogni percorso prevede una valutazione specialistica iniziale, la verifica dell’appropriatezza e della sicurezza, la definizione di un protocollo personalizzato e il monitoraggio dei risultati.</p><p>La neuromodulazione può essere combinata con trattamenti psicologici, riabilitativi o farmacologici, all’interno di un progetto di cura coordinato.</p></div>
    </section>

    <section className="neuro-safety">
      <div><p className="section-number">SICUREZZA</p><h2>Un approccio non invasivo.</h2><p>La TMS non richiede interventi chirurgici né l’impianto di dispositivi. La persona rimane sveglia durante la seduta ed è seguita da professionisti qualificati. Prima di iniziare viene sempre effettuata una valutazione delle condizioni cliniche e delle eventuali controindicazioni.</p></div>
      <aside><p className="section-number">IL PROGETTO INAP</p><p>INAP sta sviluppando un servizio clinico di neuromodulazione in collaborazione con strutture sanitarie del territorio cesenate.</p><p>Le modalità di accesso saranno pubblicate quando il servizio sarà operativo.</p><a className="button" href="#scrivici">Scrivici</a></aside>
    </section>

    <ContactSection />

    <SiteFooter />
  </main>;
}
