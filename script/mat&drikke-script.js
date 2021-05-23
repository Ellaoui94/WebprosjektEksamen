import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";

const forretterDiv = document.querySelector("#forretter-div");

const generateForret = () => {

    let htmlText = "";

    MatOgDrikkeModule.getAllMatOgDrikke().forEach(forret => {
        //if (forrett.type == "Forret"){
        htmlText += `
            <article id ="${forret.id}" class="column">
                <div class="card">
                    <section class="card-header">
                        <h3 class="card-header-title is-centered"><span class="card-header-icon">(ic)</span>${forret.navn}</h3>
                    </section>
                    <section class="card-image">
                        <img src="images/${forret.bilde}" alt="bilde av forret">
                    </section> 
                    <section class="card-content">
                        <ul class="content">
                            <li>ID: ${forret.id}</li>

                        </ul>
                    </section>
                    <section class="card-content">
    
                        SETT REDIGER / SLETT KNAPP HER
    
                    </section>
                </div>
            </article>`;
        }
        
    );

    forretterDiv.innerHTML = htmlText;
};

generateForret();

/*
                            <li>Ingredienser: ${forret.ingredienser[0]}</li>
                            <li>Allergener: ${forret.allergener[0]}</li>
                            */