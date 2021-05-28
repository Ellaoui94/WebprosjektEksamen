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
    // addButtonHasOnclick må settes på begynnelsen av hver side, og må være = false for at koden skal virke

    const addOnclickToButtons = (connectedArray, lookUpArray, cardClass, addButtonHasOnclick) => {

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
                editObject(connectedArray, lookUpArray);
                connectedPopup.classList.remove("is-active");
            });


            // Hjelpefunksjoner i loop

            const editObject = (arrayToChange, lookUpArray) => {
                let editPopup = document.querySelector(`#popup${card.id}`);
                let inputFields = editPopup.querySelectorAll(".edit-input");
                let objectToEdit = arrayToChange[arrayToChange.findIndex(checkId)];
                inputFields.forEach(field => {
                    if (field.classList.contains("navn") && field.value != "") {
                        objectToEdit.navn = field.value;
                    } else if (field.classList.contains("adresse") && field.value != "") {
                        objectToEdit.adresse = field.value;
                    } else if (field.classList.contains("telefon") && field.value != "") {
                        objectToEdit.telefon = field.value;
                    } else if (field.classList.contains("kapasitet") && field.value != "") {
                        objectToEdit.kapasitet = parseInt(field.value);
                    } else if (field.classList.contains("leder") && field.value != "") {
                        objectToEdit.leder = getLeaderOrWorkPlace(lookUpArray, field.value);
                    } else if (field.classList.contains("alder") && field.value != "") {
                        objectToEdit.alder = parseInt(field.value);
                    } else if (field.classList.contains("stilling") && field.value != "") {
                        objectToEdit.stilling = field.value;
                    } else if (field.classList.contains("stillingsprosent") && field.value != "") {
                        objectToEdit.stillingsprosent = parseInt(field.value);
                    } else if (field.classList.contains("timelønn") && field.value != "") {
                        objectToEdit.timelønn = parseInt(field.value);
                    } else if (field.classList.contains("arbeidssted") && field.value != "") {
                        objectToEdit.arbeidssted = getLeaderOrWorkPlace(lookUpArray, field.value);
                    } else if (field.classList.contains("type") && field.value != "") {
                        objectToEdit.type = field.value;
                    } else if (field.classList.contains("kostnad") && field.value != "") {
                        objectToEdit.kostnad = field.value;
                    } else if (field.classList.contains("pris") && field.value != "") {
                        objectToEdit.pris = field.value;
                    }
                });
                if (objectToEdit.hasOwnProperty("ingredienser")) {
                    let newIngredients = getIngredientsFromInput(getIngredientsInputArray(editPopup));
                    changeIngredients(objectToEdit.ingredienser, newIngredients);
                    let newAllergens = getAllergensByIngredients(objectToEdit.ingredienser, lookUpArray);
                    objectToEdit.allergener = newAllergens;
                    if (objectToEdit.type == "rød pizza" || objectToEdit.type == "hvit pizza") {
                        objectToEdit.allergener.push("hvete");
                    }
                }
            }
            
            const getIngredientsInputArray = (popup) => {
                let ingredientsInputArray = popup.querySelectorAll(".edit-ingrediens");
                if (ingredientsInputArray != undefined){
                    return ingredientsInputArray;
                }
            }

            const changeIngredients = (oldIngredients, newIngredients) => {
                if (oldIngredients != undefined && newIngredients != undefined) {
                    for (let i = 0; i < newIngredients.length; i++) {
                        if (newIngredients[i] != "" && newIngredients[i] != oldIngredients[i]) {
                            oldIngredients[i] = newIngredients[i];
                        }
                    }
                }
            }

            const checkId = (o) => o.id == card.id;

        });

        

        let confirmAddButton = document.querySelector("#confirm-add-button");

        let addPopup = document.querySelector("#add-popup");

        confirmAddButton.addEventListener("click", () => {
            if (!addButtonHasOnclick){
                if (connectedArray[0].hasOwnProperty("telefon")) {
                    addNewObject(connectedArray, lookUpArray);
                } else {
                    addNewFoodOrDrink(connectedArray, lookUpArray);
                }
                addPopup.classList.remove("is-active");
                addButtonHasOnclick = true;
            }
            
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

        const addNewFoodOrDrink = (connectedArray, lookUpArray) => {
            let addPopup = document.querySelector("#add-popup");
            let inputFields = addPopup.querySelectorAll(".add-input");
            let ingredientFields = addPopup.querySelectorAll(".ingrediens");
            let arrayLength = connectedArray.length;
            let newId = parseInt(connectedArray[arrayLength-1].id)+1;
            let newObject = {id: newId.toString()};
            inputFields.forEach(field => {
                if (field.classList.contains("navn")) {
                    newObject.navn = field.value;
                } else if (field.classList.contains("kategori")) {
                    newObject.kategori = field.value;
                } else if (field.classList.contains("type")) {
                    newObject.type = field.value;
                } else if (field.classList.contains("kostnad")) {
                    newObject.kostnad = field.value;
                } else if (field.classList.contains("pris")) {
                    newObject.pris = field.value;
                }
            });
            if (newObject.kategori == "drikke") {
                newObject.bilde = "beverage-icon.png";
            } else {
                newObject.bilde = "pizza-icon.png";
                newObject.ingredienser = getIngredientsFromInput(ingredientFields);
                newObject.allergener = getAllergensByIngredients(newObject.ingredienser, lookUpArray);
                if (newObject.type == "rød pizza" || newObject.type == "hvit pizza") {
                    newObject.allergener.push("hvete");
                }
            }
            connectedArray.push(newObject);
        }

        const getAllergensByIngredients = (ingredientsArray, lookUpArray) => {
            let allergener = [];
            ingredientsArray.forEach(newItemIngredient => {
                lookUpArray.forEach(ingrediens => {
                    if (newItemIngredient == ingrediens.navn && ingrediens.allergen != "" && !allergener.includes(ingrediens.allergen)){
                        allergener.push(ingrediens.allergen);
                    }
                });
            });
            return allergener;
        }

        const getIngredientsFromInput = (inputArray) => {
            let ingredienser = [];
            inputArray.forEach(input => {
                if (input.value != ""){
                    ingredienser.push(input.value);
                }
            });
            return ingredienser;
        }
    };

    return {addOnclickToButtons}

}());

export default AddOnclickModule;