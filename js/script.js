// Año dinámico en el footer
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Menú móvil
var navToggle = document.querySelector('.nav-toggle');
var mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Formulario de contacto (front-end only, sin backend)
var contactForm = document.getElementById('contact-form');
var formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formStatus.classList.add('visible');
    contactForm.reset();
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
