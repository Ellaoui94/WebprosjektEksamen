 import AnsatteModule from "./modules/AnsatteModule.js";

let testSection = document.querySelector("#test-sec");




const generateAnsatte = () => {

    let htmlText = "";

    AnsatteModule.getAllAnsatte().forEach(ansatte => {

        
         htmlText += `
        <article id="${ ansatte.id }" class="column">
            <div class="card restaurant-card">
                <section class="card-header">
                    <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${ansatte.navn}</h3>
                </section>
                <section class="card-image">
                    <img src="images/${ ansatte.bilde }" alt="bilde av restaurant">
                </section>
                <section class="card-content">
                    <ul class="content">
                        <li>Navn: ${ ansatte.timelønn }</li>
                        <li>Alder: ${ ansatte.alder }</li>
                        <li>Stilling: ${ ansatte.stilling }</li>
                        <li>Arbeidssted: ${ ansatte.arbeidssted }</li>
                        <li>Stillingsprosent: ${ ansatte.stillingsprosent}</li>
                        <li>Telefon: ${ ansatte.telefon }</li>
                    </ul>
                </section>
                <section class="card-footer buttons is-small">
                    <button type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                    <button type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                </section>
            </div>
        </article>
    `;
        
    });

    testSection.innerHTML = htmlText;

};

generateAnsatte();



