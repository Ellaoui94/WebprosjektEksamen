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

const filterByChoice = (searchedArray, searchKey, searchValue) => {
    console.log(searchedArray);
    console.log(searchKey.value);
    console.log(searchValue.value);
    switch (searchKey.value){
        case "id":
            return searchedArray.filter(o => o.id == searchValue.value);
            break;
        case "navn":
            return searchedArray.filter(o => o.navn == searchValue.value);
            break;
        case "adresse":
            return searchedArray.filter(o => o.adresse == searchValue.value);
            break;
        case "telefon":
            return searchedArray.filter(o => o.telefon == searchValue.value);
            break;
        case "kapasitet":
            return searchedArray.filter(o => o.kapasitet == searchValue.value);
            break;
        case "leder":
            return searchedArray.filter(o => o.leder == searchValue.value);
            break;
    }
        

}
// modal
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

searchButton.onclick = function(){
    
    
    /*
    if (searchKey.value == "id"){
        searchResult = alleRestauranter.filter(o => o.id == searchValue.value);
    };
    console.log(searchResult);
    */
    searchResult = SearchModule.filterByChoiceShort(alleRestauranter, searchKey, searchValue);
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


