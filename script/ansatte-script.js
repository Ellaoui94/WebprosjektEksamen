 import AnsatteModule from "./modules/AnsatteModule.js";

let testSection = document.querySelector("#test-sec");


const generateAnsatte = () => {

    let htmlText = "";

    AnsatteModule.getAllAnsatte().forEach(ansatte => {
        
        htmlText += `
            <article id="${ansatte.id}" class="column">
                <div class="card">
                    <section class="card-header">
                        <i class="card-header-icon">ic</i>
                        <h3 class="card-header-title is-centered">${ansatte.navn}</h3>
                    </section>
                    <section class="card-image">
                        <img src="images/${ansatte.bilde}" alt="Placeholder image">
                    </section>
                    <section class="card-content">
                        <ul>
                            <li>ID: ${ansatte.stillingsprosent}</li>
                            <li>Adresse: ${ansatte.arbeidssted}</li>
                            <li>Telefon: ${ansatte.telefon}</li>
                            <li>Kapasitet: ${ansatte.stilling}</li>
                            <li>Leder: ${ansatte.telefon}</li>
                            <li>Leder: ${ansatte.timelønn}</li>
                        </ul>
                    </section>
                    <section class="card-content">
    
                        SETT REDIGER / SLETT KNAPP HER
    
                    </section>
                </div>
            </article>
        `;
    });

    testSection.innerHTML = htmlText;

};

generateAnsatte();




