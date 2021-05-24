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
                        <button type="button" class="myBtn card-footer-item button edit-button"><span>(ic)</span>Rediger</button>
                        <button type="button" class="card-footer-item button delete-button"><span>(ic)</span>Slett</button>
                    </section>
                </div>
            </article>
            <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content has-background-white py-5 px-5">
                <h3 class="title mb-6">Join the War</h3>
                <form>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="Name">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input type="text" class="input" placeholder="Email">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                I agree to the <a href="">Terms & Conditions</a>
                            </label>
                        </div>
                    </div>
                    <div class="mt-6 has-text-centered">
                        <button class="button is-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        `;
    });

    restaurantSection.innerHTML = htmlText;

};

generateRestauranter(alleRestauranter);

// testfunksjoner:


// til popup
const signUpBtn = document.querySelector('.myBtn');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal'); 

signUpBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
}); 

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

// Onclick-events:

// generateRestauranter() er funksjonen som genererer html for restauranter-siden
// alleRestauranter er et array som inneholder info hentet fra RestaurantModule
// searchKey er en dropdown-meny, fikset som en <select>-tag
// searchValue er et input-felt
searchButton.onclick = function(){
    generateRestauranter(SearchModule.filterByChoice(alleRestauranter, searchKey, searchValue));
}
