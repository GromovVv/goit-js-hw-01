const total = 100;
const ordered = 28;

if (ordered <= 0) {
    console.log('Выбрано "0" товара. Укажите количество товара!');
} 
else if (ordered > total) {
    console.log('На складе недостаточно товаров!');
} 
else  {
    console.log(`Заказ оформлен в количестве ${ordered} штук, с вами свяжется менеджер!`);
}
    