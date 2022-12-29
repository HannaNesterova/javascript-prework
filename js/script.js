
 let roundNumber = Math.floor(Math.random() * 3 + 1);
 console.log('Твоя цифра: '+ roundNumber);

let computerMove = 'невідомий рух';
if (roundNumber === 1){
    computerMove = 'камінь';
}
else if (roundNumber === 2){
    computerMove = 'папір';
}
else {
    computerMove = 'ножиці';
}



printMessage('мій рух :' + computerMove);

let playerInput = prompt ('Вибери свій рух! 1 - це камінь, 2 - це папір, 3 - це ножиці');
console.log('Гравець обрав :' + playerInput);

let playerMove = 'невідомий рух';
if (playerInput === '1') {
    playerMove = 'камінь';
}
else if (playerInput === '2') {
    playerMove = 'папір';
}

else {
    playerMove = 'ножиці';
}

printMessage('твій рух :' + playerMove);
