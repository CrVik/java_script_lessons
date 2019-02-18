'use strict'

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false

};

// for (let i=0; i < 2; i++) {
//     let itemExp = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let sumExp = +prompt("Во сколько обойдется?", '');
//     if (typeof(itemExp) === 'string' && typeof(itemExp) != null &&
//         typeof(sumExp) != null && itemExp != '' && sumExp != '' && itemExp.length <50 ) {
//             appData.expenses[itemExp] = sumExp;
//         }
//     else {
//         i--;
//     }
// };

// let i = 0;
// while (i < 2) {
//     let itemExp = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let sumExp = +prompt("Во сколько обойдется?", '');
     
//     if (typeof(itemExp) === 'string' && typeof(itemExp) != null &&
//         typeof(sumExp) != null && itemExp != '' && sumExp != '' &&
//         itemExp.length <50 && !isNaN(sumExp)) {
//             appData.expenses[itemExp] = sumExp;
//             i++;
//     }
// }

let i = 0;
do {
    let itemExp = prompt("Введите обязательную статью расходов в этом месяце", '');
    let sumExp = +prompt("Во сколько обойдется?", '');
     
    if (typeof(itemExp) === 'string' && typeof(itemExp) != null &&
        typeof(sumExp) != null && itemExp != '' && sumExp != '' &&
        itemExp.length <50 && !isNaN(sumExp)) {
            appData.expenses[itemExp] = sumExp;
            i++;
    }
} while (i < 2);


let  dayBudget = (appData.budget) / 30;

alert ("Ваш бюджет на 1 день: " + Math.round(dayBudget));