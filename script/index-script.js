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
