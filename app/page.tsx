import ContactSection from "./contact-section";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const focusAreas = [
  ["Neuroscienze applicate e neuromodulazione", "Formazione sui principi, le tecniche e le applicazioni delle neuroscienze e della stimolazione cerebrale non invasiva."],
  ["Psicologia clinica e salute mentale", "Percorsi dedicati a modelli, strumenti e pratiche fondati sulle evidenze per la comprensione e la cura del disagio psicologico."],
  ["Comunicazione e relazione", "Formazione su ascolto, empatia e competenze relazionali nei contesti sanitari, educativi e organizzativi."],
  ["Benessere psicologico e prevenzione", "Formazione sulla promozione del benessere psicologico, della resilienza e della prevenzione nei diversi contesti di vita."],
  ["Benessere organizzativo e lavoro", "Percorsi rivolti a professionisti e organizzazioni sui temi della salute, delle relazioni e del cambiamento nei luoghi di lavoro."],
  ["Divulgazione scientifica", "Eventi e attività formative per rendere accessibili le conoscenze neuroscientifiche e psicologiche a professionisti, studenti e cittadinanza."],
];

const people = [
  { name: "Mirella Montemurro", role: "Direttrice", image: "/people/mirella-montemurro.webp", position: "50% 50%", featured: true, bio: "Psicoterapeuta e psicoanalista della Società Psicoanalitica Italiana (SPI), svolge attività clinica con adulti e coppie. Si occupa di psicodiagnostica, psicologia forense e divulgazione scientifica.", url: "https://www.mirellamontemurro.com/" },
  { name: "Alessio Avenanti", role: "Presidente del Comitato scientifico", image: "/people/alessio-avenanti.webp", position: "50% 28%", featured: true, bio: "Professore ordinario di Neuropsicologia e Neuroscienze cognitive. Studia neuroplasticità, cognizione sociale e neuromodulazione non invasiva.", url: "https://www.unibo.it/sitoweb/alessio.avenanti" },
  { name: "Gianluca Farfaneti", role: "Comitato scientifico", image: "/people/gianluca-farfaneti.webp", position: "50% 24%", bio: "Dirigente psicologo e psicoterapeuta impegnato nei servizi territoriali per la salute mentale, esperto di dipendenze, disturbi di personalità e prevenzione." },
  { name: "Matteo Leonardi", role: "Comitato scientifico", image: "/people/matteo-leonardi.webp", position: "50% 24%", bio: "Avvocato e manager con competenze in governance, contratti, gestione del rischio e sostenibilità organizzativa dei progetti complessi." },
  { name: "Vincenzo Romei", role: "Comitato scientifico", image: "/people/vincenzo-romei.webp", position: "50% 34%", bio: "Professore ordinario di Neuropsicologia e Neuroscienze cognitive, si occupa di coscienza, oscillazioni cerebrali e stimolazione cerebrale non invasiva.", url: "https://www.unibo.it/sitoweb/vincenzo.romei" },
  { name: "Chiara Ruini", role: "Comitato scientifico", image: "/people/chiara-ruini.webp", position: "50% 30%", bio: "Professoressa di Psicologia clinica, esperta di psicologia positiva, resilienza e interventi per il benessere in contesti sanitari e sociali.", url: "https://www.unibo.it/sitoweb/chiara.ruini" },
  { name: "Michele Sanza", role: "Comitato scientifico", image: "/people/michele-sanza.webp", position: "50% 28%", bio: "Psichiatra e dirigente sanitario, con esperienza nella salute mentale pubblica, nelle dipendenze e nell'organizzazione dei servizi territoriali." },
  { name: "Luigino Tosatto", role: "Comitato scientifico", image: "/people/luigino-tosatto.webp", position: "50% 32%", bio: "Professore straordinario in Neurochirurgia, esperto di neuroscienze cliniche, neuro-oncologia e integrazione tra innovazione scientifica e pratica assistenziale.", url: "https://luiginotosatto.it/" },
  { name: "Salvatore Zappalà", role: "Comitato scientifico", image: "/people/salvatore-zappala.webp", position: "50% 30%", bio: "Professore di Psicologia del lavoro e delle organizzazioni. Studia cambiamento organizzativo, lavoro agile e benessere professionale.", url: "https://www.unibo.it/sitoweb/salvatore.zappala" },
];

