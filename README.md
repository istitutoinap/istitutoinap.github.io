# Sito INAP

Versione autonoma del sito dell’Istituto per le Neuroscienze Applicate e il Benessere Psicologico, predisposta per GitHub Pages e per il dominio `istitutoinap.it`.

## Pubblicazione iniziale

1. Clonare con GitHub Desktop il repository INAP dell’organizzazione.
2. Copiare nel repository tutto il contenuto di questa cartella, inclusa la cartella nascosta `.github`.
3. In GitHub Desktop creare il commit `Pubblicazione iniziale sito INAP` e selezionare `Push origin`.
4. Nel repository su GitHub aprire `Settings` → `Pages`.
5. In `Build and deployment`, impostare `Source` su `GitHub Actions`.
6. Attendere il completamento dell’azione `Pubblica il sito INAP` nella scheda `Actions`.
7. In `Settings` → `Pages`, impostare il dominio personalizzato `istitutoinap.it` e, quando disponibile, attivare `Enforce HTTPS`.

Ogni successivo aggiornamento inviato al ramo `main` verrà pubblicato automaticamente.

## Prova locale facoltativa

Sono richiesti Node.js 22 e npm.

```bash
npm install
npm run dev
```

Aprire quindi `http://localhost:3000`.

## Generazione del sito statico

```bash
npm ci
npm run build
```

I file pronti per la pubblicazione vengono creati nella cartella `out`.
