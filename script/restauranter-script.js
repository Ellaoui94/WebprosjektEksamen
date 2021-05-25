import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

const restaurantSection = document.querySelector("#restaurant-section");

const searchButton = document.querySelector("#search-button");

const searchKey = document.querySelector("#search-key");

const searchValue = document.querySelector("#search-value");

const popupSection = document.querySelector("#popup-section")

const alleRestauranter = RestaurantModule.getAllRestauranter();



const addOnclickToButtons = () => {

    let allRestaurantCards = document.querySelectorAll(".restaurant-card-article");

    allRestaurantCards.forEach(card => {

        let connectedEditButton = document.querySelector(`#editBtn${card.id}`);

        let connectedPopup = document.querySelector(`#popup${card.id}`);

        let connectedModalBackground = document.querySelector(`#modalBg${card.id}`);

        connectedEditButton.addEventListener("click", () => {
            connectedPopup.classList.add("is-active");
        });
        
        connectedModalBackground.addEventListener("click", () => {
            connectedPopup.classList.remove("is-active");
        });
    });
};

const generateRestauranter = (chosenArray) => {

    let htmlText = "";

    let popupHtmlText = "";

    chosenArray.forEach(restaurant => {
        // Klasser på alle html-elementer er ikke satt ennå
        // Denne delen er generelt uferdig

        htmlText += `
            <article id="${restaurant.id}" class="column restaurant-card-article">
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
                        <button id="editBtn${restaurant.id}" type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                        <button id="deleteBtn${restaurant.id}" type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                    </section>
                </div>
            </article>
        `;

        popupHtmlText += `
            <article id="popup${restaurant.id}" class="modal restaurant-popup">
                <div id="modalBg${restaurant.id}" class="modal-background"></div>
                <div class="modal-content py-5 px-5">
                    <div class="card restaurant-popup">
                        <section class="card-header>
                            <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${restaurant.navn}</h3>
                        </section>
                        <section class="card-image is-centered">
                            <img src="images/${restaurant.bilde}" alt="bilde av restaurant">
                        </section>
                        <section class="card-content">
                            <ul class="content">
                                <li>
                                    <label class="label">Navn</label>
                                    <div class="control">
                                        <input id="popupNavn${restaurant.id}" type="text" class="input" placeholder="${restaurant.navn}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Adresse</label>
                                    <div class="control">
                                        <input id="popupAdresse${restaurant.id}" type="text" class="input" placeholder="${restaurant.adresse}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Telefon</label>
                                    <div class="control">
                                        <input id="popupTelefon${restaurant.id}" type="text" class="input" placeholder="${restaurant.telefon}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Leder</label>
                                    <div class="control">
                                        <input id="popupLeder${restaurant.id}" type="text" class="input" placeholder="${restaurant.leder[0]}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Kapasitet</label>
                                    <div class="control">
                                        <input id="popupKapasitet${restaurant.id}" type="text" class="input" placeholder="${restaurant.kapasitet}">
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section class="card-footer buttons is-small">
                            <button id="closeBtn${restaurant.id}" type="button" class="card-footer-item button close-button"><span><img src="images/SETT_RIKTIG_FILNAVN_HER.png" width="25" heigth="25"></span>Lukk</button>
                            <button id="saveBtn${restaurant.id}" type="button" class="card-footer-item button save-button"><span><img src="images/SETT_RIKTIG_FILNAVN_HER.png" width="25" heigth="25"></span>Lagre</button>
                        </section>
                    </div>
                </div>
            </article>
        `;
    });

    restaurantSection.innerHTML = htmlText;

    popupSection.innerHTML = popupHtmlText;

    addOnclickToButtons();
};

generateRestauranter(alleRestauranter);

// testfunksjoner:


// til popup:

// Denne delen skal sannsynligvis kjøres i en funksjon, og er foreløpig uferdig


 









// Onclick-events:

// generateRestauranter() er funksjonen som genererer html for restauranter-siden
// alleRestauranter er et array som inneholder info hentet fra RestaurantModule
// searchKey er en dropdown-meny, fikset som en <select>-tag
// searchValue er et input-felt
searchButton.addEventListener("click", () => {
    generateRestauranter(SearchModule.filterByChoice(alleRestauranter, searchKey, searchValue));
});
