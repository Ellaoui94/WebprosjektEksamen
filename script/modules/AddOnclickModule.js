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
    
        let confirmDeleteButton = document.querySelector("#confirm-delete-button");

        let deleteInput = document.querySelector("#delete-input");

        let deleteName = document.querySelector("#delete-name");

        let deletePopup = document.querySelector("#delete-popup");

        allCards.forEach(card => {
    
            let connectedEditButton = document.querySelector(`#editBtn${card.id}`);

            let connectedDeleteButton = document.querySelector(`#deleteBtn${card.id}`)

            let connectedCloseButton = document.querySelector(`#closeBtn${card.id}`)

            let connectedSaveButton = document.querySelector(`#saveBtn${card.id}`)
    
            let connectedPopup = document.querySelector(`#popup${card.id}`);
    
            let connectedModalBackground = document.querySelector(`#modalBg${card.id}`);

            connectedDeleteButton.addEventListener("click", () => {
                
                // Funksjon som sletter kort fra array
                // Krever at siden den brukes på har et <input>-element med id="delete-input"
                
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
    
            connectedEditButton.addEventListener("click", () => {
                connectedPopup.classList.add("is-active");
            });
            
            connectedModalBackground.addEventListener("click", () => {
                connectedPopup.classList.remove("is-active");
            });

            connectedCloseButton.addEventListener("click", () => {
                connectedPopup.classList.remove("is-active");
            });

            connectedSaveButton.addEventListener("click", () => {
                // Funksjon som lagrer endring i array
                // Uferdig
                if (connectedArray[0].hasOwnProperty("telefon")) {
                    editObject(connectedArray, lookUpArray);
                } else {
                    // Uferdig
                }
                connectedPopup.classList.remove("is-active");
            });


            // Hjelpefunksjoner i loop

            const editObject = (arrayToChange, lookUpArray) => {
                let editPopup = document.querySelector(`#popup${card.id}`);
                let inputFields = editPopup.querySelectorAll(".edit-input");
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
            
            const checkId = (o) => o.id == card.id;

        });

        

        let confirmAddButton = document.querySelector("#confirm-add-button");

        let addPopup = document.querySelector("#add-popup");

        confirmAddButton.addEventListener("click", () => {
            if (connectedArray[0].hasOwnProperty("telefon")) {
                addNewObject(connectedArray, lookUpArray);
            } else {
                // Uferdig
            }
            addPopup.classList.remove("is-active");
        });

        

        // Hjelpefunksjoner utenfor loop

        const addNewObject = (arrayToChange, lookUpArray) => {
            let addPopup = document.querySelector("#add-popup");
            let inputFields = addPopup.querySelectorAll(".add-input");
            let arrayLength = arrayToChange.length;
            let newId = parseInt(arrayToChange[arrayLength-1].id)+1;
            let newObject = {id: newId.toString()};
            if (arrayToChange[0].hasOwnProperty("alder")) {
                newObject.bilde = "../kokk.png";
            } else {
                newObject.bilde = "building.png";
            }
            inputFields.forEach(field => {
                if (field.classList.contains("navn")) {
                    newObject.navn = field.value;
                } else if (field.classList.contains("adresse")) {
                    newObject.adresse = field.value;
                } else if (field.classList.contains("telefon")) {
                    newObject.telefon = field.value;
                } else if (field.classList.contains("kapasitet")) {
                    newObject.kapasitet = parseInt(field.value);
                } else if (field.classList.contains("leder")) {
                    newObject.leder = getLeaderOrWorkPlace(lookUpArray, field.value);
                } else if (field.classList.contains("alder")) {
                    newObject.alder = parseInt(field.value);
                } else if (field.classList.contains("stilling")) {
                    newObject.stilling = field.value;
                } else if (field.classList.contains("stillingsprosent")) {
                    newObject.stillingsprosent = parseInt(field.value);
                } else if (field.classList.contains("timelønn")) {
                    newObject.timelønn = parseInt(field.value);
                } else if (field.classList.contains("arbeidssted")) {
                    newObject.arbeidssted = getLeaderOrWorkPlace(lookUpArray, field.value);
                }
            });
            arrayToChange.push(newObject);
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
    };

    return {addOnclickToButtons}

}());

export default AddOnclickModule;