const SearchModule = (function() {

    // skal endre til at dette fungerer gjennom switch-case istedenfor if-else
    // trenger kanskje hjelpefunksjoner for hver case
    const filterByChoiceShort = (searchedArray, searchKey, searchValue) => {
        if (searchKey.value == "ingredienser"){
            return; // uferdig
        } else if (searchKey.value == "allergener") {
            return; // uferdig
        } else {
            return searchedArray.filter(o => o[searchKey.value] == searchValue.value);
        }
    }

    return {filterByChoiceShort};

}());

export default SearchModule;