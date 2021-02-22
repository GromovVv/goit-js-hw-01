// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     switch (password) {
//       case null: message = 'Отменено пользователем!'; 
//       break;
//       case ADMIN_PASSWORD: message = 'Добро пожаловать!';
//       break;
//       default: message = 'Доступ запрещён, неверный пароль!';
//     }
  
//     return message;
//   }

//   console.log(checkPassword('jqueryismyjam'));


// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//       let price = 0;
  
//     switch (country) {
        
//       case 'Китай':
//         price = 100;
//         message = `Доставка в ${country} будет стоить ${price} кредитов.`;
//         break;
        
//       case 'Чили': 
//         price = 250;
//         message = `Доставка в ${country} будет стоить ${price} кредитов.`;
//         break;
        
//       case 'Австралия':
//         price = 170;
//         message = `Доставка в ${country} будет стоить ${price} кредитов.`;
//         break;
        
//       case 'Ямайка':
//         price = 120;
//         message = `Доставка в ${country} будет стоить ${price} кредитов.`;
//         break;
        
//       default:
//         message = 'Извините, в вашу страну доставки нет';
        
//     }
//   // Пиши код выше этой строки
//   return message;
// }

//   console.log(getShippingCost('Ямайка'));


// function formatMessage(message, maxLength) {
//    let result;
//   // Пиши код ниже этой строки
// 	  if (message.length <= maxLength) {
//       	result = message;
//       } else {
//       	result = message.slice(0, maxLength) + '...';
//       }
//   // Пиши код выше этой строки
//   return result;
// }


// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');   // Пиши код выше этой строки
//   return result;
// }

// console.log(checkForSpam('Get best sale offers now!'));


// function getExtremeElements(array) {
//   // Пиши код ниже этой строки
//   return [array[0], array[array.length - 1]]; 
//   // Пиши код выше этой строки
// }

// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));


// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//   return message.split(' ').length * pricePerWord;

//  // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));

// function slugify(title) {
//   // Пиши код ниже этой строки
//  return title.toLowerCase().split(' ').join('-');
//    // Пиши код выше этой строки
// }

// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// function makeArray(firstArray, secondArray, maxLength) {

// return firstArray.concat(secondArray).length <= maxLength 
// ?  firstArray.concat(secondArray) 
// :  firstArray.concat(secondArray).slice(0, maxLength)

// }

// console.log(makeArray(['Земля', 'Юпитер', 'Венера'], ['Нептун', 'Уран'], 4));


// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i ++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(4));

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

// 	for (let i = 0; i < order.length; i++ ){
//     	total += order[i];
//     }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //возвращает 138

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const arr = string.split(' ');
//   let longestWord = '';

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;

//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//jumped


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// 	for (let i = min; i <= max; i++) {
//      numbers.push(i);
//     }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(2, 5));


// function filterArray(numbers, value) {

//   let arr = [];
  
//   for (let i = 0; i < numbers.length; i++) {
//   	if (numbers[i] > value) {
//     	arr.push(numbers[i])
//     }
//   }
// return arr;

// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// 	  let arr = [];
  
//       for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//           arr.push(array1[i]);
//         }
//     }
//   return arr;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function calculateTotalPrice(orders) {
//   let total = 0;

//   for (const order of orders) {
//     total += order;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//    	if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function getEvenNumbers(start, end) {
// let arr = [];

// for (let i = start; i <= end; i++) {
//   if (i%2 === 0) {
//     arr.push(i);
//   }
// }
// return arr;  
// }

// console.log(getEvenNumbers(6, 12));
// return array [6, 8, 10, 12]


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
// }

// console.log(findNumber(2, 6, 5));

// function includes(array, value) {
//   let boole;
//   for (let i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       boole = true;
//       break;
//     } else {
//       boole = false;
//     }
//   }

//   for (const item of array) {
//     if (value === item) {
//       boole = true;
//       break;
//     } else {
//       boole = false;
//     }

//   }

//   return boole;
// }

// console.log(includes([1, 2, 3, 4, 5], 6));

// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));

// const apartment = {
// 	imgUrl: 'https://via.placeholder.com/640x480',
//  	descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top']
// };

