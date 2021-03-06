import MatOgDrikkeModule from './modules/Mat&DrikkeModule.js';
import SearchModule from './modules/SearchModule.js';
import AddOnclickModule from "./modules/AddOnclickModule.js";
import IngredienserModule from "./modules/IngredienserModule.js"

let addButtonHasOnclick = false;

const menuSection = document.querySelector("#menu-section");

const drikkeSection = document.querySelector("#drikke-section");

const alleMeny = MatOgDrikkeModule.getAllMatOgDrikke();

const alleIngredienser = IngredienserModule.getAllIngredienser();

const popupSection = document.querySelector("#popup-section");

const deletePopup = document.querySelector("#delete-popup");

const modalBgDeletePopup = document.querySelector("#modalBg-delete-popup");

const denyDeleteButton = document.querySelector("#deny-delete-button");

const deleteInput = document.querySelector("#delete-input");

const denyAddButton = document.querySelector("#deny-add-button");

const addPopup = document.querySelector("#add-popup");

const addPopupBackground = document.querySelector("#modalBg-add-popup");


const generateListElements = (array) => {
    let listOfElements = "";
    array.forEach(e => {
        listOfElements += `
        <li>${e}</li>
        `
    });
    return listOfElements;
}

const generateIngredientInputList = (array) => {
    let ingredientInputList = "";
    array.forEach(e => {
        ingredientInputList += `
        <li>
            <div class="control">
                <input type="text" class="input edit-ingrediens" placeholder="${e}">
            </div>
        </li>
        `
    });
    let emptyInputs = 7 - array.length;
    for (let i = 0; i < emptyInputs; i++){
        ingredientInputList += `
        <li>
            <div class="control">
                <input type="text" class="input edit-ingrediens">
            </div>
        </li>
        `
    }
    return ingredientInputList;
}

