let computerMove = 'камінь';
let playerMove = 'папір';

printMessage('Я обрав ' + computerMove + '! Якщо ти обрав ' + playerMove + ',то ти виграв!');

let randomFraction = Math.random();

printMessage('Випадково згенероване число: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Число помножене на 3 та збільшене на 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Сума після заокругдення числа до нижчого рівня: ' + roundNumber);
