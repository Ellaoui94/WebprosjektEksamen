 import AnsatteModule from "./modules/AnsatteModule.js";
 import SearchModule from "./modules/SearchModule.js";
 import AddOnclickModule from "./modules/AddOnclickModule.js";

 const ansattSection = document.querySelector("#ansatte-section");
 
 const searchButton = document.querySelector("#search-button");
 
 const searchKey = document.querySelector("#search-key"); //dette er dropdownmeny
 
 const searchValue = document.querySelector("#search-value"); // dette er input
 
 
 
 const popupSection = document.querySelector("#popup-section");
 
 const deletePopup = document.querySelector("#delete-popup");
 
 const modalBgDeletePopup = document.querySelector("#modalBg-delete-popup");
 
 const denyDeleteButton = document.querySelector("#deny-delete-button");
 
 const deleteInput = document.querySelector("#delete-input");
 
 const showAllButton = document.querySelector("#show-all-button");

 const alleAnsatte = AnsatteModule.getAllAnsatte();

 const generateAnsatte = (chosenArray) => {
 
     let htmlText = "";
 
     let popupHtmlText = "";
 
     chosenArray.forEach(ansatte => {
         // Klasser på alle html-elementer er ikke satt ennå
         // Denne delen er generelt uferdig
 
 
         // For denne delen skal "restaurant-card-article" brukes til AddOnclickModule.addOnclickToButtons()
         htmlText += `
             <article id="${ansatte.id}" class="column ansatte-card-article">
                 <div class="card ansatte-card">
                     <section class="card-header">
                         <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${ansatte.navn}</h3>
                     </section>
                     <section class="card-image">
                         <img src="images/${ansatte.bilde}" alt="bilde av ansatt">
                     </section>
                     <section class="card-content">
                         <ul class="content">
                             <li>ID: ${ansatte.id}</li>
                             <li>Navn: ${ansatte.navn}</li>
                             <li>Alder: ${ansatte.alder}</li>
                             <li>Stilling: ${ansatte.stilling}</li>
                             <li>Arbeidssted: ${ansatte.arbeidssted}</li>
                             <li>Stillingsprosent: ${ansatte.stillingsprosent}</li>
                             <li>Timelønn: ${ansatte.timelønn}</li>
                             <li>Telefon: ${ansatte.telefon}</li>
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
                     <div class="card ansatte-popup">
                         <section class="card-header>
                             <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${ansatte.navn}</h3>
                         </section>
                         <section class="card-image is-centered">
                             <img src="images/${ansatte.bilde}" alt="bilde av ansatt">
                         </section>
                         <section class="card-content">
                             <ul class="content">
                                 <li>
                                     <label class="label">Navn</label>
                                     <div class="control">
                                         <input id="popupNavn${ansatte.id}" type="text" class="input" placeholder="${ansatte.navn}">
                                     </div>
                                 </li>
                                 <li>
                                     <label class="label">Arbeidssted</label>
                                     <div class="control">
                                         <input id="popupAdresse${ansatte.id}" type="text" class="input" placeholder="${ansatte.arbeidssted}">
                                     </div>
                                 </li>
                                 <li>
                                     <label class="label">Telefon</label>
                                     <div class="control">
                                         <input id="popupTelefon${ansatte.id}" type="text" class="input" placeholder="${ansatte.telefon}">
                                     </div>
                                 </li>
                                 <li>
                                     <label class="label">Stilling</label>
                                     <div class="control">
                                         <input id="popupLeder${ansatte.id}" type="text" class="input" placeholder="${ansatte.stilling}">
                                     </div>
                                 </li>
                                 <li>
                                     <label class="label">Alder</label>
                                     <div class="control">
                                         <input id="popupKapasitet${ansatte.id}" type="text" class="input" placeholder="${ansatte.alder}">
                                     </div>
                                 </li>
                             </ul>
                         </section>
                         <section class="card-footer buttons is-small">
                             <button id="closeBtn${ansatte.id}" type="button" class="card-footer-item button close-button"><span><img src="images/SETT_RIKTIG_FILNAVN_HER.png" width="25" heigth="25"></span>Lukk</button> 
                             <button id="saveBtn${ansatte.id}" type="button" class="card-footer-item button save-button"><span><img src="images/SETT_RIKTIG_FILNAVN_HER.png" width="25" heigth="25"></span>Lagre</button>
                         </section>
                     </div>
                 </div>
             </article>
         `;
     });
 
     ansattSection.innerHTML = htmlText;
 
     popupSection.innerHTML = popupHtmlText;
 
     AddOnclickModule.addOnclickToButtons(alleAnsatte, "ansatte-card-article");
 };
 
 generateAnsatte(alleAnsatte);

 
searchButton.addEventListener("click", () => {
 
    generateAnsatte(SearchModule.filterByChoice(alleAnsatte, searchKey, searchValue));
});


searchValue.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        
        searchButton.click();
    }
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
    generateAnsatte(alleAnsatte);
});








