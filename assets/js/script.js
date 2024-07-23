'use strict';

/**
 * navbar variables
 */
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * header sticky functionality
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");
});

/**
 * go top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});

/**
 * img rotation functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-slide');
  const logos = carousel.innerHTML;

  
  carousel.innerHTML += logos;

  // hero image rotation
  const images = [
    './assets/images/81.png',
    './assets/images/82.png',
    './assets/images/Longer wide.png',
    './assets/images/elaine.png'
  ];

  let currentImageIndex = 0;
  const heroImage = document.getElementById('hero-image');

  function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.src = images[currentImageIndex];
  }

  setInterval(changeHeroImage, 4000); // Change image every 2.5 secs
});
