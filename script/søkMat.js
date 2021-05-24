import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";
import SearchModule from './modules/SearchModule.js';

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-a-btn");
const menuSection = document.querySelector("#menu-section");

searchBtn.onclick = function(){
    generateMenu(SearchModule.filterByChoice(MatOgDrikkeModule.getAllMatOgDrikke(), id, searchInput));
}
