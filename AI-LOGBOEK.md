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

## 2026-06-30 — Volledige herbouw v3: redactioneel licht thema + echte fotografie

**Door:** Claude Opus 4.8 via Claude Code
**Skill toegepast:** `frontend-design`

**Aanleiding:** Bob vond v2 nog steeds een "landingspagina-vibe" hebben. Nieuwe referenties aangeleverd (Aroha, Minglee, Fitnesxia op Dribbble). Kernverschil benoemd: die voorbeelden leven van **echte fotografie + dichte redactionele opbouw**, terwijl v2 lege placeholder-vlakken en een generiek donker verloop had. Opdracht: weggooien en opnieuw bouwen vanuit de voorbeelden.

**Wat:**
- **Echte fotografie toegevoegd:** 10 royalty-free Unsplash-foto's gedownload naar `assets/img/` (gym, training, eten) — lokaal opgeslagen zodat ze gegarandeerd laden en production-safe zijn. Coach vervangt later door eigen beeld.
- **Nieuw design-systeem (`assets/style.css` v3):** licht/cream canvas (`#f4efe6`), warme bijna-zwarte tekst, **Archivo** (heavy display 900) + **Hanken Grotesk** (body). Cyaan `#43d8e5` als highlight-marker/fills, diepere teal `#0c8f9e` voor leesbare accenttekst op licht. Aroha-stijl.
- **Homepage volledig opnieuw (`index.html`):** asymmetrische hero (enorme kop + info-paneel met avatar-stack + grote vol-bleed foto met zwevende kaartjes), marquee, stats-band, probleem-cards, geannoteerde trainingsfoto, voeding-split met maaltijdfoto, feature-grid, 3-stappen, testimonials met gezichten + sterren, **dramatische donkere CTA met foto-achtergrond**, footer met groot woordmerk "DE FITNESS COACH".
- **Nieuwe componenten:** `.float-card` (zwevende data-labels op beeld), `.annotated`, `.split-media`, `.stats-band`, `.price-card.featured` (donker uitgelicht), `.cta-photo`, `.footer-wordmark`, `.mark` (cyaan highlight achter een woord).
- Subpagina's liften mee via gedeelde class-namen; over-mij kreeg een echte foto; lettertypes overal omgezet naar Archivo.
- Geverifieerd met live preview: hero desktop + tarieven-pricing (witte cards + donkere featured) renderen sterk.

**Nog nodig van Bob:** eigen coach-foto's (vervangen stockbeeld), prijzen, echte reviews.

---

## 2026-06-30 — Bold redesign: van landingspagina-look naar premium website

**Door:** Claude Opus 4.8 via Claude Code
**Skill toegepast:** `frontend-design` (+ globale UI-werkafspraken)

**Aanleiding:** Bob vond dat de site te veel op een dunne landingspagina leek (referenties aangeleverd: Aroha, PulseFit, DEXAFIT op Dribbble — bold beeld, grote display-typografie, sterke accentkleur, rijke secties).

**Wat:**
- **Design-systeem (`assets/style.css`) volledig herschreven (v2):**
  - Nieuw lettertype-paar: **Bricolage Grotesque** (display) + **Hanken Grotesk** (body), weg van generieke Inter.
  - Diepere basis (`#0c1418`), gelaagde cyaan-glows + subtiele grain-textuur (SVG noise) voor atmosfeer.
  - Grotere type-scale, genummerde sectie-labels, hero-stats, marquee, stats-band, feature-cards, art-directed beeldslots (`media-frame`/`photo-placeholder`), verfijnde pricing/testimonials/FAQ/contact.
  - Sticky header met scroll-state, scroll-reveals (IntersectionObserver) + gestaffelde hero-load. `prefers-reduced-motion` gerespecteerd.
  - Alle bestaande class-namen behouden, zodat de subpagina's automatisch meeliften.
- **Homepage (`index.html`) opnieuw opgebouwd:** asymmetrische hero met beeldpaneel + zwevend "plekken beschikbaar"-kaartje, marquee, probleem (genummerde cards), oplossing-split, stats-band, 3-stappen aanpak, "wat je krijgt"-grid, testimonials, dubbele CTA.
- **`assets/script.js`:** header scroll-state + scroll-reveal observer toegevoegd.
- Lettertype-link op alle 5 pagina's omgezet naar Bricolage + Hanken.
- Geverifieerd met live preview op desktop (1440) én mobiel (375).

**Nog steeds nodig van Bob:** prijzen, echte reviews, coach-foto (`assets/coach.jpg`).

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
