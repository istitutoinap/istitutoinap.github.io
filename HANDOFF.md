# Handoff INAP

## Struttura

Sito Next.js esportato staticamente con tre pagine: homepage, Associazione INAP e Neuromodulazione. Le risorse pubbliche sono in `public`; gli elementi condivisi e le pagine sono in `app`.

## Esecuzione

Usare `npm install` e `npm run dev` per la prova locale. `npm run build` genera la versione statica in `out`. Il workflow in `.github/workflows/deploy-pages.yml` pubblica automaticamente il sito su GitHub Pages a ogni aggiornamento del ramo `main`.

## Decisioni già prese

- Dominio definitivo: `istitutoinap.it`.
- Google Analytics: `G-4ERE85KFBC`, caricato solo dopo consenso.
- Informativa Privacy e Cookie disponibile esclusivamente in un pop-up.
- Associazione INAP e unità operativa INAP di Ser.In.Ar. sono presentate come realtà distinte.
- L’Associazione ha presentato domanda di iscrizione al RUNTS ma non è ancora indicata come ETS.

## Aggiornamenti futuri previsti

- Aggiornare lo stato RUNTS quando l’iscrizione sarà perfezionata.
- Inserire corsi ed eventi reali quando disponibili.
- Verificare periodicamente biografie, collegamenti personali, contatti e documenti pubblicati.
