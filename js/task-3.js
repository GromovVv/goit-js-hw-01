const adminPass = 'dissendium';
let message = '';
let auth = confirm ('А шо, Вы таки хотите войти?');

    if (auth === true) {
        message = prompt ('Нужно заклинание для открытия портала!');
        if (message === null) {
            alert ('Ходят тут всякие...');
            console.log('Ходят тут всякие...');
        } else if (message === adminPass) {
            alert ('Приветсвую, Повелитель!');
            console.log('Приветсвую, Повелитель!');
        } else {
            alert ('Это заклинание здесь не работает!');
            console.log('Это заклинание здесь не работает!');
            }
    } else {
        alert ('Пакеда!');
        console.log('Пакеда!');
    }


       




   