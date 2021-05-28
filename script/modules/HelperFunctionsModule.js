const HelperFunctionsModule = (function() {

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

    return {getLeaderOrWorkPlace, getAllergensByIngredients, getIngredientsInputArray, changeIngredients};
}());

export default HelperFunctionsModule;