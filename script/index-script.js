const burgerIcon = document.querySelector('#burger');
const navbarMeny = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMeny.classList.toggle('is-active');
});