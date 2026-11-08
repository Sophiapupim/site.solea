// Número do WhatsApp com código do Brasil + DDD, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5511987804994";

// Ao clicar em qualquer parte de um cartão de produto,
// abre uma conversa com uma mensagem sobre aquela peça.
const productCards = document.querySelectorAll(".product");

productCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();

    const productName = card.dataset.product;
    const message = `Olá! Vim pelo site da Soléa e quero saber mais sobre ${productName}.`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  });
});

// Menu que abre e fecha em telas pequenas.
const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
