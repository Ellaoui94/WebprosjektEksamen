import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

const restaurantSection = document.querySelector("#restaurant-section");

const searchButton = document.querySelector("#search-button");

const searchKey = document.querySelector("#search-key");

const searchValue = document.querySelector("#search-value");

const alleRestauranter = RestaurantModule.getAllRestauranter();

let searchResult = [];


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
                        <button type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                        <button type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                    </section>
                </div>
            </article>
        `;
    });

    restaurantSection.innerHTML = htmlText;

};

generateRestauranter(alleRestauranter);

// Onclick-events:

searchButton.onclick = function(){
    
    
    /*
    if (searchKey.value == "id"){
        searchResult = alleRestauranter.filter(o => o.id == searchValue.value);
    };
    console.log(searchResult);
    */
    searchResult = SearchModule.filterByChoice(alleRestauranter, searchKey, searchValue);
    console.log(searchResult);
    generateRestauranter(searchResult);
}


/*
searchButton.onclick = function(){
    let key = searchKey.value;
    let value = searchValue.value;
    let searchResult = SearchModule.filterByChoice(alleRestauranter, key, value);
    
    console.log(searchResult)
    //generateRestauranter(searchResult);
};
*/


