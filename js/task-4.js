const credits = 23580;
const pricePerDroid = 3000;

let order = Math.floor(prompt('Сколько дроидов Вы хотите купить?'));
let totalPrice = 0;

if (order === null) {
    alert ('Охрана - отмена!');
    console.log('Охрана - отмена!');
} else if (credits - (order * pricePerDroid) >= 0) {
    totalPrice = order * pricePerDroid;
    alert (`Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    console.log(`Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
} else {
    alert ('Недостаточно средств на счету!');
    console.log('Недостаточно средств на счету!');
}