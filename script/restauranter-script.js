import RestaurantModule from "./modules/RestaurantModule.js";
import AnsatteModule from "./modules/AnsatteModule.js";

let htmlText = "";

let testDiv = document.getElementById("test");

let alleRestauranter = RestaurantModule.getAllRestauranter();

alleRestauranter.forEach(restaurant => {
    // Klasser på alle html-elementer er ikke satt ennå
    // Denne delen er generelt uferdig
    htmlText += `
        <article id="${restaurant.id}" class="column">
            <div class="card">
                <section>

                    SETT IKON HER

                </section>
                <section>
                    ${restaurant.navn}
                </section>
                <section>

                    SETT KRYSS-KNAPP HER

                </section>
                <section class="card-image">
                    <img src="images/${restaurant.bilde}">
                </section>
                <section>
                    <ul>
                        <li>ID: ${restaurant.id}</li>
                        <li>Adresse: ${restaurant.adresse}</li>
                        <li>Telefon: ${restaurant.telefon}</li>
                        <li>Kapasitet: ${restaurant.kapasitet}</li>
                        <li>Leder: ${restaurant.leder}</li>
                    </ul>
                </section>
                <section>

                    SETT REDIGER / SLETT KNAPP HER

                </section>
            </div>
        </article>
    `
});

testDiv.innerHTML = htmlText;