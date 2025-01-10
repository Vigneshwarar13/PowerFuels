// JavaScript for mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
