let cost = 0;
let country = '';
let messege = prompt('');

if (messege === null) {
    alert ('Отменено пользователем!');
} else {
    switch (messege.toLowerCase()) {
        case 'китай':
            country = 'Китай';
            cost = 100;
            alert (`В страну ${country} доствка будет стоить ${cost} кредитов.`);
            break;
    
        case 'чили':
            country = 'Чили';
            cost = 250;
            alert (`В страну ${country} доствка будет стоить ${cost} кредитов.`);
            break;
        
        case 'австралия':
            country = 'Австралия';
            cost = 170;
            alert (`В страну ${country} доствка будет стоить ${cost} кредитов.`);
            break;
            
        case 'индия':
            country = 'Индия';
            cost = 80;
            alert (`В страну ${country} доствка будет стоить ${cost} кредитов.`);
            break;
    
        case 'ямайка':
            country = 'Ямайка';
            cost = 120;
            alert (`В страну ${country} доствка будет стоить ${cost} кредитов.`);
            break;
    
        default:
            alert ('В вашей стране доставка не доступна');
    
    }
}





