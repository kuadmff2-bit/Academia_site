// TROQUE AQUI pelo número real da academia, somente números com DDI + DDD + número.
// Exemplo Amazonas: 5592999999999
const WHATSAPP_NUMBER = "5592999999999";

const backdrop = document.querySelector("#interestBackdrop");
const modal = document.querySelector("#interestModal");
const closeButton = document.querySelector("#closeInterest");
const form = document.querySelector("#interestForm");
const selectedPlanName = document.querySelector("#selectedPlanName");
const selectedPlanPrice = document.querySelector("#selectedPlanPrice");

let currentPlan = "";
let currentPrice = "";

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
  const goal = document.querySelector("#leadGoal").value.trim();
  const extra = document.querySelector("#leadMessage").value.trim();

  if (!name || !phone || !goal) return;

  if (WHATSAPP_NUMBER === "5592999999999" || !/^55\d{10,11}$/.test(WHATSAPP_NUMBER)) {
    alert("Antes de usar o formulário, troque WHATSAPP_NUMBER no arquivo script.js pelo número real da academia.");
    return;
  }

  const message = [
    "Olá! Tenho interesse em me matricular na academia.",
    "",
    `*Plano:* ${currentPlan}${currentPrice ? ` - ${currentPrice}` : ""}`,
    `*Nome:* ${name}`,
    `*Meu WhatsApp:* ${phone}`,
    `*Objetivo:* ${goal}`,
    extra ? `*Mensagem:* ${extra}` : ""
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
