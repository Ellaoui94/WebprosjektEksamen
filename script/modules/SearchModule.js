const SearchModule = (function() {

    const filterByChoice = (searchedArray, searchKey, searchValue) => {
        switch (searchKey){
            case "id":
                searchById(searchedArray, searchValue);
                break;
            case "navn":
                searchByName(searchedArray, searchValue);
                break;
            case "telefon":
                searchByPhone(searchedArray, searchValue);
                break;
            case "stilling":
                searchByJob(searchedArray, searchValue);
                break;
            case "alder":
                searchByAge(searchedArray, searchValue);
                break;
            case "arbeidssted":
                searchByWorkplace(searchedArray, searchValue);
                break;
            case "stillingsprosent":
                searchByWorkPercentage(searchedArray, searchValue);
                break;
            case "timelønn":
                searchByHourlyPay(searchedArray, searchValue);
                break;
            case "adresse":
                searchByAddress(searchedArray, searchValue);
                break;
            case "kapasitet":
                searchByCapacity(searchedArray, searchValue);
                break;
            case "kategori":
                searchByCathegory(searchedArray, searchValue);
                break;
            case "type":
                searchByType(searchedArray, searchValue);
                break;
            case "kostnad":
                searchByCost(searchedArray, searchValue);
                break;
            case "pris":
                searchByPrice(searchedArray, searchValue);
                break;
            default:
                break;            
        }
    };

    // FELLES FOR ALLE TRE SIDER

    const searchById = (searchedArray, searchValue) => searchedArray.filter(o => o.id === searchValue);
    
    const searchByName = (searchedArray, searchValue) => searchedArray.filter(o => o.navn === searchValue);



    // FELLES FOR RESTAURANT OG ANSATTE

    const searchByPhone = (searchedArray, searchValue) => searchedArray.filter(o => o.telefon === searchValue);



    // FOR ANSATTE

    const searchByJob = (searchedArray, searchValue) => searchedArray.filter(o => o.stilling === searchValue);

    const searchByAge = (searchedArray, searchValue) => searchedArray.filter(o => o.alder === searchValue);

    const searchByWorkplace = (searchedArray, searchValue) => searchedArray.filter(o => o.arbeidssted === searchValue);

    const searchByWorkPercentage = (searchedArray, searchValue) => searchedArray.filter(o => o.stillingsprosent === searchValue);

    const searchByHourlyPay = (searchedArray, searchValue) => searchedArray.filter(o => o.timelønn === searchValue);



    // FOR RESTAURANT

    const searchByAddress = (searchedArray, searchValue) => searchedArray.filter(o => o.adresse === searchValue);

    const searchByCapacity = (searchedArray, searchValue) => searchedArray.filter(o => o.kapasitet === searchValue);

    const searchByBoss = (searchedArray, searchValue) => searchedArray.filter(o => o.leder[0] === searchValue);



    // FOR MAT & DRIKKE

    const searchByCathegory = (searchedArray, searchValue) => searchedArray.filter(o => o.kategori === searchValue);

    const searchByType = (searchedArray, searchValue) => searchedArray.filter(o => o.type === searchValue);

    const searchByIngredient; // Uferdig

    const searchByAllergen; // Uferdig

    const searchByCost = (searchedArray, searchValue) => searchedArray.filter(o => o.kostnad === searchValue);

    const searchByPrice = (searchedArray, searchValue) => searchedArray.filter(o => o.pris === searchValue);



    return {filterByChoice};

}());

export default SearchModule;