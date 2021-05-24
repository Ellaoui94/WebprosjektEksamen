import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";

const menuSection = document.querySelector("#menu-section");
const drikkeSection = document.querySelector("#drikke-section");

const generateMeny = () => {

    let htmlTxt = "";

    MatOgDrikkeModule.getAllMatOgDrikke().forEach(menuObject => {
        if (menuObject.kategori == "Mat"){
        htmlTxt += `
            <article id ="${menuObject.id}" class="column is-3">
                <div class="card">
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
                        
                        </ul>
                    </section>
                    <section class="card-footer buttons is-small">
                        <button type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                        <button type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                    </section>
                </div>
            </article>`;

        }else{
            drikkeSection.innerHTML += `
            <article id ="${menuObject.id}" class="column is-3">
                <div class="card">
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
                        <button type="button" class="card-footer-item button edit-button"><span><img src="images/knapp-iconer/edit-white.png" width="25" heigth="25"></span>Rediger</button>
                        <button type="button" class="card-footer-item button delete-button"><span><img src="images/knapp-iconer/delete-white.png" width="25" heigth="25"></span>Slett</button>
                    </section>
                </div>
            </article>`;
        }
    }
        
    );

    menuSection.innerHTML = htmlTxt;
    
    

};



generateMeny();


/*
                            <li>Ingredienser: ${forret.ingredienser[0]}</li>
                            <li>Allergener: ${forret.allergener[0]}</li>
 ;                           */