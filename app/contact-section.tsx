export default function ContactSection({ email = "info@istitutoinap.it", pec }: { email?: string; pec?: string }) {
  return (
    <section className="contact-section" id="scrivici">
      <div>
        <p className="section-number">RESTA IN CONTATTO</p>
        <h2>Hai una domanda?<br /><span>Scrivici.</span></h2>
        <p className="contact-copy">Per informazioni su attività, corsi, progetti e possibili collaborazioni, invia un messaggio a INAP.</p>
        <div className="contact-addresses">
          <a className="contact-email" href={`mailto:${email}`}>{email}</a>
          {pec && <p><strong>PEC</strong> <a href={`mailto:${pec}`}>{pec}</a></p>}
        </div>
      </div>
    </section>
  );
}
