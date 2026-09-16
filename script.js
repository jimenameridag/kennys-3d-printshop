// Coloca aquí el número de WhatsApp cuando lo tengas.
// Formato: código de país + número, sin +, espacios ni guiones.
// Ejemplo Guatemala: 502XXXXXXXX
const WHATSAPP_NUMBER = "";

const whatsappMessage = "Hola, me gustaría obtener información sobre una impresión 3D.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("El número de WhatsApp todavía está pendiente de configurar.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => menu.classList.toggle("open"));

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
