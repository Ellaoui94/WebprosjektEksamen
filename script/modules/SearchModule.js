const SearchModule = (function() {

    // skal endre til at dette fungerer gjennom switch-case istedenfor if-else
    // trenger kanskje hjelpefunksjoner for hver case
    const filterByChoice = (searchedArray, searchKey, searchValue) => {
        switch (searchKey.value){
            case "ingredienser":
                return; // Uferdig
            case "allergener":
                return; // Uferdig
            case "leder":
                return searchedArray.filter(o => o[searchKey.value][0] == searchValue.value);
            default:
                return searchedArray.filter(o => o[searchKey.value] == searchValue.value);
        }
    }


    // Hjelpefunksjoner:

    const checkIngredients = (searchValue) => {
        return; // Uferdig
    }

    const checkArregens = (searchValue) => {
        return; // Uferdig
    }

    return {filterByChoice};

}());

export default SearchModule;