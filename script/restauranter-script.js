import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
import AddOnclickModule from "./modules/AddOnclickModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

const restaurantSection = document.querySelector("#restaurant-section");

const popupSection = document.querySelector("#popup-section");

const deletePopup = document.querySelector("#delete-popup");

const modalBgDeletePopup = document.querySelector("#modalBg-delete-popup");

const denyDeleteButton = document.querySelector("#deny-delete-button");

const deleteInput = document.querySelector("#delete-input");





const alleRestauranter = RestaurantModule.getAllRestauranter();

const generateRestauranter = (chosenArray) => {

    let htmlText = `
        <article class="column is-one-fifth">
            <div class="card">
                <section class="card-header">
                    <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>Legg Til Restaurant</h3>
                </section>
                <section class="card-content has-text-centered">
                    <button id="add-button" class="button add-button is-centered" type="button"><span><img src="images/knapp-iconer/legg_til_ikon.png" alt="ikon" height="25" width="25"></span>Legg Til</button>
                </section>
                <section class="card-footer">
                </section>
            </div>
            <br>
            <div id="search-test" class="card">
                <section class="card-header">
                    <h3 class="card-header-title is-center"><span class="card-header-icon">(ic)</span>Søk Etter Restaurant</h3>
                </section>
                <section class="card-content">
                    <div class="dropdown is-active">
                        <select id="search-key" class="dropdown-trigger">
                            <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <option value="navn">Navn</option>
                                <option value="id">ID</option>
                                <option value="adresse">Adresse</option>
                                <option value="telefon">Telefon</option>
                                <option value="kapasitet">Kapasitet</option>
                                <option value="leder">Leder</option>
                            </div>
                        </select>
                        <input type="text" id="search-value" class="input">
                        <button type="button" id="search-button" class="button">Søk</button>
                        <button type="button" id="show-all-button" class="button">Vis alle</button>
                    </div>
                </section>
            </div>
        </article>
    `;

    let popupHtmlText = "";

    chosenArray.forEach(restaurant => {
        // Klasser på alle html-elementer er ikke satt ennå
        // Denne delen er generelt uferdig


        // For denne delen skal "restaurant-card-article" brukes til AddOnclickModule.addOnclickToButtons()
        htmlText += `
            <article id="${restaurant.id}" class="column is-one-fifth restaurant-card-article">
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

        // Kan hende dette burde flyttes ut til Restauranter.html, og løses på samme måte som delete-popup
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

    AddOnclickModule.addOnclickToButtons(alleRestauranter, "restaurant-card-article");
};

generateRestauranter(alleRestauranter);




// Onclick-events:

const searchButton = document.querySelector("#search-button");

const searchKey = document.querySelector("#search-key");

const searchValue = document.querySelector("#search-value");

const showAllButton = document.querySelector("#show-all-button");

console.log(showAllButton)

// generateRestauranter() er funksjonen som genererer html for restauranter-siden
// alleRestauranter er et array som inneholder info hentet fra RestaurantModule
// searchKey er en dropdown-meny, fikset som en <select>-tag
// searchValue er et input-felt
searchButton.addEventListener("click", () => {
    generateRestauranter(SearchModule.filterByChoice(alleRestauranter, searchKey, searchValue));
});

denyDeleteButton.addEventListener("click", () => {
    deletePopup.classList.remove("is-active");
    deleteInput.value = "";
});

modalBgDeletePopup.addEventListener("click", () => {
    deletePopup.classList.remove("is-active");
    deleteInput.value = "";
});

showAllButton.addEventListener("click", () => {
    generateRestauranter(alleRestauranter);
});

