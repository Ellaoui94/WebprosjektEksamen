import AnsatteModule from "./modules/AnsatteModule.js";
import SearchModule from "./modules/SearchModule.js";

const searchInput = document.querySelector("#search-input");
const searchAnsattBtn = document.querySelector("#search-a-btn");

const allAnsatte = AnsatteModule.getAllAnsatt();

generateAnsatte(alleRestauranter);

searchAnsattBtn.addEventListener("click", () => {
    generateAnsatte(SearchModule.filterByChoice(allAnsatte, searchKey, searchInput));


});


