# AI-Logboek — De Fitnesscoach Hoofdwebsite

Dit logboek legt vast welke AI welk werk heeft geleverd aan deze website, wanneer en met welke briefing.

---

## 2026-06-29 — Project opgezet vanuit zip + gekoppeld aan GitHub

**Door:** Claude Opus 4.8 via Claude Code

**Wat:**
- Statische meerpagina-website voor De Fitnesscoach geïmporteerd uit `defitnesscoachwebsite.zip` (aangeleverd door Bob).
- Pagina's: `index.html` (Home), `over-mij.html`, `coaching.html`, `tarieven.html`, `contact.html`, plus `assets/style.css` en `assets/script.js`.
- Pure HTML/CSS/JS, geen build-stap. Huisstijl: cyaan accent `#43D8E5` op donkere basis `#1E2A31` (consistent met de receptenboek-funnel).
- Geplaatst in `~/Documents/Bob/de-fitnesscoach-website/` en gekoppeld aan bestaande lege GitHub-repo `Bobantersyn/De-Fittnesscoach-Hoofdwebsite`.

**Waarom:**
- Bob wilde een volledige (meerdelige) website voor De Fitnesscoach, los van de bestaande `de-fitnesscoach-receptenboek` conversie-funnel.

**Nog in te vullen (zoek op `[VUL IN]`):**
- Echte contactgegevens (e-mail, WhatsApp, Instagram, KvK/BTW)
- Tarieven en pakketinhoud op `tarieven.html`
- Echte reviews/testimonials op `index.html`
- Eigen verhaal op `over-mij.html`
- Foto: `assets/coach.jpg` plaatsen
- Contactformulier koppelen (Formspree of WhatsApp-link)

---

## 2026-06-29 — Bedrijfsgegevens en verhaal ingevuld vanaf info.defitnesscoach.nl

**Door:** Claude Opus 4.8 via Claude Code

**Wat (ingevuld uit https://info.defitnesscoach.nl):**
- Coach: **Ertugrul Can** (Instagram @_ertugrulcan).
- Verhaal op `over-mij.html` herschreven: worstelde zelf met gewicht + Turks eten, verdiepte zich in anatomie, werd anatomie-instructeur, 12+ jaar online coaching, 100% persoonlijke aandacht.
- Contactgegevens overal: e-mail info@defitnesscoach.nl, WhatsApp 06 28 37 00 72 (`wa.me/31628370072`), Instagram @_ertugrulcan, KvK **86570374**, BTW **NL864009628B01**.
- `coaching.html` FAQ: traject min. 3 maanden, min. 3x trainen p/w, 1-op-1 via WhatsApp + wekelijkse check-ins.
- Contactformulier (`assets/script.js`) gekoppeld: opent nu WhatsApp met vooraf ingevuld bericht (naam, e-mail, doel, bericht) — werkt zonder backend.
- Redactie-placeholdernotities verwijderd waar de content nu echt is.

**Nog steeds nodig van Bob (stonden NIET op de info-pagina):**
- **Prijzen** voor Starter/Coaching/Premium (`tarieven.html`, nu `€[•]`).
- **Echte reviews** op `index.html` (3 quotes met `[Naam klant]`). Bronmateriaal staat in assetsmap `De Fitnesscoach/Reviews ...`.
- **Coach-foto** `assets/coach.jpg` (op home + over-mij).
- Adres beschikbaar indien gewenst: Nieuwendamlaan 216, 2547 JN Den Haag.

---
