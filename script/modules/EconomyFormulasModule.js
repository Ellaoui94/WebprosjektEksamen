const EconomyFormulasModule = (function() {

    const getIncome = (restaurant, menuArray, employeeArray) => {
        let dailyIncome = getDailyProfit(restaurant, menuArray, employeeArray);
        let weeklyIncome = dailyIncome * 7;
        let monthlyIncome = dailyIncome * 30;
        let yearlyIncome = dailyIncome * 365;
        let incomeArray = [dailyIncome, weeklyIncome, monthlyIncome, yearlyIncome]
        return incomeArray;
    }

    const getSum = (restaurantIncomeArray) => {
        let sum = 0;
        restaurantIncomeArray.forEach(restaurantIncome => {
            sum += restaurantIncome[2];
        });
        return sum;
    }


    // Hjelpefunksjoner

    const getAverageIncome = (menuArray) => {
        let averageFoodProfit = 0;
        let averageDrinkProfit = 0;
        let averageIncome = 0;
        let foodArray = menuArray.filter(o => o.kategori == "mat");
        let drinkArray = menuArray.filter(o => o.kategori == "drikke");
        foodArray.forEach(item => {
            let addValue = parseInt(item.pris) - parseInt(item.kostnad);
            averageFoodProfit += addValue;
        });
        drinkArray.forEach(item => {
            let addValue = parseInt(item.pris) - parseInt(item.kostnad);
            averageDrinkProfit += addValue;
        })
        averageFoodProfit = averageFoodProfit / foodArray.length;
        averageDrinkProfit = averageDrinkProfit / drinkArray.length;
        averageIncome = averageFoodProfit + averageDrinkProfit;
        return averageIncome;
    }

    const getDailyProfit = (restaurant, menuArray, employeeArray) => {
        let dailyIncome = restaurant.kapasitet * 0.6 * getAverageIncome(menuArray);
        let dailySalaryCost = 0;
        let filteredEmployeeArray = employeeArray.filter(o => o.arbeidssted[1] == restaurant.id);
        filteredEmployeeArray.forEach(employee => {
            let dailySalary = parseInt(employee.timelønn) * 7.5 * parseInt(employee.stillingsprosent) / 100;
            dailySalaryCost += dailySalary;
        });
        let dailyProfit = dailyIncome - dailySalaryCost;
        return parseInt(dailyProfit);
    }

    return {getIncome, getSum}

}());

export default EconomyFormulasModule;