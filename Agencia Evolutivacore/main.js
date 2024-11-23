document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transitionDelay = entry.target.dataset.delay || "0s";
      }
    });
  }, {
    threshold: 0.2,
  });

  elements.forEach((el) => observer.observe(el));
});




// Menu Hambúrguer
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});