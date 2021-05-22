import RestaurantModule from "./modules/RestaurantModule.js";
// import AnsatteModule from "./modules/AnsatteModule.js";

let restaurantSection = document.querySelector("#restaurant-section");

// let alleRestauranter = RestaurantModule.getAllRestauranter();

const generateRestauranter = () => {

    let htmlText = "";

    RestaurantModule.getAllRestauranter().forEach(restaurant => {
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
                    <section class="card-footer">
                        <button type="button" class="card-footer-item edit-button"><span>(ic)</span>Rediger</button>
                        <button type="button" class="card-footer-item delete-button"><span>(ic)</span>Slett</button>
                    </section>
                </div>
            </article>
        `;
    });

    restaurantSection.innerHTML = htmlText;

};

generateRestauranter();