const generateMatOgDrikke = (chosenArray, addButtonHasOnclick) => {


    let htmlTxt = `
        <article class="column is-one-fifth">
            <div class="card">
                <section class="card-header">
                    <h3 class="card-header-title is-centered">Legg Til Mat/Drikke</h3>
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
                    <h3 class="card-header-title is-centered"><span class="card-header-icon"></span>S??k Etter Mat/Drikke</h3>
                </section>
                <section class="card-content">
                    
                        <select id="search-key" class="select">
                            <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <option value="navn">Navn</option>
                                <option value="id">ID</option>
                                <option value="kategori">Kategori</option>
                                <option value="ingredienser">Ingredienser</option>
                                <option value="allergener">Allergener</option>
                                <option value="kostnad">Kostnad</option>
                                <option value="pris">Prist</pris>
                            </div>
                        </select>
                        <input type="text" id="search-value" class="input">
                    
                </section>
                <section class="card-footer">
                    <button type="button" id="search-button" class="button search-button card-footer-item"><span><img src="images/knapp-iconer/search-icon.png" width="25" heigth="25"></span>S??k</button>
                    <button type="button" id="show-all-button" class="button show-all-button card-footer-item">Vis all mat/drikke</button>
                </section>
            </div>
        </article>
    `;


    let htmlText = " ";

    let popupHtmlTxt = " ";
     
    chosenArray.forEach(menuObject => {
        if (menuObject.kategori == "mat"){
            htmlTxt += `
                <article id ="${menuObject.id}" class="column is-3 menu-card-article">
                    <div class="card menu-card">
                        <section class="card-header">
                            <h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/Meny/icon1.png" width="25" height="25"></span>${menuObject.navn}</h3>
                        </section>
                        <section class="card-image">
                            <img src="images/Meny/${menuObject.bilde}" alt="bilde av mat">
                        </section> 
                        <section class="card-content">
                            <ul class="content">
                                <li>ID: ${menuObject.id}</li>
                                <li>Type: ${menuObject.type}</li>
                                <li>
                                    <ul>
                                        <lh>Ingredienser:</lh>
                                        ${generateListElements(menuObject.ingredienser)}
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <lh>Allergener:</lh>
                                        ${generateListElements(menuObject.allergener)}
                                    </ul>
                                </li>
                                <li>Kostnad: ${menuObject.kostnad} kr</li>
                                <li>Pris: ${menuObject.pris} kr</li>
                            </ul>
                        </section>
                        <section class="card-footer buttons is-small">
                            <button id="editBtn${menuObject.id}" type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                            <button id="deleteBtn${menuObject.id}" type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                        </section>
                    </div>
                </article>
            `;

            popupHtmlTxt += `
                <article id="popup${menuObject.id}" class="modal menu-popup">
                    <div id="modalBg${menuObject.id}" class="modal-background"></div>
                    <div class="modal-content py-5 px-5">
                        <div class="card menu-popup">
                            <section class="card-header">
                            <h3 class="card-header-title is-centered"><span class="card-header-icon"><img src="images/Meny/icon1.png" width="25" height="25"></span>${menuObject.navn}</h3>
                            </section>
                            <section class="card-image is-centered">
                                <img src="images/Meny/${menuObject.bilde}" alt="bilde av mat">
                            </section>
                            <section class="card-content">
                                <ul class="content">
                                    <li>
                                        <label class="label">Navn</label>
                                        <div class="control">
                                            <input id="popupNavn${menuObject.id}" type="text" class="input edit-input navn" placeholder="${menuObject.navn}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <input id="popupType${menuObject.id}" type="text" class="input edit-input type" placeholder="${menuObject.type}">
                                        </div>
                                    </li>
                                    <li>
                                        <ul>
                                            <label class="label">Ingredienser</label>
                                            ${generateIngredientInputList(menuObject.ingredienser)}
                                        </ul>
                                    </li>
                                    <li>
                                        <label class="label">Kostnad</label>
                                        <div class="control">
                                            <input id="popupKostnad${menuObject.id}" type="text" class="input edit-input kostnad" placeholder="${menuObject.kostnad}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Pris</label>
                                        <div class="control">
                                            <input id="popupPris${menuObject.id}" type="text" class="input edit-input pris" placeholder="${menuObject.pris}">
                                        </div>
                                    </li>
                                </ul>
                            </section>
                            <section class="card-footer buttons is-small">
                                <button id="closeBtn${menuObject.id}" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/x-icon.png" width="25" heigth="25"></span>Lukk</button>
                                <button id="saveBtn${menuObject.id}" type="button" class="card-footer-item button save-button"><span><img src="images/knapp-iconer/save-icon.png" width="25" heigth="25"></span>Lagre</button>
                            </section>
                        </div>
                    </div>
                </article>
            `;
    
        } else {
            htmlText += `
                <article id ="${menuObject.id}" class="column is-3 menu-card-article">
                    <div class="card menu-card">
                        <section class="card-header">
                            <h3 class="card-header-title is-centered"><span class="card-header-icon"><span class="card-header-icon"><img src="images/Meny/beverage.png" width="25" height="25"></span>${menuObject.navn}</h3>
                        </section>
                        <section class="card-image">
                            <img src="images/Meny/${menuObject.bilde}" alt="bilde av drikke">
                        </section> 
                        <section class="card-content">
                            <ul class="content">
                                <li>ID: ${menuObject.id}</li>
                                <li>Type: ${menuObject.type}</li>
                                <li>Kostnad: ${menuObject.kostnad} kr</li>
                                <li>Pris: ${menuObject.pris} kr</li>
                            </ul>
                        </section>
                        <section class="card-footer buttons is-small">
                            <button id="editBtn${menuObject.id}" type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                            <button id="deleteBtn${menuObject.id}" type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                        </section>
                    </div>
                </article>`;

            
            popupHtmlTxt += `
                <article id="popup${menuObject.id}" class="modal menu-popup">
                    <div id="modalBg${menuObject.id}" class="modal-background"></div>
                    <div class="modal-content py-5 px-5">
                        <div class="card restaurant-popup">
                            <section class="card-header>
                            <h3 class="card-header-title is-centered"><span class="card-header-icon"><span class="card-header-icon"><img src="images/Meny/beverage.png" width="25" height="25"></span>${menuObject.navn}</h3>
                            </section>
                            <section class="card-image is-centered">
                                <img src="images/Meny/${menuObject.bilde}" alt="bilde av drikke">
                            </section>
                            <section class="card-content">
                                <ul class="content">
                                    <li>
                                        <label class="label">Navn</label>
                                        <div class="control">
                                            <input id="popupNavn${menuObject.id}" type="text" class="input edit-input navn" placeholder="${menuObject.navn}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <input id="popupType${menuObject.id}" type="text" class="input edit-input type" placeholder="${menuObject.type}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Kostnad</label>
                                        <div class="control">
                                            <input id="popupKostnad${menuObject.id}" type="text" class="input edit-input kostnad" placeholder="${menuObject.kostnad}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Pris</label>
                                        <div class="control">
                                            <input id="popupPris${menuObject.id}" type="text" class="input edit-input pris" placeholder="${menuObject.pris}">
                                        </div>
                                    </li>
                                </ul>
                            </section>
                            <section class="card-footer buttons is-small">
                                <button id="closeBtn${menuObject.id}" type="button" class="card-footer-item button close-button"><span><img src="images/knapp-iconer/x-icon.png" width="25" heigth="25"></span>Lukk</button>
                                <button id="saveBtn${menuObject.id}" type="button" class="card-footer-item button save-button"><span><img src="images/knapp-iconer/save-icon.png" width="25" heigth="25"></span>Lagre</button>
                            </section>
                        </div>
                    </div>
                </article>
            `;
    
        }
        
    });

    menuSection.innerHTML = htmlTxt;

    drikkeSection.innerHTML = htmlText;

    popupSection.innerHTML = popupHtmlTxt;

    AddOnclickModule.addOnclickToButtons(alleMeny, alleIngredienser, "menu-card-article", addButtonHasOnclick);

    const searchButton = document.querySelector("#search-button");

    const searchKey = document.querySelector("#search-key");

    const searchValue = document.querySelector("#search-value");

    const showAllButton = document.querySelector("#show-all-button");

    const addButton = document.querySelector("#add-button");

    const addPopup = document.querySelector("#add-popup");

    searchButton.addEventListener("click", () => {
        if(searchValue.value == "" ) {                
            alert("S??kefeltet kan ikke v??re tomt");
            searchValue.classList.add("red-input");
        } else {
            generateMatOgDrikke(SearchModule.filterByChoice(alleMeny, searchKey, searchValue), addButtonHasOnclick);
        }
    });

    showAllButton.addEventListener("click", () => {
        generateMatOgDrikke(alleMeny, addButtonHasOnclick);
    });

    addButton.addEventListener("click", () => {
        addPopup.classList.add("is-active");
    })
   
}

generateMatOgDrikke(alleMeny, addButtonHasOnclick);


denyDeleteButton.addEventListener("click", () => {
    deletePopup.classList.remove("is-active");
    deleteInput.value = "";
});

modalBgDeletePopup.addEventListener("click", () => {
    deletePopup.classList.remove("is-active");
    deleteInput.value = "";
});

addPopupBackground.addEventListener("click", () => {
    addPopup.classList.remove("is-active");
});

denyAddButton.addEventListener("click", () => {
    addPopup.classList.remove("is-active");
})
