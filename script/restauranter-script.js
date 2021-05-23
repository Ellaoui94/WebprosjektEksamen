import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

const restaurantSection = document.querySelector("#restaurant-section");

const alleRestauranter = RestaurantModule.getAllRestauranter();

const searchButton = document.querySelector("#search-button");

const searchKey = document.querySelector("#search-key");

const searchValue = document.querySelector("#search-value")


const generateRestauranter = (chosenArray) => {

    let htmlText = "";

    chosenArray.forEach(restaurant => {
        // Klasser på alle html-elementer er ikke satt ennå
        // Denne delen er generelt uferdig
        htmlText += `
            <article id="${restaurant.id}" class="column">
                <div class="card restaurant-card">
                    <section class="card-header">
                        <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${restaurant.navn}</h3>
                    </section>
                    <section class="card-image">
                        <img src="images/${restaurant.bilde}" alt="bilde av restaurant">
                    </section>
                    <section class="card-content">
                        <ul class="content">
                            <li>ID: ${restaurant.id}</li>
                            <li>Adresse: ${restaurant.adresse}</li>
                            <li>Telefon: ${restaurant.telefon}</li>
                            <li>Kapasitet: ${restaurant.kapasitet}</li>
                            <li>Leder: ${restaurant.leder[0]}</li>
                        </ul>
                    </section>
                    <section class="card-footer buttons is-small">
                        <button type="button" class="card-footer-item button edit-button"><span>(ic)</span>Rediger</button>
                        <button type="button" class="card-footer-item button delete-button"><span>(ic)</span>Slett</button>
                    </section>
                </div>
            </article>
        `;
    });

    restaurantSection.innerHTML = htmlText;

};

generateRestauranter(alleRestauranter);

// Onclick-events:

/* uferdig kode
searchButton.onclick = function(){
    generateRestauranter(SearchModule.searchFunction(alleRestauranter, searchKey.nodeValue, searchValue.value));
};
*/