const principles = [
  ["Evidence-based", "Ogni iniziativa nasce da conoscenze scientifiche solide, valutate criticamente e tradotte con responsabilità."],
  ["Interdisciplinare", "Neuroscienze, psicologia, salute, organizzazioni e governance dialogano attorno a problemi reali."],
  ["Traslazionale", "Colleghiamo ricerca e applicazione: dall'idea al progetto, dal progetto alla verifica dei risultati."],
  ["Territoriale", "Costruiamo alleanze con professionisti, sanità, imprese, istituzioni, associazioni e comunità."],
];

const programs = [
  { type: "ALTA FORMAZIONE", title: "Percorsi specialistici per professionisti sanitari", text: "Programmi avanzati, con docenti di riconosciuta esperienza, dedicati all'integrazione tra conoscenze scientifiche e pratica professionale.", meta: "In presenza · Cesena", tone: "blue" },
  { type: "FORMAZIONE ECM", title: "Aggiornamento continuo fondato sulle evidenze", text: "Proposte su salute mentale, prevenzione, neuroscienze e innovazione clinica, progettate per sostenere competenze realmente trasferibili.", meta: "Formazione asincrona", tone: "cyan" },
  { type: "PER LE ORGANIZZAZIONI", title: "Benessere psicologico nei luoghi di lavoro", text: "Formazione, ascolto e progettazione per promuovere salute, consapevolezza e qualità delle relazioni nei contesti organizzativi.", meta: "Programmi presso partner", tone: "green" },
];

const projects = [
  ["RICERCA E SALUTE", "Neuroscienze applicate e neuromodulazione", "Ricerca scientifica, interventi clinici, formazione e collaborazioni con università e strutture sanitarie pubbliche e private."],
  ["PERSONE E ORGANIZZAZIONI", "Prevenzione e benessere psicologico", "Sportelli di ascolto, programmi di prevenzione e interventi valutabili per aziende, enti pubblici e comunità professionali."],
  ["CONOSCENZA E TERRITORIO", "Formazione, divulgazione e opportunità", "Alta formazione, ECM, eventi pubblici, borse e premi per rendere la conoscenza accessibile e sostenere nuove generazioni."],
];

