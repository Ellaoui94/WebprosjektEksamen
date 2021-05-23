import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";

const menuSection = document.querySelector("#menu-section");

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
                        </ul>
                    </section>
                    <section class="card-content">
    
                        SETT REDIGER / SLETT KNAPP HER
    
                    </section>
                </div>
            </article>`;

        }else{
            htmlTxt += `
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
                        </ul>
                    </section>
                    <section class="card-content">
    
                        SETT REDIGER / SLETT KNAPP HER
    
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