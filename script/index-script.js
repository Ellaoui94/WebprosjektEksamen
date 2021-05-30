import AnsatteModule from "./modules/AnsatteModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";
import EconomyFormulasModule from "./modules/EconomyFormulasModule.js";


// Burger-kode start
const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector(".navbar-menu");
navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
});
// Burger-kode slutt


const matPopup = document.querySelector("#popup-mat");
const restaurantPopup = document.querySelector("#popup-restaurant");
const ansattPopup = document.querySelector("#popup-ansatt");

const matModalBg = document.querySelector("#modalBg-mat");
const restaurantModalBg = document.querySelector("#modalBg-restaurant");
const ansattModalBg = document.querySelector("#modalBg-ansatt");

const matOutput = document.querySelector("#mat-output");
const restaurantOutput = document.querySelector("#restaurant-output");
const ansattOutput = document.querySelector("#ansatt-output");

const matClick = document.querySelector("#mat-click");
const restaurantClick = document.querySelector("#restaurant-click");
const ansattClick = document.querySelector("#ansatt-click");



const alleAnsatte = AnsatteModule.getAllAnsatte();
const alleRestauranter = RestaurantModule.getAllRestauranter();
const allMatOgDrikke = MatOgDrikkeModule.getAllMatOgDrikke();
const allePizzaer = allMatOgDrikke.filter(o => (o.type == "rød pizza" || o.type == "hvit pizza"));


// Hjelpefunksjoner

const getRandomIndex = (max) => {
	return Math.floor(Math.random() * max);
}

const getRandomArrayElement = (array) => {
	return array[getRandomIndex(array.length)];
};

const getHighestIncomeRestaurant = (restaurantArray, menuArray, employeeArray) => {
	let highestIncomeRestaurant = {};
	let highestIncome = [0,0,0,0];
	restaurantArray.forEach(o => {
		let income = EconomyFormulasModule.getIncome(o, menuArray, employeeArray);
		if (income[0] > highestIncome[0]) {
			highestIncome = income;
			highestIncomeRestaurant = o;
		}
	});
	let returnArray = [highestIncomeRestaurant, highestIncome];
	return returnArray;
};

const generateListElements = (array) => {
    let listOfElements = "";
    array.forEach(e => {
        listOfElements += `
        <li>${e}</li>
        `
    });
    return listOfElements;
}



// Hovedfunksjon

const generatePopupHTML = (pizza, ansatt, restaurant) => {
	console.log(pizza);
	console.log(ansatt);
	console.log(restaurant);
	let matCard = `
		<article>
			<div class="card">
				<section class="card-header">
					<h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/Meny/icon1.png" width="25" height="25"></span>${pizza.navn}</h3>
				</section>
				<section class="card-image">
					<img src="images/Meny/${pizza.bilde}" alt="bilde av mat">
				</section>
				<section class="card-content">
					<ul class="content">
						<li>ID: ${pizza.id}</li>
						<li>Type: ${pizza.type}</li>
						<li>
							<ul>
								<lh>Ingredienser:</lh>
								${generateListElements(pizza.ingredienser)}
							</ul>
						</li>
						<li>
							<ul>
								<lh>Allergener:</lh>
								${generateListElements(pizza.allergener)}
							</ul>
						</li>
						<li>Kostnad: ${pizza.kostnad} kr</li>
						<li>Pris: ${pizza.pris} kr</li>
					</ul>
				</section>
				<section class="card-footer buttons is-small">
					<button id="pizza-close-button" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/x-icon.png" width="25" heigth="25"></span>Lukk</button>
				</section>
			</div>
		</article>

	`
	let ansattCard = `
		<article>
		<div class="card ansatte-card">
		<section class="card-header">
			<h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/knapp-iconer/profile-icon.png" alt="ikon" width="25" height="25"></span>${ansatt.navn}</h3>
		</section>
		<section class="card-image">
			<img src="images/Ansatte/${ansatt.bilde}" alt="bilde av ansatt">
		</section>
		<section class="card-content">
			<ul class="content">
				<li>ID: ${ansatt.id}</li>
				<li>Navn: ${ansatt.navn}</li>
				<li>Arbeidssted: ${ansatt.arbeidssted[0]}</li>
				<li>Telefon: ${ansatt.telefon}</li>
				<li>Stilling: ${ansatt.stilling}</li>
				<li>Stillingsprosent: ${ansatt.stillingsprosent}</li>
				<li>Timelønn: ${ansatt.timelønn}</li>
				<li>Alder: ${ansatt.alder}</li>
			</ul>
		</section>
		<section class="card-footer buttons is-small">
			<button id="ansatt-cole-button" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/x-icon.png" width="25" heigth="25"></span>Lukk</button>
		</section>
	</div>
		</article>
	`
	let restaurantCard = `
		<article>
			<div class="card restaurant-card">
				<section class="card-header">
					<h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/knapp-iconer/loc-icon.png" alt="ikon" width="25" height="25"></span>${restaurant[0].navn}</h3>
				</section>
				<section class="card-image">
					<img src="images/${restaurant[0].bilde}" alt="bilde av restaurant">
				</section>
				<section class="card-content">
					<ul class="content">
						<li>ID: ${restaurant[0].id}</li>
						<li>Adresse: ${restaurant[0].adresse}</li>
						<li>Telefon: ${restaurant[0].telefon}</li>
						<li>Kapasitet: ${restaurant[0].kapasitet}</li>
						<li>Leder: ${restaurant[0].leder[0]}</li>
						<li>Daglig inntekt: ${restaurant[1][0]}</li>
						<li>Ukentlig inntekt: ${restaurant[1][1]}</li>
						<li>Månedlig inntekt: ${restaurant[1][2]}</li>
						<li>Årlig inntekt: ${restaurant[1][3]}</li>
					</ul>
				</section>
				<section class="card-footer buttons is-small">
					<button id="restaurant-close-button" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/x-icon.png" width="25" heigth="25"></span>Lukk</button>
				</section>
			</div>
		</article>
	`

	matOutput.innerHTML = matCard;
	ansattOutput.innerHTML = ansattCard;
	restaurantOutput.innerHTML = restaurantCard;
};

generatePopupHTML(
	getRandomArrayElement(allePizzaer),
	getRandomArrayElement(alleAnsatte),
	getHighestIncomeRestaurant(alleRestauranter, allMatOgDrikke, alleAnsatte)
);



// Event Listeners

const pizzaCloseButton = document.querySelector("#pizza-close-button");
const ansattCloseButton = document.querySelector("#ansatt-cole-button");
const restaurantCloseButton = document.querySelector("#restaurant-close-button");

matClick.addEventListener("click", () => {
	matPopup.classList.add("is-active");
});

pizzaCloseButton.addEventListener("click", () => {
	matPopup.classList.remove("is-active");
});

matModalBg.addEventListener("click", () => {
	matPopup.classList.remove("is-active");
});

ansattClick.addEventListener("click", () => {
	ansattPopup.classList.add("is-active");
});

ansattCloseButton.addEventListener("click", () => {
	ansattPopup.classList.remove("is-active");
});

ansattModalBg.addEventListener("click", () => {
	ansattPopup.classList.remove("is-active");
});

restaurantClick.addEventListener("click", () => {
	restaurantPopup.classList.add("is-active");
});

restaurantCloseButton.addEventListener("click", () => {
	restaurantPopup.classList.remove("is-active");
});

restaurantModalBg.addEventListener("click", () => {
	restaurantPopup.classList.remove("is-active");
});