import AnsatteModule from "./modules/AnsatteModule.js";

const searchInput = document.querySelector("#search-input");
const searchAnsattBtn = document.querySelector("#search-a-btn");
const searchResult = document.querySelector("#test-sec");

const searchByAnsatt = () => {
	
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
	
}
searchAnsattBtn.addEventListener( "click", searchByAnsatt );