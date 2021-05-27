const AddOnclickModule = (function() {

    // For at denne skal fungere, må man legge til en spesifikk klasse på kortene på hver side
    // F.eks. bruker restauranter-script.js klassen "restaurant-card-article"
    // Denne må settes inn som argument i parameteret cardClass når man bruker funksjonen
    // Parameteret connectedArray må være likt det arrayet som brukes for å generere html
    // F.eks. bruker restauranter-script.js arrayet alleRestauranter
    // Parameteret lookUpArray må være ulikt for alle tre sider:
        // For restauranter-script: alleAnsatte (array importert via modul)
        // For ansatte-script: alleRestauranter (array importert via modul)
        // For meny-script: alleIngredienser (array importert via modul); denne er ikke ferdig

    const addOnclickToButtons = (connectedArray, lookUpArray, cardClass) => {

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
                 

                confirmDeleteButton.addEventListener("click", () => {
                    if (deleteInput.value === "SLETT"){
                        connectedArray.splice(connectedArray.findIndex(checkId), 1);
                        deletePopup.classList.remove("is-active");
                        deleteInput.value = "";
                    };
                });

                deleteName.innerHTML = `${connectedArray.filter(o => o.id == card.id)[0].navn}`;

                deletePopup.classList.add("is-active");

            });

            connectedSaveButton.addEventListener("click", () => {
                // Funksjon som lagrer endring i array
                // Uferdig
                let arrayObject = connectedArray[connectedArray.findIndex(checkId)];
                if (arrayObject.hasOwnProperty("telefon")) {
                    editObject(connectedArray, lookUpArray);
                } else {
                    // Uferdig
                }
                connectedPopup.classList.remove("is-active");
            });



            // Hjelpefunksjoner

            const editObject = (arrayToChange, lookUpArray) => {
                let editPopup = document.querySelector(`#popup${card.id}`);
                let inputFields = editPopup.querySelectorAll(".edit-input");
                arrayToChange[arrayToChange.findIndex(checkId)]
                inputFields.forEach(field => {
                    if (field.classList.contains("navn")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].navn = field.value;
                    } else if (field.classList.contains("adresse")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].adresse = field.value;
                    } else if (field.classList.contains("telefon")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].telefon = field.value;
                    } else if (field.classList.contains("kapasitet")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].kapasitet = parseInt(field.value);
                    } else if (field.classList.contains("leder")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].leder = getLeaderOrWorkPlace(lookUpArray, field.value);
                    } else if (field.classList.contains("alder")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].alder = parseInt(field.value);
                    } else if (field.classList.contains("stilling")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].stilling = field.value;
                    } else if (field.classList.contains("stillingsprosent")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].stillingsprosent = parseInt(field.value);
                    } else if (field.classList.contains("timelønn")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].timelønn = parseInt(field.value);
                    } else if (field.classList.contains("arbeidssted")) {
                        arrayToChange[arrayToChange.findIndex(checkId)].arbeidssted = getLeaderOrWorkPlace(lookUpArray, field.value);
                    }
                });
            }

            const getLeaderOrWorkPlace = (lookUpArray, id) => {
                let objectName = "";
                lookUpArray.forEach(o => {
                    if (id == o.id) {
                        objectName = o.navn;
                    }
                })
                let leaderOrWorkplace = [objectName, id];
                return leaderOrWorkplace;
            }
            
            const checkId = (o) => o.id == card.id;





        });
    };

    return {addOnclickToButtons}

}());

export default AddOnclickModule;