const adminPass = 'dissendium';
let message = '';
let auth = confirm ('А шо, Вы таки хотите войти?');

    if (auth === true) {
        message = prompt ('Нужно заклинание для открытия портала!');
        if (message === null) {
            alert ('Ходят тут всякие...');
        } else if (message === adminPass) {
            alert ('Приветсвую, Повелитель!');
        } else {
            alert ('Это заклинание здесь не работает!');
            }
    } else {
        alert ('Пакеда!');
    }


       




   