export default function Home() {
  return <main>
    <SiteHeader home />

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">SCIENZA · PERSONE · TERRITORIO</p><h1>Neuroscienze e psicologia <em>al servizio della società.</em></h1><p className="hero-text">Un istituto interdisciplinare che trasforma conoscenze scientifiche affidabili in formazione, ricerca applicata e progetti capaci di migliorare il benessere delle persone e delle organizzazioni.</p><div className="hero-actions"><a className="button" href="#formazione">Scopri corsi ed eventi <span aria-hidden="true">→</span></a><a className="text-link" href="#chi-siamo">Conosci INAP <span aria-hidden="true">↘</span></a></div></div>
      <div className="hero-visual"><img className="hero-art" src="/inap-network.webp" alt="Rete di connessioni ispirata alle ramificazioni neuronali e alla crescita di un albero" /><div className="hero-logo-card"><img src="/inap-logo-full.webp" alt="Logo INAP" /></div><p className="visual-caption">Connettere competenze.<br />Generare impatto.</p></div>
    </section>

    <section className="intro" id="chi-siamo"><p className="section-number">01 — CHI SIAMO</p><div><h2>Un istituto interdisciplinare.<br /><span>Una scienza che diventa azione.</span></h2><p>INAP — Istituto per le Neuroscienze Applicate e il Benessere Psicologico — nasce per ridurre la distanza tra ciò che la ricerca scopre e ciò di cui persone, professionisti e organizzazioni hanno concretamente bisogno. Integra neuroscienze cognitive, sociali e affettive, psicologia clinica e positiva, salute mentale, benessere organizzativo e competenze di governance.</p><p>L'Istituto è un luogo flessibile di incontro, progettazione e trasferimento scientifico, radicato nel territorio e aperto a reti nazionali e internazionali.</p></div></section>

    <section className="method-section" aria-labelledby="metodo-title"><div className="section-heading compact-heading"><div><p className="section-number">IL NOSTRO METODO</p><h2 id="metodo-title">Rigore scientifico.<br /><span>Impatto umano.</span></h2></div><p>Quattro principi guidano il modo in cui selezioniamo, costruiamo e valutiamo ogni iniziativa.</p></div><div className="principles-grid">{principles.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="dual-section" id="percorsi"><div className="section-heading light-heading"><p className="section-number">02 — DUE PERCORSI, UNA MISSIONE</p><h2>Due percorsi distinti.<br /><span>Una missione condivisa.</span></h2></div><div className="dual-grid">
      <article className="soul-card soul-institute"><p className="card-kicker">RICERCA, FORMAZIONE E SERVIZI</p><h3>Le attività <span>dell’Istituto</span></h3><p>INAP sviluppa attività scientifiche, formative e professionali nell’ambito delle neuroscienze applicate, della psicologia e del benessere, mettendo in relazione ricerca, pratica e bisogni del territorio.</p><ul><li>Alta formazione e formazione ECM</li><li>Ricerca applicata e progettazione</li><li>Benessere organizzativo</li><li>Sportelli di ascolto e prevenzione</li></ul><a href="#formazione">Scopri le attività <span aria-hidden="true">→</span></a></article>
      <article className="soul-card soul-association"><p className="card-kicker">DIVULGAZIONE, PARTECIPAZIONE E SOSTEGNO</p><h3>Associazione <span>INAP</span></h3><p className="runts-note">Domanda di iscrizione al RUNTS presentata.</p><p>L’Associazione promuove la diffusione della cultura scientifica e iniziative di interesse sociale, sostenendo eventi aperti, borse e opportunità per giovani professionisti e ricercatori.</p><ul><li>Borse, premi e sostegno ai giovani</li><li>Eventi gratuiti e divulgazione</li><li>Raccolta fondi e sostegno ai progetti</li><li>Partecipazione alla vita associativa</li></ul><a href="/associazione/">Scopri l’Associazione <span aria-hidden="true">→</span></a></article>
    </div></section>

    <section className="programs" id="formazione"><div className="section-heading"><div><p className="section-number">03 — FORMAZIONE ED EVENTI</p><h2>Conoscenza che<br /><span>fa crescere.</span></h2></div><div className="section-intro"><p>Percorsi specialistici per professionisti della salute, psicologi e psicoterapeuti in formazione, aziende e organizzazioni.</p><a className="text-link" href="#scrivici">Chiedi informazioni <span aria-hidden="true">→</span></a></div></div><div className="course-grid">{programs.map(p=><article className={`course-card ${p.tone}`} key={p.title}><div className="course-top"><span>{p.type}</span></div><h3>{p.title}</h3><p className="course-description">{p.text}</p><p className="course-meta">{p.meta}</p><a href="#scrivici">Contattaci <span aria-hidden="true">↗</span></a></article>)}</div><div className="focus-heading"><p className="section-number">LE NOSTRE AREE FORMATIVE</p><h3>Ambiti di approfondimento</h3></div><div className="focus-grid">{focusAreas.map(([title,text])=><article className="focus-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="projects" id="progetti"><div className="projects-visual"><img src="/inap-network.webp" alt="Connessioni tra ricerca, salute, organizzazioni e territorio" /></div><div className="projects-copy"><p className="section-number">04 — PROGETTI E IMPATTO</p><h2>Dalle competenze<br /><span>alle soluzioni.</span></h2><p className="projects-lead">INAP costruisce progetti insieme ai propri partner: identifica i bisogni, riunisce le competenze necessarie e integra progettazione, formazione, implementazione e valutazione.</p><div className="project-list">{projects.map(([label,title,text],i)=><article key={title}><p>{label}</p><h3>{title}</h3><span>{text}</span>{i===0&&<a className="project-link" href="/neuromodulazione">Conosci il progetto <span aria-hidden="true">→</span></a>}</article>)}</div></div></section>

    <section className="people" id="persone"><div className="section-heading people-heading"><div><p className="section-number">05 — LE PERSONE</p><h2>Competenze diverse.<br /><span>Una visione comune.</span></h2></div><p>Il Comitato scientifico riunisce esperienza scientifica, clinica, sanitaria, organizzativa e istituzionale per affrontare problemi complessi con uno sguardo realmente interdisciplinare.</p></div><div className="people-grid">{people.map(person=><article className="person-card" key={person.name}><img className="person-portrait" src={person.image} alt={`Ritratto di ${person.name}`} style={{objectPosition: person.position}} /><div className="person-content"><p className="person-role">{person.role}</p><h3>{person.name}</h3><p className="person-bio">{person.bio}</p>{person.url&&<a href={person.url} target="_blank" rel="noreferrer">Pagina personale <span aria-hidden="true">↗</span></a>}</div></article>)}</div></section>

    <ContactSection />

    <SiteFooter home />
  </main>;
}
