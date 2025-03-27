// JS to control collapsible sections and arrow toggles

document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    button.classList.toggle("active", !isOpen);
  });
});

// Optional: Back to Top Button
const backToTopBtn = document.querySelector(".back-to-top");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
