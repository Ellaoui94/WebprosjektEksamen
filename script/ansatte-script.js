import AnsatteModule from "./modules/AnsatteModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
import SearchModule from "./modules/SearchModule.js";
import AddOnclickModule from "./modules/AddOnclickModule.js";

let addButtonHasOnclick = false;

const ansattSection = document.querySelector("#ansatte-section");

const popupSection = document.querySelector("#popup-section");

const deletePopup = document.querySelector("#delete-popup");

const modalBgDeletePopup = document.querySelector("#modalBg-delete-popup");

const denyDeleteButton = document.querySelector("#deny-delete-button");

const deleteInput = document.querySelector("#delete-input");

const alleAnsatte = AnsatteModule.getAllAnsatte();

const alleRestauranter = RestaurantModule.getAllRestauranter();

const addPopup = document.querySelector("#add-popup");

const addPopupBackround = document.querySelector("#modalBg-add-popup");

const denyAddButton = document.querySelector("#deny-add-button");

const generateAnsatte = (chosenArray, addButtonHasOnclick) => {

    let htmlText = `
        <article class="column is-one-fifth">
            <div class="card">
                <section class="card-header">
                    <h3 class="card-header-title is-centered">Legg Til ansatt</h3>
                </section>
                <section class="card-content has-text-centered">
                    <button id="add-button" class="button add-button is-centered" type="button"><span><img src="images/knapp-iconer/round-plus.png" alt="ikon" height="25" width="25"></span>Legg Til</button>
                </section>
                <section class="card-footer">
                </section>
            </div>
            <br>
            <div id="search-test" class="card">
                <section class="card-header">
                    <h3 class="card-header-title is-centered"><span class="card-header-icon"></span>Søk Etter Ansatt </h3>
                </section>
                <section class="card-content">
                    
                        <select id="search-key" class="select">
                            <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <option value="navn">Navn</option>
                                <option value="id">ID</option>
                                <option value="arbeidssted">Arbeidssted</option>
                                <option value="telefon">Telefon</option>
                                <option value="alder">Alder</option>
                                <option value="stilling">Stilling</option>
                                <option value="stillingsprosent">Stillingsprosent</option>
                                <option value="timelønn">Timelønn</option>
                            </div>
                        </select>
                        <input type="text" id="search-value" class="input" >
                    
                </section>
                <section class="card-footer">
                    <button type="button" id="search-button" class="button search-button card-footer-item"><span><img src="images/knapp-iconer/search-icon.png" width="25" heigth="25"></span>Søk</button>
                    <button type="button" id="show-all-button" class="button show-all-button card-footer-item">Vis alle ansatte</button>
                </section>
            </div>
        </article>
    `;

    let popupHtmlText = "";

    chosenArray.forEach(ansatte => {
        // Klasser på alle html-elementer er ikke satt ennå
        // Denne delen er generelt uferdig


        // For denne delen skal "restaurant-card-article" brukes til AddOnclickModule.addOnclickToButtons()
        htmlText += `
            <article id="${ansatte.id}" class="column is-one-fifth ansatte-card-article">
                <div class="card ansatte-card">
                    <section class="card-header">
                        <h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/knapp-iconer/profile-icon.png" alt="ikon" width="25" height="25"></span>${ansatte.navn}</h3>
                    </section>
                    <section class="card-image">
                        <img src="images/Ansatte/${ansatte.bilde}" alt="bilde av ansatt">
                    </section>
                    <section class="card-content">
                        <ul class="content">
                            <li>ID: ${ansatte.id}</li>
                            <li>Navn: ${ansatte.navn}</li>
                            <li>Arbeidssted: ${ansatte.arbeidssted[0]}</li>
                            <li>Telefon: ${ansatte.telefon}</li>
                            <li>Stilling: ${ansatte.stilling}</li>
                            <li>Stillingsprosent: ${ansatte.stillingsprosent}</li>
                            <li>Timelønn: ${ansatte.timelønn}</li>
                            <li>Alder: ${ansatte.alder}</li>
                        </ul>
                    </section>
                    <section class="card-footer buttons is-small">
                        <button id="editBtn${ansatte.id}" type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                        <button id="deleteBtn${ansatte.id}" type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                    </section>
                </div>
            </article>
        `;
        

        
        // Kan hende dette burde flyttes ut til Restauranter.html, og løses på samme måte som delete-popup
        popupHtmlText += `
            <article id="popup${ansatte.id}" class="modal ansatt-popup">
                <div id="modalBg${ansatte.id}" class="modal-background"></div>
                <div class="modal-content py-5 px-5">
                    <div class="card restaurant-popup">
                        <section class="card-header">
                            <h3 class="card-header-title is-centered">Rediger ${ansatte.navn}</h3>
                        </section>
                        <section class="card-image is-centered">
                            <img src="images/Ansatte/${ansatte.bilde}" alt="bilde av restaurant">
                        </section>
                        <section class="card-content">
                            <ul class="content">
                                <li>
                                    <label class="label">Navn</label>
                                    <div class="control">
                                        <input id="popupNavn${ansatte.id}" type="text" class="input edit-input navn" placeholder="${ansatte.navn}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Arbeidssted (ID)</label>
                                    <div class="control">
                                        <input id="popupArbeidssted${ansatte.id}" type="text" class="input edit-input arbeidssted" placeholder="${ansatte.arbeidssted[1]}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Telefon</label>
                                    <div class="control">
                                        <input id="popupTelefon${ansatte.id}" type="text" class="input edit-input telefon" placeholder="${ansatte.telefon}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Stilling</label>
                                    <div class="control">
                                        <input id="popupStilling${ansatte.id}" type="text" class="input edit-input stilling" placeholder="${ansatte.stilling}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Stillingsprosent</label>
                                    <div class="control">
                                        <input id="popupStillingsprosent${ansatte.id}" type="text" class="input edit-input stillingsprosent" placeholder="${ansatte.stillingsprosent}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Timelønn</label>
                                    <div class="control">
                                        <input id="popupTimelønn${ansatte.id}" type="text" class="input edit-input timelønn" placeholder="${ansatte.timelønn}">
                                    </div>
                                </li>
                                <li>
                                    <label class="label">Alder</label>
                                    <div class="control">
                                        <input id="popupAlder${ansatte.id}" type="text" class="input edit-input alder" placeholder="${ansatte.alder}">
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section class="card-footer buttons is-small">
                            <button id="closeBtn${ansatte.id}" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/tilbake-icon.png" width="25" heigth="25"></span>Tilbake</button>
                            <button id="saveBtn${ansatte.id}" type="button" class="card-footer-item button save-button"><span><img src="images/knapp-iconer/save-icon.png" width="25" heigth="25"></span>Lagre</button>
                        </section>
                    </div>
                </div>
            </article>
        `;
    });



    ansattSection.innerHTML = htmlText;

    popupSection.innerHTML = popupHtmlText;

    AddOnclickModule.addOnclickToButtons(alleAnsatte, alleRestauranter, "ansatte-card-article", addButtonHasOnclick);

    const searchButton = document.querySelector("#search-button");

    const searchKey = document.querySelector("#search-key"); //dette er dropdownmeny

    const searchValue = document.querySelector("#search-value"); // dette er input

    const showAllButton = document.querySelector("#show-all-button");

    const addButton = document.querySelector("#add-button");

    // funskjon for å kunne søke ved å trykke på enter
    searchValue.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            
            searchButton.click();
        }
    });

    
    //Validering av inputfelt 
  //  searchButton.addEventListener("click", () => {

        
        
    
  //  });




    searchButton.addEventListener("click", () => {

        if(searchValue.value == "" )
            {
                
                alert("Name must be filled out");
                searchValue.classList.add("red-input");
                //searchValue.style.borderColor = "red";
                return false;
            
        } else {

            generateAnsatte(SearchModule.filterByChoice(alleAnsatte, searchKey, searchValue), addButtonHasOnclick);
        };

        //  searchValue.style.borderColor = "green";
    });



    showAllButton.addEventListener("click", () => {
        generateAnsatte(alleAnsatte, addButtonHasOnclick);
    });

    addButton.addEventListener("click", () => {
        addPopup.classList.add("is-active");
    });

};

generateAnsatte(alleAnsatte, addButtonHasOnclick);






denyDeleteButton.addEventListener("click", () => {
deletePopup.classList.remove("is-active");
deleteInput.value = "";
});

modalBgDeletePopup.addEventListener("click", () => {
deletePopup.classList.remove("is-active");
deleteInput.value = "";
});

addPopupBackround.addEventListener("click", () => {
addPopup.classList.remove("is-active");
});

denyAddButton.addEventListener("click", () => {
addPopup.classList.remove("is-active");
})










