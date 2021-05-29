const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links");
import AnsatteModule from "./modules/AnsatteModule.js";


navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
} );


const ansattbtn = document.querySelector("#random-ansatt-btn");

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
					 htmlTxt = `
						<article>
							<h3>Navn: ${ randomAnsatt.navn } </h3>
							<img src='images/Ansatte/${ randomAnsatt.bilde }'>
						</article>
					`;
					
					outputDiv.innerHTML = htmlTxt;
			
			
		
				};
		
			ansattbtn.addEventListener("click", () => {
				generateMAnsatte();
				});

const getRandomNumber = (numberofAnsatt) => { 
	return Math.floor( Math.random() * numberofAnsatt );
}
