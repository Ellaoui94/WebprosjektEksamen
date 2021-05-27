const AddOnclickModule = (function() {

    // For at denne skal fungere, må man legge til en spesifikk klasse på kortene på hver side
    // F.eks. bruker restauranter-script.js klassen "restaurant-card-article"
    // Denne må settes inn som argument i parameteret cardClass når man bruker funksjonen
    // Parameteret arrayToRemoveFrom må være likt det arrayet som brukes for å generere html
    // F.eks. bruker restauranter-script.js arrayet alleRestauranter

    const addOnclickToButtons = (arrayToRemoveFrom, cardClass) => {

        let allCards = document.querySelectorAll(`.${cardClass}`);
    
        allCards.forEach(card => {
    
            let connectedEditButton = document.querySelector(`#editBtn${card.id}`);

            let connectedDeleteButton = document.querySelector(`#deleteBtn${card.id}`)

            let connectedCloseButton = document.querySelector(`#closeBtn${card.id}`)

            let connectedSaveButton = document.querySelector(`#saveBtn${card.id}`)
    
            let connectedPopup = document.querySelector(`#popup${card.id}`);
    
            let connectedModalBackground = document.querySelector(`#modalBg${card.id}`);

            let confirmDeleteButton = document.querySelector("#confirm-delete-button");

            let deleteInput = document.querySelector("#delete-input");

            let deleteName = document.querySelector("#delete-name");

            let deletePopup = document.querySelector("#delete-popup");
    
            connectedEditButton.addEventListener("click", () => {
                connectedPopup.classList.add("is-active");
            });
            
            connectedModalBackground.addEventListener("click", () => {
                connectedPopup.classList.remove("is-active");
            });

            connectedCloseButton.addEventListener("click", () => {
                connectedPopup.classList.remove("is-active");
            });

            connectedDeleteButton.addEventListener("click", () => {
                
                // Funksjon som sletter kort fra array
                // Krever at siden den brukes på har et <input>-element med id="delete-input"
                // Se eksempel i Restauranter.html, linje 36-57
                
                // Hjelpefunksjon som brukes til å velge ID til objekt som skal slettes
                const checkId = (o) => o.id == card.id; 

                confirmDeleteButton.addEventListener("click", () => {
                    if (deleteInput.value === "SLETT"){
                        arrayToRemoveFrom.splice(arrayToRemoveFrom.findIndex(checkId), 1);
                        deletePopup.classList.remove("is-active");
                        deleteInput.value = "";
                    };
                });

                deleteName.innerHTML = `${arrayToRemoveFrom.filter(o => o.id == card.id)[0].navn}`;

                deletePopup.classList.add("is-active");

            });

            connectedSaveButton.addEventListener("click", () => {
                // Funksjon som lagrer endring i array
                // Uferdig
            });



            // Hjelpefunksjon
            const addSaveOnClick = () => {
                let editPopup = document.querySelector(`#popup${card.id}`);
                let inputFields = editPopup.querySelectorAll(".edit-input");
            }
            





        });
    };

    return {addOnclickToButtons}

}());

export default AddOnclickModule;