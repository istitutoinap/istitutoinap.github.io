const navigation = [
  ["Chi siamo", "chi-siamo"],
  ["Due percorsi", "percorsi"],
  ["Formazione ed eventi", "formazione"],
  ["Progetti", "progetti"],
  ["Persone", "persone"],
];

export default function SiteHeader({ home = false, contactHref = "#scrivici" }: { home?: boolean; contactHref?: string }) {
  const sectionHref = (id: string) => `${home ? "" : "/"}#${id}`;

  return (
    <>
      <div className="topline">
        <p>Ricerca, formazione e benessere per persone, organizzazioni e comunità.</p>
        <a href={contactHref}>Scrivici <span aria-hidden="true">↗</span></a>
      </div>
      <header className="site-header">
        <a className="brand" href={home ? "#top" : "/"} aria-label="INAP, torna alla homepage">
          <img src="/inap-mark.webp" alt="" />
          <span className="brand-copy"><strong>INAP</strong><small>Neuroscienze Applicate<br />e Benessere Psicologico</small></span>
        </a>
        <nav className="desktop-navigation" aria-label="Navigazione principale">
          {navigation.map(([label, id]) => <a href={sectionHref(id)} key={id}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <details className="mobile-menu">
            <summary>Menu</summary>
            <div>
              {navigation.map(([label, id]) => <a href={sectionHref(id)} key={id}>{label}</a>)}
              <a href="/associazione/">Associazione INAP</a>
            </div>
          </details>
          {home
            ? <a className="button button-small" href="#formazione">Scopri le attività</a>
            : <a className="text-link page-back" href="/">Torna alla homepage</a>}
        </div>
      </header>
    </>
  );
}
