let total = 0;

while (true) {
    let input = prompt('Введите число!');

    if (input === null) {
        alert (`Общая сумма чисел равна ${total}`);
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
        alert ('Вася, шо Ты гонишь? Ты чё буквы пишешь? Цифры пиши, я Те говорю!');
        console.log('Вася, шо Ты гонишь? Ты чё буквы пишешь? Цифры пиши, я Те говорю!');
        continue;
    }

    total += input;

  } 

  alert (`Общая сумма чисел равна ${total}`);
  console.log(`Общая сумма чисел равна ${total}`);


