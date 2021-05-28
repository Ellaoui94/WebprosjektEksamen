const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links");

navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
} );