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

  // Contactformulier (demo — vervang door echte verzendmethode, bv. Formspree)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.getElementById("form-note");
      if (note) {
        note.textContent =
          "Bedankt! Dit is nog een demo-formulier — koppel het aan e-mail/WhatsApp om berichten echt te ontvangen.";
        note.style.color = "var(--brand-2)";
      }
      form.reset();
    });
  }
});
