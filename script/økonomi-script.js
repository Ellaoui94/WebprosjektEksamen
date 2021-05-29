import AnsatteModule from "./modules/AnsatteModule.js";
import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
import IngredienserModule from "./modules/IngredienserModule.js";

// Funksjon som returnerer økonomisk info om en restaurant (uferdig)
function calculateEconomy(restaurant){

};

// For Burger
const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links");



navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
} );


            
          