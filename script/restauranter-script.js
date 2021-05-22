import RestaurantModule from "./modules/RestaurantModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

let testSection = document.querySelector("#test-section");

// let alleRestauranter = RestaurantModule.getAllRestauranter();

const generateRestauranter = () => {

    let htmlText = "";

    RestaurantModule.getAllRestauranter().forEach(restaurant => {
        // Klasser på alle html-elementer er ikke satt ennå
        // Denne delen er generelt uferdig
        htmlText += `
            <article id="${restaurant.id}" class="column">
                <div class="card">
                    <section>
    
                        SETT IKON HER
    
                    </section>
                    <section class="card-content">
                        <h3>${restaurant.navn}</h3>
                    </section>
                    <section>
    
                        SETT KRYSS-KNAPP HER
    
                    </section>
                    <section class="card-image">
                        <img src="images/${restaurant.bilde}">
                    </section>
                    <section class="card-content">
                        <ul>
                            <li>ID: ${restaurant.id}</li>
                            <li>Adresse: ${restaurant.adresse}</li>
                            <li>Telefon: ${restaurant.telefon}</li>
                            <li>Kapasitet: ${restaurant.kapasitet}</li>
                            <li>Leder: ${restaurant.leder[0]}</li>
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

generateRestauranter();



