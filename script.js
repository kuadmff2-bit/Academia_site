// Número usado em todo o site: DDI 55 + DDD 92 + número, somente dígitos.
const WHATSAPP_NUMBER = "5592992973832";

const backdrop = document.querySelector("#interestBackdrop");
const modal = document.querySelector("#interestModal");
const closeButton = document.querySelector("#closeInterest");
const form = document.querySelector("#interestForm");
const selectedPlanName = document.querySelector("#selectedPlanName");
const selectedPlanPrice = document.querySelector("#selectedPlanPrice");
const whatsappDoubts = document.querySelector("#whatsappDoubts");

let currentPlan = "";
let currentPrice = "";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

if (whatsappDoubts) {
  whatsappDoubts.href = whatsappUrl("Olá! Tenho uma dúvida sobre a academia.");
}

function openInterest(plan, price) {
  currentPlan = plan;
  currentPrice = price;
  selectedPlanName.textContent = plan;
  selectedPlanPrice.textContent = price;
  backdrop.hidden = false;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => document.querySelector("#leadName")?.focus(), 50);
}

function closeInterest() {
  backdrop.hidden = true;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// Garante que o formulário nunca abra sozinho ao entrar no site.
closeInterest();

document.querySelectorAll(".plan-button").forEach((button) => {
  button.addEventListener("click", () => {
    openInterest(button.dataset.plan || "Plano", button.dataset.price || "");
  });
});

closeButton.addEventListener("click", closeInterest);
backdrop.addEventListener("click", closeInterest);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeInterest();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#leadName").value.trim();
  const phone = document.querySelector("#leadPhone").value.trim();
  const extra = document.querySelector("#leadMessage").value.trim();

  if (!name || !phone) return;

  const message = [
    "Olá! Tenho interesse em me matricular na academia.",
    "",
    `*Plano:* ${currentPlan}${currentPrice ? ` - ${currentPrice}` : ""}`,
    `*Nome:* ${name}`,
    `*Meu WhatsApp:* ${phone}`,
    extra ? `*Mensagem:* ${extra}` : ""
  ].filter(Boolean).join("\n");

  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
});
