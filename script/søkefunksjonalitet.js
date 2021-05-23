/*
import AnsatteModule from "./modules/AnsatteModule.js";
import IngredienserModule from "./modules/IngredienserModule.js";
import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
*/

const SearchModule = (function() {

    const mainSearchFunction = (searchedArray, searchKey, searchValue) => {
        switch (searchKey){
            case "id":
                searchById(searchedArray, searchValue);
                break;
            case "navn":
                searchByName(searchedArray, searchValue);
                break;
            
        }
    };

    // FELLES FOR ALLE TRE SIDER

    const searchById = (searchedArray, searchValue) => searchedArray.filter(o => o.id === searchValue)
    
    const searchByName = (searchedArray, searchValue) => searchedArray.filter(o => o.navn === searchValue)



    // FELLES FOR RESTAURANT OG ANSATTE

    const searchByPhone;



    // FOR ANSATTE

    const searchByJob;

    const searchByAge;

    const seachByWorkplace;

    const searchByWorkPercentage;

    const searchByHourlyPay;



    // FOR RESTAURANT

    const searchByAddress;

    const searchByCapacity;

    const searchByBoss;



    // FOR MAT & DRIKKE

    const searchByCathegory;

    const searchByType;

    const searchByIngredient;

    const searchByAllergen;

    const searchByCost;

    const searchByPrice;



    return {searchFunction};

}());

export default SearchModule;