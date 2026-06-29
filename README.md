# De Fitness Coach — website

Een meerdelige website (geen landingspagina) voor **De Fitness Coach**:
online fitness- en voedingscoaching voor mannen die buikvet willen verliezen.

Gebouwd met **gewoon HTML, CSS en JavaScript** — geen build-stap, geen npm nodig.
Je kunt het bestand direct openen of online zetten.

## Pagina's
- `index.html` — Home
- `over-mij.html` — Over mij
- `coaching.html` — Coaching / aanpak
- `tarieven.html` — Tarieven
- `contact.html` — Contact (met formulier)
- `assets/style.css` — alle styling (kleuren staan bovenaan)
- `assets/script.js` — mobiel menu + formulier

## Huisstijl / kleuren
Cyaan accent **#43D8E5** en donkere basis **#1E2A31** zijn al ingesteld.
Wil je iets aanpassen? Open `assets/style.css` en wijzig de kleuren bovenaan in `:root`.
De hele site neemt de wijziging automatisch over.

## De website bekijken (lokaal)
1. Download/kopieer de map `defitnesscoach` naar je computer.
2. Dubbelklik op `index.html` — hij opent meteen in je browser.

Tip voor een nettere lokale preview (optioneel): open de map in VS Code en gebruik
de extensie **Live Server**, of draai in de map: `python -m http.server 8000`
en ga naar `http://localhost:8000`.

## Nog in te vullen (zoek op `[VUL IN]`)
- Echte contactgegevens (e-mail, WhatsApp, Instagram, KvK/BTW)
- Tarieven en pakketinhoud op `tarieven.html`
- Echte reviews/testimonials op `index.html`
- Eigen verhaal op `over-mij.html`
- Een foto: plaats `assets/coach.jpg` en vervang de fotoblokken

## Contactformulier laten werken
Het formulier toont nu alleen een bevestiging maar verstuurt niets. Koppel het aan een
gratis dienst zoals [Formspree](https://formspree.io): maak een form aan en zet in
`contact.html` `<form id="contact-form" action="https://formspree.io/f/JOUW_ID" method="POST">`.
Of vervang de knop door een directe WhatsApp-link.
