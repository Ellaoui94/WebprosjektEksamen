import HelperFunctionsModule from "./HelperFunctionsModule.js"

const AddObjectModule = (function(){

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
                newObject.leder = HelperFunctionsModule.getLeaderOrWorkPlace(lookUpArray, field.value);
            } else if (field.classList.contains("alder")) {
                newObject.alder = parseInt(field.value);
            } else if (field.classList.contains("stilling")) {
                newObject.stilling = field.value;
            } else if (field.classList.contains("stillingsprosent")) {
                newObject.stillingsprosent = parseInt(field.value);
            } else if (field.classList.contains("timelønn")) {
                newObject.timelønn = parseInt(field.value);
            } else if (field.classList.contains("arbeidssted")) {
                newObject.arbeidssted = HelperFunctionsModule.getLeaderOrWorkPlace(lookUpArray, field.value);
            }
        });
        arrayToChange.push(newObject);
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
            newObject.ingredienser = HelperFunctionsModule.getIngredientsFromInput(ingredientFields);
            newObject.allergener = HelperFunctionsModule.getAllergensByIngredients(newObject.ingredienser, lookUpArray);
            if (newObject.type == "rød pizza" || newObject.type == "hvit pizza") {
                newObject.allergener.push("hvete");
            }
        }
        connectedArray.push(newObject);
    }

    return {addNewObject, addNewFoodOrDrink}

}());

export default AddObjectModule;