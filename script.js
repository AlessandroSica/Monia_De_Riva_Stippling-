// /script.js
// why: tiny interactivity + year without external libs
const out = document.getElementById("output");
const ping = document.getElementById("ping");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
ping?.addEventListener("click", () => {
  const t = new Date().toLocaleString();
  out.textContent = `Button clicked at ${t}`;
});
