'use strict'

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false

};

let itemExp = prompt("Введите обязательную статью расходов в этом месяце");
let sumExp = prompt("Во сколько обойдется?");

appData.expenses[itemExp] = sumExp;

let  dayBudget = (appData.budget - appData.expenses[itemExp]) / 30;

alert ("Ваш бюджет на 1 день: " + Math.round(dayBudget));






