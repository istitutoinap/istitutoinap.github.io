"use client";

import { useEffect, useRef, useState } from "react";

export default function PrivacyModal() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("inap:open-privacy", show);
    return () => window.removeEventListener("inap:open-privacy", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="privacy-modal-backdrop" onMouseDown={() => setOpen(false)}>
      <section className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="privacy-modal-header">
          <h2 id="privacy-modal-title">Privacy e cookie</h2>
          <button ref={closeButton} type="button" onClick={() => setOpen(false)} aria-label="Chiudi l’informativa">Chiudi</button>
        </div>
        <div className="privacy-modal-content">
          <p className="privacy-date">Ultimo aggiornamento: 5 ottobre 2026</p>
          <p className="privacy-section-title">1. Chi gestisce il portale</p>
          <p>Il portale comune è gestito dall’Associazione INAP, associazione non riconosciuta con sede in Via Gioacchino Rossini 62, 47521 Cesena, codice fiscale 90089610407. Per i dati tecnici di navigazione, la gestione dei cookie statistici e Google Analytics, il titolare del trattamento è l’Associazione INAP. Contatti: <a href="mailto:associazioneinap@gmail.com">associazioneinap@gmail.com</a> · PEC <a href="mailto:associazioneinap@pec.it">associazioneinap@pec.it</a>.</p>
          <p className="privacy-section-title">2. Attività dell’Istituto e di Ser.In.Ar.</p>
          <p>INAP – Istituto per le Neuroscienze Applicate e il Benessere Psicologico – è un’unità operativa di Ser.In.Ar. Forlì-Cesena Soc. Cons. p.A. Per i messaggi inviati a <a href="mailto:info@istitutoinap.it">info@istitutoinap.it</a> e per i successivi trattamenti connessi alle attività istituzionali dell’Istituto, il titolare autonomo è Ser.In.Ar. Forlì-Cesena Soc. Cons. p.A., C.F. e P. IVA 01940960402, con sede legale in Viale Filippo Corridoni 18, 47121 Forlì. Contatti: <a href="mailto:info@serinar.it">info@serinar.it</a> · PEC <a href="mailto:serinar@legalmail.it">serinar@legalmail.it</a>.</p>
          <p className="privacy-section-title">3. Dati di navigazione e fornitori tecnici</p>
          <p>I sistemi che rendono disponibile il sito possono trattare indirizzo IP, data e ora della richiesta, pagina visitata, browser e informazioni tecniche necessarie alla sicurezza e al funzionamento del servizio. Il trattamento è necessario per fornire il sito, mantenerlo sicuro e individuare eventuali malfunzionamenti. I dati sono conservati per il tempo strettamente necessario secondo le politiche dei fornitori tecnici. Il portale è destinato alla pubblicazione su GitHub Pages; durante la fase di sviluppo può essere visualizzato attraverso un ambiente temporaneo. GoDaddy fornisce i servizi relativi al dominio e alla posta elettronica.</p>
          <p className="privacy-section-title">4. Google Analytics</p>
          <p>Con il consenso dell’utente, il sito utilizza Google Analytics 4, fornito da Google, per produrre statistiche sull’uso delle pagine. Google Analytics non viene caricato prima dell’accettazione. Le funzioni pubblicitarie, la personalizzazione degli annunci e Google Signals non sono utilizzati. I dati statistici sono conservati nella proprietà Analytics per il periodo configurato e comunque non oltre quattordici mesi. Il consenso può essere negato o modificato in qualsiasi momento attraverso “Gestisci cookie” nel footer. La base giuridica è il consenso. È possibile consultare <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">l’informativa privacy di Google</a>.</p>
          <p className="privacy-section-title">5. Cookie e memoria locale</p>
          <p>Prima del consenso non vengono installati cookie di Google Analytics. La scelta dell’utente viene conservata nel browser mediante memoria locale per un massimo di sei mesi. Dopo l’accettazione, Google Analytics può utilizzare cookie statistici, tra cui i cookie denominati _ga e _ga_*, secondo le durate e le modalità definite da Google. Se il consenso viene revocato, il sito interrompe Analytics e rimuove i cookie statistici accessibili dal dominio.</p>
          <p className="privacy-section-title">6. Comunicazioni via email</p>
          <p>I dati contenuti nei messaggi vengono utilizzati esclusivamente per rispondere alle richieste e gestire gli eventuali rapporti conseguenti. Il conferimento è volontario, ma senza un indirizzo di risposta potrebbe non essere possibile dare seguito alla comunicazione. I messaggi sono conservati per il tempo necessario alla gestione della richiesta e, quando applicabile, per adempiere obblighi amministrativi o di legge.</p>
          <p className="privacy-section-title">7. Diritti degli interessati</p>
          <p>Nei casi previsti dal Regolamento (UE) 2016/679, l’interessato può chiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento e può revocare il consenso senza pregiudicare i trattamenti già effettuati. Le richieste vanno rivolte al titolare competente utilizzando i contatti indicati nell’informativa. È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali.</p>
        </div>
      </section>
    </div>
  );
}