// console.log(apartment);


// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: 'henry.carter@aptmail.com',
//   	[passwordInputName]: 'jqueryismyjam'
// };

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
// 	keys.push(key);
//   	values.push(apartment[key]);
// }

// console.log(keys, values);

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log('name' in dog); // true
// console.log('legs' in dog); // true

// const keys = [];
// const values = [];

// const advert = {
//   service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//   }
// }
// console.log(keys, values);

// function countProps(object) {
//   let propCount = 0;
//   let arr = [];
// 	for (const key in object) {
//     	if (object.hasOwnProperty(key)) {
//         	arr.push(key);
//         }
//     }
//   propCount = arr.length;
//   return propCount;
// }

// console.log(countProps{ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);


// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
    
//       propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys, values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const nameEmploees = Object.keys(salaries);
//   const salaryEmploees = Object.values(salaries);

//   for (const value of salaryEmploees) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors, rgbColors);

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     } 
//   }
//   return null
// }

// console.log(getProductPrice('Сканер'));


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arr = [];

//       for (const product of products) {
//         if (Object.keys(product).includes(propName)){
//           arr.push(product[propName]);
//         } else {
//           return [];
//         }
//       }
//       return arr;
// }

// console.log(getAllPropValues('name'));
// возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'];

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   let order = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//      order = product.price * product.quantity;
//     }
//   }
//   return order;
// }

// console.log(calculateTotalPrice('Дроид'));

// const highTemperatures = {
//   yesterday: 28,
//   today: 23,
//   tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const {yesterday, today, tomorrow} = highTemperatures;
// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex, rgb);
//   rgbColors.push(rgb);
// }
// console.log(hexColors, rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { 
//   today: {
//   high: highToday, 
//   low: lowToday, 
//   icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},  
// tomorrow: { 
//   high: highTomorrow, 
//   low: lowTomorrow, 
//   icon: tomorrowIcon = todayIcon}
// } = forecast;

// console.log(tomorrowIcon);


// function calculateMeanTemperature(forecast) {
  
//   const {
//     today: {
//     low: todayLow, 
//     high: todayHigh
//     }, 
//     tomorrow: {
//     low: tomorrowLow, 
//     high: tomorrowHigh
//     }} = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores, bestScore, worstScore);

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);


// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//     return {category, priority, ...data, completed};
// }

// console.log(makeTask({}));
//возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.

// function add(...args) {
//   let sum = 0;
//   for (let arg of args){
//     sum += arg;
//   }
//   return sum;
// };

// console.log(add(15, 27, 5));

// function findMatches(numbers, ...args) {
//   const matches = []; // Не изменяй эту строку

