import ContactSection from "../contact-section";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata = {
  title: "Associazione INAP | INAP",
  description: "Attività, eventi e documenti pubblici dell’Associazione INAP.",
};

const activities = [
  ["Borse, premi e sostegno ai giovani", "Opportunità per sostenere la formazione, la ricerca e la crescita di giovani professionisti e ricercatori."],
  ["Eventi gratuiti e divulgazione", "Incontri aperti e iniziative culturali per rendere la conoscenza scientifica accessibile alla comunità."],
  ["Raccolta fondi e sostegno ai progetti", "Risorse e collaborazioni destinate a iniziative scientifiche, formative e di interesse sociale."],
  ["Partecipazione alla vita associativa", "Uno spazio di confronto e partecipazione per soci, partner e persone interessate alla missione di INAP."],
];

export default function AssociazionePage() {
  return <main className="association-page">
    <SiteHeader />

    <section className="association-hero">
      <div><p className="eyebrow">ASSOCIAZIONE INAP</p><h1>Conoscenza, partecipazione e sostegno alla comunità.</h1><p>L’Associazione INAP promuove la cultura scientifica e iniziative di interesse sociale nei settori delle neuroscienze applicate, della psicologia e del benessere.</p><p className="runts-status">Domanda di iscrizione al RUNTS presentata.</p></div>
      <div className="association-mark"><img src="/association-logo.jpeg" alt="Logo dell’Associazione INAP" /></div>
    </section>

    <section className="association-event">
      <a className="event-poster" href="/events/presentazione-cronache-inconscio-24-ottobre-2026.jpeg" target="_blank" rel="noreferrer"><img src="/events/presentazione-cronache-inconscio-24-ottobre-2026.jpeg" alt="Locandina della presentazione del libro Cronache dall’inconscio, 24 ottobre 2026" /></a>
      <div><p className="section-number">EVENTO IN EVIDENZA</p><p className="event-support">Con il sostegno dell’Associazione INAP</p><h2>Presentazione del libro “Cronache dall’inconscio”</h2><p className="event-lead">Il viaggio psicoanalitico nel quotidiano, di Mirella Montemurro: una raccolta di articoli dalla rubrica di psicologia del Corriere Cesenate.</p><dl><div><dt>Quando</dt><dd>24 ottobre 2026, ore 17.00</dd></div><div><dt>Dove</dt><dd>Aula Magna, Biblioteca Malatestiana, Cesena</dd></div><div><dt>Ingresso</dt><dd>Libero</dd></div></dl><p>Presenta Pierluigi Moressa, psicoanalista della Società Psicoanalitica Italiana. Intervengono rappresentanti delle istituzioni, del territorio e della comunità psicoanalitica.</p><a className="text-link" href="/events/presentazione-cronache-inconscio-24-ottobre-2026.jpeg" target="_blank" rel="noreferrer">Visualizza la locandina</a></div>
    </section>

    <section className="association-activities">
      <div className="section-heading"><div><p className="section-number">LE ATTIVITÀ</p><h2>Impegno scientifico.<br /><span>Valore sociale.</span></h2></div><p>Quattro ambiti attraverso i quali l’Associazione traduce la propria missione in opportunità, partecipazione e iniziative aperte.</p></div>
      <div className="association-grid">{activities.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="transparency-section">
      <div><p className="section-number">TRASPARENZA</p><h2>Documenti pubblici.<br /><span>Governance trasparente.</span></h2><p>L’Associazione INAP pubblica i propri documenti di governance per garantire trasparenza, accessibilità e responsabilità verso soci, partner e comunità.</p></div>
      <article className="document-card"><p>DOCUMENTO ISTITUZIONALE</p><h3>Statuto dell’Associazione</h3><p>Il documento disciplina finalità, attività, organizzazione e funzionamento dell’Associazione INAP.</p><div><a className="button" href="/documents/statuto-associazione-inap.pdf" target="_blank" rel="noreferrer">Consulta lo Statuto</a><a className="text-link" href="/documents/statuto-associazione-inap.pdf" download>Scarica il PDF</a></div></article>
    </section>

    <ContactSection email="associazioneinap@gmail.com" pec="associazioneinap@pec.it" />
    <SiteFooter />
  </main>;
}
