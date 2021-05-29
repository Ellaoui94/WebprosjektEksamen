import EditObjectModule from "./EditObjectModule.js";
import DeleteObjectModule from "./EditObjectModule.js"; // Virker ikke som den skal
import AddObjectModule from "./AddObjectModule.js";

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

        let confirmAddButton = document.querySelector("#confirm-add-button");

        let addPopup = document.querySelector("#add-popup");

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

                confirmDeleteButton.addEventListener("click", () => {
                    
                    // Skulle egentlig kjøre dette:
                    // DeleteObjectModule.deleteObject(deleteInput, ConnectedArray, deletePopup, card);
                    // Får feilkode som påstår at dette ikke er en funksjon

                    // Kjører denne koden direkte her istedenfor
                    if (deleteInput.value === "SLETT"){
                        connectedArray.splice(connectedArray.findIndex(o => o.id == card.id), 1);
                        deletePopup.classList.remove("is-active");
                        deleteInput.value = "";
                    };

                    // Bytter ut sletteknappen med en kopi av seg selv for å fjerne onclick
                    // Uten denne linjen kan man bare slette ett element før sletting slutter å virke
                    confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));

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
                EditObjectModule.editObject(connectedArray, lookUpArray, card);
                connectedPopup.classList.remove("is-active");
            });

        });

        confirmAddButton.addEventListener("click", () => {
            if (!addButtonHasOnclick){
                AddObjectModule.addNewObject(connectedArray, lookUpArray);
                addPopup.classList.remove("is-active");
                addButtonHasOnclick = true;
            }
            
        });

    };

    return {addOnclickToButtons}

}());

export default AddOnclickModule;