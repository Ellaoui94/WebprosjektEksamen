import MatOgDrikkeModule from './modules/Mat&DrikkeModule.js';
import SearchModule from './modules/SearchModule.js';
import AddOnclickModule from "./modules/AddOnclickModule.js";

const menuSection = document.querySelector("#menu-section");

const drikkeSection = document.querySelector("#drikke-section");

const searchButton = document.querySelector("#search-button");

const searchKey = document.querySelector("#search-key");

const searchValue = document.querySelector("#search-value");

const alleMeny = MatOgDrikkeModule.getAllMatOgDrikke();

const popupSection = document.querySelector("#popup-section");


const generateMatOgDrikke = (chosenArray) => {
    let htmlTxt = " ";

    let htmlText = " ";

    let popupHtmlTxt = " ";
     
    chosenArray.forEach(menuObject => {
        if (menuObject.kategori == "Mat"){
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
                                <li>Allergener: ${menuObject.allergener}</li>
                                <li>Ingredienser: ${menuObject.ingredienser}</li>
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
                        <div class="card menu-popup">
                            <section class="card-header>
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
                                            <input id="popupNavn${menuObject.id}" type="text" class="input" placeholder="${menuObject.navn}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">ID</label>
                                        <div class="control">
                                            <input id="popupId${menuObject.id}" type="text" class="input" placeholder="${menuObject.id}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <input id="popupType${menuObject.id}" type="text" class="input" placeholder="${menuObject.type}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Allergener</label>
                                        <div class="control">
                                            <input id="popupAllergener${menuObject.id}" type="text" class="input" placeholder="${menuObject.allergener}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Ingredienser</label>
                                        <div class="control">
                                            <input id="popupIngredienser${menuObject.id}" type="text" class="input" placeholder="${menuObject.ingredienser}">
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
    
            }else{
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
                                            <input id="popupNavn${menuObject.id}" type="text" class="input" placeholder="${menuObject.navn}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">ID</label>
                                        <div class="control">
                                            <input id="popupId${menuObject.id}" type="text" class="input" placeholder="${menuObject.id}">
                                        </div>
                                    </li>
                                    <li>
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <input id="popupType${menuObject.id}" type="text" class="input" placeholder="${menuObject.type}">
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
    AddOnclickModule.addOnclickToButtons("menu-card-article");
   
}

generateMatOgDrikke(alleMeny);


searchButton.addEventListener("click", () => {
    generateMatOgDrikke(SearchModule.filterByChoice(alleMeny, searchKey, searchValue));
});