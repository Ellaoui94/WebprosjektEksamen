import AnsatteModule from "./modules/AnsatteModule.js";
import MatOgDrikkeModule from "./modules/Mat&DrikkeModule.js";
import RestaurantModule from "./modules/RestaurantModule.js";
import IngredienserModule from "./modules/IngredienserModule.js";
import EconomyFormulasModule from "./modules/EconomyFormulasModule.js";

const dailyIncomeElement = document.querySelector("#daily-income");
const weeklyIncomeElement = document.querySelector("#weekly-income");
const monthlyIncomeElement = document.querySelector("#monthly-income");
const yearlyIncomeElement = document.querySelector("#yearly-income");

const dailySumElement = document.querySelector("#daily-sum");
const weeklySumElement = document.querySelector("#weekly-sum");
const monthlySumElement = document.querySelector("#monthly-sum");
const yearlySumElement = document.querySelector("#yearly-sum");

const alleRestauranter = RestaurantModule.getAllRestauranter();
const allMatOgDrikke = MatOgDrikkeModule.getAllMatOgDrikke();
const alleAnsatte = AnsatteModule.getAllAnsatte();

let dailyIncomeArray = [];
let weeklyIncomeArray = [];
let monthlyIncomeArray = [];
let yearlyIncomeArray = [];

alleRestauranter.forEach(restaurant => {
	let restaurantIncomeArray = EconomyFormulasModule.getIncome(restaurant, allMatOgDrikke, alleAnsatte);
	dailyIncomeArray.push([restaurant.id, restaurant.navn, restaurantIncomeArray[0]]);
	weeklyIncomeArray.push([restaurant.id, restaurant.navn, restaurantIncomeArray[1]]);
	monthlyIncomeArray.push([restaurant.id, restaurant.navn, restaurantIncomeArray[2]]);
	yearlyIncomeArray.push([restaurant.id, restaurant.navn, restaurantIncomeArray[3]]);
});

let dailySum = EconomyFormulasModule.getSum(dailyIncomeArray);
let weeklySum = EconomyFormulasModule.getSum(weeklyIncomeArray);
let monthlySum = EconomyFormulasModule.getSum(monthlyIncomeArray);
let yearlySum = EconomyFormulasModule.getSum(yearlyIncomeArray);

const generateDailyHTML = () => {
	let dailyHTML = "";
	dailyIncomeArray.forEach(item => {
		dailyHTML += `<li id="daily${item[0]}">${item[1]}: ${item[2]}kr</li>`;
	});
	dailyIncomeElement.innerHTML = dailyHTML;
	dailySumElement.innerHTML = dailySum;
};

const generateWeeklyHTML = () => {
	let weeklyHTML = "";
	weeklyIncomeArray.forEach(item => {
		weeklyHTML += `<li id="weekly${item[0]}">${item[1]}: ${item[2]}kr</li>`;
	});
	weeklyIncomeElement.innerHTML = weeklyHTML;
	weeklySumElement.innerHTML = weeklySum;
};

const generateMonthlyHTML = () => {
	let monthlyHTML = "";
	monthlyIncomeArray.forEach(item => {
		monthlyHTML += `<li id="monthly${item[0]}">${item[1]}: ${item[2]}kr</li>`;
	});
	monthlyIncomeElement.innerHTML = monthlyHTML;
	monthlySumElement.innerHTML = monthlySum;
};

const generateYearlyHTML = () => {
	let yearlyHTML = "";
	yearlyIncomeArray.forEach(item => {
		yearlyHTML += `<li id="yearly${item[0]}">${item[1]}: ${item[2]}kr</li>`;
	});
	yearlyIncomeElement.innerHTML = yearlyHTML;
	yearlySumElement.innerHTML = yearlySum;
};

const generateHTML = () => {
	generateDailyHTML();
	generateWeeklyHTML();
	generateMonthlyHTML();
	generateYearlyHTML();
};

generateHTML();


/*
// Funksjon som returnerer økonomisk info om en restaurant (uferdig)
function calculateEconomy(restaurant){

};



// For Burger
const navbarBurger = document.querySelector(".navbar-burger")
const navbarMenu = document.querySelector("#nav-links");



navbarBurger.addEventListener("click", ( e ) => {
	navbarBurger.classList.toggle("is-active")
	navbarMenu.classList.toggle("is-active");
} );

*/


            
          