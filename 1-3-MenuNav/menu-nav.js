// Toggle Mobile Menu
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Carousel Slider
const slides = document.querySelector(".slides");
let index = 0;

function showNextSlide() {
  index++;
  if (index > 2) index = 0;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextSlide, 10000); // Slide every 10 seconds
