import AnsatteModule from "./modules/AnsatteModule.js";

const searchInput = document.querySelector("#search-input");
const searchAnsattBtn = document.querySelector("#search-a-btn");
const searchResult = document.querySelector("#test-sec");

const searchByArbeidssted = () => {
	
	let htmlTxt = "";
	
	AnsatteModule.getByArbeidssted( searchInput.value ).forEach( ansatt => {
	
		htmlTxt += 
        `
        <section class="card-content">
			<ul>
				<li>${ ansatt.navn }</li>
				<li>${ ansatt.stillingsprosent }</li>
				<li>${ ansatt.telefon }</li>
			</ul>
        </section>
		`;
		
	})
	
	searchResult.innerHTML = htmlTxt;
	
};

const searchByAnsattNavn = () => {
	
	let htmlTxt = "";
	
	AnsatteModule.getByNavn( searchInput.value ).forEach( ansatt => {
	
		htmlTxt += 
        `
        <section class="card-content">
			<ul>
				<li>${ ansatt.navn }</li>
				<li>${ ansatt.stillingsprosent }</li>
				<li>${ ansatt.telefon }</li>
			</ul>
        </section>
		`;
		
	})
	
	searchResult.innerHTML = htmlTxt;
	
};


searchAnsattBtn.addEventListener( "click", searchByAnsattNavn, searchByArbeidssted );





