const AddOnclickModule = (function() {

    // For at denne skal fungere, må man legge til en spesifikk klasse på kortene på hver side
    // F.eks. bruker restauranter-script.js klassen "restaurant-card-article"
    // Denne må settes inn som argument i parameteret cardClass når man bruker funksjonen

    const addOnclickToButtons = (cardClass) => {

        let allCards = document.querySelectorAll(`.${cardClass}`);
    
        allCards.forEach(card => {
    
            let connectedEditButton = document.querySelector(`#editBtn${card.id}`);

            let connectedDeleteButton = document.querySelector(`#deleteBtn${card.id}`)

            let connectedCloseButton = document.querySelector(`#closeBtn${card.id}`)

            let connectedSaveButton = document.querySelector(`#saveBtn${card.id}`)
    
            let connectedPopup = document.querySelector(`#popup${card.id}`);
    
            let connectedModalBackground = document.querySelector(`#modalBg${card.id}`);
    
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
                // Uferdig
                // removeFromArray() skal kanskje brukes her
            });

            connectedSaveButton.addEventListener("click", () => {
                // Funksjon som lagrer endring i array
                // Uferdig
            });
        });
    };



    // Hjelpefunksjoner

    // Denne kan brukes på denne måten:
    // let alleRestauranter = RestaurantModule.getAllRestauranter();
    // let idPåTingSomSkalSlettes = "10001"
    // alleRestauranter = removeFromArray(alleRestauranter, idPåTingSomSkalSlettes);
    const removeFromArray = (arrayToRemoveFrom, thingToRemove) => {
        return arrayToRemoveFrom.filter(o => o.id != thingToRemove)
    }

    return {addOnclickToButtons}

}());

export default AddOnclickModule;