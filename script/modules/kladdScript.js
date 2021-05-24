


const generateRestauranter = (chosenArray) => {

    let htmlText = "";

    chosenArray.forEach(restaurant => {
        popupHtmlText = `
            <article id="popup${restaurant.id}" class="modal">
                <div class="modal-background"></div>
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

/*
<h3 class="title has-text-centred mb-6">${resturant.navn}</h3>
        <form>
        <div class="card-image has-text-centered px-6">
                                <img src="images/${resturant.bilde}" alt="resturant">
                            </div>
            <div class="field">
                <label class="label">ID</label>
                <div class="control">
                    <input type="text" class="input" placeholder="${resturant.id}">
                </div>
            </div>
            <div class="field">
                <label class="label">Adresse</label>
                <div class="control">
                    <input type="text" class="input" placeholder="${restaurant.adresse}">
                </div>
            </div>
            <div class="field">
                <label class="label">Telefon</label>
                <div class="control">
                    <input type="text" class="input" placeholder="${restaurant.telefon}">
                </div>
            </div>
            <div class="field">
                <label class="label">Leder</label>
                <div class="control">
                    <input type="text" class="input" placeholder="${restaurant.leder[0]}">
                </div>
            </div>
            <div class="field">
                <label class="label">Kapasitet</label>
                <div class="control">
                    <input type="text" class="input" placeholder="${restaurant.kapasitet}">
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
*/


restaurantSection.innerHTML = htmlText;

};
