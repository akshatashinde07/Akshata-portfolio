const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.matchMedia("(max-width: 680px)").matches) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });
}
document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card[data-category]");
if (filterButtons.length && projectCards.length) filterButtons.forEach((button) => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle("active", item === button));
  projectCards.forEach((card) => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
}));
const form = document.getElementById("contact-form");
if (form) form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
  document.getElementById("form-message").textContent = "Your email app should open with this draft. Review it and press Send when you’re ready.";
  window.location.href = `mailto:akshatashinde0706@gmail.com?subject=${subject}&body=${body}`;
});
