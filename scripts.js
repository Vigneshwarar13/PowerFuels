// script.js
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});
