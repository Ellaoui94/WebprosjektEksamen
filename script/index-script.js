import AnsatteModule from "./modules/AnsatteModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
import AddOnclickModule from "./modules/AddOnclickModule.js";


//Burger

const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links");

navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
} );



//Ansatt Kort

const ansattbtn = document.querySelector("#random-ansatt-btn");
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal'); 

ansattbtn.addEventListener('click', () => {
    modal.classList.add('is-active');
}); 

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});





const generateAnsatte = (chosenArray, addButtonHasOnclick) => {

    let popupHtmlText = "";

    chosenArray.forEach(ansatte => {
         
        // Kan hende dette burde flyttes ut til Restauranter.html, og løses på samme måte som delete-popup
        popupHtmlText += `
		<article id="popup${ansatte.id}" class="modal ansatt-popup">
		<div id="modalBg${ansatte.id}" class="modal-background"></div>
		<div class="modal-content py-5 px-5">
			<div class="card restaurant-popup">
				<section class="card-header">
					<h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/knapp-iconer/profile-icon.png" alt="ikon" width="25" height="25"></span>${ansatte.navn}</h3>
				</section>
				<section class="card-image">
					<img src="images/Ansatte/${ansatte.bilde}" alt="bilde av ansatt">
				</section>
				<section class="card-content">
					<ul class="content">
						<li>ID: ${ansatte.id}</li>
						<li>Navn: ${ansatte.navn}</li>
						<li>Arbeidssted: ${ansatte.arbeidssted[0]}</li>
						<li>Telefon: ${ansatte.telefon}</li>
						<li>Stilling: ${ansatte.stilling}</li>
						<li>Stillingsprosent: ${ansatte.stillingsprosent}</li>
						<li>Timelønn: ${ansatte.timelønn}</li>
						<li>Alder: ${ansatte.alder}</li>
					</ul>
				</section>
				<section class="card-footer buttons is-small">
					<button id="editBtn${ansatte.id}" type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
					<button id="deleteBtn${ansatte.id}" type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
				</section>  
			</div>
		</div>
	</article>
        `;
    });



    ansattSection.innerHTML = htmlText;

    popupSection.innerHTML = popupHtmlText;

    AddOnclickModule.addOnclickToButtons(alleAnsatte, alleRestauranter, "ansatte-card-article", addButtonHasOnclick);

    const searchButton = document.querySelector("#search-button");

    const searchKey = document.querySelector("#search-key"); //dette er dropdownmeny

    const searchValue = document.querySelector("#search-value"); // dette er input

    const showAllButton = document.querySelector("#show-all-button");

    const addButton = document.querySelector("#add-button");



































///////////////////////////////////////////////////////////////////
const outputDiv = document.querySelector("#out-div");   

const alleAnsatte = AnsatteModule.getAllAnsatte();


let numberofAnsatt = alleAnsatte.length;   

const generateMAnsatte = () => { 
	
	let htmlTxt = "";
	
	let randomIndex = getRandomNumber( numberofAnsatt );
	let randomAnsatt = alleAnsatte[randomIndex];

	  
/*
				if(randomAnsatt.navn === "Erna Stoltenberg" || randomAnsatt.navn === "Anders Andersen" ){
*/
					 htmlTxt += `
					 
							 <section class="card-header">
								 <h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/knapp-iconer/profile-icon.png" alt="ikon" width="25" height="25"></span>${ansatte.navn}</h3>
							 </section>
							 <section class="card-image">
								 <img src="images/Ansatte/${randomAnsatt.bilde}" alt="bilde av ansatt">
							 </section>
							 <section class="card-content">
								 <ul class="content">
									 <li>ID: ${randomAnsatt.id}</li>
									 <li>Navn: ${randomAnsatt.navn}</li>
									 <li>Arbeidssted: ${randomAnsatt.arbeidssted[0]}</li>
									 <li>Telefon: ${randomAnsatt.telefon}</li>
									 <li>Stilling: ${randomAnsatt.stilling}</li>
									 <li>Stillingsprosent: ${randomAnsatt.stillingsprosent}</li>
									 <li>Timelønn: ${randomAnsatt.timelønn}</li>
									 <li>Alder: ${randomAnsatt.alder}</li>
								 </ul>
							 </section>
			
					`;
					
					outputDiv.innerHTML = htmlTxt;
			
			
		
				};

	const getRandomNumber = (numberofAnsatt) => { 
	return Math.floor( Math.random() * numberofAnsatt );
}
}
