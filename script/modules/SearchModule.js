const SearchModule = (function() {

    const filterByChoice = (searchedArray, searchKey, searchValue) => {
        if (Array.isArray(searchedArray[0][searchKey.value])){
            return searchedArray.filter(o => o[searchKey.value].includes(searchValue.value));
        } else {
            return searchedArray.filter(o => o[searchKey.value] == searchValue.value);
        }
    }

    return {filterByChoice};

}());

export default SearchModule;
