const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');



hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});