//    for (const number of args) {
//      if (numbers.includes(number)) {
//         matches.push(number);
//      }
//    }
   
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName){
//   	return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Обновляем книгу ${oldName} на ${newName}`;
//   }
// };
// console.log(bookShelf.addBook('Красный закат'));

// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ['Последнее королевство']
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// ['Последнее королевство', 'Хроники подземелий', 'Страж снов']

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potionName.name === potion.name) {
//         return console.log(`Зелья ${potionName.name} уже есть в инвентаре!`); 
//       }
//     }
//     this.potions.push(potionName)
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//   for (const potion of this.potions) {
//     console.log(potion.name);
//     if (oldName === potion.name) {
//       potion.name = newName;
//     }
//   }
//   },
// };

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Дыхание дракона', price: 780 })
// console.table(atTheOldToad.getPotions());
// atTheOldToad.removePotion('Дыхание дракона');
// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: 'Дыхание дракона', price: 780 });
// console.table(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
// console.table(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.table(atTheOldToad.getPotions());

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Роял гранд', makePizza));
//возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// console.log(makeMessage('Ультрасыр', deliverPizza));
//возвращает строку 'Доставляем пиццу Ультрасыр.'.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
// 	console.log(`Едим пиццу ${pizzaName}`);
// });

// function filter(cb) {

//   console.log(this);

//   const newArr = [];
//   for (let i = 0; i < this.length; i++){
//     if (cb(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// }

// // console.log(filter((e, i) => i > 2));

// Array.prototype.newFilter = filter;

// const arrr = [2, 5, 7, 9];

// console.log(arrr.newFilter((e) => e > 2));

// 'use strict';
// function foo() {
//   let total = 0;
//   function add(n) {
//     total += n;
//     console.log(this);
//     return this;
//   }
//   function result() {
//     return total;
//   }
//   console.log(this);
//   return {
//     add,
//     result,
//   };
// }
// const prev = foo();
// const next = foo();
// console.log(prev);
// prev.add(1).add(2).result(); // 3
// console.log(prev.add(1).add(2).result());
// console.log(next.add(2).add(2).add(3).result());
// function counter() {
//   let total = 0;
//   function increment() {
//     this.total += 1;
//     total += 1;
//   }
//   function decrement() {
//     this.total -= 1;
//     total -= 1;
//   }
//   return {
//     increment,
//     decrement,
//     show() {
//       return this.total;
//     },
//     showThis() {
//       console.log(this);
//     },
//     total,
//   };
// }
// const count1 = counter();
// const count2 = counter();
// // count1.increment();
// // count1.increment();
// // count1.increment();
// // console.log(count1.total);
// count2.increment();
// count2.increment();
// // console.log(count1.show());
// // console.log(count2.show());
// function bar(cbAct, cbShow) {
//   cbAct();
//   console.log(cbShow());
// }
// const cbAct1 = count1.increment.bind(count1);
// const cbShow1 = count1.show.bind(count1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// // count1.showThis();

// class User {
//     #users = [];
//     constructor({ login, email, password, status }) {
//       this._login = login;
//       this.email = email;
//       this.password = password;
//       this.status = status;
//     }
//     showUsers() {
//       console.log(this.#users);
//      }
//     showLogin() {
//       return this._login;
//     }
//     get login() {
//       return this._login;
//     }
//     set login(newLogin) {
//       this._login = newLogin;
//     }
//     addUser(User) {
//       this.#users.push(User);
//     }
//   }
//   const bob = new User({login: 'bob',  email: 'bob@mail.com', password: 'bobdillan', status: 'visitor'});
//   // console.log(bob);
//   // console.log(bob.login); 
//   bob.login = 'jack';
//   console.log(bob.users);
//   console.log(bob.showUsers());
//   // console.log(bob.login);
//   class Admin extends User {
//     constructor({masterPassword, ...rest}) {
//       super(rest);
//       this.masterPassword = masterPassword;
//     }
//   }
//   const bobAdmin = new Admin({ login: 'bobAdmin', email: 'bobAdmin@mail.com', password: 'bobdillanAdmin', status: 'Admin', masterPassword: 'bobSuperAdmin' })
//   console.log(bobAdmin);
//   console.log(bobAdmin.login);


// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         if (!pizzaPalace.pizzas.includes(pizzaName)){
//           return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//       } 
//       return onSuccess(pizzaName);
//     },
//   };
 
//   // Колбэк для onSuccess
//   function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
//   }
  
//   // Колбэк для onError
//   function onOrderError(error) {
//     return `Ошибка! ${error}`;
//   }
  
//   pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//   pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//   pizzaPalace.order('Биг майк', makePizza, onOrderError);
//   pizzaPalace.order('Венская', makePizza, onOrderError);
  
// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   function composeMessage(position) {
//       return `Готовим ${this.dish} для ${this.email}. 
//       Ваш заказ ${position}-й в очереди.`
//   }
  
//   const messages = orders.map(order => composeMessage.call(order, (orders.indexOf(order) + 1)));

//   console.log(messages);

// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
//   ];
  
//   function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//   }
  
//   const messages = orders.map((order, index) =>
//     composeMessage.apply(order, [index + 1])
//   );
//   console.log(messages);

// const pizzaPalace = {
//     company: 'Pizza Palace',
//   };
  
//   const burgerShack = {
//     company: 'Burger Shack',
//   };
  
//   function composeMessage(customerName) {
//     return `${customerName}, всегда рады вас видеть в «${this.company}».`;
//   }
  
//   const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
//   const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
//   const burgerShackComposer = composeMessage.bind(burgerShack);
//   const burgerShackMessage = burgerShackComposer('Поли');
  

// const service = {
//     mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    
//     subscribe(email) {
//       this.mailingList.push(email);
//       return `Почта ${email} добавлена в рассылку.`;
//     },
    
//     unsubscribe(email) {
//       this.mailingList = this.mailingList.filter((e) => e !== email);
//       return `Почта ${email} удалена из рассылки.`;
//     },
//   };
  
//   function logAndInvokeAction(email, action) {
//     console.log(`Выполняем действие с ${email}.`);
//     return action(email);
//   }
  
//   const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
//   console.log(firstInvoke);
//   // Почта kiwi@mail.uk добавлена в рассылку.
  
//   console.log(service.mailingList);
//   /* ['mango@mail.com', 
//       'poly@hotmail.de', 
//       'ajax@jmail.net', 
//       'kiwi@mail.uk']*/
//   const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
//   console.log(secondInvoke);
//   // Почта poly@hotmail.de удалена из рассылки.
  
//   console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
  
// 

// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
//   };
  
//   const child = Object.create(parent);
  
//   child.name = 'Jason';
//   child.age = 27;

// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = 'Stacey';
//   parent.surname = 'Moore';
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = 'Jason';
//   child.age = 27;
  
// function Car({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
//   // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }
//   new Car({ brand: 'BMW', model: 'X5', price: 58900 }) 
//   // получится объект { brand: 'BMW', model: 'X5', price: 58900 }.  


// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   Car.prototype.getPrice = function (){
//       return this.price;
//   };
  
//   Car.prototype.changePrice = function (newPrice){
//       this.price = newPrice;
//   };

//   const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
//   console.table(audi);
//   audi.changePrice(35000);
// //   вызов метода  и последующем вызове getPrice() вернет число 35000.
// console.log(audi.getPrice());

// function Storage (items) {
// 	this.items = items;
// }

// Storage.prototype.getItems = function () {
// 	return this.items;
// }

// Storage.prototype.addItem = function (newItem){
// 	this.items.push(newItem);
// }

// Storage.prototype.removeItem = function (item) {
//     for (let i = 0; i < this.items.length; i++){
//         if (this.items[i] === item) {
//             this.items.splice(i, 1);
//         }
//     }
	
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder (baseValue){
// 	this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
// 	return this.value;
// }

// StringBuilder.prototype.padEnd = function (str) {
// 	this.value = this.value + str;
// }

// StringBuilder.prototype.padStart = function (str) {
// 	this.value = str + this.value;
// }

// StringBuilder.prototype.padBoth = function (str) {
// 	this.value = str + this.value + str;
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// class Car {
  
//     #brand; 
    
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
    
//     getBrand(){
//         return this.#brand;
//     }
    
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
//   }

//   new Car({ brand: 'BMW', model: 'X5', price: 58900 }) 
//   // получится объект { model: 'X5', price: 58900 }.

// class Storage {
//     #items;
    
//     constructor (items){
//         this.#items = items;
//     }
  
//   getItems() {
//     return this.#items;
//   };
  
//   addItem(newItem) {
//     this.#items.push(newItem);
//   };
  
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   };
//   }
  
//   const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem("Дроид");
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem("Пролонгер");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
  
// class StringBuilder {
//     #value;
//     constructor (baseValue) {
//         this.#value = baseValue;
//     }
  
//     getValue() {
//         return this.#value;
//     };
  
//    padEnd(str) {
//     this.#value += str;
//    };
  
//    padStart(str) {
//     this.#value = str + this.#value;
//    };
  
//    padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//    };
//   }
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='

// class Car {
//     #model;
//     #price;
//     #brand;
  
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }

// class Car {
//     static MAX_PRICE = 50000;

//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE){
//         this.#price = newPrice;
//       } 
//         return
//     }
//   }
  
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
// 	static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.'}
//       return 'Всё хорошо, цена в порядке.'
//     }
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
// 	static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' } 
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel;
//   constructor ({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;
//   blacklistedEmails;

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
  
//   blacklist(email) {
//   	this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//   	return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 