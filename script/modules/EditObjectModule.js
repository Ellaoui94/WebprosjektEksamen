import HelperFunctionsModule from "./HelperFunctionsModule.js";

const EditObjectModule = (function() {
    
    const editObject = (arrayToChange, lookUpArray, card) => {
        let editPopup = document.querySelector(`#popup${card.id}`);
        let inputFields = editPopup.querySelectorAll(".edit-input");
        let objectToEdit = arrayToChange[arrayToChange.findIndex(o => o.id == card.id)];
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
                objectToEdit.leder = HelperFunctionsModule.getLeaderOrWorkPlace(lookUpArray, field.value);
            } else if (field.classList.contains("alder") && field.value != "") {
                objectToEdit.alder = parseInt(field.value);
            } else if (field.classList.contains("stilling") && field.value != "") {
                objectToEdit.stilling = field.value;
            } else if (field.classList.contains("stillingsprosent") && field.value != "") {
                objectToEdit.stillingsprosent = parseInt(field.value);
            } else if (field.classList.contains("timelønn") && field.value != "") {
                objectToEdit.timelønn = parseInt(field.value);
            } else if (field.classList.contains("arbeidssted") && field.value != "") {
                objectToEdit.arbeidssted = HelperFunctionsModule.getLeaderOrWorkPlace(lookUpArray, field.value);
            } else if (field.classList.contains("type") && field.value != "") {
                objectToEdit.type = field.value;
            } else if (field.classList.contains("kostnad") && field.value != "") {
                objectToEdit.kostnad = field.value;
            } else if (field.classList.contains("pris") && field.value != "") {
                objectToEdit.pris = field.value;
            }
        });
        if (objectToEdit.hasOwnProperty("ingredienser")) {
            let newIngredients = HelperFunctionsModule.getIngredientsFromInput(HelperFunctionsModule.getIngredientsInputArray(editPopup));
            HelperFunctionsModule.changeIngredients(objectToEdit.ingredienser, newIngredients);
            let newAllergens = HelperFunctionsModule.getAllergensByIngredients(objectToEdit.ingredienser, lookUpArray);
            objectToEdit.allergener = newAllergens;
            if (objectToEdit.type == "rød pizza" || objectToEdit.type == "hvit pizza") {
                objectToEdit.allergener.push("hvete");
            }
        }
    }

    return {editObject};

}());

export default EditObjectModule;