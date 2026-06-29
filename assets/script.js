/* De Fitness Coach — kleine helpers (geen build nodig) */

// Mobiel menu open/dicht
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.textContent = "☰";
      })
    );
  }

  // Markeer de actieve pagina in de navigatie
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });

  // Jaartal in de footer
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Sticky header krijgt achtergrond zodra je scrollt
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Scroll-reveal: elementen met .reveal faden in zodra ze in beeld komen
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Contactformulier -> opent WhatsApp met een vooraf ingevuld bericht
  const WHATSAPP_NUMBER = "31628370072"; // 06 28 37 00 72
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const naam = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const doel = (data.get("goal") || "").toString().trim();
      const bericht = (data.get("message") || "").toString().trim();

      const tekst =
        `Hoi Ertugrul, ik kom via de website.%0A%0A` +
        `Naam: ${naam}%0A` +
        `E-mail: ${email}%0A` +
        `Doel: ${doel}` +
        (bericht ? `%0A%0A${encodeURIComponent(bericht)}` : "");

      const note = document.getElementById("form-note");
      if (note) {
        note.textContent = "WhatsApp wordt geopend met je bericht. Druk daar op verzenden.";
        note.style.color = "var(--brand-2)";
      }
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${tekst}`, "_blank");
    });
  }
});
